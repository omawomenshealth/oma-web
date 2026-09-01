import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OMA — Döngünü değil, kendini takip et',
  description: 'Döngü, belirti, ruh hâli ve iyi yaşam takibini tek bir sakin günlükte buluşturan OMA ile bedeninin ritmini tanı.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
