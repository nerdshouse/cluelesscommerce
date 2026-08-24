'use client';

import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import content from '@/data/content.json';

const ease = [0.16, 1, 0.3, 1] as const;

const STATS = [
  { value: '50+', label: 'Clients', sub: 'Brands scaled across categories' },
  { value: '10+', label: 'Years of Combined Experience', sub: 'Branding and performance since day one' },
  { value: '100%', label: 'In-House Team', sub: 'Zero freelancers, zero outsourcing' },
];

const TRUST = ['Free 30-min call', 'No commitment', 'Talk to the founder directly'];

const STRIP = [
  { value: '50+', label: 'Clients' },
  { value: '10+', label: 'Years of Combined Experience' },
  { value: '100%', label: 'In-House Team' },
];

const chaosVariants: Variants = {
  hidden: (custom: any) => ({
    opacity: 0,
    x: custom.x || (Math.random() - 0.5) * 100,
    y: custom.y || (Math.random() - 0.5) * 100 + 40,
    rotate: custom.rotate || (Math.random() - 0.5) * 30,
    scale: 0.8,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 14,
      stiffness: 100,
      mass: 0.8,
    }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    }
  }
};

export default function MainBanner() {
  const { banner } = content.static;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="min-h-svh flex flex-col justify-center pt-16 border-b border-border"
      >
        <div className="section-inner px-6 md:px-10 py-8 md:py-16 grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 lg:gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >

            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.04] tracking-tight text-fg flex flex-wrap gap-[0.25em]"
            >
              {banner.headline.split(' ').map((word: string, i: number) => (
                <motion.span 
                  key={i} 
                  custom={{ rotate: (i % 2 === 0 ? 15 : -15) }}
                  variants={chaosVariants} 
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              custom={{ y: 50, rotate: -5 }}
              variants={chaosVariants}
              className="font-serif text-xl md:text-2xl font-bold text-fg mt-4 leading-snug whitespace-pre-line"
            >
              {banner.subheadline}
            </motion.p>

            <motion.hr 
              custom={{ x: -100, rotate: 0 }}
              variants={chaosVariants} 
              className="border-border mt-4 lg:mt-6" 
            />

            <motion.p 
              custom={{ x: 50, rotate: 2 }}
              variants={chaosVariants} 
              className="body-muted text-base mt-4 lg:mt-6 text-justify"
            >
              {banner.subtext}
            </motion.p>

            <motion.div 
              custom={{ y: 80, rotate: -8 }}
              variants={chaosVariants} 
              className="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link href="/contact" className="btn-primary rounded-md! justify-center bg-accent! text-bg!">
                {banner.cta}
              </Link>
              <Link href="#services" className="btn-ghost rounded-md! justify-center">
                See Services <span className="opacity-60">→</span>
              </Link>
            </motion.div>

            <motion.div 
              custom={{ y: 40, rotate: 5 }}
              variants={chaosVariants} 
              className="mt-6 flex flex-wrap gap-x-5 gap-y-2"
            >
              {TRUST.map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-fg-muted">
                  <span className="text-accent font-semibold">✓</span> {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-px bg-border rounded-xl overflow-hidden"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={{ 
                  x: i === 0 ? 100 : i === 2 ? -100 : 0, 
                  y: i === 1 ? 100 : 0,
                  rotate: i === 0 ? 12 : i === 1 ? -8 : 15 
                }}
                variants={chaosVariants}
                className="bg-surface p-6 flex flex-row items-center gap-3 origin-center"
              >
                <p className="font-serif text-3xl md:text-4xl font-extrabold text-accent leading-none shrink-0 w-20 md:w-24 text-center">
                  {stat.value}
                </p>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-fg">{stat.label}</p>
                  <p className="text-xs text-fg-muted leading-relaxed mt-0.5">{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── Numbers strip ─────────────────────────────────────────────── */}
      {/* <section className="hidden md:block bg-surface border-b border-border">
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
      </section> */}
    </>
  );
}
