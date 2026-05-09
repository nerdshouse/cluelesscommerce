'use client';

import { create } from 'zustand';
import type { HubId } from '@/lib/types';

interface HubStore {
  activeHub: HubId | null;
  isUnlocked: boolean;
  setHub: (hub: HubId) => void;
  unlockWithHub: (hub: HubId) => void;
  reset: () => void;
}

export const useHubStore = create<HubStore>((set) => ({
  activeHub: null,
  isUnlocked: false,
  setHub: (hub) => set({ activeHub: hub }),
  unlockWithHub: (hub) => set({ activeHub: hub, isUnlocked: true }),
  reset: () => set({ activeHub: null, isUnlocked: false }),
}));
