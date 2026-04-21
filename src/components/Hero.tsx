import { motion, useReducedMotion } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'

const PLACEHOLDER_CARDS = 8

export function Hero() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-[85vh] overflow-hidden pb-16 pt-8 md:min-h-[88vh] md:pb-24">
      <div className="pointer-events-none absolute inset-0 hero-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-black/10 blur-[100px] animate-blob"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-28 bottom-20 h-96 w-96 rounded-full bg-neutral-400/15 blur-[110px] animate-blob-delayed"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark bg-[length:56px_56px] opacity-[0.35]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-stone-300/90 bg-white/75 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-stone-800 shadow-sm backdrop-blur-md md:text-[0.7rem]"
        >
          The principled partner
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-stone-950 md:text-6xl lg:text-[4.25rem]"
        >
          The conversion advantage,{' '}
          <span className="text-gradient">responsibly delivered</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl"
        >
          A D2C-native studio combining social, performance, product, AI, and UX - for teams that want speed
          without chaos, and clarity without the jargon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.24 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            type="button"
            onClick={openCalComPopup}
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:bg-stone-900"
          >
            <span className="btn-shine absolute inset-0 opacity-30" />
            <span className="relative">Free consultation</span>
            <svg className="relative h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </button>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 rounded-full border border-stone-400/90 bg-white/85 px-8 py-3.5 text-sm font-semibold text-stone-800 backdrop-blur transition hover:border-stone-900 hover:bg-white"
          >
            Browse solutions
            <svg className="h-4 w-4 text-stone-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 text-sm text-stone-500"
        >
          <span className="font-medium text-stone-800">No obligation</span> · Senior-led · Practical roadmap
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 mt-14 md:mt-20"
      >
        <div className="marquee-wrap overflow-hidden">
          <div className="marquee-track flex gap-4 py-1">
            {[...Array(PLACEHOLDER_CARDS * 2)].map((_, i) => (
              <motion.div
                key={i}
                whileHover={reduceMotion ? undefined : { y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 380, damping: 22 }}
                className="h-40 w-64 flex-shrink-0 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm md:h-52 md:w-80"
              >
                <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-stone-100 via-white to-stone-50 p-4 text-center">
                  <span className="font-display text-sm font-semibold text-stone-800">
                    Launch {((i % PLACEHOLDER_CARDS) + 1).toString().padStart(2, '0')}
                  </span>
                  <span className="mt-1 text-xs text-stone-500">Preview</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="marquee-wrap mt-4 overflow-hidden">
          <div className="marquee-track marquee-track-slow flex gap-4 py-1">
            {[...Array(PLACEHOLDER_CARDS * 2)].map((_, i) => (
              <motion.div
                key={`row2-${i}`}
                whileHover={reduceMotion ? undefined : { y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                className="h-32 w-56 flex-shrink-0 overflow-hidden rounded-2xl border border-stone-200/80 bg-white/95 shadow-sm md:h-40 md:w-72"
              >
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-black/[0.03] via-transparent to-black/[0.04] text-sm font-medium text-stone-600">
                  PDP · Drop {((i % PLACEHOLDER_CARDS) + 1)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
