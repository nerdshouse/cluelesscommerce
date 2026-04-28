import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about Clueless Commerce, Shopify, CRO, and programmes.",
  alternates: { canonical: `${SITE.url}/faq` },
};

/** Example ISR: revalidate every hour (hybrid: static shell, periodic refresh) */
export const revalidate = 3600;

const items = [
  {
    q: "What does Clueless Commerce do?",
    a: "We help DTC brands improve conversion with landing pages, PDP and collection structure, CRO retainers, and clear testing roadmaps.",
  },
  {
    q: "How do I get started?",
    a: "Book a call on Cal. We align on channel, spend, what is broken, and whether a programme or audit is the right next step.",
  },
  {
    q: "Do you only work with Shopify?",
    a: "Shopify is our default implementation stack, but strategy applies across platforms. We will say if we are not a fit.",
  },
  {
    q: "What is the retainer?",
    a: "An ongoing scoped programme for brands that need hands-on CRO support. Verticals, exclusions, and commercials are documented on the programme overview.",
  },
];

export default function FaqPage() {
  return (
    <main className="flex w-full justify-center px-6 py-16">
      <div className="border-border bg-bg w-full max-w-[720px] border border-t-0 px-6 py-12 md:border-t">
        <h1 className="font-heading text-text text-4xl font-medium tracking-[-0.04em]">
          FAQ
        </h1>
        <div className="mt-10 flex flex-col gap-8">
          {items.map((item) => (
            <section
              key={item.q}
              className="border-border border-b pb-6 last:border-0"
            >
              <h2 className="font-heading text-lg font-medium text-text">
                {item.q}
              </h2>
              {item.q === "What is the retainer?" ? (
                <p className="text-text-muted mt-2 text-[15px] leading-[165%]">
                  An ongoing scoped programme for brands that need hands-on CRO
                  support. Verticals, exclusions, and commercials are on the{" "}
                  <Link href="/retainer" className="text-blue hover:text-blue-hover">
                    retainer programme page
                  </Link>
                  .
                </p>
              ) : (
                <p className="text-text-muted mt-2 text-[15px] leading-[165%]">
                  {item.a}
                </p>
              )}
            </section>
          ))}
        </div>
        <p className="text-text-muted mt-10 text-center text-[15px]">
          Follow{" "}
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue underline hover:text-blue-hover"
          >
            Instagram
          </a>
          .
        </p>
        <p className="mt-6">
          <Link href="/" className="text-blue text-sm font-medium">
            ← Back to home
          </Link>
        </p>
      </div>
    </main>
  );
}
