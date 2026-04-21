import { motion } from 'framer-motion'
import { openCalComPopup } from '../../lib/cal'
import { TLC_HERO_COPY } from './data'

const ease = [0.22, 1, 0.36, 1] as const

export function TlcHero() {
  return (
    <section className="relative overflow-hidden bg-transparent pb-20 pt-8 md:pb-28 md:pt-6">
      <div className="pointer-events-none absolute inset-0 hero-mesh opacity-[0.92]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[rgb(250_248_244/0.85)] to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-stone-500"
        >
          {TLC_HERO_COPY.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.04, duration: 0.48, ease }}
          className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-stone-950 md:text-6xl lg:text-[4.1rem]"
        >
          We help DTC brands{' '}
          <span className="text-gradient">increase conversion</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4, ease }}
          className="mt-5 font-sans text-lg text-stone-600 md:text-xl"
        >
          {TLC_HERO_COPY.subline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.4, ease }}
          className="mt-3 font-accent text-2xl font-semibold leading-snug text-stone-800 md:text-3xl"
        >
          A fresh take on your customer journey.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.4, ease }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            type="button"
            onClick={openCalComPopup}
            className="min-h-[2.75rem] min-w-[10.5rem] bg-stone-950 px-8 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-stone-900"
          >
            Schedule a call
          </button>
          <a
            href="#lead"
            className="min-h-[2.75rem] inline-flex items-center justify-center border border-stone-300 bg-white px-8 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-900 transition hover:border-stone-900"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
