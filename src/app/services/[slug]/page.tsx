import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "@/content/services";
import { SITE } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Not found" };
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="flex w-full justify-center px-6 py-16">
      <article className="border-border bg-bg w-full max-w-[720px] border border-t-0 px-6 py-12 md:border-t">
        <p className="text-blue-light font-mono text-xs font-medium tracking-[0.1em] uppercase">
          {service.eyebrow}
        </p>
        <h1 className="font-heading text-text mt-2 text-4xl font-medium tracking-[-0.04em]">
          {service.title}
        </h1>
        <p className="text-text-muted mt-6 text-[16px] leading-[165%]">
          {service.intro}
        </p>
        <div className="mt-10 flex flex-col gap-6">
          {service.sections.map((section, i) => (
            <section
              key={`${service.slug}-${section.heading}-${i}`}
              className="border-border bg-bg-alt rounded-sm border p-6 md:p-8"
            >
              <h2 className="font-heading text-lg font-medium text-text">
                {section.heading}
              </h2>
              <p className="text-text-muted mt-3 text-[15px] leading-[170%]">
                {section.body}
              </p>
            </section>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-center text-center">
          <p className="max-w-md text-[15px] text-text">
            <a
              href={SITE.cal}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue font-medium hover:text-blue-hover"
            >
              Book a call
            </a>{" "}
            to discuss fit and next steps.
          </p>
        </div>
        <nav className="text-dim mt-10 flex flex-wrap justify-center gap-6 text-sm">
          {service.slug === "india-retainer" ? (
            <Link href="/retainer" className="text-blue hover:text-blue-hover">
              Retainer programme overview
            </Link>
          ) : null}
          <Link href="/services" className="text-blue hover:text-blue-hover">
            All services
          </Link>
          <Link href="/" className="text-blue hover:text-blue-hover">
            Home
          </Link>
        </nav>
      </article>
    </main>
  );
}

/* Explicit static generation (default in App Router for this route) */
export const dynamic = "force-static";
