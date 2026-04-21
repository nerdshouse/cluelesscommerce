import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TLC_FAQ } from './data'
import { viewReveal } from '../../lib/motion'

export function TlcFaq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-28 border-b border-stone-200 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-2xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={viewReveal}
          className="text-center"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Questions</p>
          <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-stone-900 md:text-4xl">
            Frequently asked
          </h2>
        </motion.div>
        <ul className="mt-12 divide-y divide-stone-200 border-t border-stone-200">
          {TLC_FAQ.map((item, i) => {
            const isOpen = open === i
            return (
              <li key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-6 py-5 text-left text-[0.9375rem] font-medium leading-snug text-stone-900 transition hover:text-stone-600"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="mt-0.5 shrink-0 font-light text-stone-400 tabular-nums">{isOpen ? '−' : '+'}</span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.p
                      key={item.q}
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="pb-5 text-sm leading-[1.75] text-stone-600"
                    >
                      {item.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
