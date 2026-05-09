'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function ConsultationCTA() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="section-inner px-6 md:px-12 py-10 md:py-12 flex flex-col items-center text-center gap-2">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="font-serif text-2xl md:text-4xl font-bold text-fg leading-snug"
        >
          Tired of promises that don&apos;t move the needle?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
          className="font-serif text-xl md:text-2xl font-semibold text-fg"
        >
          Schedule a free 30-minute consultation call
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.18 }}
          className="body-muted text-sm"
        >
          We&apos;ll tell you what&apos;s broken, even if you don&apos;t hire us
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.24 }}
        >
          <Link href="/contact" className="btn-primary">
            Book Free Consultation →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
