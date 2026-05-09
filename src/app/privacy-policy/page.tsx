import Link from 'next/link';

export const metadata = { title: 'Privacy Policy — Clueless Commerce' };

const SECTIONS = [
  {
    heading: 'Information We Collect',
    body: 'We collect information you provide directly — such as your name, email address, brand name, and any messages submitted through our contact form. We may also collect basic usage data (pages visited, referral source) through privacy-respecting analytics.',
  },
  {
    heading: 'How We Use It',
    body: 'We use your information solely to respond to your enquiry, schedule strategy calls, and improve our services. We do not sell, rent, or share your personal data with third parties for marketing purposes.',
  },
  {
    heading: 'Cookies',
    body: 'We use essential cookies to keep the site functional. We do not use third-party advertising cookies. You can disable cookies in your browser settings at any time.',
  },
  {
    heading: 'Data Retention',
    body: 'We retain contact form submissions for up to 12 months. You may request deletion of your data at any time by emailing us directly.',
  },
  {
    heading: 'Your Rights',
    body: 'Depending on your jurisdiction you have the right to access, correct, or delete the personal data we hold about you. To exercise any of these rights, contact us at the address below.',
  },
  {
    heading: 'Contact',
    body: 'Questions about this policy? Reach us at hello@cluelesscommerce.com and we will respond within 48 hours.',
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-(--bg) text-(--fg)">
      {/* Nav */}
      <div className="px-6 md:px-10 xl:px-20 h-16 flex items-center border-b border-(--border)">
        <Link
          href="/"
          className="font-serif text-lg font-bold tracking-tight hover:opacity-70 transition-opacity"
        >
          ← Clueless Commerce
        </Link>
      </div>

      <div className="px-6 md:px-10 xl:px-20 py-14 max-w-6xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-(--fg-muted) mb-4">Legal</p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-(--fg-muted) mb-12">
          Last updated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
        </p>

        <div className="flex flex-col gap-10">
          {SECTIONS.map((s) => (
            <div key={s.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-(--fg) mb-3">
                {s.heading}
              </h2>
              <p className="text-sm text-(--fg-muted) leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
