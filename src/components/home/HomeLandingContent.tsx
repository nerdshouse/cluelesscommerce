import Image from "next/image";
import Link from "next/link";
import { D2cBannerAnimations } from "@/components/home/D2cBannerAnimations";
import { HeroCartIllustration } from "@/components/home/HeroCartIllustration";
import { SERVICES } from "@/content/services";
import { SITE } from "@/lib/site";

function StickyBand({
  label,
  index,
  total,
}: {
  label: string;
  index: number;
  total: number;
}) {
  return (
    <div
      className="border-border bg-bg/95 sticky z-[3] flex h-12 w-full items-center justify-between border border-b-0 px-6 backdrop-blur-sm max-md:px-4"
      style={{ top: "var(--nav-height, 88px)" }}
    >
      <p className="text-dim font-mono text-xs font-medium tracking-[0.1em] uppercase">
        {label}
      </p>
      <p className="text-dim font-mono text-xs font-medium tracking-[0.1em] text-right">
        [
        <span className="text-blue-light">{index}</span>/{total}]
      </p>
    </div>
  );
}

/** Shopping cart mark — Heroicons 24 solid (MIT), `currentColor` for banner & UI. */
function CommerceMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-1.005 2.705 3.75 3.75 0 0 0 3.75 3.75H18.75a.75.75 0 0 0 0-1.5H8.25a2.25 2.25 0 0 1-2.045-1.309l.175-.655H15.75a.75.75 0 0 0 .565-.241l3.118-3.56a.75.75 0 1 0-1.129-.966l-2.881 3.3a.75.75 0 0 1-.565.241H6.253l-.311-1.17H19.5a.75.75 0 0 0 0-1.5H4.317a.75.75 0 0 1-.56-.249l-2.19-2.44a.75.75 0 0 0-.067-.897Z"
        clipRule="evenodd"
      />
      <path d="M7.5 21a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm9 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </svg>
  );
}

const PARTNER_LOGOS = [
  { src: "/images/logo-doeraa.png", height: 40, alt: "Doeraa — threads and apparel" },
  { src: "/images/logo-phaelora.png", height: 88, alt: "Phaelora" },
  { src: "/images/logo-briyo.png", height: 44, alt: "BRIYO Supplements" },
] as const;

