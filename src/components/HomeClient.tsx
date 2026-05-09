'use client';

import { useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { useHubStore } from '@/store/hubStore';
import type { HubId } from '@/lib/types';

import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileBottomNav from '@/components/layout/MobileBottomNav';
import StateGateLauncher from '@/components/launcher/StateGateLauncher';
import MainBanner from '@/components/sections/MainBanner';
import ProblemGrid from '@/components/sections/ProblemGrid';
import ConsultationCTA from '@/components/sections/ConsultationCTA';
import WhyClueless from '@/components/sections/WhyClueless';
import ServicesGrid from '@/components/sections/ServicesGrid';
import CaseStudies from '@/components/sections/CaseStudies';
import HowItWorks from '@/components/sections/HowItWorks';
import WhatMakesUs from '@/components/sections/WhatMakesUs';
import FinalCTA from '@/components/sections/FinalCTA';

const VALID_HUBS: HubId[] = [
  '360-full-stack',
  'global-expansion',
  'retention',
  'personal-branding',
];

function isValidHub(value: string | null): value is HubId {
  return VALID_HUBS.includes(value as HubId);
}

export default function HomeClient() {
  const searchParams = useSearchParams();
  const { activeHub, isUnlocked, unlockWithHub } = useHubStore();

  useEffect(() => {
    const hubParam = searchParams.get('hub');
    if (isValidHub(hubParam) && !isUnlocked) {
      unlockWithHub(hubParam);
    }
  }, [searchParams, isUnlocked, unlockWithHub]);

  const handleUnlock = useCallback((_hubId: HubId) => {
    // State is already set in the launcher via unlockWithHub
  }, []);

  return (
    <>
      <Header />

      <AnimatePresence>
        {!isUnlocked && (
          <StateGateLauncher onUnlock={handleUnlock} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isUnlocked && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pb-20 lg:pb-0"
          >
            <MainBanner />
            <ProblemGrid />
            <ConsultationCTA />
            <WhyClueless />
            <ServicesGrid />
            <CaseStudies />
            <HowItWorks />
            <WhatMakesUs />
            <FinalCTA />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

      <MobileBottomNav />

      <AnimatePresence>
        {isUnlocked && (
          <motion.a
            href="/contact"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black text-xs font-semibold shadow-lg hover:bg-white/90 transition-colors"
          >
            Schedule a Call
            <span className="text-sm leading-none">↗</span>
          </motion.a>
        )}
      </AnimatePresence>
    </>
  );
}

