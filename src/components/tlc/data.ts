/** TLC-style section content (structure inspired by thelandingpagecompany.com; brand: Clueless Commerce) */

/** Hero eyebrow + supporting line (homepage). */
export const TLC_HERO_COPY = {
  eyebrow: 'Scaled over 10+ brands',
  subline: 'Experience across all major niches',
} as const

export const TLC_SERVICES: { num: string; title: string; body: string }[] = [
  {
    num: '01',
    title: 'Landing Pages',
    body: 'High-converting landing pages built from real behaviour data and D2C frameworks that turn traffic into buyers.',
  },
  {
    num: '02',
    title: 'Shopify / Custom Store Development',
    body: 'Custom themes, PDP architecture, checkout flows, and apps—built to feel like your brand, not a template aisle.',
  },
  {
    num: '03',
    title: 'CRO Retainers',
    body: 'Ongoing optimization: monthly audits, new pages, A/B tests, and fixes that keep conversion climbing.',
  },
  {
    num: '04',
    title: 'CRO Audits',
    body: 'A deep one-time pass through your funnel - leaks, friction, and quick wins called out clearly.',
  },
  {
    num: '05',
    title: 'Shopify Store Maintenance',
    body: 'Hands-on care so your store stays fast, stable, and current while you run the business.',
  },
  {
    num: '06',
    title: 'UGC',
    body: 'Short-form creator video for ads, landings, and PDP social proof. From $100 / Rs. 10,000 per video.',
  },
]

/** Homepage metrics strip (editorial, illustrative benchmarks). */
export const TLC_METRICS_STRIP: { value: string; label: string }[] = [
  { value: '−20%', label: 'CAC · new' },
  { value: '+45%', label: 'Conversion rate' },
  { value: '+20%', label: 'Profitable ad spend' },
  { value: '−30%', label: 'CAC · retarget' },
  { value: '+20%', label: 'LP → ATC' },
]

/** Industry pills — “we cater” row (reference-aligned). */
export const TLC_INDUSTRY_PILLS: string[] = [
  'Travel & luggage',
  'Clothing & accessories',
  "Men's grooming",
  'Footwear',
  'Eyewear',
  'Beauty & skincare',
  'Home & bedding',
  'Organic groceries',
  'Meal kits',
  'Sustainable products',
  'Lingerie',
  'Personal care',
]

export const TLC_REVIEWS: { quote: string; name: string; role: string }[] = [
  {
    quote:
      'We were skeptical that “just” revamping collection and product pages would move the needle. It did - time on site up, navigation clearer, and metrics followed.',
    name: 'Nitin P.',
    role: 'Founder',
  },
  {
    quote:
      'Even while raising prices, conversion and AOV improved. The team held brand value and customer loyalty - we can see it in the numbers.',
    name: 'Suchita M.',
    role: 'Founder',
  },
  {
    quote:
      'Timing before peak season was tight. The CRO push landed in time - we captured revenue we would have leaked.',
    name: 'Varun T.',
    role: 'Founder',
  },
  {
    quote:
      'Nine PDPs rebuilt with one coherent strategy. Revenue impact we hadn’t seen from redesigns before.',
    name: 'Sachin D.',
    role: 'Founder',
  },
]

export const TLC_FAQ: { q: string; a: string }[] = [
  {
    q: 'What’s the difference between a landing page and a product page?',
    a: 'Campaign landings chase one job-to-be-done and one CTA. PDPs repeat one template across SKUs. We often ship dedicated landings first, then fold learnings back into PDPs.',
  },
  {
    q: 'What if we have many SKUs?',
    a: 'We phase work - hero categories and bestsellers first, then roll forward so every page gets proper attention.',
  },
  {
    q: 'Do you only use Shopify?',
    a: 'We ship fastest on Shopify for D2C. For other stacks we can deliver design specs and front-end ready handoff.',
  },
  {
    q: 'Will we run landing and product pages together?',
    a: 'Yes during testing. Once a landing wins, it can replace or Inform the default PDP.',
  },
  {
    q: 'Full site - do you do that?',
    a: 'Yes. For us every page is a conversion surface.',
  },
  {
    q: 'What conversion lift should we expect?',
    a: 'It varies by category and traffic. We benchmark before/after and aim for meaningful lifts, not vanity tweaks.',
  },
]

export const TLC_WHY_PILLARS: { title: string; body: string }[] = [
  {
    title: 'Revenue from existing traffic',
    body: 'Better efficiency on the visitors you already pay for - lower waste, clearer paths.',
  },
  {
    title: 'AOV, CVR & sales',
    body: 'Higher basket, higher win rate, compounding revenue when the maths line up.',
  },
  {
    title: 'Margin & funnel clarity',
    body: 'Spot leaks and fix message-offer match before you scale spend.',
  },
  {
    title: 'Bounce & loyalty',
    body: 'Keep people longer, earn repeat buyers, build real community - not one-off clicks.',
  },
  {
    title: 'CAC & checkout',
    body: 'Tighter UX and story reduce abandonment and wasted acquisition.',
  },
]
