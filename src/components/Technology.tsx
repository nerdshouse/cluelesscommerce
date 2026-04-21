import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'

const STATS = [
  { value: '50+', label: 'Brands partnered' },
  { value: '5', label: 'Practice areas' },
  { value: '7d', label: 'Test cadence on launches' },
  { value: '24/7', label: 'Monitoring & support' },
]

const CAPABILITIES = [
  { title: 'Storefront & UX', desc: 'High-converting PDPs, landing pages, and design systems.' },
  { title: 'Performance media', desc: 'Search, social, and lifecycle - aligned to margin targets.' },
  { title: 'Data & analytics', desc: 'Clean events, attribution views, and experiment readouts.' },
  { title: 'Automation & AI', desc: 'Practical workflows - not slides - across ops and content.' },
  { title: 'Integrations', desc: 'CRM, email, reviews, subscriptions, and fulfilment.' },
  { title: 'Commerce platform', desc: 'Shopify-first builds with room for headless where it fits.' },
]

export function Technology() {
  return (
    <section id="technology" className="relative border-y border-stone-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:56px_56px] opacity-[0.4]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-stone-900">
            How we deliver
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            Built for reliability - then optimized weekly
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Modern commerce needs crisp UX, disciplined measurement, and a stack that won’t fight you when
            it’s time to test something new.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {STATS.map((s) => (
            <motion.li
              key={s.label}
              variants={staggerItem}
              className="rounded-2xl border border-stone-200/90 bg-stone-50/80 p-5 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold tabular-nums text-stone-900 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-stone-500">{s.label}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {CAPABILITIES.map((c) => (
            <motion.li
              key={c.title}
              variants={staggerItem}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-[0_8px_30px_-12px_rgb(28_25_23/0.08)] transition hover:border-stone-400"
            >
              <h3 className="font-display text-lg font-semibold text-stone-900">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{c.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
