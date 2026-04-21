import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getServiceBySlug } from '../data/servicePages'
import { openCalComPopup } from '../lib/cal'
import { getServiceVisuals } from '../lib/serviceVisuals'

export function ServicePage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return (
      <main className="min-h-screen bg-[#faf9f7] pt-28 pb-24">
        <div className="mx-auto max-w-xl px-6 py-24 text-center">
          <h1 className="font-display text-xl font-medium tracking-tight text-stone-900">Service unavailable</h1>
          <p className="mt-3 text-sm text-stone-500">This page may have been moved.</p>
          <Link
            to="/services"
            className="mt-10 inline-block text-sm font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-900"
          >
            View all services
          </Link>
        </div>
      </main>
    )
  }

  const accent = getServiceVisuals(service.slug)

  return (
    <main className="min-h-screen bg-[#faf9f7] pt-28 pb-28 md:pb-36">
      <motion.article
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-2xl px-6 md:px-8"
      >
        <nav className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-stone-400">
          <Link to="/" className="text-stone-500 transition hover:text-stone-900">
            Home
          </Link>
          <span className="mx-2 text-stone-300">/</span>
          <Link to="/services" className="text-stone-500 transition hover:text-stone-900">
            Services
          </Link>
          <span className="mx-2 text-stone-300">/</span>
          <span className="text-stone-800">{service.title}</span>
        </nav>

        <div className="mt-16 flex gap-8 md:gap-10">
          <div className={`hidden w-px shrink-0 self-stretch md:block ${accent.stripe}`} aria-hidden />
          <div className="min-w-0 flex-1">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.32em] text-stone-500">{service.badge}</p>
            <h1 className="mt-5 font-display text-[2.125rem] font-medium leading-[1.12] tracking-tight text-stone-900 md:text-5xl md:leading-[1.08]">
              {service.title}
            </h1>
            <p className="mt-8 text-base leading-[1.75] text-stone-600 md:text-lg">{service.blurb}</p>

            {service.priceLine && (
              <p className="mt-10 max-w-prose border-l border-stone-300 pl-6 text-sm leading-relaxed text-stone-600">
                {service.priceLine}
              </p>
            )}

            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-2 text-sm text-stone-600">
              <span>
                <span className="mr-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-400">Timeline</span>
                {service.timeline}
              </span>
              <span className="hidden text-stone-300 sm:inline" aria-hidden>
                ·
              </span>
              <span>
                <span className="mr-2 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-400">Engagement</span>
                {service.engagement}
              </span>
            </div>

            <div className="my-14 h-px w-full max-w-md bg-stone-200" />

            <h2 className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Scope</h2>
            <ul className="mt-6 space-y-4">
              {service.points.map((p) => (
                <li key={p} className="flex gap-4 text-[0.9375rem] leading-relaxed text-stone-700">
                  <span className={`mt-2 h-px w-6 shrink-0 ${accent.stripe}`} aria-hidden />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <button
                type="button"
                onClick={openCalComPopup}
                className={`inline-flex min-h-[2.75rem] items-center justify-center px-8 text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-white transition ${accent.cta} ${accent.ctaHover}`}
              >
                Book a call
              </button>
              <Link
                to="/services"
                className="inline-flex min-h-[2.75rem] items-center justify-center text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-stone-800 underline decoration-stone-300 underline-offset-[6px] transition hover:decoration-stone-800"
              >
                All services
              </Link>
            </div>
          </div>
        </div>
      </motion.article>
    </main>
  )
}