export function HomeLandingContent() {
  return (
    <>
      <div className="w-full max-w-[1200px]">
        <section
          className="border-border bg-bg w-full border border-t-0"
          aria-labelledby="hero-heading"
        >
          <div className="w-full px-8 pt-8 pb-0 max-md:px-4">
            <div className="border-border mb-8 flex w-full items-center justify-start border-y border-dashed max-lg:justify-center">
              <a
                href={SITE.company}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-card-blue hover:bg-[#d0e3ff] flex items-center border transition-colors"
              >
                <div className="border-border-light flex items-center gap-2 border-r px-2.5 py-[5px]">
                  <div className="relative h-3 w-3 shrink-0">
                    <div className="absolute inset-0 bg-[#007bff80]" />
                    <div className="absolute top-[2px] left-[2px] h-[7px] w-[7px] bg-[#0452db]" />
                  </div>
                  <span className="font-body text-[15px] font-medium tracking-[-0.01em] text-text whitespace-nowrap">
                    CRO &amp; landing
                  </span>
                </div>
                <div className="flex items-center gap-2.5 px-2.5 py-[5px]">
                  <span className="font-body text-[15px] font-medium tracking-[-0.01em] text-text max-md:text-[13px] max-md:whitespace-normal">
                    Scaled over 10+ brands
                    <span className="max-md:hidden">
                      {" "}
                      — experience across major niches
                    </span>
                  </span>
                  <span className="font-body text-xs font-medium text-text">
                    →
                  </span>
                </div>
              </a>
            </div>

            <div className="flex w-full items-center gap-4 pb-12 max-lg:flex-col">
              <div className="flex flex-1 flex-col items-start gap-6 max-lg:items-center max-lg:text-center">
                <h1
                  id="hero-heading"
                  className="font-heading text-[58px] font-medium tracking-[-0.05em] text-text leading-[110%] max-xl:text-5xl max-lg:text-5xl max-md:text-[36px]"
                  style={{ textWrap: "balance" }}
                >
                  We help DTC brands increase conversion.
                </h1>
                <p className="font-body text-text-muted max-w-[480px] text-lg font-medium tracking-[-0.01em] leading-[150%] max-md:text-base max-lg:max-w-[600px]">
                  A fresh take on your customer journey. Landing pages, Shopify
                  builds, CRO retainers, and audits — so existing traffic works
                  harder, without the jargon.
                </p>
                <div className="flex max-w-[440px] flex-col gap-3 max-lg:items-center">
                  <div className="hidden w-full max-w-[440px] flex-col gap-3 lg:flex">
                    <div className="grid grid-cols-2 gap-3">
                      <a
                        href={SITE.cal}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-border bg-blue text-bg font-body hover:bg-blue-hover flex items-center justify-center gap-2 border px-5 py-[10px] text-[15px] font-medium tracking-[-0.01em] transition-colors"
                      >
                        Book a call <span aria-hidden>→</span>
                      </a>
                      <Link
                        href="/services"
                        className="border-border text-text font-body hover:bg-white flex items-center justify-center gap-2 border bg-[#fafafa] px-5 py-[10px] text-[15px] font-medium tracking-[-0.01em] transition-colors"
                      >
                        View services <span aria-hidden>→</span>
                      </Link>
                    </div>
                    <div className="text-text-muted flex flex-wrap items-center gap-3 pt-1 text-sm">
                      <span>10+ brands</span>
                      <span className="text-border">·</span>
                      <span>All major niches</span>
                      <span className="text-border">·</span>
                      <span>Clear next steps</span>
                    </div>
                    <Link
                      href="/retainer"
                      className="text-text-muted hover:text-text font-body text-[13px] font-medium transition-colors"
                    >
                      Retainer programme →
                    </Link>
                  </div>
                  <div className="flex w-full max-w-[360px] flex-col gap-3 lg:hidden">
                    <a
                      href={SITE.cal}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-border bg-blue text-bg font-body flex w-full items-center justify-center gap-2 border px-5 py-[10px] text-[15px] font-medium tracking-[-0.01em]"
                    >
                      Book a call <span aria-hidden>→</span>
                    </a>
                    <Link
                      href="/services"
                      className="border-border text-text font-body hover:bg-white flex w-full items-center justify-center gap-2 border bg-[#fafafa] px-5 py-[10px] text-[15px] font-medium tracking-[-0.01em] transition-colors"
                    >
                      View services <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="-ml-8 hidden shrink-0 items-center justify-center lg:flex">
                <HeroCartIllustration className="relative w-[300px] shrink-0" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <div
        className="bg-[#0763ee] relative flex w-full items-center justify-center overflow-hidden"
        style={{ transform: "scaleY(-1)" }}
        aria-hidden
      >
        <div
          className="relative w-full"
          style={{ aspectRatio: "3.5", maxHeight: 320 }}
        />
        <div className="absolute inset-0 z-0 scale-y-[-1]">
          <D2cBannerAnimations />
        </div>
        <div
          className="absolute z-[2] text-[#F5F9FF]"
          style={{
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%) scaleY(-1)",
            width: 112,
          }}
        >
          <CommerceMark className="h-auto w-full" />
        </div>
      </div>

      <div className="w-full max-w-[1200px]">
        <StickyBand label="Capabilities" index={1} total={4} />
        <div className="border-border bg-bg w-full border border-t-0">
          <div className="flex flex-col items-center px-8 py-12 max-md:px-4 max-md:py-8">
            <h2 className="font-heading text-text max-w-[800px] text-center text-[40px] font-medium tracking-[-0.04em] leading-[130%] max-lg:text-[32px] max-md:text-[24px]">
              Your traffic.
              <span className="border-[#1d4ed8] bg-blue relative -top-[2px] mx-1 inline-flex items-center justify-center rounded-md border px-2.5 py-1 align-middle max-md:-top-px">
                <CommerceMark className="d2c-headline-cart text-bg h-6 w-6 max-md:h-5 max-md:w-5 shrink-0" />
              </span>
              <span className="text-blue">We improve the journey.</span>
              <br />
              Conversion follows.
            </h2>
            <p className="text-text-muted mt-4 max-w-[500px] text-center text-sm font-medium leading-[170%] max-md:mt-3">
              Landing pages, Shopify, CRO retainers, audits, and UGC—practical
              help for DTC teams who want calmer growth.
            </p>
          </div>

          <div className="border-border border-t">
            <div className="flex max-lg:flex-col">
              <a
                href={SITE.cal}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-border bg-[#f0f5ff] hover:bg-[#e8f0ff] relative flex flex-1 flex-col gap-5 overflow-hidden border-r p-8 max-md:border-b max-md:border-r-0 max-md:p-6"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #2563eb 0.8px, transparent 0.8px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
                  LANDING &amp; CRO
                </p>
                <h3 className="font-heading text-text text-[28px] font-medium tracking-[-0.04em] leading-[125%] max-md:text-[22px]">
                  High-converting pages
                </h3>
                <p className="text-text-muted font-body text-[15px] font-medium leading-[160%]">
                  Built from real behaviour and D2C frameworks: dedicated
                  landings, PDP architecture, and tests that turn paid traffic
                  into buyers.
                </p>
                <div className="mt-1 flex flex-wrap gap-x-8 gap-y-3">
                  <div className="flex flex-col">
                    <span className="font-heading text-text text-[24px] font-medium tracking-[-0.03em]">
                      10+
                    </span>
                    <span className="text-dim font-body text-xs">
                      Brands scaled
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-text text-[24px] font-medium tracking-[-0.03em]">
                      All
                    </span>
                    <span className="text-dim font-body text-xs">
                      Major niches
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-text text-[24px] font-medium tracking-[-0.03em]">
                      Calm
                    </span>
                    <span className="text-dim font-body text-xs">
                      Clear delivery
                    </span>
                  </div>
                </div>
                <p className="text-dim font-body text-[13px] font-medium">
                  Shopify · CRO retainers · Audits
                </p>
                <div className="bg-blue hover:bg-[#1d4ed8] mt-auto flex w-full items-center justify-center gap-2.5 py-3.5 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors">
                  <CommerceMark className="relative z-[1] h-3.5 w-4" />
                  <span className="relative z-[1]">Book a call</span>
                  <svg
                    className="relative z-[1] h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10m0 0l-4-4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>

              <Link
                href="/retainer"
                className="group hover:bg-[#f5f0e8] relative flex flex-1 flex-col gap-5 overflow-hidden bg-[#faf8f5] p-8 max-md:p-6"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #92400e 0.8px, transparent 0.8px)",
                    backgroundSize: "16px 16px",
                  }}
                />
                <p className="font-mono text-xs font-medium tracking-[0.1em] text-[#b45309] uppercase">
                  RETAINER
                </p>
                <h3 className="font-heading text-text text-[28px] font-medium tracking-[-0.04em] leading-[125%] max-md:text-[22px]">
                  Programme &amp; maintenance
                </h3>
                <p className="text-text-muted font-body text-[15px] font-medium leading-[160%]">
                  USD $1,500/mo for the full programme (no long lock-in). The
                  retainer covers six verticals, written scope, and
                  exclusions—details on the retainer programme page.
                </p>
                <div className="border-border flex flex-col gap-0 border-t">
                  <div className="border-border/50 flex items-center justify-between border-b py-3">
                    <span className="font-heading text-text text-[15px] font-medium">
                      CRO retainer
                    </span>
                    <span className="text-dim font-body text-[12px]">
                      Monthly improvements
                    </span>
                  </div>
                  <div className="border-border/50 flex items-center justify-between border-b py-3">
                    <span className="font-heading text-text text-[15px] font-medium">
                      Shopify builds
                    </span>
                    <span className="text-dim font-body text-[12px]">
                      Themes, PDPs, checkout
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="font-heading text-text text-[15px] font-medium">
                      UGC from $100
                    </span>
                    <span className="text-dim font-body text-[12px]">
                      Per short-form video
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-heading text-text text-[24px] font-medium tracking-[-0.03em]">
                    $1,500
                  </span>
                  <span className="text-dim font-body text-xs">
                    full programme / mo (USD)
                  </span>
                </div>
                <div className="mt-auto flex w-full items-center justify-center gap-2.5 bg-[#92400e] py-3.5 text-[15px] font-medium tracking-[-0.01em] text-white transition-colors group-hover:bg-[#78350f]">
                  <span className="relative z-[1]">View retainer programme</span>
                  <svg
                    className="relative z-[1] h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 8h10m0 0l-4-4m4 4l-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full">
          <StickyBand label="Trusted by brands" index={2} total={4} />
          <div className="border-border bg-bg w-full border border-t-0">
            <div className="flex flex-col items-center gap-4 px-8 pt-14 pb-10 max-md:px-4">
              <h2 className="font-heading text-text max-w-[700px] text-center text-[44px] font-medium tracking-[-0.04em] leading-[120%] max-lg:text-[36px] max-md:text-[28px]">
                Trusted by leading brands.
              </h2>
              <p className="text-text-muted max-w-[580px] text-center text-base font-medium leading-[170%]">
                Fashion, lifestyle, and wellness—CRO that lifts AOV and
                conversion on the traffic you already buy.
              </p>
            </div>
            <div className="border-border border-y">
              <p className="text-dim py-4 text-center font-mono text-xs font-medium tracking-[0.1em] uppercase">
                A sample of partners and categories we have shipped for
              </p>
              <div className="border-border grid min-h-[104px] w-full grid-cols-1 overflow-hidden sm:grid-cols-3">
                {PARTNER_LOGOS.map((logo) => (
                  <div
                    key={logo.src}
                    className="border-border bg-bg flex items-center justify-center overflow-hidden border-r border-b px-8 py-6 max-md:px-6 max-md:py-5"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={200}
                      height={logo.height}
                      unoptimized
                      className="hover:opacity-100 w-auto object-contain opacity-40 transition-opacity"
                      style={{ height: logo.height, width: "auto" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <StickyBand label="Testimonials" index={3} total={4} />
          <div className="border-border bg-bg w-full border border-t-0">
            <div className="flex flex-col items-center gap-3 px-8 pt-12 pb-8">
              <h2 className="font-heading text-text text-center text-[44px] font-medium tracking-[-0.04em] leading-[120%] max-lg:text-[36px] max-md:text-[28px]">
                What founders notice first
              </h2>
              <p className="text-text-muted max-w-[500px] text-center text-base font-medium leading-[160%]">
                Perspective from teams we&apos;ve worked with at Clueless
                Commerce.
              </p>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 px-6 pb-8">
              <blockquote className="border-border bg-bg rounded-sm border p-6">
                <p className="text-text font-body text-[15px] leading-[165%]">
                  &quot;We were skeptical that &quot;just&quot; revamping
                  collection and product pages would move the needle. It did -
                  time on site up, navigation clearer, and metrics followed.&quot;
                </p>
                <footer className="text-dim mt-3 font-body text-sm">
                  — Founder, DTC brand
                </footer>
              </blockquote>
              <blockquote className="border-border bg-bg rounded-sm border p-6">
                <p className="text-text font-body text-[15px] leading-[165%]">
                  &quot;Even while raising prices, conversion and AOV improved.
                  The team held brand value and customer loyalty - we can see it
                  in the numbers.&quot;
                </p>
                <footer className="text-dim mt-3 font-body text-sm">
                  — Founder, DTC brand
                </footer>
              </blockquote>
            </div>
          </div>
        </div>

        <div className="w-full" id="pricing">
          <StickyBand label="Services" index={4} total={4} />
          <div className="border-border bg-bg w-full border border-t-0">
            <div className="border-border border-b px-6 py-10 md:px-8 md:py-12">
              <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
                All services
              </p>
              <h2 className="font-heading text-text mt-3 max-w-2xl text-3xl font-medium tracking-[-0.04em] md:text-[2rem]">
                What we offer
              </h2>
              <p className="text-text-muted mt-3 max-w-2xl text-[15px] leading-[160%] md:text-base">
                Four ways we plug into your funnel — pick one programme or
                combine what fits. Each has its own scope and detail page.
              </p>
            </div>
            <div className="bg-border grid grid-cols-1 gap-px sm:grid-cols-2">
              {SERVICES.map((s, index) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className={`block p-8 transition-colors ${
                    index === 0
                      ? "bg-[#f0f5ff] hover:bg-[#e4edff]"
                      : "bg-bg-alt hover:bg-bg"
                  }`}
                >
                  <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
                    {s.eyebrow}
                  </p>
                  <h3 className="font-heading text-text mt-3 text-2xl font-medium tracking-[-0.04em]">
                    {s.title}
                  </h3>
                  <p className="text-text-muted mt-3 text-[15px] font-medium leading-[160%]">
                    {s.shortDescription}
                  </p>
                  <span className="text-blue mt-6 inline-block text-sm font-medium">
                    Learn more →
                  </span>
                </Link>
              ))}
            </div>
            <div className="border-border bg-bg-alt border-t px-6 py-10 md:px-8">
              <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
                Pricing
              </p>
              <p className="text-text-muted mt-2 max-w-xl text-[15px] leading-[160%]">
                Full programme details and tiers live on the pricing page.
              </p>
              <Link
                href="/pricing"
                className="text-blue hover:text-blue-hover mt-4 inline-block text-sm font-medium"
              >
                See pricing →
              </Link>
            </div>
          </div>
        </div>

        <section
          id="cta"
          className="border-border bg-bg-alt flex w-full flex-col items-center border border-t-0 px-6 py-12 text-center md:px-8"
          aria-labelledby="cta-heading"
        >
          <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
            Next step
          </p>
          <h2
            id="cta-heading"
            className="font-heading text-text mt-3 text-2xl font-medium tracking-[-0.04em]"
          >
            Ready when you are
          </h2>
          <p className="text-text-muted mx-auto mt-2 max-w-xl text-[15px] leading-[160%]">
            Book a call to align scope, timeline, and fit — or browse every
            service in detail.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue text-bg font-body hover:bg-blue-hover inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium transition-colors"
            >
              Book a call
            </a>
            <Link
              href="/pricing"
              className="border-border text-text font-body hover:bg-bg inline-flex items-center gap-2 rounded-lg border px-6 py-3 text-sm font-medium transition-colors"
            >
              See pricing
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
