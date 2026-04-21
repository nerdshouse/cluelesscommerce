import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HOMEPAGE_SERVICES } from '../data/servicePages'
import { staggerContainer, staggerItem } from '../lib/motion'

export function Services() {
  return (
    <section id="solutions" className="relative overflow-hidden border-y border-stone-200/80 bg-gradient-to-b from-white via-stone-50 to-white py-24 md:py-32">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-black/[0.04] blur-[90px]" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-neutral-400/10 blur-[80px]" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-12%' }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-stone-900">
            Solutions
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-stone-900 md:text-5xl">
            Build, grow, and scale - with one coherent map
          </h2>
          <p className="mt-5 text-lg text-stone-600">
            Each card links to a dedicated page. Prefer the all-in monthly bundle?{' '}
            <a href="#pricing-clue" className="font-semibold text-black underline-offset-2 hover:underline">
              See pricing below
            </a>
            .
          </p>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-8%' }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {HOMEPAGE_SERVICES.map((service) => (
            <motion.li
              key={service.slug}
              variants={staggerItem}
              className="group flex flex-col rounded-3xl border border-stone-200/90 bg-white p-7 shadow-[0_20px_60px_-40px_rgb(0_0_0/0.08)] transition hover:-translate-y-1 hover:border-stone-400 hover:shadow-[0_28px_70px_-42px_rgb(0_0_0/0.12)]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="rounded-full bg-stone-200 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-stone-900">
                  {service.badge}
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-stone-900">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">{service.blurb}</p>
              <ul className="mt-5 space-y-2 border-t border-stone-100 pt-5 text-sm text-stone-600">
                {service.points.slice(0, 4).map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-black" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-dashed border-stone-200/90 pt-5 text-xs text-stone-500">
                <span className="font-medium text-stone-700">{service.deliveryHighlight}</span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 font-medium text-stone-800">{service.engagement}</span>
              </div>
              <Link
                to={`/services/${service.slug}`}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-black transition group-hover:gap-3"
              >
                Service details
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-10 text-center">
          <Link
            to="/services"
            className="text-sm font-semibold text-black underline-offset-2 hover:underline"
          >
            View all services on one page
          </Link>
        </p>
      </div>
    </section>
  )
}
