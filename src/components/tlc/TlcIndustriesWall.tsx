import { motion } from 'framer-motion'
import { TLC_INDUSTRY_PILLS, TLC_METRICS_STRIP } from './data'
import { staggerContainer, staggerItem, viewReveal } from '../../lib/motion'

const STAR_TINTS = [
  'text-rose-500',
  'text-emerald-500',
  'text-sky-500',
  'text-amber-500',
  'text-violet-500',
  'text-orange-500',
  'text-teal-500',
  'text-fuchsia-500',
]

function StarIcon({ className }: { className: string }) {
  return (
    <svg className={`h-3 w-3 shrink-0 ${className}`} viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <path d="M6 0.5l1.2 3.7L11 5l-3.8 1.8L6 10.5 4.8 6.8 1 5l3.8-1.8L6 0.5z" />
    </svg>
  )
}

export function TlcIndustriesWall() {
  return (
    <section
      id="industries"
      className="scroll-mt-28 relative overflow-hidden border-b border-stone-200 bg-[#faf8f5] py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[22rem] w-[min(100%,42rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_0%,rgb(251_113_133/0.12),transparent_58%),radial-gradient(ellipse_at_40%_20%,rgb(251_146_60/0.1),transparent_55%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          variants={viewReveal}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-b border-stone-200/80 pb-10 md:gap-x-14"
        >
          {TLC_METRICS_STRIP.map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-display text-2xl font-semibold tabular-nums text-stone-900 md:text-3xl">{m.value}</p>
              <p className="mt-1 max-w-[9rem] text-[0.65rem] font-medium uppercase leading-snug tracking-[0.12em] text-stone-500">
                {m.label}
              </p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          variants={viewReveal}
          className="mt-14 text-center"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Serving industries</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-stone-900 md:text-5xl">
            <span className="text-gradient-accent">Industries</span> we cater
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">
            CRO work that lifts AOV and conversion—so revenue compounds on the traffic you already buy.
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6% 0px' }}
          className="mt-10 flex flex-wrap justify-center gap-2 md:mt-12 md:gap-2.5"
        >
          {TLC_INDUSTRY_PILLS.map((label, i) => (
            <motion.li key={label} variants={staggerItem}>
              <span className="inline-flex items-center gap-2 rounded-full border border-stone-200/90 bg-white px-4 py-2.5 text-sm text-stone-800 shadow-sm transition hover:border-stone-300 hover:shadow">
                <StarIcon className={STAR_TINTS[i % STAR_TINTS.length]} />
                {label}
              </span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-12 flex justify-center md:mt-14"
        >
          <a
            href="#lead"
            className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-10 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white shadow-md transition hover:opacity-95"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
