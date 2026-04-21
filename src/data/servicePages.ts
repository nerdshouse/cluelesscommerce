/** Homepage + /services/:slug */

export interface ServicePageData {
  slug: string
  title: string
  badge: string
  blurb: string
  timeline: string
  engagement: string
  points: string[]
  /** Pricing line for detail page */
  priceLine?: string
}

export const SERVICE_PAGES: ServicePageData[] = [
  {
    slug: 'social-media',
    badge: 'Acquisition',
    title: 'Social Media',
    blurb: 'Community, content, and social proof that turn attention into intent.',
    timeline: '2-8 week sprints',
    engagement: 'Project or retainer',
    points: ['Content systems & calendars', 'Community & UGC programs', 'Creator & brand collabs', 'Organic + paid social orchestration'],
    priceLine: 'Scoped by sprint; ask for a tailored quote.',
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
  },
  {
    slug: 'development-ui-ux',
    badge: 'Product',
    title: 'Development & UI / UX',
    blurb: 'Storefronts, design systems, and experiences - shipping together so nothing gets lost between Figma and production.',
    timeline: '4-16 week builds',
    engagement: 'Fixed scope or embedded pod',
    points: ['UX research, audits & CRO-led redesigns', 'Design systems & mobile-first UI', 'Shopify, headless & custom apps', 'Speed, Core Web Vitals & integrations'],
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
  },
]

export function getServiceBySlug(slug: string): ServicePageData | undefined {
  return SERVICE_PAGES.find((s) => s.slug === slug)
}

/** Short list for homepage grid (same slugs) */
export const HOMEPAGE_SERVICES = SERVICE_PAGES
