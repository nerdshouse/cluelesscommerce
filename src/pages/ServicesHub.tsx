import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SERVICE_PAGES } from '../data/servicePages'
import { getServiceVisuals } from '../lib/serviceVisuals'
import { staggerContainer, staggerItem, viewReveal } from '../lib/motion'

export function ServicesHub() {
  return (
    <main className="min-h-screen bg-[#faf9f7] pt-24 md:pt-28">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={viewReveal}
          className="border-b border-stone-200 pb-12"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-400">Services</p>
          <h1 className="mt-4 font-display text-4xl font-medium tracking-tight text-stone-900 md:text-5xl">
            Capabilities
          </h1>
          <p className="mt-6 text-base leading-relaxed text-stone-600">
            Each line describes how we work together. For the bundled monthly programme, see the{' '}
            <Link to="/#pricing-clue" className="text-stone-900 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-900">
              homepage
            </Link>
            .
          </p>
        </motion.header>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="divide-y divide-stone-200"
        >
          {SERVICE_PAGES.map((s) => {
            const v = getServiceVisuals(s.slug)
            return (
              <motion.li key={s.slug} variants={staggerItem}>
                <Link to={`/services/${s.slug}`} className="group block py-10 transition">
                  <div className="flex items-start gap-6">
                    <span className={`mt-1 hidden h-8 w-px shrink-0 sm:block ${v.stripe}`} aria-hidden />
                    <div className="min-w-0 flex-1">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-stone-400">{s.badge}</p>
                      <h2 className="mt-2 font-display text-2xl font-medium tracking-tight text-stone-900 transition group-hover:text-stone-600 md:text-[1.65rem]">
                        {s.title}
                      </h2>
                      <p className="mt-3 max-w-prose text-sm leading-relaxed text-stone-600 md:text-[0.9375rem]">{s.blurb}</p>
                      {s.priceLine && <p className="mt-4 max-w-prose text-sm text-stone-500">{s.priceLine}</p>}
                      <span className="mt-5 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-800">
                        Continue
                        <span className="ml-1 transition group-hover:translate-x-0.5 inline-block">→</span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>

        <p className="mt-16 text-center">
          <Link
            to="/"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-stone-500 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900 hover:decoration-stone-900"
          >
            Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
