import { motion } from 'framer-motion'
import { TLC_SERVICES } from './data'
import { staggerContainer, staggerItem, viewReveal } from '../../lib/motion'

export function TlcServicesFive() {
  return (
    <section id="services-tlc" className="scroll-mt-28 border-b border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={viewReveal}
          className="text-center"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-400">Capabilities</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
            How we work with brands
          </h2>
        </motion.div>
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8% 0px' }}
          className="mt-14 grid gap-px overflow-hidden border border-stone-200 bg-stone-200 sm:grid-cols-2 lg:grid-cols-3"
        >
          {TLC_SERVICES.map((s) => (
            <motion.li key={s.num} variants={staggerItem} className="bg-white p-8 transition hover:bg-[#faf9f7] md:p-9">
              <span className="font-display text-xs font-semibold tabular-nums tracking-[0.2em] text-stone-400">{s.num}</span>
              <h3 className="mt-4 font-display text-lg font-medium tracking-tight text-stone-900">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{s.body}</p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
