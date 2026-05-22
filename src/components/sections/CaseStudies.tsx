'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import content from '@/data/content.json';

const ease = [0.16, 1, 0.3, 1] as const;

export default function CaseStudies() {
  const { caseStudies } = content.static;

  return (
    <section id="work" className="section">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="section-heading mb-8"
        >
          Real brands. Real problems.{' '}<span className="text-accent">Real results.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border auto-rows-fr">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease }}
              className="bg-surface hover:bg-surface-hover transition-colors p-5 sm:p-8 flex flex-col"
            >
              {/* Number + client tag row */}
              <div className="flex items-start justify-between mb-4">
                <span className="font-serif text-4xl font-bold text-fg-muted leading-none">
                  {study.number}
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-bg uppercase bg-fg px-2 py-1 rounded">
                  {study.client}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg font-bold text-fg leading-snug mb-4">
                {study.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-fg leading-relaxed text-justify">
                {study.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 md:p-10 bg-surface border border-border rounded-xl"
        >
          <div>
            <h3 className="font-serif text-2xl font-bold text-fg">
              Ready to be the next case study?
            </h3>
            <p className="body-muted text-sm mt-2">
              Let&apos;s build something that actually moves the needle.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 btn-primary">
            Schedule Free Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
