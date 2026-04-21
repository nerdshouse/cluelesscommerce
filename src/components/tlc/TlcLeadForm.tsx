import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { viewReveal } from '../../lib/motion'

const AD_SPEND = ['Under $3k / month', '$3k - $8k', '$8k - $15k', '$15k+']
const HEAR = ['Referral', 'Site / footer', 'Meta / Google ads', 'Agency partner', 'Other']
const PROBLEMS = [
  'Low conversion rate',
  'High bounce / weak PDP',
  'Low AOV',
  'Landing / PDP revamp for performance',
  'Full site revamp',
  'Other',
]
const WHEN = ['ASAP', 'Within 30 days', 'Exploring', 'Want a funnel audit']

export function TlcLeadForm() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="lead" className="scroll-mt-28 border-b border-stone-200 bg-stone-50 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr),minmax(0,1.05fr)] lg:items-start lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8% 0px' }}
            variants={viewReveal}
            className="lg:pt-2"
          >
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-stone-500">Contact</p>
            <h2 className="mt-3 text-left font-display text-3xl font-semibold text-black md:text-4xl lg:text-[2.5rem] lg:leading-tight">
              Get in touch
            </h2>
            <p className="mt-4 max-w-md text-left text-stone-600">
              Tell us about spend, channel, and what&apos;s broken - we&apos;ll reply with next steps.
            </p>
            <ul className="mt-8 hidden space-y-3 text-sm text-stone-500 lg:block">
              <li className="flex gap-2">
                <span className="text-stone-400">1.</span>
                <span>Share your funnel context and priority pages.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-stone-400">2.</span>
                <span>We respond with fit, timeline, and a clear next step.</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-8% 0px' }}
            variants={viewReveal}
            className="w-full lg:max-w-none"
          >
            {submitted ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-stone-200 bg-white p-8 text-stone-800 md:p-10"
              >
                Thank you - your note is received. We&apos;ll be in touch shortly.
              </motion.p>
            ) : (
              <form
                onSubmit={onSubmit}
                className="space-y-5 border border-stone-200 bg-white p-6 md:p-8"
              >
                <label className="block">
                  <span className="text-sm font-medium text-stone-800">Monthly ad spend (indicative)</span>
                  <select
                    required
                    name="spend"
                    className="mt-2 w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                  >
                    <option value="">Select range</option>
                    {AD_SPEND.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-800">How did you hear about us?</span>
                  <select
                    required
                    name="hear"
                    className="mt-2 w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                  >
                    <option value="">Select</option>
                    {HEAR.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-800">Main problem right now</span>
                  <select
                    required
                    name="problem"
                    className="mt-2 w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                  >
                    <option value="">Select</option>
                    {PROBLEMS.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-800">When do you want to move?</span>
                  <select
                    required
                    name="when"
                    className="mt-2 w-full border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none transition focus:border-stone-900"
                  >
                    <option value="">Select</option>
                    {WHEN.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-stone-800">Top pages by traffic (optional)</span>
                  <textarea
                    name="pages"
                    rows={3}
                    placeholder="Paste URLs or describe"
                    className="mt-2 w-full resize-y border border-stone-300 bg-white px-4 py-3 text-stone-900 outline-none placeholder:text-stone-400 transition focus:border-stone-900"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-stone-950 py-4 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-stone-900"
                >
                  Submit
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
