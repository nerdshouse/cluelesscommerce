import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'

const ease = [0.22, 1, 0.36, 1] as const

export function PricingClue() {
  return (
    <section
      id="pricing-clue"
      className="relative overflow-hidden bg-gradient-to-br from-[#1a2524] via-stone-950 to-[#1a1520] py-20 md:py-28"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-white/5 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.42, ease }}
          className="font-display text-3xl font-medium leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]"
        >
          Still Clueless? Let us give you a clue.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: 0.05, ease }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-400 md:text-lg"
        >
          <span className="font-medium text-stone-100">USD $1,500 per month</span> for the full programme on this site.
          {' '}No long lock-in.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: 0.08, ease }}
          className="mx-auto mt-5 max-w-2xl text-sm text-stone-500"
        >
          India retainer scope (six verticals, terms & exclusions):{' '}
          <Link to="/retainer" className="font-medium text-stone-200 underline decoration-stone-600 underline-offset-4 transition hover:text-white hover:decoration-stone-300">
            View programme
          </Link>
          .
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.4, delay: 0.1, ease }}
          className="mt-10"
        >
          <button
            type="button"
            onClick={openCalComPopup}
            className="min-h-[2.75rem] bg-white px-10 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-stone-950 transition hover:bg-stone-200"
          >
            Start with a call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
