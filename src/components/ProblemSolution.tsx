import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'

const PROBLEMS = [
  'Siloed agencies and blurry ownership across channels',
  'Landing pages that don’t match ad creative or promise',
  'Slow iteration cycles when the catalog or offer shifts weekly',
]

const SOLUTIONS = [
  'One partner for social, performance, product, and UX decisions',
  'Message match from click → PDP → cart, tested continuously',
  'Sprint-based delivery with clear goals, owners, and reporting',
]

export function ProblemSolution() {
  return (
    <section id="approach" className="relative overflow-hidden bg-stone-50 py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-stone-400/12 blur-[100px]" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-stone-900">
            The old way breaks at scale
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl lg:text-5xl">
            Growth is cross-functional. Your partner should be, too.
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            When every channel runs in a different doc, you ship slower - while CAC climbs. We align creative,
            code, and media so experiments compound instead of canceling each other out.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div
            className="rounded-3xl border border-stone-200 bg-white p-8 shadow-sm md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-200 text-stone-900">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">The problem</p>
                <h3 className="font-display text-xl font-semibold text-stone-900">Fragmented execution</h3>
              </div>
            </div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              className="mt-8 space-y-4"
            >
              {PROBLEMS.map((t) => (
                <motion.li
                  key={t}
                  variants={staggerItem}
                  className="flex gap-3 text-stone-700"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-400" />
                  <span className="leading-relaxed">{t}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            className="rounded-3xl border border-stone-900/15 bg-gradient-to-br from-stone-100 via-white to-stone-50 p-8 shadow-sm md:p-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-900 text-white">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-600">The solution</p>
                <h3 className="font-display text-xl font-semibold text-stone-900">Unified D2C motion</h3>
              </div>
            </div>
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-8%' }}
              className="mt-8 space-y-4"
            >
              {SOLUTIONS.map((t) => (
                <motion.li
                  key={t}
                  variants={staggerItem}
                  className="flex gap-3 text-stone-800"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-stone-500" />
                  <span className="leading-relaxed">{t}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
