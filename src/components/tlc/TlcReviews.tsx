import { motion } from 'framer-motion'
import { TLC_REVIEWS } from './data'
import { staggerContainer, staggerItem, viewReveal } from '../../lib/motion'

export function TlcReviews() {
  const shown = TLC_REVIEWS.slice(0, 2)

  return (
    <section id="reviews" className="scroll-mt-28 bg-transparent py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={viewReveal}
          className="max-w-xl"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Perspective</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
            What founders notice first
          </h2>
        </motion.div>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          className="mt-14 grid gap-12 md:grid-cols-2 md:gap-16"
        >
          {shown.map((r) => (
            <motion.li key={r.name} variants={staggerItem} className="border-l border-stone-300 pl-8">
              <blockquote className="text-[0.9375rem] font-normal leading-[1.75] text-stone-700 md:text-base">
                “{r.quote}”
              </blockquote>
              <footer className="mt-8">
                <p className="text-sm font-medium text-stone-900">{r.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.16em] text-stone-400">{r.role}</p>
              </footer>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
