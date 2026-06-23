import '@vez/ui/themes/base.css';
import '@vez/ui/themes/finity.css';
import '@vez/ui/themes/script-assist.css';
import '@vez/ui/themes/karehero.css';
import '@vez/ui/themes/pictures.css';
import '@vez/ui/themes/runna.css';
import './globals.css';
import type { Metadata } from 'next';
import { Anton, Outfit, PT_Mono } from 'next/font/google';

// Heavy condensed display face for headlines.
const anton = Anton({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-anton',
  display: 'swap',
});

// Kept for the in-app prototype UIs (Finity / Runna) which use a monospace look.
const ptMono = PT_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

// Clean rounded sans for body copy, buttons, tags, etc.
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vez Maxwell',
  description: 'Case studies, writing, and interactive product prototypes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${anton.variable} ${ptMono.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
