import { Link } from 'react-router-dom'

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-y border-stone-200/80 bg-white py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-[120%] -translate-x-1/2 bg-gradient-radial opacity-40 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-4xl px-6">
        <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">
          What partners say
        </h2>
        <p className="mt-2 text-center text-sm font-semibold text-stone-400">Coming soon</p>

        <div className="relative mt-12">
          <div className="blur-md select-none pointer-events-none opacity-60">
            <div className="rounded-3xl border border-stone-200/90 bg-gradient-to-br from-white via-stone-50 to-stone-100/80 p-8 shadow-xl md:p-12">
              <p className="text-xl font-medium leading-relaxed text-stone-800 md:text-2xl">
                “Placeholder quote will appear here when we publish partner stories.”
              </p>
              <div className="mt-8 flex flex-wrap items-end justify-between gap-4 border-t border-stone-200/80 pt-8">
                <div>
                  <p className="font-display text-lg font-semibold text-stone-950">Name</p>
                  <p className="text-sm text-stone-500">Role</p>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl bg-white/45 backdrop-blur-[2px]">
            <span className="rounded-full border border-stone-300/90 bg-white px-6 py-2.5 text-sm font-bold uppercase tracking-[0.2em] text-stone-600 shadow-md">
              Coming soon
            </span>
            <p className="max-w-sm text-center text-sm text-stone-600">
              Testimonials incoming.{' '}
              <Link to="/#contact" className="pointer-events-auto font-semibold text-black underline">
                Talk to us
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
