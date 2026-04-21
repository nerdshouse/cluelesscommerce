import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'

/** Anchors follow TLC-style homepage sections (see Home.tsx) */
const LINKS: { label: string; to: string }[] = [
  { label: 'Services', to: '/#services-tlc' },
  { label: 'Industries', to: '/#industries' },
  { label: 'Process', to: '/#process' },
  { label: 'Pricing', to: '/#pricing-clue' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'More', to: '/services' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6 md:pt-5"
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-stone-300/90 bg-[color:rgb(255_255_255/0.85)] px-3 py-2 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.12)] backdrop-blur-xl md:px-5 md:py-2.5"
        >
          <Link
            to="/"
            className="shrink-0 pl-0.5 font-sans text-base font-semibold tracking-tight text-black md:text-[1.05rem]"
            onClick={() => setOpen(false)}
          >
            Clueless Commerce
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
            {LINKS.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className="rounded-full px-2 py-1.5 text-xs font-medium text-stone-600 transition hover:bg-black/[0.06] hover:text-black lg:px-2.5 lg:text-sm"
              >
                {label}
              </Link>
            ))}
            <Link
              to="/#lead"
              className="rounded-full px-2 py-1.5 text-xs font-medium text-stone-600 transition hover:bg-black/[0.06] hover:text-black lg:px-2.5 lg:text-sm"
            >
              Get in touch
            </Link>
          </nav>

          <div className="hidden shrink-0 md:block">
            <button
              type="button"
              onClick={openCalComPopup}
              className="bg-stone-950 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-stone-900"
            >
              Schedule a call
            </button>
          </div>

          <button
            type="button"
            className="ml-auto flex shrink-0 flex-col gap-1.5 rounded-full p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            aria-expanded={open}
          >
            <span className={`h-0.5 w-5 rounded-full bg-black transition ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-black transition ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-black transition ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-0.5">
                {LINKS.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    className="rounded-xl px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-100"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  to="/#lead"
                  className="rounded-xl px-3 py-3 text-base font-medium text-stone-800 hover:bg-stone-100"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </Link>
                <button
                  type="button"
                  className="mt-2 bg-stone-950 py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white"
                  onClick={() => {
                    openCalComPopup()
                    setOpen(false)
                  }}
                >
                  Schedule a call
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}
