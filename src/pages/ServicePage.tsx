import type { ReactNode } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getServiceBySlug } from '../data/servicePages'
import { openCalComPopup } from '../lib/cal'
import { getServiceVisuals } from '../lib/serviceVisuals'
import { staggerContainer, staggerItem, viewReveal } from '../lib/motion'

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display text-lg font-medium tracking-tight text-stone-900 sm:text-xl">{children}</h2>
  )
}

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return (
      <main className="min-h-screen bg-[#f0ebe6] pt-24 pb-20 sm:pt-28">
        <div className="mx-auto max-w-lg px-4 py-20 text-center sm:px-6">
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-stone-400">404</p>
          <h1 className="mt-3 font-display text-2xl font-medium tracking-tight text-stone-900">Service unavailable</h1>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">This page may have moved or the link is out of date.</p>
          <Link
            to="/services"
            className="mt-10 inline-flex min-h-[2.75rem] w-full items-center justify-center bg-stone-950 px-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-stone-900 sm:w-auto"
          >
            Browse services
          </Link>
        </div>
      </main>
    )
  }

  const accent = getServiceVisuals(service.slug)

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-gradient-to-b ${accent.wash} via-[#f2efe9] to-[#ebe6df] pb-20 pt-20 sm:pb-28 sm:pt-24 md:pt-28`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-white/80 to-transparent" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-4xl">
        <nav className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[0.65rem] font-medium uppercase tracking-[0.16em] text-stone-500">
          <Link to="/" className="rounded-md px-2 py-1 transition hover:bg-white/60 hover:text-stone-900">
            Home
          </Link>
          <span className="text-stone-300">/</span>
          <Link to="/services" className="rounded-md px-2 py-1 transition hover:bg-white/60 hover:text-stone-900">
            Services
          </Link>
          <span className="text-stone-300">/</span>
          <span className="rounded-md bg-white/60 px-2 py-1 text-stone-800">{service.title}</span>
        </nav>

        <motion.header
          initial="hidden"
          animate="visible"
          variants={viewReveal}
          className="mt-8 overflow-hidden rounded-2xl border border-stone-200/90 bg-white/95 p-6 shadow-[0_28px_70px_-40px_rgba(28,25,23,0.2)] sm:p-10 md:mt-10"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <span className={`w-fit rounded-full px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] ${accent.badge}`}>{service.badge}</span>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-stone-500 sm:text-right">{service.deliveryHighlight}</p>
          </div>
          <h1 className="mt-5 font-display text-[1.85rem] font-medium leading-[1.08] tracking-tight text-stone-950 sm:text-4xl md:text-[2.5rem]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-stone-600 sm:text-lg">{service.blurb}</p>
          {service.managedBy ? (
            <p className="mt-5 text-sm text-stone-500">
              <span className="font-medium text-stone-700">Managed by</span> {service.managedBy}
            </p>
          ) : null}
        </motion.header>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-6% 0px' }}
          variants={viewReveal}
          className="mt-10 sm:mt-12"
        >
          <SectionHeading>Key features</SectionHeading>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-4% 0px' }}
            className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4"
          >
            {service.keyFeatures.map((f) => (
              <motion.li
                key={f.title}
                variants={staggerItem}
                className={`rounded-xl border bg-white/90 p-4 sm:p-5 ${accent.pointCard}`}
              >
                <p className="font-display text-base font-medium text-stone-900">{f.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{f.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </motion.section>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viewReveal}
            className={`rounded-2xl border bg-white/95 p-5 sm:p-6 ${accent.pointCard}`}
          >
            <SectionHeading>Delivery timeline</SectionHeading>
            <p className="mt-4 font-display text-2xl font-semibold tabular-nums text-stone-900 sm:text-3xl">{service.timeline}</p>
            <p className="mt-2 text-sm text-stone-500">From kickoff to handoff for a typical scope.</p>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viewReveal}
            className={`rounded-2xl border bg-white/95 p-5 sm:p-6 ${accent.pointCard}`}
          >
            <SectionHeading>Engagement</SectionHeading>
            <p className="mt-4 font-display text-xl font-semibold text-stone-900 sm:text-2xl">{service.engagement}</p>
            <p className="mt-2 text-sm text-stone-500">How we contract and run the work together.</p>
          </motion.section>
        </div>

        {service.priceLine ? (
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viewReveal}
            className="mt-10 rounded-2xl border border-stone-200/90 bg-stone-950 p-6 text-white sm:mt-12 sm:p-8"
          >
            <SectionHeading>
              <span className="text-white">Pricing</span>
            </SectionHeading>
            <p className="mt-4 text-sm leading-relaxed text-stone-300 sm:text-base">{service.priceLine}</p>
          </motion.section>
        ) : null}

        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5">
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viewReveal}
            className="rounded-2xl border border-stone-200/80 bg-white/95 p-5 sm:p-6"
          >
            <SectionHeading>Compatible with</SectionHeading>
            <p className="mt-4 text-sm leading-relaxed text-stone-600 sm:text-base">{service.compatibleWith}</p>
          </motion.section>
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={viewReveal}
            className="rounded-2xl border border-stone-200/80 bg-white/95 p-5 sm:p-6"
          >
            <SectionHeading>Typically used by</SectionHeading>
            <ul className="mt-4 space-y-2 text-sm text-stone-600 sm:text-base">
              {service.audience.map((line) => (
                <li key={line} className="flex gap-2">
                  <span className={`mt-2 h-1 w-1 shrink-0 rounded-full ${accent.stripe}`} aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-10 sm:mt-12"
        >
          <SectionHeading>Impact</SectionHeading>
          <ul className="mt-5 space-y-3 sm:mt-6">
            {service.impact.map((line) => (
              <li key={line} className="flex gap-3 rounded-xl border border-stone-200/70 bg-white/80 px-4 py-3 text-sm text-stone-700 sm:text-[0.9375rem]">
                <span className="font-display text-stone-400">✓</span>
                {line}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-10 sm:mt-12"
        >
          <SectionHeading>Our process</SectionHeading>
          <ol className="mt-6 space-y-0 rounded-2xl border border-stone-200/80 bg-white/90 sm:mt-8">
            {service.process.map((step) => (
              <li
                key={step.n}
                className="flex gap-4 border-b border-stone-100 px-4 py-5 last:border-b-0 sm:gap-5 sm:px-6 sm:py-6"
              >
                <span className="font-display text-sm font-bold tabular-nums text-stone-400">{step.n}</span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-base font-medium text-stone-900">{step.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-10 sm:mt-12"
        >
          <SectionHeading>Scope checklist</SectionHeading>
          <ul className="mt-5 space-y-2 rounded-2xl border border-stone-200/80 bg-white/90 p-4 sm:mt-6 sm:p-5">
            {service.points.map((p) => (
              <li key={p} className="flex gap-3 border-b border-stone-100 py-2.5 text-sm text-stone-700 last:border-b-0 sm:text-[0.9375rem]">
                <span className="text-stone-400">•</span>
                {p}
              </li>
            ))}
          </ul>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-12 rounded-2xl border border-stone-900/10 bg-stone-950 px-6 py-10 text-center sm:mt-14 sm:px-10 sm:py-12"
        >
          <h2 className="font-display text-xl font-medium text-white sm:text-2xl">Ready to get started?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-stone-400">
            Tell us where you are on roadmap and traffic — we&apos;ll suggest the leanest next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mx-auto sm:mt-10 sm:max-w-md sm:flex-row sm:justify-center sm:gap-4">
            <button
              type="button"
              onClick={openCalComPopup}
              className={`min-h-[3rem] w-full px-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition sm:w-auto sm:min-w-[11rem] ${accent.cta} ${accent.ctaHover}`}
            >
              Schedule a call
            </button>
            <Link
              to="/services"
              className="flex min-h-[3rem] w-full items-center justify-center border border-white/25 px-6 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-white/45 sm:w-auto sm:min-w-[11rem]"
            >
              All services
            </Link>
          </div>
          <p className="mt-6 text-[0.65rem] text-stone-500">
            <Link to="/#lead" className="text-stone-300 underline decoration-stone-600 underline-offset-2 hover:text-white">
              Prefer a written brief first →
            </Link>
          </p>
        </motion.section>
      </div>
    </main>
  )
}
