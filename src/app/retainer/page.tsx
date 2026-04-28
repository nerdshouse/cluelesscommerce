import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Retainer programme",
  description:
    "Ongoing CRO retainer: scope, verticals, cadence, commercial terms, and how to get started.",
  alternates: { canonical: `${SITE.url}/retainer` },
};

const verticals = [
  "Fashion & apparel",
  "Beauty & personal care",
  "Health, wellness & supplements",
  "Home, lifestyle & gifting",
  "Food & beverage",
  "Specialty & emerging categories",
] as const;

export default function RetainerPage() {
  return (
    <main className="flex w-full justify-center px-6 py-16">
      <article className="border-border bg-bg w-full max-w-[720px] border border-t-0 px-6 py-12 md:border-t">
        <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
          Retainer
        </p>
        <h1 className="font-heading text-text mt-2 text-4xl font-medium tracking-[-0.04em]">
          Retainer programme
        </h1>
        <p className="text-text-muted mt-6 text-[16px] leading-[165%]">
          The retainer is our ongoing engagement for brands that want hands-on CRO,
          Shopify, and funnel work without re-scoping every month from zero. You get
          a written programme: what is in, what is out, how we report, and how we
          measure progress.
        </p>

        <section className="border-border bg-bg-alt mt-10 rounded-sm border p-6 md:p-8">
          <h2 className="font-heading text-lg font-medium text-text">
            What you get
          </h2>
          <ul className="text-text-muted mt-4 list-inside list-disc space-y-2 text-[15px] leading-[170%]">
            <li>
              <span className="text-text font-medium">CRO retainer cadence</span> —
              prioritised tests, landings, and PDP/collection improvements on a
              regular rhythm.
            </li>
            <li>
              <span className="text-text font-medium">Shopify builds &amp; fixes</span>{" "}
              — themes, sections, checkout-adjacent UX aligned to your brand and
              analytics.
            </li>
            <li>
              <span className="text-text font-medium">Reporting &amp; comms</span> —
              agreed check-ins, written updates, and clear ownership on both sides.
            </li>
            <li>
              <span className="text-text font-medium">UGC add-ons</span> — short-form
              creator content from published rates when it supports the funnel.
            </li>
            <li>
              <span className="text-text font-medium">Core team access</span> —
              ongoing access to the delivery team named in your scope.
            </li>
          </ul>
        </section>

        <section className="border-border bg-bg-alt mt-6 rounded-sm border p-6 md:p-8">
          <h2 className="font-heading text-lg font-medium text-text">
            Six verticals we ship for
          </h2>
          <p className="text-text-muted mt-3 text-[15px] leading-[170%]">
            Scope is agreed in writing before kickoff. Not every brand needs every
            vertical; your contract lists which of these apply to you.
          </p>
          <ul className="text-text-muted mt-4 grid gap-2 text-[15px] leading-[170%] sm:grid-cols-2">
            {verticals.map((v) => (
              <li
                key={v}
                className="border-border flex items-center gap-2 rounded-sm border bg-bg px-3 py-2"
              >
                <span className="text-blue-light font-mono text-xs">—</span>
                {v}
              </li>
            ))}
          </ul>
        </section>

        <section className="border-border bg-bg-alt mt-6 rounded-sm border p-6 md:p-8">
          <h2 className="font-heading text-lg font-medium text-text">
            Commercials &amp; terms
          </h2>
          <ul className="text-text-muted mt-4 list-inside list-disc space-y-2 text-[15px] leading-[170%]">
            <li>
              <span className="text-text font-medium">Custom pricing</span> — the
              retainer is quoted for your catalogue size, channels, and scope. There
              is no one-size price on this page by design.
            </li>
            <li>
              <span className="text-text font-medium">Exclusions</span> — work outside
              the signed scope (extra markets, net-new products, or third-party tools)
              is quoted separately or added via a change log.
            </li>
            <li>
              <span className="text-text font-medium">No surprise lock-in</span> —
              commitment length and notice periods are in your agreement; we align
              those on the fit call.
            </li>
            <li>
              <span className="text-text font-medium">Full programme reference</span>{" "}
              — many brands compare this to our published{" "}
              <Link href="/pricing" className="text-blue hover:text-blue-hover">
                full programme
              </Link>{" "}
              tier; retainers are scoped when you need broader or longer-running
              coverage.
            </li>
          </ul>
        </section>

        <section className="border-border bg-bg-alt mt-6 rounded-sm border p-6 md:p-8">
          <h2 className="font-heading text-lg font-medium text-text">
            How we start
          </h2>
          <ol className="text-text-muted mt-4 list-inside list-decimal space-y-3 text-[15px] leading-[170%]">
            <li>
              <span className="text-text font-medium">Fit call</span> — spend,
              channels, and what is broken.
            </li>
            <li>
              <span className="text-text font-medium">Written scope</span> —
              inclusions, exclusions, verticals, cadence, and success signals.
            </li>
            <li>
              <span className="text-text font-medium">Kickoff</span> — only after both
              sides sign off on scope and commercials.
            </li>
          </ol>
        </section>

        <div className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-md text-[15px] text-text">
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue font-medium hover:text-blue-hover"
            >
              Book a call
            </a>{" "}
            to talk retainer scope, pricing, and fit.
          </p>
        </div>

        <nav className="text-dim mt-10 flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/services/india-retainer" className="text-blue hover:text-blue-hover">
            Retainer service detail
          </Link>
          <Link href="/pricing" className="text-blue hover:text-blue-hover">
            Pricing
          </Link>
          <Link href="/" className="text-blue hover:text-blue-hover">
            Home
          </Link>
        </nav>
      </article>
    </main>
  );
}
