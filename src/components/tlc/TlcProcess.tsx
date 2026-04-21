import { motion } from 'framer-motion'
import { viewReveal } from '../../lib/motion'

const STEPS = [
  { n: '01', label: 'Onboarding' },
  { n: '02', label: 'Discovery' },
  { n: '03', label: 'Build & test' },
  { n: '04', label: 'Sync' },
  { n: '05', label: 'Launch' },
]

export function TlcProcess() {
  return (
    <section id="process" className="scroll-mt-28 border-b border-stone-200 bg-white py-20 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={viewReveal}
        className="mx-auto max-w-3xl px-6 text-center"
      >
        <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Approach</p>
        <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-[2rem]">
          From first call to live pages
        </h2>
        <p className="mt-4 text-sm text-stone-500 md:text-[0.9375rem]">A clear sequence—so delivery stays calm and measurable.</p>
        <ol className="mt-14 flex flex-col items-stretch gap-0 text-left sm:mx-auto sm:max-w-md">
          {STEPS.map((s) => (
            <li key={s.n} className="flex items-baseline gap-6 border-t border-stone-200 py-5 first:border-t-0 first:pt-0 sm:first:pt-0">
              <span className="font-display text-xs font-semibold tabular-nums text-stone-400">{s.n}</span>
              <span className="text-[0.9375rem] font-medium tracking-tight text-stone-800">{s.label}</span>
            </li>
          ))}
        </ol>
      </motion.div>
    </section>
  )
}
