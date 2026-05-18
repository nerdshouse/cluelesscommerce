'use client';

import { motion } from 'framer-motion';
import { useHubStore } from '@/store/hubStore';
import content from '@/data/content.json';
import type { HubId } from '@/lib/types';

const ease = [0.16, 1, 0.3, 1] as const;
const FALLBACK_HUB: HubId = '360-full-stack';

export default function ProblemGrid() {
  const { activeHub } = useHubStore();
  const hubId = (activeHub ?? FALLBACK_HUB) as HubId;
  const hub = content.hubs[hubId];

  return (
    <section className="section">
      <div className="section-inner">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease }}
          className="section-heading mb-6 md:mb-8"
        >
          Broken systems  <br/><span className='text-accent'>most brands are stuck in</span> 
        </motion.h2>

        <motion.div
          key={hubId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5"
        >
          {hub.problemGrid.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className="card p-4 sm:p-8 flex flex-col gap-2"
            >
              <span className="inline-flex items-center justify-center w-8 h-8 text-xs font-mono font-semibold tracking-widest border border-fg text-fg">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-serif text-lg md:text-xl font-bold text-fg mb-1 md:mb-2 leading-snug">
                  {card.title}
                </h3>
                <p className="body-muted text-sm text-justify">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
