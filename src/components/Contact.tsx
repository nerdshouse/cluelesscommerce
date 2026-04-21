import { motion } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'

const ease = [0.22, 1, 0.36, 1] as const

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-transparent py-24 md:py-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_50%_0%,rgb(26_58_54/0.06),transparent_60%),linear-gradient(180deg,rgb(255_255_255/0.35)_0%,transparent_45%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.38, ease }}
          className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500"
        >
          Contact
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: 0.04, ease }}
          className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-950 md:text-5xl"
        >
          Next step
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.38, delay: 0.08, ease }}
          className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-stone-600 md:text-lg"
        >
          Share what you are launching or optimising—we reply with a clear path forward.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.38, delay: 0.12, ease }}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <button
            type="button"
            onClick={openCalComPopup}
            className="inline-flex min-h-[2.75rem] items-center gap-2 bg-stone-950 px-10 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-stone-900"
          >
            Schedule a call
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <span className="text-xs uppercase tracking-[0.16em] text-stone-500">Private consultation · No obligation</span>
        </motion.div>
      </div>
    </section>
  )
}
