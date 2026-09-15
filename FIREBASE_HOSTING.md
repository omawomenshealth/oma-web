# OMA web yayını

> Bu yayın 13 Eylül 2026 tarihinde kullanıcının isteğiyle kapatıldı.
> Firebase Hosting'i yeniden etkinleştirmeyin. Hedef Google Cloud projesi:
> `project-b2909e2f-d84a-4c4b-997`. Aşağıdaki adımlar yalnızca geçmiş kaydıdır.

Bu tanıtım sitesi statik olarak Firebase Hosting üzerinde, mevcut `omaapp-cdac6`
projesinin Spark (ücretsiz) planında yayınlanır. Canlı adres:
https://omaapp-cdac6.web.app

## Güncelleme

1. `npm run build:static` ile `out/` klasörünü oluştur.
2. `out/`, `firebase.json` ve `.firebaserc` dosyalarını ZIP olarak hazırla.
3. OMA hesabıyla Firebase Console'dan Cloud Shell'i açıp ZIP dosyasını yükle.
4. Yeni bir yayın klasörüne çıkar ve orada çalıştır:

```sh
FIREBASE_HOSTING_UPLOAD_CONCURRENCY=2 firebase deploy --only hosting --project omaapp-cdac6 --non-interactive
```

`--only hosting` mobil uygulamanın veritabanı ve diğer servislerini değiştirmez.
Firebase SDK, Cloud Functions, Cloud Run veya sürekli çalışan VM gerekmez.
Spark planını koru; ücretli Blaze planına geçiş bu site için gerekli değildir.
Ücretsiz depolama ve trafik kotaları geçerlidir; güncel sınırlar:
https://firebase.google.com/pricing

Domain bağlama işlemi henüz yapılmadı. Daha sonra Hosting konsolundaki özel
domain adımı kullanılabilir; özel bir VM IP adresi ayırmak gerekmez.

`next.config.ts` Docker için standalone çıktısını korur. `build:static` yalnızca
bu derleme için statik export modunu etkinleştirir. `NEXT_PUBLIC_SITE_URL` ileride
domain adresiyle ayarlanarak yeniden derlenebilir.
