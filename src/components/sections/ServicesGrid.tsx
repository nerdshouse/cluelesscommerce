'use client';

import { motion } from 'framer-motion';
import { useHubStore } from '@/store/hubStore';
import content from '@/data/content.json';
import type { HubId } from '@/lib/types';

const ease = [0.16, 1, 0.3, 1] as const;
const FALLBACK_HUB: HubId = '360-full-stack';

const HUB_ACCENT: Record<HubId, string> = {
  '360-full-stack':    '#3B82F6',
  'global-expansion':  '#F59E0B',
  'retention':         '#EF4444',
  'personal-branding': '#8B5CF6',
};

export default function ServicesGrid() {
  const { activeHub } = useHubStore();
  const hubId = (activeHub ?? FALLBACK_HUB) as HubId;
  const hub   = content.hubs[hubId];
  const accent = HUB_ACCENT[hubId];

  return (
    <section id="services" className="section">
      <div className="section-inner">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-3"
        >
          Services
        </motion.p>

        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
            className="section-heading"
          >
            What we do
          </motion.h2>

        </div>

        {/* Services grid — gap-px bg-border creates hairline dividers */}
        <motion.div
          key={hubId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border"
        >
          {hub.servicesGrid.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.07, ease }}
              className="bg-surface hover:bg-surface-hover transition-colors duration-200 p-8 flex flex-col min-h-50"
            >
              {/* Hub-specific accent colour — must stay inline */}
              <span
                className="text-[10px] font-bold uppercase tracking-[0.2em] mb-5"
                style={{ color: accent }}
              >
                {service.name}
              </span>

              <p className="text-fg font-serif text-lg leading-snug flex-1 mb-6">
                {service.subtext}
              </p>

              <div className="flex flex-wrap gap-2 pt-5 border-t border-border">
                {service.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
