import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SERVICE_PAGES } from '../data/servicePages'
import { RETAINER_MONTHLY } from '../data/retainer'
import { getServiceVisuals } from '../lib/serviceVisuals'
import { staggerContainer, staggerItem, viewReveal } from '../lib/motion'

function matchesQuery(s: (typeof SERVICE_PAGES)[number], q: string): boolean {
  if (!q.trim()) return true
  const n = q.toLowerCase()
  const hay = [
    s.title,
    s.blurb,
    s.badge,
    s.timeline,
    s.engagement,
    s.deliveryHighlight,
    ...s.points,
    ...s.keyFeatures.map((f) => `${f.title} ${f.body}`),
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(n)
}

export function ServicesHub() {
  const [query, setQuery] = useState('')
  const filtered = useMemo(() => SERVICE_PAGES.filter((s) => matchesQuery(s, query)), [query])

  return (
    <main className="relative min-h-screen bg-transparent pt-20 pb-14 sm:pt-24 md:pt-28 md:pb-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.85]"
        aria-hidden
        style={{
          backgroundImage:
            'radial-gradient(ellipse 65% 50% at 50% -10%, rgb(26 58 54 / 0.07), transparent 55%), radial-gradient(ellipse 45% 40% at 100% 40%, rgb(154 132 92 / 0.06), transparent 50%), linear-gradient(175deg, rgb(250 248 244 / 0.9) 0%, rgb(241 237 230) 50%, rgb(232 227 219) 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/45 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={viewReveal}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-500">Services</p>
          <h1 className="mt-3 font-display text-3xl font-medium tracking-tight text-stone-950 sm:text-4xl md:text-5xl">
            Scope
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:mt-5 sm:text-base">
            Explore lanes — each opens a full breakdown. For the India six-vertical programme, jump to{' '}
            <Link to="/retainer" className="font-medium text-stone-900 underline decoration-stone-400 underline-offset-4 hover:decoration-stone-900">
              monthly retainer
            </Link>
            .
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-8 max-w-xl sm:mt-10"
        >
          <label htmlFor="service-search" className="sr-only">
            Search services
          </label>
          <div className="relative border-b border-stone-300/80 pb-0.5 transition-colors focus-within:border-stone-600">
            <span className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              id="service-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, channel, or deliverable…"
              className="w-full border-0 bg-transparent py-3 pl-9 pr-1 text-sm text-stone-900 outline-none ring-0 transition placeholder:text-stone-400 focus:ring-0 sm:py-3.5 sm:pl-10 sm:text-[0.9375rem]"
            />
          </div>
        </motion.div>

        {filtered.length === 0 ? (
          <p className="mx-auto mt-12 max-w-md text-center text-sm text-stone-600">
            No matches for “{query}”.{' '}
            <button type="button" className="font-medium text-stone-900 underline" onClick={() => setQuery('')}>
              Clear search
            </button>
          </p>
        ) : (
          <motion.ul
            key={query}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="mt-12 grid gap-x-10 gap-y-12 sm:mt-14 sm:grid-cols-2 md:gap-x-16 md:gap-y-14"
          >
            {filtered.map((s, i) => {
              const v = getServiceVisuals(s.slug)
              const notLastMobile = i < filtered.length - 1
              return (
                <motion.li key={s.slug} variants={staggerItem} className="min-h-0">
                  <Link
                    to={`/services/${s.slug}`}
                    className={`group flex min-h-full w-full flex-col pb-10 sm:pb-0 ${notLastMobile ? 'border-b border-stone-200/55 sm:border-0' : ''}`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <span className={`rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${v.badge}`}>{s.badge}</span>
                      <span className="max-w-[55%] text-right text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.1em] text-stone-500">
                        {s.deliveryHighlight}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl font-medium tracking-tight text-stone-900 sm:text-[1.35rem]">
                      <span className="underline decoration-stone-300 decoration-1 underline-offset-[0.35rem] transition group-hover:decoration-stone-800">
                        {s.title}
                      </span>
                    </h2>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem]">{s.blurb}</p>
                    {s.priceLine ? (
                      <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-stone-500">{s.priceLine}</p>
                    ) : null}
                    <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-700">
                      View scope
                      <svg className="h-4 w-4 text-stone-500 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>
        )}

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-5% 0px' }}
          variants={viewReveal}
          className="mx-auto mt-12 max-w-3xl sm:mt-16"
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#1a2524] via-stone-950 to-[#1a1520] px-5 py-8 text-white shadow-[0_40px_90px_-44px_rgb(0_0_0/0.35)] sm:px-8 sm:py-10">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-400">Bundle</p>
            <h2 className="mt-2 font-display text-2xl font-medium tracking-tight sm:text-3xl">Monthly retainer</h2>
            <p className="mt-4 max-w-prose text-sm leading-relaxed text-stone-300 sm:text-base">
              Six verticals with one strategist —{' '}
              <span className="font-display font-semibold tabular-nums text-white">{RETAINER_MONTHLY.amountDisplay}</span>
              <span className="text-stone-400"> {RETAINER_MONTHLY.amountNote}</span>
            </p>
            <Link
              to="/retainer"
              className="mt-8 inline-flex w-full items-center justify-center border border-white/25 bg-white/10 px-5 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm transition hover:bg-white/20 sm:w-auto sm:min-w-[14rem]"
            >
              Full programme &amp; terms
            </Link>
          </div>
        </motion.section>

        <p className="mt-12 text-center sm:mt-14">
          <Link
            to="/"
            className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500 underline decoration-stone-400 underline-offset-4 transition hover:text-stone-900"
          >
            Back to home
          </Link>
        </p>
      </div>
    </main>
  )
}
