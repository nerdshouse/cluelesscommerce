"use client";

import { useEffect } from "react";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-16">
      <div className="border-border bg-bg w-full max-w-lg border p-8">
        <h1 className="font-heading text-text text-xl font-medium">
          Something went wrong
        </h1>
        <p className="text-text-muted mt-2 text-sm leading-relaxed">
          {error.message || "An unexpected error occurred while rendering this page."}
        </p>
        {error.digest ? (
          <p className="text-dim mt-2 font-mono text-xs">Digest: {error.digest}</p>
        ) : null}
        <button
          type="button"
          onClick={reset}
          className="bg-blue text-bg font-body hover:bg-blue-hover mt-6 rounded-lg px-4 py-2 text-sm font-medium"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
