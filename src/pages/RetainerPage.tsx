import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'
import {
  RETAINER_CLIENT_NAME,
  RETAINER_ENTITY,
  RETAINER_EXCLUSIONS,
  RETAINER_INCLUDED,
  RETAINER_MONTHLY,
  RETAINER_SCOPE_ROWS,
  RETAINER_TERMS,
} from '../data/retainer'
import { staggerContainer, staggerItem, viewReveal } from '../lib/motion'

const ON_PAGE = [
  { id: 'retainer-overview', label: 'Overview' },
  { id: 'retainer-investment', label: 'Investment' },
  { id: 'retainer-included', label: 'Included' },
  { id: 'retainer-scope', label: 'Deliverables' },
  { id: 'retainer-terms', label: 'Terms' },
  { id: 'retainer-exclusions', label: 'Exclusions' },
  { id: 'retainer-next', label: 'Next steps' },
] as const

function SectionTitle({ kicker, children }: { kicker?: string; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
      {kicker ? (
        <span className="font-display text-[0.7rem] font-semibold tabular-nums text-stone-400">{kicker}</span>
      ) : null}
      <h2 className="font-display text-xl font-medium tracking-tight text-stone-900 sm:text-2xl md:flex-1 md:text-3xl">{children}</h2>
    </div>
  )
}

