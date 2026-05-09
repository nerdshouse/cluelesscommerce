'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

export default function FinalCTA() {
  return (
    <section className="section border-t border-border bg-surface">
      <div className="section-inner flex flex-col items-center text-center gap-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="section-label"
        >
          Let&apos;s Talk
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease }}
          className="font-serif text-3xl md:text-5xl font-bold text-fg leading-[1.05] max-w-3xl"
        >
          Your category has one spot,{' '}
          <span className="italic font-normal">this is how you claim it</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="body-muted text-base"
        >
          Stop guessing and start compounding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.18 }}
        >
          <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
            Book your audit call →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
