'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useHubStore } from '@/store/hubStore';
import type { HubId } from '@/lib/types';

const HUBS: { id: HubId; label: string }[] = [
  { id: '360-full-stack', label: '360 Full Stack' },
  { id: 'global-expansion', label: 'Global Expansion' },
  { id: 'retention', label: 'Retention' },
  { id: 'personal-branding', label: 'Personal Branding' },
];

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
];

const OTHERS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const { activeHub, isUnlocked, setHub, reset } = useHubStore();
  const [menuOpen, setMenuOpen] = useState(false);

  const switchHub = (hubId: HubId) => {
    setHub(hubId);
    router.push(`${pathname}?hub=${hubId}`, { scroll: false });
    setMenuOpen(false);
  };

  const visible = isUnlocked || pathname !== '/';

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ pointerEvents: visible ? 'auto' : 'none' }}
      className="fixed top-0 left-0 right-0 z-50
                 flex items-center justify-between
                 px-6 md:px-12 h-16
                 border-b border-border bg-bg/90 backdrop-blur-md"
    >
      {/* Logo */}
      <button
        onClick={() => { reset(); router.push('/'); }}
        className="hover:opacity-70 transition-opacity cursor-pointer"
      >
        <Image
          src="/WhiteLogo1.png"
          alt="Clueless Commerce"
          width={160}
          height={40}
          className="h-8 w-auto"
          style={{ width: 'auto' }}
          priority
        />
      </button>

      {/* Desktop nav */}
      <nav className="hidden lg:flex items-center gap-1">
        {NAV_LINKS.map((item) => (
          <Link key={item.label} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}


        {HUBS.map((hub) => (
          <button
            key={hub.id}
            onClick={() => switchHub(hub.id)}
            className={activeHub === hub.id ? 'nav-link-active' : 'nav-link'}
          >
            {hub.label}
          </button>
        ))}

        {OTHERS.map((item) => (
          <Link key={item.label} href={item.href} className="nav-link">
            {item.label}
          </Link>
        ))}

        <Link href="/contact" className="btn-sm rounded-sm!">
          Schedule a Call
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        className="lg:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-px bg-fg transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-px bg-fg transition-opacity  ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-px bg-fg transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0
                       bg-bg border-b border-border
                       px-6 py-7 flex flex-col gap-5 lg:hidden"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="body-muted text-sm hover:text-fg transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="h-px bg-border" />

            <p className="section-label">Hubs</p>

            {HUBS.map((hub) => (
              <button
                key={hub.id}
                onClick={() => switchHub(hub.id)}
                className={`text-left text-sm transition-colors ${activeHub === hub.id ? 'text-fg' : 'text-fg-muted hover:text-fg'
                  }`}
              >
                {hub.label}
              </button>
            ))}

            <div className="h-px bg-border" />

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-sm justify-center"
            >
              Schedule A Call
            </Link>

            <a href="/privacy-policy" className="body-muted text-xs hover:text-fg transition-colors">
              Privacy Policy
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
