"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: SITE.company, label: "Industries", external: true },
  { href: "/faq", label: "FAQ" },
] as const;

const navLinkClass =
  "font-body text-[15px] font-medium tracking-[-0.01em] text-text hover:text-text-muted transition-colors";

function InstagramIcon(props: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 flex w-full justify-center">
      <div className="w-full max-w-[1200px]">
        <div
          className="border-border bg-bg/95 flex w-full items-center justify-between border-x border-b backdrop-blur-sm transition-[border-color] duration-300"
          style={{ padding: "24px 24px 24px 32px" }}
        >
          <Link
            href="/"
            className="font-heading flex shrink-0 items-center gap-2.5 text-xl font-medium tracking-[-0.03em] whitespace-nowrap text-text"
          >
            {SITE.name}
          </Link>

          <div className="hidden flex-1 items-center justify-center gap-6 lg:flex">
            {nav.map((item) =>
              "external" in item && item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navLinkClass}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              ),
            )}
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className={navLinkClass}
            >
              Book a call
            </a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-text hover:text-text-muted hidden items-center gap-1.5 text-sm font-medium lg:flex"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-3.5 w-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-[#fafafa] font-body text-text hover:bg-white hidden items-center gap-2 border px-6 py-2 text-[15px] font-medium tracking-[-0.01em] lg:flex"
            >
              Book a call
            </a>
            <button
              type="button"
              className="text-text flex h-8 w-8 items-center justify-center lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M5 5L15 15M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M3 5H17M3 10H17M3 15H17"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open ? (
          <div className="border-border bg-bg/95 border-x border-b px-6 py-4 backdrop-blur-sm lg:hidden">
            <div className="flex flex-col gap-1">
              {nav.map((item) =>
                "external" in item && item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${navLinkClass} py-2`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${navLinkClass} py-2`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ),
              )}
              <div className="border-border mt-1 border-t" />
              <a
                href={SITE.cal}
                target="_blank"
                rel="noopener noreferrer"
                className={`${navLinkClass} py-2`}
              >
                Book a call
              </a>
              <div className="border-border my-2 border-t" />
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${navLinkClass} py-2`}
              >
                Instagram
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
