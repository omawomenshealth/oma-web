import type { Metadata } from 'next';
import { ArrowLeft, CircleAlert } from 'lucide-react';

import { SiteFooter, SiteHeader } from '@/components/site-chrome';

export const metadata: Metadata = {
  title: 'Kullanım Koşulları — OMA',
  description: 'OMA mobil uygulaması ve web sitesi için kullanım koşulları.',
  openGraph: {
    title: 'Kullanım Koşulları — OMA',
    description: 'OMA mobil uygulaması ve web sitesi için kullanım koşulları.',
    url: '/kullanim-kosullari',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'OMA — Bedeninin ritmini tanı' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kullanım Koşulları — OMA',
    description: 'OMA mobil uygulaması ve web sitesi için kullanım koşulları.',
    images: ['/og.png'],
  },
};

const sections = [
  {
    id: 'kapsam',
    no: '01',
    title: 'Kapsam ve kabul',
    body: (
      <>
        <p>Bu Kullanım Koşulları (“Koşullar”), OMA mobil uygulamasına, bu web sitesine ve bunlarla bağlantılı özelliklere (“Hizmet”) erişimini düzenler. Hizmete erişerek veya bir hesap oluşturarak bu Koşulları kabul etmiş olursun.</p>
        <p>Bulunduğun yerde dijital hizmetlere rıza verebilecek yaşta olmalısın. Bu yaşın altındaysan Hizmeti yalnızca yasal temsilcinin izni ve gözetimiyle kullanabilirsin.</p>
      </>
    ),
  },
  {
    id: 'hizmet',
    no: '02',
    title: 'OMA ne sunar?',
    body: (
      <>
        <p>OMA; döngü, günlük belirtiler, ruh hâli, beslenme, ilaç ve takviye planları gibi iyi yaşam kayıtlarını tutmana; bunları takvim ve kişisel içgörüler üzerinden incelemene yardımcı olan bir öz takip aracıdır.</p>
        <p>Özellikler kullandığın cihaza, ülkeye, uygulama sürümüne ve üyelik planına göre değişebilir. OMA, Hizmeti güvenli ve kullanışlı tutmak için özellikleri güncelleyebilir veya kullanım biçimlerini değiştirebilir.</p>
      </>
    ),
  },
  {
    id: 'tibbi',
    no: '03',
    title: 'Tıbbi hizmet değildir',
    body: (
      <>
        <p>OMA bir sağlık kuruluşu, tıbbi cihaz, teşhis aracı veya acil yardım hizmeti değildir. Uygulamadaki tahminler, içgörüler, makaleler ve hatırlatmalar tıbbi tavsiye, tanı veya tedavinin yerini tutmaz.</p>
        <p>Döngü ve doğurganlık tahminleri yaklaşık aralıklardır; gebeliği önlemek veya doğrulamak için tek başına kullanılmamalıdır. Acil bir durumda yerel acil yardım hattına başvur. Seni endişelendiren, devam eden veya kötüleşen bir değişiklikte nitelikli bir sağlık profesyoneliyle görüş.</p>
      </>
    ),
  },
  {
    id: 'hesap',
    no: '04',
    title: 'Hesap ve güvenlik',
    body: (
      <>
        <p>Hesap oluştururken doğru ve güncel bilgi vermeli; cihazına, oturumuna ve giriş yöntemlerine yetkisiz erişimi önlemek için makul önlemler almalısın. Hesabında şüpheli bir hareket fark edersen uygulama içindeki destek alanından bize bildirmelisin.</p>
        <p>Hesabın üzerinden yapılan işlemlerden, hesabını korumak için gerekli özeni göstermediğin ölçüde sorumlu olabilirsin. Güvenlik veya kötüye kullanım riski oluştuğunda erişimi geçici olarak sınırlayabiliriz.</p>
      </>
    ),
  },
  {
    id: 'veri',
    no: '05',
    title: 'Verilerin ve gizlilik tercihlerin',
    body: (
      <>
        <p>Girdiğin kayıtların mülkiyeti sende kalır. OMA, bu kayıtları yalnızca seçtiğin özellikleri sağlamak, verilerini eşitlemek ve güvenliği sürdürmek için işler. Bulut eşitlemesi isteğe bağlıdır ve sağlık verileri için açık rıza gerektirir.</p>
        <p>Uygulama içindeki Gizlilik Merkezi’nden verilerini dışa aktarabilir, bulut rızanı geri çekebilir, yerel kayıtları silebilir veya hesabının ve bağlantılı verilerinin silinmesini isteyebilirsin. Rızanın geri çekilmesi, bundan önce hukuka uygun olarak yapılan işlemleri geriye dönük geçersiz kılmaz.</p>
      </>
    ),
  },
  {
    id: 'uyelik',
    no: '06',
    title: 'Ücretli üyelikler',
    body: (
      <>
        <p>OMA Plus ve OMA Premium gibi ücretli planlar, mağaza sayfasında belirtilen ek özellikleri açabilir. Fiyat, para birimi, vergi ve yenileme dönemi satın alma ekranında gösterilir; ödeme ve otomatik yenileme ilgili uygulama mağazası tarafından yönetilir.</p>
        <p>Üyeliğini mağaza hesabının abonelik ayarlarından iptal edebilirsin. İptal, aksi mağaza koşullarında belirtilmedikçe, mevcut fatura döneminin sonunda geçerli olur. Hesabı veya uygulamayı silmek mağaza aboneliğini kendiliğinden iptal etmeyebilir.</p>
      </>
    ),
  },
  {
    id: 'kullanim',
    no: '07',
    title: 'Kabul edilebilir kullanım',
    body: (
      <>
        <p>Hizmeti yalnızca hukuka uygun ve kişisel amaçlarla kullanabilirsin. Hizmetin güvenliğini aşmaya çalışmak, yetkisiz erişim sağlamak, zararlı yazılım iletmek, hizmeti bozacak otomatik trafik üretmek, başka bir kişinin verisine izinsiz erişmek veya fikrî hakları ihlal etmek yasaktır.</p>
        <p>Bu kuralların ihlali güvenlik riski doğuruyorsa erişimi sınırlayabilir, hesabı askıya alabilir veya gerekli olduğu ölçüde sonlandırabiliriz. Uygun olduğunda önceden bildirim ve itiraz olanağı sağlamaya çalışırız.</p>
      </>
    ),
  },
  {
    id: 'fikri',
    no: '08',
    title: 'Fikrî mülkiyet',
    body: (
      <>
        <p>OMA adı, görsel kimliği, uygulama arayüzü, özgün metinler, yazılım ve Hizmetin diğer unsurları ilgili hak sahiplerine aittir. Bu Koşullar sana yalnızca Hizmeti kişisel kullanımın için sınırlı, devredilemez ve geri alınabilir bir kullanım hakkı verir.</p>
        <p>Kendi kayıtların ve Hizmete ilettiğin kişisel içerik üzerindeki hakların sende kalır. Hizmeti çalıştırmak için teknik olarak gerekli olan işleme iznini, kullandığın süre ve seçtiğin özelliklerle sınırlı olarak verirsin.</p>
      </>
    ),
  },
  {
    id: 'sorumluluk',
    no: '09',
    title: 'Hizmet sürekliliği ve sorumluluk',
    body: (
      <>
        <p>Hizmeti özenle ve güvenli biçimde sunmayı amaçlarız; ancak kesintisiz, hatasız veya her cihazla uyumlu çalışacağını garanti edemeyiz. Bakım, güvenlik, mağaza hizmetleri, internet bağlantısı veya mücbir sebepler geçici kesintilere yol açabilir.</p>
        <p>Kanunen sınırlandırılamayan tüketici hakların saklıdır. Hiçbir hüküm, kasıt veya ağır ihmalden doğan ya da yürürlükteki hukuk uyarınca sınırlandırılması mümkün olmayan sorumluluğu ortadan kaldırmaz.</p>
      </>
    ),
  },
  {
    id: 'sonlandirma',
    no: '10',
    title: 'Hesabı kapatma ve sona erme',
    body: (
      <>
        <p>Hizmeti kullanmayı istediğin zaman bırakabilir ve uygulamadaki Gizlilik Merkezi üzerinden hesabının silinmesini isteyebilirsin. Hesap silme işlemi geri alınamaz; yerel kayıtların ve cihaz anahtarının silinmesi ayrı bir cihaz işlemi olabilir.</p>
        <p>Koşulların esaslı ihlali, güvenlik riski veya hukuki zorunluluk hâlinde erişimi askıya alabilir ya da sonlandırabiliriz. Niteliği gereği devam etmesi gereken fikrî mülkiyet, sorumluluk ve uyuşmazlık hükümleri sona ermeden sonra da geçerliliğini korur.</p>
      </>
    ),
  },
  {
    id: 'degisiklik',
    no: '11',
    title: 'Değişiklikler ve iletişim',
    body: (
      <>
        <p>Koşulları hizmetteki, hukuktaki veya güvenlik uygulamalarındaki değişiklikleri yansıtmak için güncelleyebiliriz. Esaslı değişiklikleri yürürlüğe girmeden önce uygulama içinden veya uygun başka bir kanaldan bildiririz.</p>
        <p>Koşullar hakkında soru, itiraz veya destek talebi için uygulamadaki Profil ve Gizlilik Merkezi alanlarını kullanabilirsin. Tüketici ve kişisel veri mevzuatından doğan emredici başvuru ve şikâyet hakların saklıdır.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section className="border-b border-ink/10 bg-[#e9c6bf]">
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <a href="/" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-plum hover:text-ink">
            <ArrowLeft className="size-4" aria-hidden="true" /> Ana sayfaya dön
          </a>
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">Yasal metin</p>
              <h1 className="mt-5 max-w-5xl font-heading text-[clamp(4.2rem,9vw,8.5rem)] leading-[0.78] tracking-[-0.065em]">Kullanım<br /><span className="ml-[0.65em] italic text-plum">koşulları.</span></h1>
            </div>
            <div className="border-l border-ink/25 pl-5 text-sm leading-6 text-ink/60">
              <p>Yürürlük tarihi</p>
              <p className="font-semibold text-ink">1 Eylül 2026</p>
              <p className="mt-3">Sürüm 1.0</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="border-b border-ink/10 px-5 py-10 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-16" aria-label="İçindekiler">
            <div className="lg:sticky lg:top-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-plum">Bu sayfada</p>
              <ol className="mt-6 grid gap-2 text-sm text-ink/60 sm:grid-cols-2 lg:grid-cols-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a className="flex gap-3 py-1.5 hover:text-plum" href={`#${section.id}`}><span className="font-heading italic text-plum">{section.no}</span>{section.title}</a>
                  </li>
                ))}
              </ol>
              <div className="mt-10 flex gap-3 border border-ink/20 bg-sage/65 p-5 text-sm leading-6 text-ink/65">
                <CircleAlert className="mt-0.5 size-5 shrink-0 text-plum" aria-hidden="true" />
                <p>En önemli özet: OMA bir tıbbi tanı aracı değildir; tahminler yaklaşık değerlerdir.</p>
              </div>
            </div>
          </aside>

          <div className="px-5 sm:px-8 lg:px-16">
            <div className="max-w-3xl py-12 text-lg leading-8 text-ink/70 lg:py-16">
              <p>Bu metni olabildiğince açık yazdık. “Sen” OMA’yı kullanan kişiyi, “biz” ise OMA hizmetini sunan tarafı ifade eder.</p>
            </div>
            {sections.map((section) => (
              <article id={section.id} key={section.id} className="scroll-mt-6 border-t border-ink/15 py-12 lg:py-16">
                <div className="grid gap-5 sm:grid-cols-[52px_1fr]">
                  <span className="font-heading text-3xl italic text-plum">{section.no}</span>
                  <div>
                    <h2 className="font-heading text-4xl leading-none tracking-[-0.035em] sm:text-5xl">{section.title}</h2>
                    <div className="mt-6 space-y-5 text-base leading-7 text-ink/68 sm:text-lg sm:leading-8">{section.body}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
