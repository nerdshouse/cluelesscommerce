'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useHubStore } from '@/store/hubStore';
import type { HubId } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ease = [0.16, 1, 0.3, 1] as const;

const HUBS: { id: HubId; label: string; tagline: string; color: string }[] = [
  { id: '360-full-stack', label: '360 Full Stack', tagline: 'End-to-end execution', color: '#EAB308' },
  { id: 'global-expansion', label: 'Global Expansion', tagline: 'Cross-border growth', color: '#06B6D4' },
  { id: 'retention', label: 'Retention', tagline: 'Lifetime customer value', color: '#F97316' },
  { id: 'personal-branding', label: 'Personal Branding', tagline: 'Build the founder brand', color: '#D946EF' },
];

interface Props {
  onUnlock: (hubId: HubId) => void;
}

export default function StateGateLauncher({ onUnlock }: Props) {
  const router = useRouter();
  const { unlockWithHub } = useHubStore();

  const [selected, setSelected] = useState<HubId | null>(null);
  const [expanding, setExpanding] = useState(false);
  const [hoveredId, setHoveredId] = useState<HubId | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSelect = async (hubId: HubId) => {
    if (expanding) return;

    setSelected(hubId);
    setExpanding(true);

    await new Promise((r) => setTimeout(r, 600));

    unlockWithHub(hubId);
    router.push(`?hub=${hubId}`, { scroll: false });
    onUnlock(hubId);
  };

  const selectedData = HUBS.find((h) => h.id === selected);

  return (
    <AnimatePresence>
      {(!expanding || selected) && (
        <motion.div
          key="launcher"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease }}
          className="fixed inset-0 z-50 flex flex-col bg-[#050505] font-sans p-6 overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#111] via-[#050505] to-[#050505] pointer-events-none" />

          {/* Expand overlay */}
          <AnimatePresence>
            {expanding && selectedData && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease }}
                className="absolute inset-0 z-50 pointer-events-none"
                style={{ backgroundColor: '#121212' }}
              />
            )}
          </AnimatePresence>

          {/* MAIN LAYOUT */}
          <div className="relative w-full max-w-full mx-auto flex flex-col h-full">

            {/* HEADER */}
            <div className="w-full flex flex-col items-center text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease }}
                className="mb-2"
              >
                <Image
                  src="/WhiteLogo1.png"
                  alt="Clueless Commerce"
                  width={240}
                  height={60}
                  className="w-40 md:w-60 h-auto"
                  style={{ height: 'auto' }}
                  priority
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease }}
                className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40 font-semibold"
              >
                Select your growth hub
              </motion.p>
            </div>

            {/* CENTER (Cards perfectly centered) */}
            <div className="flex-1 flex items-center justify-center w-full">
              <div className="w-full flex flex-col md:flex-row gap-4">
                {HUBS.map((hub, i) => {
                  const isSelected = selected === hub.id;
                  const isHovered = hoveredId === hub.id;
                  const isActive = isHovered || isMobile;
                  const isFading = expanding && !isSelected;

                  return (
                    <motion.button
                      key={hub.id}
                      onHoverStart={() => setHoveredId(hub.id)}
                      onHoverEnd={() => setHoveredId(null)}
                      onClick={() => handleSelect(hub.id)}
                      disabled={expanding}
                      initial={{ opacity: 0, y: 40 }}
                      animate={{
                        opacity: isFading ? 0 : 1,
                        y: 0,
                        flex: isSelected ? 10 : (isHovered && !expanding ? 2.5 : 1),
                      }}
                      transition={{
                        opacity: { duration: 0.3 },
                        y: { duration: 0.6, delay: i * 0.05, ease: "easeOut" },
                        flex: { duration: 0.5, ease }
                      }}
                      className="relative rounded-4xl overflow-hidden cursor-pointer group transition-colors duration-500 bg-[#0A0A0A] border flex flex-col items-center justify-center h-60 md:h-96 p-2 md:p-0"
                      style={{
                        borderColor: isActive ? hub.color : 'rgba(255,255,255,0.05)',
                      }}
                    >
                      <div className="flex flex-col items-center justify-center w-full min-w-55 px-4 pointer-events-none">

                        <motion.h2
                          className="font-bold text-xl md:text-2xl md:mb-1 whitespace-nowrap transition-colors duration-300 uppercase"
                          style={{ color: isActive ? hub.color : 'white' }}
                        >
                          {hub.label}
                        </motion.h2>

                        <motion.p className="text-white/40 text-xs md:text-sm whitespace-nowrap font-medium uppercase">
                          {hub.tagline}
                        </motion.p>

                        <div className="h-8 mt-6 flex items-center justify-center overflow-hidden">
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{
                              opacity: isActive ? 1 : 0,
                              y: isActive ? 0 : 15
                            }}
                            transition={{ duration: 0.4, ease }}
                            className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap flex items-center gap-2"
                            style={{ color: hub.color }}
                          >
                            Explore <span className="text-sm leading-none ml-1">&rarr;</span>
                          </motion.div>
                        </div>

                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* FOOTER */}
            <div className="w-full flex justify-around items-center text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-white font-semibold">
              <Link href="/contact" className="hover:text-white/70 transition-colors flex">
                CONTACT <ArrowUpRight className="ml-1" size={14} />
              </Link>
              <span>© {new Date().getFullYear()} Clueless Commerce</span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}