/**
 * Decorative D2C motifs for the blue band — packages, tags, bags, truck, AOV sparkles.
 * Parent should apply scale-y flip so shapes read upright (banner uses scaleY(-1)).
 */
export function D2cBannerAnimations() {
  return (
    <div
      className="text-[#F5F9FF] pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Rising checkout dots — like orders / confirmations */}
      <span className="d2c-banner-rise d2c-banner-rise-1 absolute bottom-[8%] left-[6%] block h-2 w-2 rounded-full bg-current opacity-40" />
      <span className="d2c-banner-rise d2c-banner-rise-2 absolute bottom-[12%] left-[18%] block h-1.5 w-1.5 rounded-full bg-current opacity-30" />
      <span className="d2c-banner-rise d2c-banner-rise-3 absolute bottom-[6%] right-[22%] block h-2 w-2 rounded-full bg-current opacity-35" />
      <span className="d2c-banner-rise d2c-banner-rise-4 absolute bottom-[14%] right-[10%] block h-1.5 w-1.5 rounded-full bg-current opacity-25" />

      {/* Package — fulfillment */}
      <svg
        className="d2c-banner-float-1 absolute top-[12%] left-[8%] h-11 w-11 opacity-[0.22]"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M4 12 16 4l12 8v16l-12 8L4 28V12Z" />
        <path d="m4 12 12 8 12-8M16 20v16" />
      </svg>

      {/* Second package — different phase */}
      <svg
        className="d2c-banner-float-2 absolute top-[20%] right-[12%] h-9 w-9 opacity-[0.18]"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M6 10h20l2 6-12 14L4 16l2-6Z" />
        <path d="M8 10V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
      </svg>

      {/* Price tag — promos / DTC offers */}
      <svg
        className="d2c-banner-pulse-tag absolute bottom-[18%] left-[14%] h-10 w-10 opacity-[0.28]"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      >
        <path d="M6 4h10l12 12-10 10L4 16V4Z" />
        <circle cx="11" cy="9" r="2" fill="currentColor" stroke="none" />
      </svg>

      {/* Shopping bag */}
      <svg
        className="d2c-banner-drift-bag absolute top-[28%] left-[22%] h-10 w-10 opacity-[0.2]"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      >
        <path d="M8 12h16l2 16H6L8 12Z" />
        <path d="M12 12V9a4 4 0 0 1 8 0v3" />
      </svg>

      {/* Truck — delivery */}
      <svg
        className="d2c-banner-truck absolute bottom-[22%] right-[8%] h-12 w-12 opacity-[0.2]"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      >
        <path d="M2 10h14v10H2V10Z" />
        <path d="M16 14h6l4 4v2h-4" />
        <circle cx="8" cy="24" r="3" />
        <circle cx="22" cy="24" r="3" />
      </svg>

      {/* % — conversion / lift */}
      <span className="d2c-banner-pulse-pct font-heading absolute top-[14%] right-[26%] text-2xl font-medium opacity-[0.22]">
        %
      </span>

      {/* AOV / sparkle ticks */}
      <svg
        className="d2c-banner-spin-slow absolute bottom-[30%] left-[32%] h-8 w-8 opacity-[0.15]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l1.2 6.8L20 10l-6.8 1.2L12 18l-1.2-6.8L4 10l6.8-1.2L12 2z" />
      </svg>

      <svg
        className="d2c-banner-spin-slow-reverse absolute top-[36%] right-[30%] h-6 w-6 opacity-[0.14]"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2l1.2 6.8L20 10l-6.8 1.2L12 18l-1.2-6.8L4 10l6.8-1.2L12 2z" />
      </svg>

      {/* Subtle grid pulse — storefront / catalog */}
      <div
        className="d2c-banner-grid-shift absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
