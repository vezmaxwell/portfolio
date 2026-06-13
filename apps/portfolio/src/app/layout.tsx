import '@vez/ui/themes/base.css';
import '@vez/ui/themes/finity.css';
import '@vez/ui/themes/script-assist.css';
import '@vez/ui/themes/karehero.css';
import '@vez/ui/themes/pictures.css';
import '@vez/ui/themes/runna.css';
import type { Metadata } from 'next';
import { Outfit, PT_Mono, PT_Serif } from 'next/font/google';

const ptMono = PT_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
});

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
  display: 'swap',
});

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
    <html lang="en" className={`${ptSerif.variable} ${ptMono.variable} ${outfit.variable}`}>
      <body>{children}</body>
    </html>
  );
}
