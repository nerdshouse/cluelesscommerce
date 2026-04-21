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
          <div className="relative">
            <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" aria-hidden>
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
              className="w-full rounded-full border-0 bg-white/55 py-3.5 pl-12 pr-5 text-sm text-stone-900 shadow-[0_20px_50px_-36px_rgb(28_25_23/0.18)] outline-none ring-1 ring-white/80 backdrop-blur-md transition placeholder:text-stone-400 focus:ring-2 focus:ring-stone-900/15 sm:py-4 sm:text-[0.9375rem]"
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
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-2 xl:gap-6"
          >
            {filtered.map((s) => {
              const v = getServiceVisuals(s.slug)
              return (
                <motion.li key={s.slug} variants={staggerItem} className="flex min-h-full">
                  <Link
                    to={`/services/${s.slug}`}
                    className="group flex min-h-full w-full flex-col overflow-hidden rounded-[1.65rem] bg-white/50 shadow-[0_28px_70px_-42px_rgb(28_25_23/0.2)] ring-1 ring-white/70 backdrop-blur-md transition hover:bg-white/60 hover:shadow-[0_36px_80px_-40px_rgb(28_25_23/0.24)]"
                  >
                    <div className={`h-1 w-full ${v.stripe}`} aria-hidden />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <span className={`rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.14em] ${v.badge}`}>{s.badge}</span>
                        <span className="max-w-[55%] text-right text-[0.6rem] font-semibold uppercase leading-snug tracking-[0.1em] text-stone-500">
                          {s.deliveryHighlight}
                        </span>
                      </div>
                      <h2 className="mt-4 font-display text-xl font-medium tracking-tight text-stone-900 group-hover:text-stone-700 sm:text-[1.35rem]">
                        {s.title}
                      </h2>
                      <p className="mt-3 line-clamp-3 flex-1 text-sm leading-relaxed text-stone-600 sm:text-[0.9375rem]">{s.blurb}</p>
                      {s.priceLine ? (
                        <p className="mt-4 line-clamp-2 text-xs leading-relaxed text-stone-500">{s.priceLine}</p>
                      ) : null}
                      <span className="mt-auto inline-flex items-center gap-2 pt-5 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-900">
                        View scope
                        <svg className="h-4 w-4 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
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
