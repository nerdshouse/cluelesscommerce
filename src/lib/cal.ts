/**
 * Cal.com popup – replace with your Cal.com link, e.g. https://cal.com/your-username
 * Or set via env: VITE_CALCOM_URL
 */
const CALCOM_URL = import.meta.env.VITE_CALCOM_URL || 'https://cal.com/axitmehta'

export function openCalComPopup(): void {
  const w = 700
  const h = 700
  const left = (window.screen.width - w) / 2
  const top = (window.screen.height - h) / 2
  window.open(
    CALCOM_URL,
    'calcom',
    `width=${w},height=${h},left=${left},top=${top},scrollbars=yes,resizable=yes`
  )
}
