'use client';

import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const STEPS = [
  {
    title: 'Apply',
    description: 'Fill out a short form and we\'ll review your brand and see if we are a fit.',
  },
  {
    title: 'Consultation Call',
    description: 'No pitch, just an honest look at where your brand stands and what\'s broken.',
  },
  {
    title: 'Custom Retainer',
    description: 'A retainer designed around the outcomes that actually matter to your business.',
  },
  {
    title: 'Onboard and Execute',
    description: 'A dedicated in-house team with regular review calls directly with top management.',
  },
];

export default function HowItWorks() {
  return (
    <section className="section">
      <div className="section-inner">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          How We Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="section-heading mb-12"
        > 
          How We Go From{' '}
          <span className="font-serif italic font-normal">Clueless to Compounding</span>
        </motion.h2>

        {/* Steps — connected by a line on desktop */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">

          {/* Connector line */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px bg-border z-0" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="relative z-10 flex flex-col items-start md:items-center gap-4"
            >
              {/* Number circle */}
              <div className="w-14 h-14 rounded-full border border-border bg-bg flex items-center justify-center shrink-0">
                <span className="font-serif text-xl font-bold text-fg">{i + 1}</span>
              </div>

              <div className="md:text-center">
                <h3 className="font-serif text-lg font-bold text-fg mb-2">{step.title}</h3>
                <p className="body-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
