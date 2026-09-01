import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://oma-ritmini-tani.social-elk-3912.chatgpt.site';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'OMA — Döngünü değil, kendini takip et',
  description: 'Döngü, belirti, ruh hâli ve iyi yaşam takibini tek bir sakin günlükte buluşturan OMA ile bedeninin ritmini tanı.',
  openGraph: {
    title: 'OMA — Bedeninin ritmini tanı',
    description: 'Döngü, belirti, ruh hâli ve iyi yaşam takibini tek bir sakin günlükte buluşturan OMA ile bedeninin ritmini tanı.',
    url: siteUrl,
    siteName: 'OMA',
    locale: 'tr_TR',
    type: 'website',
    images: [{ url: `${siteUrl}/og.png`, width: 1200, height: 630, alt: 'OMA — Bedeninin ritmini tanı' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMA — Bedeninin ritmini tanı',
    description: 'Döngü ve iyi yaşam günlüğü.',
    images: [`${siteUrl}/og.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
