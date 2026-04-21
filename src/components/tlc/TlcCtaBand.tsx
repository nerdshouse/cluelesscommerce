import { motion } from 'framer-motion'
import { openCalComPopup } from '../../lib/cal'
import { staggerContainer, staggerItem, viewReveal } from '../../lib/motion'

const CALL_TYPES = [
  { title: 'Onboarding call', initials: ['A', 'M', 'R', 'S'] },
  { title: 'Discovery call', initials: ['K', 'N', 'V', 'T'] },
  { title: 'Regular catchup', initials: ['J', 'L', 'P', 'D'] },
  { title: 'Final delivery call', initials: ['E', 'C', 'B', 'H'] },
] as const

function AvatarRow({ initials }: { initials: readonly string[] }) {
  return (
    <div className="mt-4 flex -space-x-1.5">
      {initials.map((ch) => (
        <span
          key={ch}
          className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-stone-200 text-[0.65rem] font-semibold text-stone-600"
        >
          {ch}
        </span>
      ))}
    </div>
  )
}

function CallTypeCard({ title, initials }: { title: string; initials: readonly string[] }) {
  return (
    <div className="rounded-2xl border border-stone-200/90 bg-white/95 p-5 shadow-[0_12px_40px_-20px_rgba(28,25,23,0.15)] backdrop-blur-sm">
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-stone-500">{title}</p>
      <AvatarRow initials={initials} />
    </div>
  )
}

function VideoCallMock() {
  return (
    <div className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[1.75rem] border border-stone-200/90 bg-stone-950 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.35)]">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-white/70">Discovery call</span>
        <span className="h-2 w-2 rounded-full bg-emerald-500/90" aria-hidden />
      </div>
      <div className="grid gap-2 p-3 sm:grid-cols-[1fr_minmax(0,7.5rem)] sm:gap-3">
        <div className="relative flex aspect-[4/3] min-h-[11rem] flex-col justify-end overflow-hidden rounded-xl bg-gradient-to-br from-stone-600 via-stone-800 to-stone-950 sm:aspect-video sm:min-h-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgb(255_255_255/0.08),transparent_50%)]" aria-hidden />
          <div className="relative z-[1] flex flex-wrap gap-2 p-3">
            <button
              type="button"
              onClick={openCalComPopup}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-stone-900 shadow-md transition hover:bg-stone-100"
            >
              <svg className="h-3.5 w-3.5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Schedule a call
            </button>
            <a
              href="#lead"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-white shadow-md transition hover:opacity-95"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="flex flex-row gap-2 sm:flex-col">
          {[
            { name: 'Anushka G.', tone: 'from-rose-900/40 to-stone-900' },
            { name: 'Kavita U.', tone: 'from-sky-900/40 to-stone-900' },
          ].map((p) => (
            <div
              key={p.name}
              className={`flex flex-1 flex-col justify-end overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${p.tone} p-2 sm:min-h-[5.5rem]`}
            >
              <p className="text-[0.65rem] font-medium text-white/90">{p.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function TlcCtaBand() {
  return (
    <section id="cta" className="scroll-mt-28 border-b border-stone-200 forward-section-glow bg-[#faf8f5] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={viewReveal}
          className="text-center"
        >
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-stone-400">Next step</p>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-stone-900 md:text-5xl lg:text-[3.25rem]">
            Ready to take this forward? Let&apos;s{' '}
            <span className="text-gradient-accent">schedule a call.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600 md:text-lg">
            A focused call aligns scope, timeline, and fit—so existing traffic works harder without extra noise.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-12% 0px' }}
          className="mt-14 flex flex-col items-stretch gap-8 lg:mt-20 lg:flex-row lg:items-center lg:justify-center lg:gap-6 xl:gap-10"
        >
          <div className="flex flex-col gap-4 lg:w-[min(100%,13rem)]">
            <motion.div variants={staggerItem}>
              <CallTypeCard title={CALL_TYPES[0].title} initials={CALL_TYPES[0].initials} />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CallTypeCard title={CALL_TYPES[1].title} initials={CALL_TYPES[1].initials} />
            </motion.div>
          </div>

          <motion.div variants={staggerItem} className="relative z-[1] w-full max-w-lg shrink-0 lg:mx-2">
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-orange-200/20 via-transparent to-sky-200/15 blur-2xl md:-inset-8" aria-hidden />
            <VideoCallMock />
          </motion.div>

          <div className="flex flex-col gap-4 lg:w-[min(100%,13rem)]">
            <motion.div variants={staggerItem}>
              <CallTypeCard title={CALL_TYPES[2].title} initials={CALL_TYPES[2].initials} />
            </motion.div>
            <motion.div variants={staggerItem}>
              <CallTypeCard title={CALL_TYPES[3].title} initials={CALL_TYPES[3].initials} />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={viewReveal}
          className="mt-12 flex justify-center gap-4 sm:mt-14"
        >
          <button
            type="button"
            onClick={openCalComPopup}
            className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full bg-stone-950 px-8 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-stone-900"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Schedule a call
          </button>
          <a
            href="#lead"
            className="inline-flex min-h-[2.75rem] items-center justify-center rounded-full border border-stone-300 bg-white px-8 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-stone-900 transition hover:border-stone-900"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
