import type { Metadata } from "next";
import { SITE } from "@/lib/site";

/**
 * This route is rendered on each request (dynamic SSR) to demonstrate
 * hybrid rendering alongside static / ISR marketing pages.
 */
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Server time",
  robots: { index: false, follow: false },
};

export default function NowPage() {
  const { iso, tz } = getServerTime();
  return (
    <main className="flex w-full justify-center px-6 py-16">
      <div className="border-border bg-bg w-full max-w-lg border p-8">
        <h1 className="font-heading text-2xl font-medium text-text">
          Dynamic server render
        </h1>
        <p className="text-text-muted mt-2 text-sm leading-relaxed">
          This page uses{" "}
          <code className="bg-bg-alt rounded px-1 py-0.5 text-xs">
            export const dynamic = &quot;force-dynamic&quot;
          </code>{" "}
          so the time is fresh on every request. Marketing pages and service
          detail routes are pre-rendered as static HTML by default.
        </p>
        <p className="text-text mt-6 font-mono text-sm">
          {iso}
        </p>
        <p className="text-dim mt-1 text-xs">{tz}</p>
        <a
          href={SITE.url}
          className="text-blue mt-8 inline-block text-sm font-medium"
        >
          ← Back to site
        </a>
      </div>
    </main>
  );
}

function getServerTime() {
  const d = new Date();
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return { iso: d.toISOString(), tz: tz || "UTC" };
  } catch {
    return { iso: d.toISOString(), tz: "UTC" };
  }
}
