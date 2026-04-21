/** Per-service accent for hub cards + detail hero (warm D2C palette, not generic “AI” gradients). */

export type ServiceVisualAccent = {
  stripe: string
  badge: string
  pointCard: string
  cta: string
  ctaHover: string
  wash: string
}

const DEFAULT: ServiceVisualAccent = {
  stripe: 'bg-stone-800',
  badge: 'bg-stone-200 text-stone-900 ring-1 ring-stone-900/5',
  pointCard: 'border-stone-200/80 bg-white/90',
  cta: 'bg-[#2a2622]',
  ctaHover: 'hover:bg-[#1c1917]',
  wash: 'from-stone-200/25',
}

const BY_SLUG: Record<string, ServiceVisualAccent> = {
  'social-media': {
    stripe: 'bg-[#9a6b2f]',
    badge: 'bg-amber-100/95 text-amber-950 ring-1 ring-amber-900/10',
    pointCard: 'border-amber-900/12 bg-amber-50/40',
    cta: 'bg-[#7a4f24]',
    ctaHover: 'hover:bg-[#5c3b1a]',
    wash: 'from-amber-200/35',
  },
  performance: {
    stripe: 'bg-[#2f4a3c]',
    badge: 'bg-emerald-100/95 text-emerald-950 ring-1 ring-emerald-900/10',
    pointCard: 'border-emerald-900/12 bg-emerald-50/35',
    cta: 'bg-[#2f4a3c]',
    ctaHover: 'hover:bg-[#24382e]',
    wash: 'from-emerald-200/30',
  },
  'development-ui-ux': {
    stripe: 'bg-[#6b2d3c]',
    badge: 'bg-rose-100/95 text-rose-950 ring-1 ring-rose-900/10',
    pointCard: 'border-rose-900/12 bg-rose-50/35',
    cta: 'bg-[#5c2834]',
    ctaHover: 'hover:bg-[#451f28]',
    wash: 'from-rose-200/28',
  },
  'ai-solutions': {
    stripe: 'bg-[#3d4a5c]',
    badge: 'bg-slate-100/95 text-slate-900 ring-1 ring-slate-800/10',
    pointCard: 'border-slate-700/15 bg-slate-50/50',
    cta: 'bg-[#2f3642]',
    ctaHover: 'hover:bg-[#232830]',
    wash: 'from-slate-300/25',
  },
  consultancy: {
    stripe: 'bg-[#4a3f35]',
    badge: 'bg-orange-50/95 text-stone-900 ring-1 ring-stone-800/10',
    pointCard: 'border-stone-600/15 bg-orange-50/30',
    cta: 'bg-[#3d342c]',
    ctaHover: 'hover:bg-[#2e2721]',
    wash: 'from-orange-200/25',
  },
}

export function getServiceVisuals(slug: string): ServiceVisualAccent {
  return BY_SLUG[slug] ?? DEFAULT
}
