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
    stripe: 'bg-[#39465c]',
    badge: 'bg-indigo-100/95 text-indigo-950 ring-1 ring-indigo-900/10',
    pointCard: 'border-indigo-900/12 bg-indigo-50/45',
    cta: 'bg-[#2f3850]',
    ctaHover: 'hover:bg-[#252c3d]',
    wash: 'from-indigo-200/24',
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
    stripe: 'bg-[#3d4a48]',
    badge: 'bg-[#e4ebe9]/95 text-[#1e2c2a] ring-1 ring-[#3d4a48]/12',
    pointCard: 'border-[#3d4a48]/15 bg-[#f0f5f3]/90',
    cta: 'bg-[#2a3836]',
    ctaHover: 'hover:bg-[#1f2a28]',
    wash: 'from-teal-200/22',
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
    stripe: 'bg-[#3d4a52]',
    badge: 'bg-stone-100/95 text-stone-900 ring-1 ring-stone-800/10',
    pointCard: 'border-stone-600/15 bg-[#ede9e2]/90',
    cta: 'bg-[#2c3538]',
    ctaHover: 'hover:bg-[#232b2e]',
    wash: 'from-stone-300/22',
  },
}

export function getServiceVisuals(slug: string): ServiceVisualAccent {
  return BY_SLUG[slug] ?? DEFAULT
}
