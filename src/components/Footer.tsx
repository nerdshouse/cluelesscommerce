import Link from "next/link";
import { SITE } from "@/lib/site";

function IgIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-border bg-bg-alt relative z-10 border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-3">
            <h3 className="text-dim font-mono text-xs tracking-widest uppercase">
              Product
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>
                <Link href="/services" className="hover:text-text transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <a
                  href={SITE.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  CRO &amp; Shopify
                </a>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-text transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/retainer" className="hover:text-text transition-colors">
                  Retainer
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-dim font-mono text-xs tracking-widest uppercase">
              Resources
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>
                <a
                  href={SITE.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  Book a call
                </a>
              </li>
              <li>
                <a
                  href={SITE.company}
                  className="hover:text-text transition-colors"
                >
                  Industries
                </a>
              </li>
              <li>
                <Link href="/faq" className="hover:text-text transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-dim font-mono text-xs tracking-widest uppercase">
              Company
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-text-muted">
              <li>
                <a
                  href={SITE.company}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  {SITE.name}
                </a>
              </li>
              <li>
                <a
                  href={SITE.cal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text transition-colors"
                >
                  Book a call
                </a>
              </li>
              <li>
                <Link href="/" className="hover:text-text transition-colors">
                  Home
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-dim font-mono text-xs tracking-widest uppercase">
              Connect
            </h3>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-text w-fit transition-colors"
              aria-label="Instagram"
            >
              <IgIcon />
            </a>
          </div>
        </div>
        <div className="border-border flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row">
          <span className="font-heading text-lg font-medium tracking-[-0.03em] text-text">
            {SITE.name}
          </span>
          <span className="text-dim font-body text-xs">
            &copy; {new Date().getFullYear()} {SITE.name} - A Nerdshouse
            Technologies LLP Company
          </span>
        </div>
      </div>
    </footer>
  );
}
