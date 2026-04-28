import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[40vh] flex-col items-center justify-center px-6 py-24">
      <h1 className="font-heading text-2xl font-medium text-text">
        Page not found
      </h1>
      <Link href="/" className="text-blue mt-4 text-sm font-medium">
        Back to home
      </Link>
    </main>
  );
}
