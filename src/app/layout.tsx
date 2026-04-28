import type { Metadata } from "next";
import { DM_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { FlowingLines } from "@/components/FlowingLines";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SITE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Learn E-Commerce Without the Confusion`,
    template: "%s — Clueless Commerce",
  },
  description: SITE.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    url: SITE.url,
    title: `${SITE.name} — Learn E-Commerce Without the Confusion`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/favicon.svg`,
    description: SITE.description,
    sameAs: [SITE.company, SITE.instagram],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} font-body overflow-x-hidden antialiased`}
      >
        <FlowingLines />
        <Header />
        <div className="relative z-[2] flex min-h-screen flex-col pt-[97px] md:pt-[109px]">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
