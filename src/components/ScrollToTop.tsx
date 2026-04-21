import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Scroll to top before paint on SPA navigations (avoids flash at wrong scroll position). Hash links keep native behaviour. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useLayoutEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])

  return null
}
