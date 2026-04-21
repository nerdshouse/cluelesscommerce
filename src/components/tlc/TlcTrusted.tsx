import { motion } from 'framer-motion'
import { viewReveal } from '../../lib/motion'

export function TlcTrusted() {
  const labels = ['Brand A', 'Brand B', 'Brand C', 'Brand D', 'Brand E', 'Brand F', 'Brand G', 'Brand H']
  const row = [...labels, ...labels]

  return (
    <section className="border-b border-stone-200 bg-white py-14">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        variants={viewReveal}
        className="mx-auto max-w-6xl px-6"
      >
        <p className="text-center text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-400">
          Trusted by leading brands
        </p>
        <div className="marquee-wrap mt-10 overflow-hidden">
          <div className="marquee-track flex items-center gap-16 md:gap-24">
            {row.map((x, i) => (
              <span key={`${x}-${i}`} className="shrink-0 font-display text-xl font-medium text-stone-300 md:text-2xl">
                {x}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
