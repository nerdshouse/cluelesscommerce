import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'

const PILLARS = [
  {
    title: 'Quality bar',
    body: 'We treat every page like a revenue surface - perf budgets, accessibility, and QA before anything ships wide.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: 'Transparency',
    body: 'Roadmaps, trade-offs, and metrics live in shared spaces - so you always know what shipped and why.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
  },
  {
    title: 'Accountability',
    body: 'Creative calls backed by testing. Media tied to creative. Product aligned to promise - no shrug emojis in Slack.',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    ),
  },
]

export function Standards() {
  return (
    <section id="standards" className="bg-[color:rgb(250_248_245)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-stone-900">
            Our standards
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
            Where rigor meets velocity
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            We don’t win awards for decks. We win weeks on the calendar - and clarity in your numbers.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10%' }}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {PILLARS.map((p) => (
            <motion.li
              key={p.title}
              variants={staggerItem}
              className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-stone-200 text-stone-900">
                {p.icon}
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-stone-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{p.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
