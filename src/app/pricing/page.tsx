import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Programme pricing and add-ons for DTC CRO, Shopify, and UGC.",
  alternates: { canonical: `${SITE.url}/pricing` },
};

const tiers = [
  {
    name: "INTRO",
    price: "$0",
    sub: "Tell us spend, channel, and what is broken",
    details: [
      "Share funnel context and priority pages",
      "We reply with fit, timeline, and a clear next step",
      "No obligation on the first call",
      "Private consultation and email follow-up",
    ],
    cta: "Book a call",
  },
  {
    name: "FULL",
    price: "$1,500",
    sub: "USD per month for the full programme on this site",
    details: [
      "Landing pages and funnel work",
      "CRO retainer cadence and structured tests",
      "Shopify themes, PDPs, and checkout-adjacent support",
      "CRO audit when you need a reset",
      "No long lock-in (as published on site)",
      "Add UGC and maintenance as you scale",
    ],
    cta: "Book a call",
  },
  {
    name: "UGC",
    price: "$100+",
    sub: "Per video — short-form creator content",
    details: [
      "From $100 / Rs. 10,000 per video (published rates)",
      "Pairs with landings and PDP experiments",
      "Billed as an add-on to programme work",
      "Clear usage and rights in proposals",
      "Stack with the CRO retainer for compounding lift",
    ],
    cta: "Book a call",
  },
  {
    name: "RETAINER",
    price: "Custom",
    sub: "Six verticals, terms, and exclusions — full detail on the retainer page",
    details: [
      "Same practical CRO approach with a written scope",
      "Agreed verticals, reporting cadence, and channel focus",
      "Read exclusions and commercial terms before you sign",
      "Ongoing access to the core delivery team",
    ],
    cta: "View programme",
    href: "/retainer",
  },
];

export default function PricingPage() {
  return (
    <main className="flex w-full flex-col items-center px-6 py-16">
      <div className="w-full max-w-4xl">
        <h1 className="font-heading text-text text-center text-4xl font-medium tracking-[-0.04em]">
          Pricing
        </h1>
        <p className="text-text-muted mx-auto mt-4 max-w-lg text-center text-base leading-[160%]">
          A focused call lines up scope, timeline, and fit. Full programme pricing
          is published here for transparency — no long lock-in on the full tier.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="border-border bg-bg-alt flex flex-col border p-6"
            >
              <p className="text-blue-light font-mono text-sm font-medium tracking-[0.1em] uppercase">
                {t.name}
              </p>
              <p className="font-heading text-text mt-3 text-3xl font-bold">
                {t.price}
                {t.name === "FULL" ? (
                  <span className="text-xl font-medium">/mo.</span>
                ) : null}
              </p>
              <p className="text-text-muted mt-2 text-sm leading-[150%]">
                {t.sub}
              </p>
              <ul className="text-text-muted mt-4 flex list-inside list-disc flex-col gap-2 text-sm leading-[150%]">
                {t.details.map((line) => (
                  <li key={line} className="pl-1">
                    {line}
                  </li>
                ))}
              </ul>
              {"href" in t && t.href ? (
                <Link
                  href={t.href}
                  className="border-border text-text font-body mt-6 inline-flex w-full items-center justify-center border bg-[#fafafa] py-2.5 text-sm font-medium transition-colors hover:bg-white"
                >
                  {t.cta}
                </Link>
              ) : (
                <a
                  href={SITE.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue text-bg font-body hover:bg-blue-hover mt-6 inline-flex w-full items-center justify-center py-2.5 text-sm font-medium transition-colors"
                >
                  {t.cta}
                </a>
              )}
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-text-muted">
          <Link href="/services" className="text-blue hover:text-blue-hover">
            Compare services
          </Link>{" "}
          ·{" "}
          <a
            href={SITE.cal}
            className="text-blue hover:text-blue-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book a call
          </a>
        </p>
      </div>
    </main>
  );
}
