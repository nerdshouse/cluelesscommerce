/**
 * Hero visual: isometric cart + parcel “add to cart” loop (replaces legacy asset).
 */
export function HeroCartIllustration({ className }: { className?: string }) {
  return (
    <figure
      className={className}
      aria-label="Animated illustration: product added to shopping cart"
    >
      <svg
        viewBox="0 0 240 300"
        className="text-blue h-auto w-full max-w-[280px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title>Add to cart</title>
        <desc>
          Isometric shopping cart on a platform; a package drops into the cart
          on a short loop.
        </desc>

        {/* Platform */}
        <path
          d="M12 214 120 158l108 56-108 56L12 214Z"
          className="fill-[#dbeafe] stroke-[#93c5fd]"
          strokeWidth="1"
        />
        <path
          d="m120 158 108 56v12l-108 56-108-56v-12l108-56Z"
          className="fill-[#eff6ff] stroke-[#93c5fd]"
          strokeWidth="1"
        />

        {/* Cart — wireframe isometric */}
        <g stroke="currentColor" strokeWidth="1.35" strokeLinejoin="round">
          <path
            d="M78 188h72l-8 52H70l-14-40h-8"
            className="text-[#1d4ed8]"
          />
          <path d="M150 188l10-22H88" className="text-[#1d4ed8]" />
          <path
            d="m70 200 6 40M142 200l-6 40M76 188l-6 12M136 188l6 12"
            className="text-[#3b82f6] opacity-80"
          />
          <circle cx="82" cy="246" r="5" className="fill-[#bfdbfe] stroke-[#2563eb]" />
          <circle cx="128" cy="246" r="5" className="fill-[#bfdbfe] stroke-[#2563eb]" />
        </g>

        {/* +1 badge */}
        <g className="hero-cart-plusone">
          <rect
            x="158"
            y="118"
            width="44"
            height="28"
            rx="6"
            className="fill-[#0763ee]"
          />
          <text
            x="180"
            y="137"
            textAnchor="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
            fontFamily="system-ui, sans-serif"
          >
            +1
          </text>
        </g>

        {/* Parcel (animated) */}
        <g className="hero-cart-parcel">
          <path
            d="m118 120 32 18v36l-32 18-32-18v-36l32-18Z"
            className="fill-[#60a5fa] stroke-[#2563eb]"
            strokeWidth="1"
          />
          <path
            d="m118 120 32 18 28-16-32-18-28 16Z"
            className="fill-[#93c5fd] stroke-[#2563eb]"
            strokeWidth="1"
          />
          <path
            d="m150 138-28 16v36l28-16v-36Z"
            className="fill-[#3b82f6] stroke-[#2563eb]"
            strokeWidth="1"
          />
        </g>
      </svg>
    </figure>
  );
}
