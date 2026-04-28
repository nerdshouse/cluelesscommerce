import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Practical e-commerce help: landing & CRO, Shopify, UGC, and retainer programmes.",
  alternates: { canonical: `${SITE.url}/services` },
};

export default function ServicesIndexPage() {
  return (
    <main className="flex w-full justify-center px-6 py-16">
      <div className="border-border bg-bg w-full max-w-[720px] border border-t-0 px-6 py-12 md:border-t">
        <h1 className="font-heading text-text text-4xl font-medium tracking-[-0.04em]">
          Services
        </h1>
        <p className="text-text-muted mt-4 text-base leading-[160%]">
          Practical e-commerce help: strategy you can ship, not generic advice.
        </p>
        <ul className="mt-10 flex flex-col gap-4">
          {SERVICES.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="border-border bg-bg-alt hover:border-blue block rounded-sm border p-6 transition-colors"
              >
                <span className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
                  {s.eyebrow}
                </span>
                <span className="font-heading mt-2 block text-lg font-medium text-text">
                  {s.title}
                </span>
                <p className="text-text-muted mt-2 text-[15px] leading-[165%]">
                  {s.shortDescription}
                </p>
                <span className="text-blue mt-4 inline-block text-sm font-medium">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="font-heading text-text text-xl font-medium tracking-[-0.03em]">
            Still Clueless?
          </p>
          <a
            href={SITE.cal}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue text-bg font-body hover:bg-blue-hover mt-5 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-medium transition-colors"
          >
            Let&apos;s Talk
          </a>
        </div>
        <p className="mt-6">
          <Link
            href="/"
            className="text-blue text-sm font-medium hover:text-blue-hover"
          >
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
