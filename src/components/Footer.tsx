import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const SITE: { label: string; to: string }[] = [
  { label: 'Services', to: '/services' },
  { label: 'Monthly retainer', to: '/retainer' },
  { label: 'Pricing', to: '/#pricing-clue' },
]

const ENGAGE: { label: string; to: string }[] = [
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Enquire', to: '/#lead' },
]

const LEGAL: { label: string; href: string }[] = [
  { label: 'Terms', href: '#' },
  { label: 'Privacy', href: '#' },
]

const SOCIAL: { label: string; href: string; aria: string }[] = [
  { label: 'LinkedIn', href: '#', aria: 'LinkedIn' },
  { label: 'X', href: '#', aria: 'X (Twitter)' },
]

const CAPABILITIES = ['CRO', 'Shopify', 'Performance', 'Landing & PDP']

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-gradient-to-b from-[#121a19] via-stone-950 to-[#0a0d0c] py-14 text-stone-400 sm:py-16">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[rgb(26_58_54/0.2)] to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            <p className="font-display text-lg font-semibold tracking-tight text-white">Clueless Commerce</p>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-stone-400">
              DTC landing pages, storefront builds, and CRO — one coherent path from click to conversion.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
              {CAPABILITIES.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-stone-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid flex-1 grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-8 lg:max-w-xl lg:justify-end">
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Site"
              className="min-w-0"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-500">Site</p>
              <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
                {SITE.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              aria-label="Engage"
              className="min-w-0"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-500">Engage</p>
              <ul className="mt-4 space-y-2.5 text-sm text-stone-300">
                {ENGAGE.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="col-span-2 min-w-0 sm:col-span-1"
            >
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-500">Delivery</p>
              <p className="mt-4 text-sm leading-relaxed text-stone-400">
                Remote-first, worldwide. Sales and scope by arrangement — replies are human, not automated.
              </p>
              <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-stone-500">Social</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-300">
                {SOCIAL.map(({ label, href, aria }) => (
                  <li key={label}>
                    <a href={href} className="transition hover:text-white" aria-label={aria}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.8125rem] text-stone-500">
              © {new Date().getFullYear()} Clueless Commerce
              <span className="mx-2 text-stone-600" aria-hidden>
                ·
              </span>
              <span className="text-stone-500">cluelesscommerce.com</span>
            </p>
            <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8125rem] text-stone-500">
              {LEGAL.map(({ label, href }) => (
                <a key={label} href={href} className="transition hover:text-white">
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
