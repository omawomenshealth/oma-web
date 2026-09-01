import { ArrowDownRight } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function SiteHeader() {
  return (
    <header className="relative z-20 border-b border-ink/10 bg-paper/90">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="/" className="flex items-center gap-3" aria-label="OMA ana sayfa">
          <img src="/brand/oma-logo.png" width="42" height="42" alt="" className="size-10 object-contain" />
          <span className="font-heading text-[1.9rem] leading-none tracking-[-0.04em]">OMA</span>
        </a>

        <nav className="hidden items-center gap-8 text-[0.8rem] font-semibold uppercase tracking-[0.14em] md:flex" aria-label="Ana menü">
          <a className="transition-colors hover:text-plum" href="/#ozellikler">Nasıl çalışır</a>
          <a className="transition-colors hover:text-plum" href="/#guvenlik">Gizlilik</a>
          <a className="transition-colors hover:text-plum" href="/kullanim-kosullari">Kullanım koşulları</a>
        </nav>

        <a
          href="/#indir"
          className={cn(buttonVariants({ variant: 'default' }), 'h-11 rounded-none border border-ink bg-ink px-4 text-paper hover:bg-plum sm:px-5')}
        >
          <span className="hidden sm:inline">Uygulamayı indir</span>
          <span className="sm:hidden">İndir</span>
          <ArrowDownRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-paper/15 bg-ink text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_0.8fr] lg:px-12">
        <div>
          <a href="/" className="inline-flex items-center gap-3" aria-label="OMA ana sayfa">
            <img src="/brand/oma-logo.png" width="46" height="46" alt="" className="size-11 object-contain brightness-0 invert" />
            <span className="font-heading text-4xl tracking-[-0.05em]">OMA</span>
          </a>
          <p className="mt-6 max-w-md text-lg leading-8 text-paper/65">Sağlığını kendi ritminde takip et.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Keşfet</p>
            <a className="block text-paper/70 hover:text-paper" href="/#ozellikler">Özellikler</a>
            <a className="block text-paper/70 hover:text-paper" href="/#guvenlik">Gizlilik yaklaşımı</a>
            <a className="block text-paper/70 hover:text-paper" href="/#indir">İndir</a>
          </div>
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">Yasal</p>
            <a className="block text-paper/70 hover:text-paper" href="/kullanim-kosullari">Kullanım koşulları</a>
            <p className="max-w-[15rem] text-paper/45">Gizlilik tercihlerini uygulama içindeki Gizlilik Merkezi’nden yönetebilirsin.</p>
          </div>
        </div>
      </div>
      <div className="border-t border-paper/15">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-2 px-5 py-5 text-xs text-paper/45 sm:flex-row sm:justify-between sm:px-8 lg:px-12">
          <span>© 2026 OMA</span>
          <span>OMA tıbbi tanı veya tedavi hizmeti sunmaz.</span>
        </div>
      </div>
    </footer>
  );
}
