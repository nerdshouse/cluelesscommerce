import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh">
      <div className="site-atmosphere" aria-hidden />
      <Header />
      {children}
      <Footer />
    </div>
  )
}
