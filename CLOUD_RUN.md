# OMA · Google Cloud yayını

Hedef proje: `project-b2909e2f-d84a-4c4b-997` (My First Project).
Servis: `oma-web`. Bölge: `europe-west1`.
Canlı adres: https://oma-web-1048069747824.europe-west1.run.app

13 Eylül 2026 yayını: `oma-web-00002-z7r`, trafiğin %100'ü bu sürümde.
Servis Ready durumunda; ana sayfa, kullanım koşulları ve görseller doğrulandı.

Firebase projesindeki web yayını kullanıcının isteğiyle kapatılmıştır.
Firebase'e yeniden deploy etmeyin.

## Yayın paketi

`npm run build:static` ile statik `out/` klasörünü üretin. Bu klasörü,
`deploy/cloud-run/Dockerfile` ve `deploy/cloud-run/default.conf` dosyalarını aynı
ZIP paketinin köküne koyun. Google Cloud Console'daki Cloud Shell'e yükleyin.
Paket yalnızca herkese açık web sitesi dosyalarını içerir.

Docker imajı Cloud Shell'de oluşturulur; Cloud Build çalıştırmak gerekmez.
İmaj deposu: `europe-west1-docker.pkg.dev/project-b2909e2f-d84a-4c4b-997/oma-web/site`.
Her güncellemede yeni bir imaj etiketi kullanın.

Cloud Shell'de paket klasöründen örnek yayın komutu (etiketi güncelleyin):

```sh
gcloud run deploy oma-web \
  --image=europe-west1-docker.pkg.dev/project-b2909e2f-d84a-4c4b-997/oma-web/site:20260913-screenshots \
  --project=project-b2909e2f-d84a-4c4b-997 --region=europe-west1 \
  --platform=managed --port=8080 --memory=128Mi --cpu=1 \
  --concurrency=80 --min-instances=0 --max-instances=1 \
  --cpu-throttling --no-cpu-boost --execution-environment=gen1 \
  --service-account=oma-web-runtime@project-b2909e2f-d84a-4c4b-997.iam.gserviceaccount.com \
  --allow-unauthenticated
```

## Maliyet ayarları

- İstek bazlı faturalandırma ve CPU throttling.
- Minimum 0, maksimum 1 sunucu örneği.
- 128 MiB bellek; statik dosyalar Nginx ile sunulur.
- Sabit IP, yük dengeleyici, VM ve domain eşlemesi yoktur.
- Uygulama çalışma kimliği `oma-web-runtime` hiçbir proje rolü almaz.
- Gzip ve uzun süreli sürümlü dosya önbelleği etkin.

Cloud Run ücretsiz kotaları, Artifact Registry depolaması ve ağ trafiği
ayrı hesaplanır. Maksimum örnek sayısı kesin bir harcama limiti değildir.
Google Cloud deneme kredisi, sürekli ücretsiz kota ile aynı şey değildir.
Faturalı tam hesaba yükseltme yapılmaz.

Fiyatlandırma: https://cloud.google.com/run/pricing

Son güncelleme: Güncel Flutter ana ekranı ve takvim ekranı, örnek verilerle alındı.
Ruh hâli ve beslenme kaydı ekranları kullanıcı isteğiyle galeriye eklenmedi.
Görsel kaynağı: app_proje_a/tool/website_screenshot_harness_test.dart.
Statik derleme, Nginx yapılandırması ve mobil yerleşim doğrulandı.
