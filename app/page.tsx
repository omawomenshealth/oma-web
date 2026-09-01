import {
  ArrowDownRight,
  BellRing,
  CalendarDays,
  Check,
  LockKeyhole,
  NotebookPen,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { SiteFooter, SiteHeader } from '@/components/site-chrome';
import { cn } from '@/lib/utils';

const featureRows = [
  {
    no: '01',
    title: 'Döngü takibi',
    text: 'Adet günlerini, akışını ve döngü fazlarını sade bir takvimde gör. Tahminler, yalnızca kendi kayıtlarından hesaplanan bir aralık olarak sunulur.',
    icon: CalendarDays,
  },
  {
    no: '02',
    title: 'Günlük kayıt',
    text: 'Belirtiler, ruh hâli, beslenme, uyku, cilt, yakınlık ve notlar… Gününü birkaç dokunuşla, istediğin ayrıntıda kaydet.',
    icon: NotebookPen,
  },
  {
    no: '03',
    title: 'Kişisel içgörüler',
    text: 'Zamanla tekrar eden örüntüleri fark et. OMA, kayıtlarını sabit kurallar ve istatistiklerle karşılaştırır; üretken yapay zekâ kullanmaz.',
    icon: Sparkles,
  },
  {
    no: '04',
    title: 'İlaç hatırlatıcıları',
    text: 'İlaç ve takviye planını oluştur, cihazındaki hatırlatmalarla düzenini koru. Doz yanıtlarını daha sonra gözden geçir.',
    icon: BellRing,
  },
];

const privacyItems = [
  'Yerel sağlık kayıtları AES-256-GCM ile şifrelenir.',
  'Şifreleme anahtarı Android Keystore veya iOS Keychain içinde tutulur.',
  'Bulut eşitlemesi isteğe bağlıdır ve açık rıza gerektirir.',
  'Verilerini dışa aktarabilir, rızanı geri çekebilir veya hesabını silebilirsin.',
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section id="top" className="relative isolate border-b border-ink/10">
        <div className="absolute inset-y-0 right-0 -z-10 hidden w-[42%] bg-sage lg:block" />
        <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-[1440px] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="flex flex-col justify-between px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pb-12 lg:pt-20">
            <div>
              <p className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-plum">
                <span className="h-px w-12 bg-plum" />
                Döngü ve iyi yaşam günlüğü
              </p>
              <h1 className="max-w-4xl font-heading text-[clamp(4.4rem,8.6vw,9rem)] leading-[0.78] tracking-[-0.07em]">
                Bedeninin<br />
                <span className="ml-[0.55em] italic text-plum">ritmini</span><br />
                tanı.
              </h1>
              <p className="mt-10 max-w-xl text-lg leading-8 text-ink/70 sm:text-xl">
                OMA; döngünü, belirtilerini, ruh hâlini ve günlük alışkanlıklarını tek bir yerde görmene yardım eder. Yargılamadan, acele ettirmeden.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-ink/15 pt-6 sm:flex-row sm:items-center lg:mt-16">
              <a
                href="https://play.google.com/store/apps/details?id=com.bps.oma"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'default' }), 'h-14 rounded-none bg-plum px-7 text-base text-white hover:bg-ink')}
              >
                Google Play’e git
                <ArrowDownRight aria-hidden="true" />
              </a>
              <span className="px-2 text-sm leading-6 text-ink/55">Mağaza yayını tamamlandığında açılır.<br />iPhone sürümü yakında.</span>
            </div>
          </div>

          <div className="relative min-h-[680px] overflow-hidden bg-sage px-6 py-12 sm:px-12 lg:min-h-full">
            <div className="absolute inset-0 opacity-25 mix-blend-multiply">
              <img src="/brand/oma-botanical.jpg" alt="" className="size-full object-cover" />
            </div>
            <div className="relative flex h-full items-center justify-center">
              <div className="absolute left-0 top-3 max-w-[15rem] border-l border-ink/25 pl-4 text-sm leading-6 text-ink/65">
                <Sparkles className="mb-3 size-5" aria-hidden="true" />
                Kendi kayıtlarından doğan, açıklanabilir kişisel içgörüler.
              </div>
              <div className="relative mt-24 w-[min(72vw,330px)] rotate-[2.5deg] border-[9px] border-ink bg-ink p-1 shadow-[24px_26px_0_0_rgba(72,43,72,0.18)] sm:w-[330px]">
                <img src="/brand/oma-insight.png" width="432" height="856" alt="OMA uygulamasında kişisel içgörü ekranı" className="h-auto w-full" />
              </div>
              <div className="absolute bottom-5 right-0 flex max-w-[14rem] items-start gap-3 border-t border-ink/25 pt-4 text-sm leading-6 text-ink/65">
                <LockKeyhole className="mt-1 size-5 shrink-0" aria-hidden="true" />
                Sağlık kayıtların cihazında güçlü şifrelemeyle korunur.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-[#e9c6bf]" aria-labelledby="approach-title">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.7fr_1.3fr]">
          <div className="border-b border-ink/15 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">OMA’nın yaklaşımı</p>
          </div>
          <div className="px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <h2 id="approach-title" className="max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.045em] sm:text-7xl">
              Bir veri panosu değil.<br /><span className="italic">Kendine tuttuğun bir günlük.</span>
            </h2>
            <div className="mt-14 grid gap-8 border-t border-ink/20 pt-8 sm:grid-cols-3">
              <p className="text-base leading-7 text-ink/70"><strong className="mb-3 block text-xs uppercase tracking-[0.16em] text-ink">01 · Kaydet</strong>Gününü, bedenini ve döngünü kendi ritminde not et.</p>
              <p className="text-base leading-7 text-ink/70"><strong className="mb-3 block text-xs uppercase tracking-[0.16em] text-ink">02 · Fark et</strong>Kayıtların biriktikçe tekrar eden işaretleri görünür kıl.</p>
              <p className="text-base leading-7 text-ink/70"><strong className="mb-3 block text-xs uppercase tracking-[0.16em] text-ink">03 · Hazırlan</strong>Takvim, hatırlatıcı ve raporlarla bir sonraki güne daha hazır ol.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="ozellikler" className="border-b border-ink/10 bg-paper">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[0.75fr_1.25fr]">
          <div className="border-b border-ink/10 px-5 py-16 sm:px-8 lg:border-b-0 lg:border-r lg:px-12 lg:py-24">
            <div className="lg:sticky lg:top-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">Birlikte izlenince anlamlı</p>
              <h2 className="mt-6 max-w-md font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">Beden,<br />tek bir <span className="italic text-plum">veriden</span><br />ibaret değil.</h2>
              <p className="mt-8 max-w-sm text-lg leading-8 text-ink/60">OMA, günlük hayatın farklı parçalarını aynı yerde tutar; yorumlamak için önce bütünü görmene yardım eder.</p>
            </div>
          </div>
          <div>
            {featureRows.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.no} className="grid gap-6 border-b border-ink/10 px-5 py-10 last:border-b-0 sm:grid-cols-[64px_1fr_auto] sm:px-8 lg:px-12 lg:py-14">
                  <span className="font-heading text-3xl italic text-plum">{feature.no}</span>
                  <div>
                    <h3 className="font-heading text-4xl tracking-[-0.035em] sm:text-5xl">{feature.title}</h3>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">{feature.text}</p>
                  </div>
                  <Icon className="size-7 text-plum sm:mt-2" strokeWidth={1.5} aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-plum text-white" aria-labelledby="insights-title">
        <div className="absolute inset-y-0 left-0 w-1/3 bg-[#5f3c60]" />
        <div className="relative mx-auto grid min-h-[830px] max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-24">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">İçgörü, hüküm değil</p>
              <h2 id="insights-title" className="mt-6 max-w-lg font-heading text-6xl leading-[0.88] tracking-[-0.055em] sm:text-7xl">Kayıtların sana <span className="italic text-[#e9c6bf]">geri konuşur.</span></h2>
            </div>
            <div className="mt-10 max-w-md border-l border-white/30 pl-5 text-lg leading-8 text-white/70">
              <p>OMA içgörüleri tıbbi tanı değildir. Kayıtlarında birlikte görünen örüntüleri açıklar; endişelendiren veya süren değişikliklerde bir sağlık profesyoneline başvurmanı önerir.</p>
            </div>
          </div>

          <div className="relative min-h-[630px]">
            <div className="absolute left-0 top-20 w-[min(58vw,300px)] -rotate-[4deg] border-[8px] border-ink bg-ink p-1 shadow-[18px_22px_0_rgba(0,0,0,0.18)]">
              <img src="/brand/oma-insight-nutrition.png" width="432" height="856" alt="OMA uygulamasında beslenme içgörüsü" className="h-auto w-full" />
            </div>
            <div className="absolute bottom-0 right-0 w-[min(58vw,300px)] rotate-[4deg] border-[8px] border-ink bg-ink p-1 shadow-[18px_22px_0_rgba(0,0,0,0.18)] sm:right-[8%]">
              <img src="/brand/oma-insight-cycle.png" width="432" height="856" alt="OMA uygulamasında döngü içgörüsü" className="h-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      <section id="guvenlik" className="border-b border-ink/10 bg-sage">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative min-h-[520px] overflow-hidden border-b border-ink/15 p-5 sm:p-8 lg:min-h-[720px] lg:border-b-0 lg:border-r lg:p-12">
            <img src="/brand/oma-botanical-gold.jpg" alt="Sarı çiçeklerden oluşan botanik kompozisyon" className="absolute inset-0 size-full object-cover opacity-75 mix-blend-multiply" />
            <div className="relative flex h-full flex-col justify-between">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/65">Gizlilik, sonradan eklenen bir ayar değil</p>
              <h2 className="mt-80 max-w-xl font-heading text-6xl leading-[0.86] tracking-[-0.06em] sm:text-8xl">Veri senin.<br /><span className="italic text-plum">Kontrol de.</span></h2>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-16 lg:py-24">
            <ShieldCheck className="size-10 text-plum" strokeWidth={1.5} aria-hidden="true" />
            <p className="mt-7 max-w-xl text-xl leading-9 text-ink/70">Döngü, belirti, ilaç ve takviye kayıtları hassastır. OMA’nın veri akışı bu gerçeğin etrafında tasarlanır.</p>
            <ul className="mt-10 border-t border-ink/20">
              {privacyItems.map((item) => (
                <li key={item} className="flex gap-4 border-b border-ink/20 py-5 text-base leading-7">
                  <Check className="mt-1 size-5 shrink-0 text-plum" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm leading-6 text-ink/55">Bulut eşitlemesini kapattığında yerel kayıtların cihazında kalır. Rızanı geri çektiğinde buluttaki sağlık kayıtlarının silinmesini isteyebilirsin.</p>
          </div>
        </div>
      </section>

      <section id="indir" className="bg-paper">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid items-end gap-12 border-y border-ink/20 py-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-plum">OMA 1.0.5</p>
              <h2 className="mt-5 max-w-4xl font-heading text-6xl leading-[0.9] tracking-[-0.055em] sm:text-8xl">Kendini dinlemek için<br /><span className="italic text-plum">bugün iyi bir gün.</span></h2>
            </div>
            <div className="flex min-w-[290px] flex-col gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.bps.oma"
                target="_blank"
                rel="noreferrer"
                className={cn(buttonVariants({ variant: 'default' }), 'h-16 justify-between rounded-none bg-ink px-6 text-base text-paper hover:bg-plum')}
              >
                <span><small className="block text-[0.65rem] uppercase tracking-[0.14em] text-paper/55">Android için</small>Google Play’e git</span>
                <ArrowDownRight className="size-5" aria-hidden="true" />
              </a>
              <div className="flex h-16 items-center justify-between border border-ink/25 px-6 text-ink/45" aria-label="App Store sürümü yakında">
                <span><small className="block text-[0.65rem] uppercase tracking-[0.14em]">iPhone için</small>App Store</span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em]">Yakında</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-ink/45">Google Play bağlantısı, uygulama mağazada yayınlandığında indirme sayfasını açar.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
