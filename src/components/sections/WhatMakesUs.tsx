'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    title: 'Exclusivity',
    description:
      "We work with one brand per vertical. That means your competitors will never get your insights, your playbooks or your strategies. What we build for you is built only for you.",
  },
  {
    title: 'Free Consultation Call',
    description:
      "Schedule a free 30 minutes brand audit call. We'll tell you exactly where your brand stands and what it needs to compound, whether you work with us or not.",
  },
  {
    title: 'No Lock-In Contract For Years',
    description:
      "Two month retainers with 30 days exit clause. No year-long commitments holding you as hostages. We earn your business through results.",
  },
];

export default function WhatMakesUs() {
  return (
    <section className="section border-t border-border">
      <div className="section-inner">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          Zero Risk to Start
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="section-heading mb-12"
        >
          Still clueless about why choose us?{' '}
          <span className="font-serif italic font-normal text-fg-muted">Read on.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="bg-surface hover:bg-surface-hover transition-colors duration-200 p-8 flex flex-col gap-4"
            >
              <span className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-[11px] font-bold text-fg-muted">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-serif text-xl font-bold text-fg">{card.title}</h3>
              <p className="body-muted text-sm leading-relaxed flex-1">{card.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="mt-8 flex justify-center"
        >
          <Link href="/contact" className="btn-ghost">
            Claim Your Spot →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
