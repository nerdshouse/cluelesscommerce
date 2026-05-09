'use client';

import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useHubStore } from '@/store/hubStore';
import type { HubId } from '@/lib/types';

const HUBS: { id: HubId; short: string }[] = [
  { id: '360-full-stack',    short: '360°'     },
  { id: 'global-expansion',  short: 'Global'   },
  { id: 'retention',         short: 'Retention'},
  { id: 'personal-branding', short: 'Personal' },
];

export default function MobileBottomNav() {
  const router   = useRouter();
  const pathname = usePathname();
  const { activeHub, isUnlocked, setHub } = useHubStore();

  if (!isUnlocked) return null;

  const switchHub = (hubId: HubId) => {
    setHub(hubId);
    router.push(`${pathname}?hub=${hubId}`, { scroll: false });
  };

  return (
    <motion.nav
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-bg/95 backdrop-blur-md border-t border-border flex"
    >
      {HUBS.map((hub) => {
        const isActive = activeHub === hub.id;
        return (
          <button
            key={hub.id}
            onClick={() => switchHub(hub.id)}
            className="flex-1 flex flex-col items-center gap-1 py-3 relative"
          >
            {isActive && (
              <motion.span
                layoutId="mob-indicator"
                className="absolute top-0 left-2 right-2 h-px bg-fg"
              />
            )}
            <span className={`text-xs font-medium transition-colors ${isActive ? 'text-fg' : 'text-fg-muted'}`}>
              {hub.short}
            </span>
          </button>
        );
      })}
    </motion.nav>
  );
}
