export type ServiceSlug =
  | "landing-cro"
  | "shopify"
  | "ugc"
  | "india-retainer";

export type Service = {
  slug: ServiceSlug;
  title: string;
  shortDescription: string;
  eyebrow: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "landing-cro",
    title: "Landing & CRO",
    eyebrow: "LANDING & CRO",
    shortDescription:
      "Dedicated landings, PDP and collection architecture, tests, and a roadmap your team can run.",
    intro:
      "Traffic is expensive; weak landings waste it. We align page structure, messaging hierarchy, and measurement so experiments actually teach you something.",
    sections: [
      {
        heading: "What we deliver",
        body:
          "Landing and funnel pages, PDP and collection templates, A/B test plans, and prioritized fixes tied to your acquisition channels—not random redesigns.",
      },
      {
        heading: "How we work",
        body:
          "Short discovery on spend, channel mix, and breakage points. Then a scoped sequence: highest-leverage pages first, with clear success metrics before build.",
      },
      {
        heading: "Good fit",
        body:
          "DTC brands with steady paid or organic traffic who need clarity on what to test next and hands-on help shipping it.",
      },
    ],
  },
  {
    slug: "shopify",
    title: "Shopify implementation",
    eyebrow: "SHOPIFY",
    shortDescription:
      "Themes, sections, and checkout-adjacent improvements aligned with your brand and analytics.",
    intro:
      "We implement in Shopify with performance and maintainability in mind—so marketing can iterate without breaking the store every quarter.",
    sections: [
      {
        heading: "What we deliver",
        body:
          "Section-based themes, PDP and collection layouts, cart and checkout-adjacent UX reviews, and documentation your team can extend.",
      },
      {
        heading: "How we work",
        body:
          "We map templates to your catalog and campaigns, then ship in slices so you are never blocked on a big-bang launch.",
      },
      {
        heading: "Good fit",
        body:
          "Brands on Shopify (or moving to it) who want CRO-led structure, not only cosmetic theme swaps.",
      },
    ],
  },
  {
    slug: "ugc",
    title: "UGC & social proof",
    eyebrow: "UGC",
    shortDescription:
      "Short-form creator content for ads, landings, and PDP social proof—priced from the programme on the site.",
    intro:
      "Creative that matches your offer and landing narrative performs better than generic “testimonial” clips. We scope formats that plug into ads and PDPs.",
    sections: [
      {
        heading: "What we deliver",
        body:
          "Creator briefs, hooks, and deliverables sized for Meta/TikTok and on-site embeds, with usage rights aligned to your channels.",
      },
      {
        heading: "How we work",
        body:
          "We start from your best-performing angles and PDP objections, then brief creators for iterative batches instead of one-off shoots.",
      },
      {
        heading: "Good fit",
        body:
          "Teams who need fresh proof assets alongside CRO work—not UGC bought in isolation from the funnel.",
      },
    ],
  },
  {
    slug: "india-retainer",
    title: "Retainer",
    eyebrow: "RETAINER",
    shortDescription:
      "Scoped ongoing programme: verticals, exclusions, and terms on the retainer page.",
    intro:
      "Same practical CRO approach with a defined scope, commercial model, and delivery cadence. Read the full programme overview on the site retainer page; legal and commercial terms follow your signed agreement.",
    sections: [
      {
        heading: "What we deliver",
        body:
          "Retainer-style engagement covering agreed verticals, reporting cadence, and channel focus—documented before kickoff.",
      },
      {
        heading: "How we work",
        body:
          "Fit call first, then a written scope: inclusions, exclusions, and success signals. We do not start without alignment on both sides.",
      },
      {
        heading: "Good fit",
        body:
          "DTC brands that need ongoing CRO support with a clear written scope and cadence.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
