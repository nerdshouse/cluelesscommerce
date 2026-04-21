import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const QUICK: { label: string; to: string }[] = [
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/#pricing-clue' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
  { label: 'Enquire', to: '/#lead' },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#141c1b] via-stone-950 to-[#0f1211] py-16 text-stone-400">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[rgb(26_58_54/0.25)] to-transparent"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center font-display text-xs font-semibold uppercase tracking-[0.35em] text-stone-500"
        >
          Clueless Commerce
        </motion.p>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed text-stone-500">
          DTC landing pages, storefront builds, and CRO - structure inspired by leading conversion-led studios.
        </p>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.2fr,1fr,1fr]">
          <div>
            <p className="font-display text-lg font-semibold text-white">Conversion-led D2C</p>
            <p className="mt-3 text-sm leading-relaxed text-stone-400">
              One partner for landings, PDPs, and ongoing tests - so the story in your ads matches what
              people see on site.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Quick links</p>
            <nav className="mt-4 flex flex-col gap-2 text-sm text-stone-300">
              {QUICK.map(({ label, to }) => (
                <Link key={label} to={to} className="transition hover:text-white">
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Offices</p>
            <p className="mt-4 text-sm leading-relaxed text-stone-400">
              Sales &amp; ops by arrangement.
              <br />
              Remote-first delivery worldwide.
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.08] pt-8 md:flex-row">
          <div className="flex gap-6 text-sm">
            <a href="#" className="transition hover:text-white" aria-label="LinkedIn">LinkedIn</a>
            <a href="#" className="transition hover:text-white" aria-label="Twitter">Twitter</a>
            <a href="#" className="transition hover:text-white" aria-label="Instagram">Instagram</a>
          </div>
          <p className="text-sm text-stone-500">
            © {new Date().getFullYear()} Clueless Commerce
          </p>
        </div>
      </div>
    </footer>
  )
}
