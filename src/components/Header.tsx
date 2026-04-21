import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { openCalComPopup } from '../lib/cal'

const LINKS: { label: string; to: string }[] = [
  { label: 'Services', to: '/services' },
  { label: 'Pricing', to: '/#pricing-clue' },
  { label: 'FAQ', to: '/#faq' },
  { label: 'Contact', to: '/#contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6 md:pt-5"
    >
      <div className="relative mx-auto max-w-5xl">
        <div
          className="pointer-events-auto flex items-center gap-2 rounded-full border border-stone-300/90 bg-[color:rgb(255_255_255/0.88)] px-2.5 py-2 shadow-[0_12px_40px_-12px_rgb(0_0_0/0.12)] backdrop-blur-xl sm:px-4 md:px-5 md:py-2.5"
        >
          <Link
            to="/"
            className="min-w-0 shrink truncate pl-0.5 font-sans text-sm font-semibold tracking-tight text-black sm:text-base md:text-[1.05rem]"
            onClick={() => setOpen(false)}
          >
            Clueless Commerce
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2">
            {LINKS.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="rounded-full px-3 py-2 text-xs font-medium text-stone-600 transition hover:bg-black/[0.06] hover:text-black lg:text-sm"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 md:block">
            <button
              type="button"
              onClick={openCalComPopup}
              className="bg-stone-950 px-3 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-white transition hover:bg-stone-900 sm:px-4"
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
              className="pointer-events-auto absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 max-h-[min(85vh,calc(100dvh-6rem))] overflow-y-auto rounded-2xl border border-stone-200/90 bg-white p-3 shadow-xl backdrop-blur-xl md:hidden"
            >
              <nav className="flex flex-col gap-0.5">
                {LINKS.map(({ label, to }) => (
                  <Link
                    key={label}
                    to={to}
                    className="rounded-xl px-3 py-3.5 text-base font-medium text-stone-800 active:bg-stone-100"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <button
                  type="button"
                  className="mt-2 w-full bg-stone-950 py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.1em] text-white"
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
