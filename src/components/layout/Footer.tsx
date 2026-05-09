'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;

const HEADLINE = ["Let's", 'Work', 'Together.'];
const COPYRIGHT_LINES = [
  `© ${new Date().getFullYear()} CLUELESS COMMERCE.`,
  'ALL RIGHTS RESERVED.',
];

export default function Footer() {
  return (
    <footer className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-bg">
      {/* Top border */}
      <div className="w-full h-px bg-border" />

      {/* Centre content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 gap-7 py-24">

        {/* Circular emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative w-20 h-20 mb-4"
        >
          {/* Rotating ring text */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full animate-[spin_18s_linear_infinite] opacity-40"
          >
            <defs>
              <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
            </defs>
            <text className="text-[8px] fill-fg-muted tracking-[0.15em] uppercase font-medium">
              <textPath href="#circle">Clueless Commerce·Clueless Commerce·</textPath>
            </text>
          </svg>
          {/* Inner circle */}
          <div className="absolute inset-3 rounded-full border border-border/60 flex items-center justify-center">
            <Image
              src="/WhiteLogo2.png"
              alt="Clueless Commerce"
              width={40}
              height={40}
              className="w-full h-full object-contain p-1"
            />
          </div>
        </motion.div>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease }}
          className="font-serif text-2xl md:text-5xl text-fg-muted"
        >
          Still Clueless?
        </motion.p>

        {/* Animated headline — word by word */}
        <h2 className="font-serif font-bold text-fg leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl xl:text-8xl">
          {HEADLINE.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease, delay: i * 0.14 }}
              className="inline-block mr-[0.25em] last:mr-0"
            >
              {word}
            </motion.span>
          ))}
        </h2>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease, delay: 0.58 }}
        >
          <Link
            href="/contact"
            className="btn-primary px-8 py-3.5 rounded-full text-sm font-semibold"
          >
            Book A Call
          </Link>
        </motion.div>

      </div>

      {/* Copyright — character by character stagger */}
      <div className="w-full px-6 py-6 flex items-center justify-center">
        <div className="flex flex-col sm:flex-row sm:gap-1 items-center text-center">
          {COPYRIGHT_LINES.map((line, lineIdx) => (
            <p key={lineIdx} className="text-[11px] tracking-[0.2em] text-fg-muted/60 uppercase overflow-hidden">
              {line.split('').map((char: string, i: number) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + (lineIdx * line.length + i) * 0.018, ease: 'easeOut' }}
                  className="inline-block"
                  style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                >
                  {char}
                </motion.span>
              ))}
            </p>
          ))}
        </div>
      </div>

    </footer>
  );
}
