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
  pointCard: 'border-0 bg-white/45 shadow-[0_20px_50px_-40px_rgb(28_25_23/0.18)] ring-1 ring-white/70 backdrop-blur-sm',
  cta: 'bg-[#2a2622]',
  ctaHover: 'hover:bg-[#1c1917]',
  wash: 'from-stone-200/25',
}

const BY_SLUG: Record<string, ServiceVisualAccent> = {
  'social-media': {
    stripe: 'bg-[#39465c]',
    badge: 'bg-indigo-100/95 text-indigo-950 ring-1 ring-indigo-900/10',
    pointCard: 'border-0 bg-indigo-50/35 shadow-[0_20px_50px_-40px_rgb(30_27_75/0.12)] ring-1 ring-white/60 backdrop-blur-sm',
    cta: 'bg-[#2f3850]',
    ctaHover: 'hover:bg-[#252c3d]',
    wash: 'from-indigo-200/24',
  },
  performance: {
    stripe: 'bg-[#2f4a3c]',
    badge: 'bg-emerald-100/95 text-emerald-950 ring-1 ring-emerald-900/10',
    pointCard: 'border-0 bg-emerald-50/30 shadow-[0_20px_50px_-40px_rgb(6_78_59/0.1)] ring-1 ring-white/60 backdrop-blur-sm',
    cta: 'bg-[#2f4a3c]',
    ctaHover: 'hover:bg-[#24382e]',
    wash: 'from-emerald-200/30',
  },
  'development-ui-ux': {
    stripe: 'bg-[#3d4a48]',
    badge: 'bg-[#e4ebe9]/95 text-[#1e2c2a] ring-1 ring-[#3d4a48]/12',
    pointCard: 'border-0 bg-[#f0f5f3]/55 shadow-[0_20px_50px_-40px_rgb(30_58_54/0.12)] ring-1 ring-white/65 backdrop-blur-sm',
    cta: 'bg-[#2a3836]',
    ctaHover: 'hover:bg-[#1f2a28]',
    wash: 'from-teal-200/22',
  },
  'ai-solutions': {
    stripe: 'bg-[#3d4a5c]',
    badge: 'bg-slate-100/95 text-slate-900 ring-1 ring-slate-800/10',
    pointCard: 'border-0 bg-slate-50/40 shadow-[0_20px_50px_-40px_rgb(30_41_59/0.12)] ring-1 ring-white/60 backdrop-blur-sm',
    cta: 'bg-[#2f3642]',
    ctaHover: 'hover:bg-[#232830]',
    wash: 'from-slate-300/25',
  },
  consultancy: {
    stripe: 'bg-[#3d4a52]',
    badge: 'bg-stone-100/95 text-stone-900 ring-1 ring-stone-800/10',
    pointCard: 'border-0 bg-[#ede9e2]/55 shadow-[0_20px_50px_-40px_rgb(28_25_23/0.14)] ring-1 ring-white/65 backdrop-blur-sm',
    cta: 'bg-[#2c3538]',
    ctaHover: 'hover:bg-[#232b2e]',
    wash: 'from-stone-300/22',
  },
}

export function getServiceVisuals(slug: string): ServiceVisualAccent {
  return BY_SLUG[slug] ?? DEFAULT
}
