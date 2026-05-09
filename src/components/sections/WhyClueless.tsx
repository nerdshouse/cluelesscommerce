'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyClueless() {
  const { whyClueless } = content.static;

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          Why Us
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left — sticky headline */}
          <div className="md:sticky md:top-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="section-heading mb-6"
            >
              {whyClueless.headline}
            </motion.h2>

            {whyClueless.subtext && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="body-muted text-base"
              >
                {whyClueless.subtext}
              </motion.p>
            )}
          </div>

          {/* Right — numbered points */}
          <div className="flex flex-col">
            {whyClueless.points.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09, ease }}
                className="flex gap-6 py-6 border-b border-border first:pt-0 last:border-b-0"
              >
                <span className="shrink-0 w-7 h-7 rounded-full border border-border flex items-center justify-center text-[10px] text-fg-muted mt-0.5 font-mono">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-fg mb-2">
                    {point.title}
                  </h3>
                  <p className="body-muted text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
