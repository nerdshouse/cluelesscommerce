import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/inter.28pt.ttf',
      weight: '100 900',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter.28pt-italic.ttf',
      weight: '100 900',
      style: 'italic',
    },
    {
      path: '../../public/fonts/inter.28pt-extrabold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/inter.28pt-bold-italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/inter.28pt-medium-italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/inter.18pt-black-italic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Clueless Commerce — Your Brand Deserves Better',
  description:
    'Strategy-first, 100% in-house marketing. Performance, brand, CGI, tech, social, and SEO — all under one roof.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
