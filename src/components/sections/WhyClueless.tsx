'use client';

import { motion } from 'framer-motion';
import content from '@/data/content.json';
import { ChevronsRight  } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyClueless() {
  const { whyClueless } = content.static;

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-start">
          {/* Left — sticky headline */}
          <div className="md:sticky md:top-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease }}
              className="section-heading mb-4 md:mb-8 text-[52px]!"
            >
              Why <span className="text-accent font-black-italic">Brands Choose Us</span>
            </motion.h2>


            {/* <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease, delay: 0.1 }}
                className="body-muted text-base"
              >
                
              </motion.p> */}
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
                className="flex gap-5 py-4 sm:py-6 border-b border-border first:pt-0 last:border-b-0"
              >
                <span className="shrink-0 text-accent">
                  <ChevronsRight  className="w-7 h-7" strokeWidth={1.5} />
                </span>
                <div>
                  <h3 className="font-serif text-xl font-bold text-accent mb-1">
                    {point.title}
                  </h3>
                  <p className="text-fg text-sm">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
