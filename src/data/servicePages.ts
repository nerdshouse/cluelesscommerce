/** Service hub + detail pages — structure inspired by clear scope UX (e.g. productized agency sites); palette stays brand-local. */

export interface KeyFeature {
  title: string
  body: string
}

export interface ProcessStep {
  n: string
  title: string
  body: string
}

export interface ServicePageData {
  slug: string
  title: string
  badge: string
  blurb: string
  timeline: string
  engagement: string
  points: string[]
  priceLine?: string
  /** Short line under title (e.g. “Managed by …”) */
  managedBy?: string
  /** Hero-style delivery promise */
  deliveryHighlight: string
  keyFeatures: KeyFeature[]
  compatibleWith: string
  audience: string[]
  impact: string[]
  process: ProcessStep[]
}

const PROCESS_STANDARD: ProcessStep[] = [
  { n: '01', title: 'Discovery', body: 'Goals, constraints, and success metrics aligned with stakeholders.' },
  { n: '02', title: 'Scope & plan', body: 'Prioritised backlog, milestones, and communication rhythm locked in writing.' },
  { n: '03', title: 'Build & iterate', body: 'Ship in tight loops with async updates and review checkpoints.' },
  { n: '04', title: 'QA & polish', body: 'Performance, accessibility, and brand consistency checked before release.' },
  { n: '05', title: 'Launch & learn', body: 'Go-live support, measurement hooks, and next-step recommendations.' },
]

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'social-media',
    badge: 'Acquisition',
    title: 'Social Media',
    blurb: 'Community, content, and social proof that turn attention into intent.',
    timeline: '2–8 week sprints',
    engagement: 'Project or retainer',
    points: ['Content systems & calendars', 'Community & UGC programs', 'Creator & brand collabs', 'Organic + paid social orchestration'],
    priceLine: 'Scoped by sprint; ask for a tailored quote.',
    managedBy: 'Growth lead',
    deliveryHighlight: 'Delivery in 2–8 week sprints',
    keyFeatures: [
      { title: 'Content systems', body: 'Editorial calendars and repeatable formats so channels stay consistent under scale.' },
      { title: 'Community & UGC', body: 'Programs that turn customers and creators into credible proof on feed and PDP.' },
      { title: 'Paid + organic sync', body: 'Creative, landing, and audience signals aligned so spend is not fighting the feed.' },
      { title: 'Reporting', body: 'Clear weekly snapshots — what shipped, what moved, what to try next.' },
    ],
    compatibleWith: 'Meta, TikTok, LinkedIn, and your existing creative stack.',
    audience: ['D2C brands scaling spend', 'Teams without in-house social leadership', 'Founders validating new offers'],
    impact: ['Faster creative ↔ landing feedback loops', 'Lower CAC when message-market fit tightens', 'More durable community asset than one-off campaigns'],
    process: PROCESS_STANDARD,
  },
  {
    slug: 'performance',
    badge: 'Scale',
    title: 'Performance',
    blurb: 'Full-funnel media that’s measured, iterated, and scaled with discipline.',
    timeline: 'Always-on + tests',
    engagement: 'From discovery',
    points: ['Meta & Google', 'Attribution & incrementality', 'Creative ↔ landing match', 'Experimentation loops'],
    priceLine: 'Media spend separate; management fees on request.',
    managedBy: 'Media lead',
    deliveryHighlight: 'Always-on management + structured tests',
    keyFeatures: [
      { title: 'Channel excellence', body: 'Meta & Google structures tuned for learning, not just spend.' },
      { title: 'Attribution you can trust', body: 'Incrementality and sanity checks so budgets follow signal, not noise.' },
      { title: 'Creative ↔ landing match', body: 'Briefs and landings updated together so ads stop promising what pages do not deliver.' },
      { title: 'Experimentation', body: 'Hypothesis-led tests with clear readouts and next actions.' },
    ],
    compatibleWith: 'GA4, Shopify, major MMPs, and your BI exports.',
    audience: ['Brands at meaningful monthly spend', 'Teams stuck on flat ROAS', 'Operators who want fewer surprises'],
    impact: ['Cleaner spend allocation', 'Faster kill / scale decisions on creative', 'Better forecastability for finance'],
    process: PROCESS_STANDARD,
  },
  {
    slug: 'development-ui-ux',
    badge: 'Product',
    title: 'Development & UI / UX',
    blurb: 'Storefronts, design systems, and experiences - shipping together so nothing gets lost between Figma and production.',
    timeline: '4–16 week builds',
    engagement: 'Fixed scope or embedded pod',
    points: ['UX research, audits & CRO-led redesigns', 'Design systems & mobile-first UI', 'Shopify, headless & custom apps', 'Speed, Core Web Vitals & integrations'],
    managedBy: 'Product lead',
    deliveryHighlight: 'Delivery in 4–16 weeks (by scope)',
    keyFeatures: [
      { title: 'Research-led UX', body: 'Audits and CRO-led redesigns grounded in behaviour, not opinion.' },
      { title: 'Design systems', body: 'Mobile-first UI that scales across PDPs, landings, and lifecycle email.' },
      { title: 'Shopify & beyond', body: 'Liquid, headless, and app integrations where the roadmap demands it.' },
      { title: 'Performance', body: 'Core Web Vitals and stability treated as product requirements.' },
    ],
    compatibleWith: 'Shopify, headless front-ends, Klaviyo, reviews, and subscription stacks.',
    audience: ['D2C brands on Shopify', 'Teams replatforming or redesigning', 'Founders who want one accountable build partner'],
    impact: ['Fewer Figma-to-code gaps', 'Faster iteration on PDP and landing templates', 'Higher trust at checkout'],
    process: PROCESS_STANDARD,
  },
  {
    slug: 'ai-solutions',
    badge: 'Operations',
    title: 'AI Solutions',
    blurb: 'Automation and intelligence woven into workflows - not hype, just leverage.',
    timeline: 'Pilot in weeks',
    engagement: 'Outcome-based sprints',
    points: ['Support & ops automation', 'Personalization hooks', 'Content & asset pipelines', 'Internal tools & QA'],
    priceLine: 'Pilot-first; pricing after scope.',
    managedBy: 'Solutions lead',
    deliveryHighlight: 'Pilot delivery in weeks',
    keyFeatures: [
      { title: 'Ops automation', body: 'Reduce manual work in support, merchandising, and handoffs.' },
      { title: 'Personalisation', body: 'Lightweight hooks where ML genuinely improves conversion or service.' },
      { title: 'Content pipelines', body: 'Asset generation and QA workflows that stay on-brand and reviewable.' },
      { title: 'Internal tools', body: 'Small tools that remove spreadsheet risk and speed decisions.' },
    ],
    compatibleWith: 'Your CRM, helpdesk, Shopify admin APIs, and internal data where permitted.',
    audience: ['Ops-heavy D2C teams', 'CX leads under ticket volume pressure', 'Brands testing AI without science-fair risk'],
    impact: ['Hours returned to the team', 'Fewer errors at scale', 'Clear guardrails before wider rollout'],
    process: PROCESS_STANDARD,
  },
  {
    slug: 'consultancy',
    badge: 'Strategy',
    title: 'Consultancy',
    blurb: 'Senior thinking on positioning, roadmap, and revenue architecture.',
    timeline: 'Workshops + roadmap',
    engagement: 'Advisory or embedded',
    points: ['Growth & GTM workshops', 'Funnel & CRO strategy', 'Retainers, audits & playbooks', 'Exec & lead syncs'],
    priceLine: 'Advisory blocks or monthly strategy seat.',
    managedBy: 'Principal strategist',
    deliveryHighlight: 'Roadmap in weeks, not quarters',
    keyFeatures: [
      { title: 'Workshops', body: 'Structured sessions on GTM, funnel, and channel trade-offs with clear outputs.' },
      { title: 'CRO & funnel strategy', body: 'Where to invest next — landings, PDP, retention — tied to numbers you already have.' },
      { title: 'Playbooks', body: 'Decision memos and operating rhythms your team can run without constant agency hours.' },
      { title: 'Executive sync', body: 'Plain-language updates for founders and finance.' },
    ],
    compatibleWith: 'Board decks, internal OKRs, and existing agency or in-house pods.',
    audience: ['Founders pre-raise or post-Series A', 'CMOs resetting channel mix', 'Brands entering new categories'],
    impact: ['Fewer misaligned builds', 'Clearer sequencing of bets', 'Shared language between growth, product, and finance'],
    process: PROCESS_STANDARD,
  },
]

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}

export const HOMEPAGE_SERVICES = SERVICE_PAGES
