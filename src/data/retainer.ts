/** Monthly retainer programme — scope, terms, exclusions (replace client name per engagement). */
export const RETAINER_CLIENT_NAME = 'Your organisation'

export const RETAINER_ENTITY = 'Clueless Commerce — Nerdshouse Technologies LLP'

export const RETAINER_MONTHLY = {
  planLabel: 'The everything plan',
  amountDisplay: '₹1,50,000',
  amountNote: 'per month + 18% GST',
  summary: [
    'All 6 services. One flat fee.',
    'No hidden charges.',
    'Cancel with 30 days notice after 3 months.',
  ] as const,
}

export const RETAINER_INCLUDED: string[] = [
  'CRO, Shopify dev, performance marketing, email, social media & SEO — all 6 verticals.',
  'Dedicated account strategist — one point of contact, full accountability.',
  'Weekly async updates + comprehensive monthly performance report.',
  'All ad creatives, email templates, landing pages & social content.',
  `All assets, code & ad account access remain with ${RETAINER_CLIENT_NAME} — always.`,
  '7-day A/B testing cycle after every major deliverable.',
]

export const RETAINER_SCOPE_ROWS: { no: string; service: string; deliverables: string }[] = [
  {
    no: '01',
    service: 'Conversion rate optimisation',
    deliverables:
      'Full funnel audit (hero, PDP, cart & checkout), redesign of top 3 revenue-driving pages, mobile-first UX, and 7-day A/B testing cycles.',
  },
  {
    no: '02',
    service: 'Shopify development',
    deliverables:
      'Custom landing pages & collection page redesign, page speed optimisation (Core Web Vitals), Klaviyo & Meta Pixel integration, ongoing dev support (up to 8 hrs/month).',
  },
  {
    no: '03',
    service: 'Performance marketing',
    deliverables:
      'Meta (Facebook + Instagram) & Google campaign management, ad creative direction, weekly performance reporting, audience research & retargeting setup.',
  },
  {
    no: '04',
    service: 'Email & retention — Klaviyo',
    deliverables:
      'Welcome, abandon-cart, and post-purchase flows, monthly broadcast campaigns, list segmentation, A/B subject line & send-time optimisation.',
  },
  {
    no: '05',
    service: 'Social media management',
    deliverables:
      'Instagram & LinkedIn posts (3/week), caption writing & hashtag strategy, community management / DM handling, monthly performance reports.',
  },
  {
    no: '06',
    service: 'Search engine optimisation (SEO)',
    deliverables:
      'Technical SEO audit & fixes, on-page optimisation (tags, descriptions, headings), keyword research, backlink outreach strategy.',
  },
]

export const RETAINER_TERMS: { label: string; value: string }[] = [
  { label: 'Minimum commitment', value: '3 months. Cancel with 30 days written notice thereafter.' },
  { label: 'Onboarding', value: '5–7 business days after contract signing and first payment.' },
  { label: 'Payment terms', value: 'Advance monthly. Invoice raised on the 1st of each month.' },
  { label: 'Reporting', value: 'Weekly async updates + full monthly performance report.' },
  { label: 'Communication', value: 'Dedicated WhatsApp / Slack channel + fortnightly video calls.' },
  {
    label: 'Asset ownership',
    value: `All creative, code and data remain the property of ${RETAINER_CLIENT_NAME}.`,
  },
  { label: 'Confidentiality', value: 'Mutual NDA on all client data, strategies and commercial terms.' },
  { label: 'Revision policy', value: 'Up to 2 revision rounds per deliverable within agreed scope.' },
  { label: 'GST', value: '18% GST applicable on the monthly retainer fee as per applicable law.' },
]

export const RETAINER_EXCLUSIONS: { title: string; body: string }[] = [
  {
    title: 'Article publishing on external portals',
    body:
      'Guest posts, PR distribution, or paid placements on third-party portals (e.g. industry or news sites). Editorial and portal charges are not covered.',
  },
  {
    title: 'Platform & tool subscription costs',
    body:
      'Subscriptions for Klaviyo, SEMrush, Ahrefs, Hotjar, Shopify apps, or any SaaS products required to execute the strategy are billed directly to the client.',
  },
  {
    title: 'UGC creator fees',
    body:
      'Compensation for UGC creators, influencers, or brand ambassadors. The agency manages briefs and coordination; creator fees are a direct client expense.',
  },
  {
    title: 'Ad spend / media budget',
    body: 'Actual Meta, Google, or any paid media spend. The retainer covers campaign management only.',
  },
  {
    title: 'Product photography & videography',
    body:
      'Studio shoots, professional photography, or video production. The agency works with existing assets or recommends vendors at an additional cost.',
  },
  {
    title: 'Influencer marketing campaigns',
    body:
      'Macro/micro influencer fees, gifting costs, or affiliate commissions. Strategy and outreach are included; actual costs are not.',
  },
  {
    title: 'Legal, compliance & regulatory',
    body: 'Compliance reviews, legal vetting of ad copy, regulatory approvals, or trademarking.',
  },
  {
    title: 'Custom app / backend development',
    body:
      'Mobile app development, custom API integrations beyond the standard Shopify ecosystem, or bespoke backend systems.',
  },
]
