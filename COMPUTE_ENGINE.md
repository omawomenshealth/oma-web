# OMA web sitesini yerel Docker olmadan Compute Engine'e yayınlama

Bu akışta Docker imajı bilgisayarında değil, Google Cloud Build üzerinde oluşturulur. Bilgisayarında yalnızca `gcloud` komut satırı aracının çalışması yeterlidir.

## 1. Değişkenleri ayarla

Aşağıdaki komutları `oma-web` klasöründe Google Cloud Shell veya Bash terminalinde çalıştır:

```bash
export PROJECT_ID="GOOGLE_CLOUD_PROJE_ID"
export REGION="europe-west1"
export ZONE="europe-west1-b"
export VM_NAME="oma-web-vm"
export REPOSITORY="oma"
export IMAGE_NAME="web"

gcloud config set project "$PROJECT_ID"
```

## 2. Gerekli servisleri aç ve imaj deposunu oluştur

```bash
gcloud services enable \
  compute.googleapis.com \
  artifactregistry.googleapis.com \
  cloudbuild.googleapis.com

gcloud artifacts repositories describe "$REPOSITORY" \
  --location="$REGION" >/dev/null 2>&1 \
  || gcloud artifacts repositories create "$REPOSITORY" \
    --repository-format=docker \
    --location="$REGION" \
    --description="OMA web Docker images"
```

## 3. Sabit IP al

```bash
gcloud compute addresses describe oma-web-ip \
  --region="$REGION" >/dev/null 2>&1 \
  || gcloud compute addresses create oma-web-ip --region="$REGION"

export OMA_IP="$(gcloud compute addresses describe oma-web-ip \
  --region="$REGION" \
  --format='value(address)')"

echo "Sabit IP: $OMA_IP"
```

Alan adın hazırsa `SITE_URL` değerini o alan adıyla değiştir. Henüz alan adın yoksa ilk yayın için IP adresini kullanabilirsin.

```bash
export SITE_URL="http://$OMA_IP"
```

## 4. Docker imajını Google'da oluştur

```bash
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions="_REGION=$REGION,_REPOSITORY=$REPOSITORY,_IMAGE=$IMAGE_NAME,_SITE_URL=$SITE_URL" \
  .
```

Yerel Docker bu adımda kullanılmaz. Oluşan imaj:

```text
europe-west1-docker.pkg.dev/PROJE_ID/oma/web:latest
```

## 5. VM için sınırlı servis hesabı oluştur

```bash
export VM_SERVICE_ACCOUNT="oma-web-vm@$PROJECT_ID.iam.gserviceaccount.com"

gcloud iam service-accounts describe "$VM_SERVICE_ACCOUNT" >/dev/null 2>&1 \
  || gcloud iam service-accounts create oma-web-vm \
    --display-name="OMA web VM"

gcloud projects add-iam-policy-binding "$PROJECT_ID" \
  --member="serviceAccount:$VM_SERVICE_ACCOUNT" \
  --role="roles/artifactregistry.reader"
```

## 6. Güvenlik duvarını ve VM'yi oluştur

```bash
gcloud compute firewall-rules describe oma-web-http >/dev/null 2>&1 \
  || gcloud compute firewall-rules create oma-web-http \
    --allow=tcp:80 \
    --target-tags=oma-web \
    --description="Public HTTP for OMA web"

export IMAGE_URL="$REGION-docker.pkg.dev/$PROJECT_ID/$REPOSITORY/$IMAGE_NAME:latest"

gcloud compute instances create "$VM_NAME" \
  --zone="$ZONE" \
  --machine-type=e2-small \
  --image-family=debian-12 \
  --image-project=debian-cloud \
  --boot-disk-size=20GB \
  --address="$OMA_IP" \
  --tags=oma-web \
  --service-account="$VM_SERVICE_ACCOUNT" \
  --scopes=cloud-platform \
  --metadata="oma-image=$IMAGE_URL" \
  --metadata-from-file=startup-script=deploy/compute-engine-startup.sh
```

VM açıldıktan birkaç dakika sonra site `http://SABIT_IP` adresinden erişilebilir olur.

## 7. Durumu kontrol et

```bash
gcloud compute ssh "$VM_NAME" \
  --zone="$ZONE" \
  --command="sudo docker ps && sudo docker logs --tail=80 oma-web"
```

## Yeni sürüm yayınlama

Kod değiştiğinde imajı tekrar oluştur:

```bash
gcloud builds submit \
  --config=cloudbuild.yaml \
  --substitutions="_REGION=$REGION,_REPOSITORY=$REPOSITORY,_IMAGE=$IMAGE_NAME,_SITE_URL=$SITE_URL" \
  .
```

Ardından VM'de yeni imajı çalıştır:

```bash
gcloud compute instances add-metadata "$VM_NAME" \
  --zone="$ZONE" \
  --metadata="oma-image=$IMAGE_URL" \
  --metadata-from-file=startup-script=deploy/compute-engine-startup.sh

gcloud compute instances reset "$VM_NAME" --zone="$ZONE"
```

## HTTPS notu

İlk kontrolü IP üzerinden yaptıktan sonra alan adının `A` kaydını sabit IP'ye yönlendir. Üretim kullanımı için 443 portunu açıp Caddy veya Google Cloud HTTPS Load Balancer ekle. Sağlık uygulaması tanıtım sitesi olduğu için kalıcı yayında HTTPS kullan.
