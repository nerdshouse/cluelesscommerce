'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import content from '@/data/content.json';
import { ChevronsRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

export default function WhyClueless() {
  const { whyClueless } = content.static;
  const [activeIndex, setActiveIndex] = useState(0);

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

          {/* Right — numbered points with active state highlights */}
          <div className="flex flex-col relative">
            {whyClueless.points.map((point, i) => (
              <motion.div
                key={point.title}
                variants={{
                  inactive: { opacity: 0.3, x: 20 },
                  active: { opacity: 1, x: 0 }
                }}
                initial="inactive"
                animate={activeIndex === i ? "active" : "inactive"}
                onViewportEnter={() => setActiveIndex(i)}
                viewport={{ margin: "-45% 0px -45% 0px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex gap-4 sm:gap-6 py-6 sm:py-8 border-b border-border/20 first:pt-0 last:border-b-0 relative group"
              >
                <motion.span 
                  variants={{
                    inactive: { scale: 0.8, color: "var(--color-fg-muted)" },
                    active: { scale: 1, color: "var(--color-accent)" }
                  }}
                  className="shrink-0 pt-0.5"
                >
                  <ChevronsRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2} />
                </motion.span>
                
                <div>
                  <motion.h3 
                    variants={{
                      inactive: { color: "var(--color-fg)" },
                      active: { color: "var(--color-accent)" }
                    }}
                    className="font-serif text-xl font-bold mb-2 transition-colors duration-500"
                  >
                    {point.title}
                  </motion.h3>
                  <motion.p 
                    variants={{
                      inactive: { color: "var(--color-fg-muted)" },
                      active: { color: "var(--color-fg)" }
                    }}
                    className="text-sm leading-relaxed transition-colors duration-500"
                  >
                    {point.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
