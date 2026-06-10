import '@vez/ui/themes/base.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vez Maxwell',
  description: 'Case studies, writing, and interactive product prototypes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
