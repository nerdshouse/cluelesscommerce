import { motion } from 'framer-motion'

const LOGOS = ['D2C brands', 'Retail & CPG', 'Wellness', 'Fashion', 'Home', 'Subscription', 'Global']

export function TrustedBy() {
  const row = [...LOGOS, ...LOGOS]

  return (
    <section className="border-b border-stone-200/80 bg-[color:rgb(250_248_245)] py-12 md:py-14">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-stone-500">
        Trusted by teams who ship
      </p>
      <p className="mt-2 text-center text-sm font-semibold text-stone-400">Coming soon</p>

      <div className="relative mt-8">
        <div className="blur-sm select-none pointer-events-none opacity-50">
          <div className="marquee-wrap overflow-hidden">
            <div className="marquee-track flex items-center gap-12 md:gap-16">
              {row.map((name, i) => (
                <motion.span
                  key={`${name}-${i}`}
                  className="shrink-0 font-display text-lg font-semibold text-stone-300 md:text-xl"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="rounded-full border border-stone-200/80 bg-white/90 px-5 py-2 text-xs font-bold uppercase tracking-widest text-stone-500 shadow-sm backdrop-blur-sm">
            Coming soon
          </span>
        </div>
      </div>
    </section>
  )
}
