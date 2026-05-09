'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import content from '@/data/content.json';

const ease = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: '50+',   label: 'Clients',            sub: 'Brands scaled across categories'              },
  { value: '5+',    label: 'Years of Experience', sub: 'Branding and performance since day one'           },
  { value: '100%',  label: 'In-House Team',       sub: 'Zero freelancers, zero outsourcing' },
];

const TRUST = ['Free 30-min call', 'No commitment', 'Talk to the founder directly'];

const STRIP = [
  { value: '50+',   label: 'Clients'            },
  { value: '5+',    label: 'Years of Experience' },
  { value: '100%',  label: 'In-House Team'       },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.65, ease, delay },
});

export default function MainBanner() {
  const { banner } = content.static;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-svh flex flex-col justify-center pt-16 border-b border-border"
      >
        <div className="section-inner px-6 md:px-10 py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

          {/* Left — copy */}
          <div>

            <motion.h1
              {...fadeUp(0.1)}
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.04] tracking-tight text-fg"
            >
              {banner.headline}
            </motion.h1>

            <motion.p
              {...fadeUp(0.22)}
              className="font-serif text-xl md:text-2xl font-bold text-fg mt-8 leading-snug whitespace-pre-line"
            >
              {banner.subheadline}
            </motion.p>

            <motion.hr {...fadeUp(0.28)} className="border-border mt-4" />

            <motion.p {...fadeUp(0.34)} className="body-muted text-base mt-4 text-justify">
              {banner.subtext}
            </motion.p>

            <motion.div {...fadeUp(0.44)} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-primary rounded-md! justify-center">
                {banner.cta}
              </Link>
              <Link href="#services" className="btn-ghost rounded-md! justify-center">
                See Services <span className="opacity-60">→</span>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.54)} className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-fg-muted">
                  <span className="text-fg font-semibold">✓</span> {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-1 gap-px bg-border rounded-xl overflow-hidden">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.09, ease }}
                className="bg-surface px-8 py-7 flex flex-row items-center gap-6"
              >
                <p className="font-serif text-4xl md:text-5xl font-bold text-fg leading-none shrink-0">
                  {stat.value}
                </p>
                <div>
                  <p className="text-sm font-semibold text-fg">{stat.label}</p>
                  <p className="text-xs text-fg-muted leading-relaxed mt-0.5">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Numbers strip ─────────────────────────────────────────────── */}
      <section className="hidden md:block bg-surface border-b border-border">
        <div className="section-inner px-6 md:px-12">
          <div className="flex flex-wrap md:flex-nowrap divide-y md:divide-y-0 md:divide-x divide-border">
            {STRIP.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07, ease }}
                className="flex-1 flex flex-col items-center justify-center py-7 px-4 min-w-[50%] md:min-w-0 text-center"
              >
                <p className="font-serif text-2xl md:text-3xl font-bold text-fg">
                  {item.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-fg-muted font-semibold mt-1.5">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