function InPageNav() {
  return (
    <nav
      aria-label="On this page"
      className="sticky top-[4.25rem] z-20 -mx-4 border-b border-stone-200/90 bg-[#f0ebe6]/90 px-4 py-3 backdrop-blur-md sm:top-[4.75rem] sm:mx-0 sm:rounded-xl sm:border sm:shadow-sm md:top-28 lg:relative lg:top-auto lg:mx-0 lg:border lg:bg-[#f4f0eb]/95 lg:px-4 lg:py-5 lg:shadow-sm"
    >
      <p className="mb-2 hidden text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-stone-400 lg:block">On this page</p>
      <ul className="scroll-chips flex gap-2 overflow-x-auto pb-0.5 sm:flex-wrap sm:gap-2 sm:overflow-visible lg:flex-col lg:gap-1.5">
        {ON_PAGE.map(({ id, label }) => (
          <li key={id} className="shrink-0 lg:shrink">
            <a
              href={`#${id}`}
              className="inline-flex rounded-full border border-transparent bg-white/90 px-3.5 py-2 text-[0.65rem] font-medium uppercase tracking-[0.12em] text-stone-600 shadow-sm transition hover:border-stone-300 hover:text-stone-900 lg:w-full lg:justify-start lg:rounded-lg lg:border-stone-200/70 lg:bg-white/80 lg:px-3 lg:py-2.5 lg:text-[0.7rem] lg:normal-case lg:tracking-normal lg:shadow-none"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function RetainerPage() {
  return (
    <main className="min-h-screen bg-[#ebe6df] pb-20 pt-20 sm:pb-28 sm:pt-24 md:pt-28">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-white/50 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-300/40 pb-5 sm:pb-6">
          <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-stone-500">
            <Link to="/" className="rounded-md px-2 py-1 transition hover:bg-white/50 hover:text-stone-900">
              Home
            </Link>
            <span className="text-stone-300">/</span>
            <Link to="/services" className="rounded-md px-2 py-1 transition hover:bg-white/50 hover:text-stone-900">
              Services
            </Link>
            <span className="text-stone-300">/</span>
            <span className="rounded-md bg-white/40 px-2 py-1 text-stone-800">Retainer</span>
          </nav>
          <p className="text-[0.6rem] uppercase tracking-[0.18em] text-stone-400">Confidential</p>
        </div>

        <div className="mt-8 lg:mt-10 lg:grid lg:grid-cols-[11.5rem_minmax(0,1fr)] lg:items-start lg:gap-10 xl:grid-cols-[12.5rem_minmax(0,1fr)] xl:gap-14">
          <div className="mb-6 lg:sticky lg:top-28 lg:mb-0 lg:self-start">
            <InPageNav />
          </div>

          <div className="min-w-0 space-y-0">
            <section id="retainer-overview" className="scroll-mt-32 rounded-2xl border border-stone-200/80 bg-white/95 p-6 shadow-[0_24px_70px_-40px_rgba(28,25,23,0.25)] backdrop-blur-sm sm:p-8 md:p-10 lg:scroll-mt-36">
              <motion.header initial="hidden" animate="visible" variants={viewReveal}>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.26em] text-stone-500">Programme</p>
                <h1 className="mt-3 font-display text-[1.9rem] font-medium leading-[1.1] tracking-tight text-stone-950 sm:text-4xl md:text-[2.6rem]">
                  Monthly retainer
                </h1>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                  Six verticals under one strategist: CRO, Shopify, performance, email, social, and SEO — with weekly rhythm and
                  monthly reporting.
                </p>
                <details className="mt-6 rounded-xl border border-stone-200/80 bg-stone-50/60 px-4 py-3 text-sm text-stone-600">
                  <summary className="cursor-pointer font-medium text-stone-800">Proposal setup</summary>
                  <p className="mt-3 border-t border-stone-200/80 pt-3 text-xs leading-relaxed sm:text-sm">
                    Set <code className="rounded bg-white px-1.5 py-0.5 font-mono text-[0.75em] text-stone-800">RETAINER_CLIENT_NAME</code>{' '}
                    in <span className="font-mono text-[0.8em]">src/data/retainer.ts</span> to the signatory brand (currently “
                    {RETAINER_CLIENT_NAME}”).
                  </p>
                </details>
              </motion.header>
            </section>

            <section id="retainer-investment" className="scroll-mt-32 pt-12 sm:pt-16 lg:scroll-mt-36">
              <SectionTitle kicker="01">Investment</SectionTitle>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={viewReveal}
                className="mt-6 overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-[0_28px_70px_-36px_rgba(28,25,23,0.22)]"
              >
                <div className="h-1.5 w-full bg-[#1a3a38]" aria-hidden />
                <div className="flex flex-col gap-8 px-5 py-8 sm:px-8 sm:py-10 md:flex-row md:items-start md:justify-between md:gap-12">
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-500">
                      {RETAINER_MONTHLY.planLabel}
                    </p>
                    <p className="mt-5 flex flex-wrap items-baseline gap-2 font-display text-3xl font-semibold tabular-nums tracking-tight text-stone-950 sm:text-4xl md:text-5xl">
                      <span className="mt-1 inline-block h-3 w-3 bg-[#1a3a38]" aria-hidden />
                      {RETAINER_MONTHLY.amountDisplay}
                    </p>
                    <p className="mt-2 text-sm text-stone-500">{RETAINER_MONTHLY.amountNote}</p>
                  </div>
                  <ul className="min-w-0 space-y-2.5 border-t border-stone-100 pt-6 text-sm leading-relaxed text-stone-700 md:w-[min(100%,20rem)] md:border-t-0 md:border-l md:pt-0 md:pl-8 md:text-right">
                    {RETAINER_MONTHLY.summary.map((line) => (
                      <li key={line} className={line.startsWith('All 6') ? 'font-semibold text-stone-900' : ''}>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </section>

            <section id="retainer-included" className="scroll-mt-32 pt-12 sm:pt-16 lg:scroll-mt-36">
              <SectionTitle kicker="02">Included in this retainer</SectionTitle>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={staggerContainer}
                className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white sm:mt-8"
              >
                {RETAINER_INCLUDED.map((line, i) => (
                  <motion.li
                    key={line}
                    variants={staggerItem}
                    className={`flex gap-3 border-b border-stone-100 px-4 py-4 last:border-b-0 sm:gap-4 sm:px-6 sm:py-4 ${i % 2 === 1 ? 'bg-stone-50/90' : ''}`}
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1a3a38]/10 text-xs font-semibold text-[#1a3a38]">
                      ✓
                    </span>
                    <span className="min-w-0 text-sm leading-relaxed text-stone-700 sm:text-[0.9375rem]">{line}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </section>

            <section id="retainer-scope" className="scroll-mt-32 pt-12 sm:pt-16 lg:scroll-mt-36">
              <SectionTitle kicker="03">What we will do</SectionTitle>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                Deliverables by vertical. Swipe cards on mobile; full table on desktop.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={viewReveal}
                className="mt-6 space-y-4 md:hidden"
              >
                {RETAINER_SCOPE_ROWS.map((row) => (
                  <article
                    key={row.no}
                    className="overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm"
                  >
                    <div className="flex items-center gap-3 bg-stone-950 px-4 py-3 text-white">
                      <span className="font-display text-xs font-semibold tabular-nums text-white/60">{row.no}</span>
                      <h3 className="min-w-0 flex-1 font-display text-base font-medium leading-snug">{row.service}</h3>
                    </div>
                    <p className="px-4 py-4 text-sm leading-relaxed text-stone-600 sm:px-5 sm:py-5">{row.deliverables}</p>
                  </article>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={viewReveal}
                className="mt-6 hidden overflow-hidden rounded-2xl border border-stone-200/90 bg-white shadow-sm md:block"
              >
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[640px] border-collapse text-left text-sm lg:min-w-0 lg:table-fixed">
                    <thead>
                      <tr className="bg-stone-950 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-white">
                        <th className="w-14 px-4 py-3.5 font-medium lg:w-16">No.</th>
                        <th className="min-w-[9rem] px-4 py-3.5 font-medium lg:w-[24%]">Service</th>
                        <th className="px-4 py-3.5 font-medium">Deliverables included</th>
                      </tr>
                    </thead>
                    <tbody>
                      {RETAINER_SCOPE_ROWS.map((row, i) => (
                        <tr key={row.no} className={i % 2 === 0 ? 'bg-stone-50/80' : 'bg-white'}>
                          <td className="align-top px-4 py-4 font-display text-xs font-semibold tabular-nums text-stone-500">{row.no}</td>
                          <td className="align-top px-4 py-4 font-medium text-stone-900">{row.service}</td>
                          <td className="align-top px-4 py-4 leading-relaxed text-stone-600">{row.deliverables}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </section>

            <section id="retainer-terms" className="scroll-mt-32 pt-12 sm:pt-16 lg:scroll-mt-36">
              <SectionTitle kicker="04">Engagement terms</SectionTitle>
              <motion.dl
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={viewReveal}
                className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white sm:mt-8"
              >
                {RETAINER_TERMS.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid gap-1 border-b border-stone-100 px-4 py-4 last:border-b-0 sm:grid-cols-[minmax(0,12rem)_1fr] sm:gap-8 sm:px-6 sm:py-5 ${i % 2 === 1 ? 'bg-stone-50/80' : ''}`}
                  >
                    <dt className="text-sm font-semibold text-stone-900">{row.label}</dt>
                    <dd className="text-sm leading-relaxed text-stone-600">{row.value}</dd>
                  </div>
                ))}
              </motion.dl>
            </section>

            <section id="retainer-exclusions" className="scroll-mt-32 pt-12 sm:pt-16 lg:scroll-mt-36">
              <SectionTitle kicker="05">What this retainer does not cover</SectionTitle>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-stone-600 sm:text-base">
                The following costs fall outside this engagement scope and are to be borne directly by {RETAINER_CLIENT_NAME} or invoiced
                separately.
              </p>
              <motion.ul
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-5% 0px' }}
                variants={staggerContainer}
                className="mt-6 overflow-hidden rounded-2xl border border-stone-200/80 bg-white sm:mt-8"
              >
                {RETAINER_EXCLUSIONS.map((item, i) => (
                  <motion.li
                    key={item.title}
                    variants={staggerItem}
                    className={`border-b border-stone-100 px-4 py-4 last:border-b-0 sm:px-6 sm:py-5 ${i % 2 === 1 ? 'bg-stone-50/80' : ''}`}
                  >
                    <p className="flex gap-3 text-sm font-semibold text-stone-900">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-200/80 text-sm font-light text-stone-500">
                        ×
                      </span>
                      <span className="min-w-0 pt-0.5">{item.title}</span>
                    </p>
                    <p className="mt-3 pl-9 text-sm leading-relaxed text-stone-600 sm:pl-11">{item.body}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </section>

            <section
              id="retainer-next"
              className="scroll-mt-32 mt-12 rounded-2xl border border-stone-900/10 bg-stone-950 px-6 py-10 text-white sm:mt-16 sm:px-8 sm:py-12 lg:scroll-mt-36"
            >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={viewReveal}
                className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-400">Next steps</p>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-300">{RETAINER_ENTITY}</p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4 md:w-auto">
                  <button
                    type="button"
                    onClick={openCalComPopup}
                    className="min-h-[3rem] w-full bg-white px-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-950 transition hover:bg-stone-200 sm:w-auto sm:min-w-[11rem]"
                  >
                    Schedule a call
                  </button>
                  <Link
                    to="/#lead"
                    className="flex min-h-[3rem] w-full items-center justify-center border border-white/30 px-6 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/50 sm:w-auto sm:min-w-[11rem]"
                  >
                    Enquire
                  </Link>
                </div>
              </motion.div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
