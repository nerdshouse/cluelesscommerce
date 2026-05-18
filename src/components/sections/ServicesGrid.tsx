'use client';

import { motion } from 'framer-motion';
import { useHubStore } from '@/store/hubStore';
import content from '@/data/content.json';
import type { HubId } from '@/lib/types';

const ease = [0.16, 1, 0.3, 1] as const;
const FALLBACK_HUB: HubId = '360-full-stack';

export default function ServicesGrid() {
  const { activeHub } = useHubStore();
  const hubId = (activeHub ?? FALLBACK_HUB) as HubId;
  const hub   = content.hubs[hubId];

  return (
    <section id="services" className="section">
      <div className="section-inner">
        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="section-heading"
          >
            Services Built <span className="text-accent">Around</span> Your Growth
          </motion.h2>  

        </div>

        {/* Services grid — gap-px bg-border creates hairline dividers */}
        <motion.div
          key={hubId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
        >
          {hub.servicesGrid.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="bg-surface hover:bg-surface-hover transition-colors duration-200 p-5 sm:p-8 flex flex-col min-h-30 sm:min-h-40"
            >
              {/* Hub-specific accent colour — must stay inline */}
              <span className="text-[11px] font-bold uppercase tracking-widest mb-2 text-accent">
                {service.name}
              </span>

              <p className="text-fg font-serif text-md leading-snug flex-1 mb-6">
                {service.subtext}
              </p>

            </motion.div>
          ))}

          {Array.from({ length: (3 - (hub.servicesGrid.length % 3)) % 3 }).map((_, i) => (
            <div key={`filler-${i}`} className="hidden lg:block bg-bg" />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
