'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const BRAND_CATEGORIES = ['Beauty', 'F&B', 'Apparel', 'Health', 'Other'];
const SPEND_RANGES = ['< ₹50K/mo', '₹50K–2L/mo', '₹2L–5L/mo', '₹5L+/mo', 'Not sure'];
const WORKING_WITH = ['Agency', 'In-house', 'Both', "Haven't started yet"];
const CHANNELS = ['Meta', 'Google', 'Marketplaces', 'Quick Commerce', 'Affiliate', 'Email / WhatsApp', 'None yet'];
const HEARD_FROM = ['Instagram', 'LinkedIn', 'Referral', 'Google Search', 'Word of mouth', 'Other'];

interface FormState {
  name: string;
  email: string;
  phone: string;
  brandName: string;
  websiteUrl: string;
  socialHandles: string;
  brandCategory: string;
  brandStory: string;
  brandStuck: string;
  brandVision: string;
  marketingSpend: string;
  workingWith: string;
  channels: string[];
  frustration: string;
  heardFrom: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', brandName: '', websiteUrl: '',
  socialHandles: '', brandCategory: '', brandStory: '', brandStuck: '',
  brandVision: '', marketingSpend: '', workingWith: '', channels: [],
  frustration: '', heardFrom: '',
};

const inputCls =
  'bg-(--surface) border border-(--border) rounded-sm px-4 py-3 text-sm text-(--fg) placeholder:text-(--fg-muted) focus:outline-none focus:border-(--fg-muted) transition-colors w-full';

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 mt-6 mb-1">
      <span className="text-xs uppercase tracking-widest text-(--fg-muted) whitespace-nowrap">
        {label}
      </span>
      <div className="flex-1 h-px bg-(--border)" />
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-(--fg-muted)">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleChannelToggle = (ch: string) =>
    setForm((prev) => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter((c) => c !== ch)
        : [...prev.channels, ch],
    }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-(--bg) text-(--fg)">
      <Header />

      <div className="px-6 md:px-10 xl:px-20 pt-28 pb-12 max-w-3xl mx-auto">
        {/* Page header */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs uppercase tracking-widest text-(--fg-muted) mb-4"
        >
          Let&apos;s Talk
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl font-bold leading-tight"
        >
          Book a Strategy Call
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="mt-4 text-(--fg-muted) leading-relaxed max-w-xl"
        >
          Tell us about your brand and where you want to take it. We&apos;ll come prepared with a
          point of view — not a sales deck.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="mt-10"
        >
          {submitted ? (
            <div className="flex flex-col gap-4 p-10 border border-(--border) rounded-sm bg-(--surface) items-center justify-center text-center">
              <span className="text-4xl">✓</span>
              <h2 className="font-serif text-2xl font-bold">We&apos;ve got it.</h2>
              <p className="text-sm text-(--fg-muted)">
                Expect a response within 24 hours. We&apos;ll reach out to schedule your call.
              </p>
              <Link
                href="/"
                className="mt-4 px-5 py-2.5 bg-(--fg) text-(--bg) text-sm font-medium rounded-sm hover:opacity-90 transition-opacity"
              >
                Back to Home
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* ─── Contact Info ─── */}
              <SectionDivider label="Contact Info" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Your Name" required>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email" required>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@brand.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Contact Number" required>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputCls}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Brand Name" required>
                  <input
                    type="text"
                    name="brandName"
                    required
                    value={form.brandName}
                    onChange={handleChange}
                    placeholder="Your Brand"
                    className={inputCls}
                  />
                </Field>
                <Field label="Website URL">
                  <input
                    type="url"
                    name="websiteUrl"
                    value={form.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://yourbrand.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Social Media Handles">
                <textarea
                  name="socialHandles"
                  value={form.socialHandles}
                  onChange={handleChange}
                  placeholder="@yourbrand on Instagram, @yourbrand on LinkedIn, etc."
                  rows={2}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Brand Category">
                <select
                  name="brandCategory"
                  value={form.brandCategory}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none cursor-pointer`}
                >
                  <option value="">Select a category</option>
                  {BRAND_CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </Field>

              {/* ─── Brand Story ─── */}
              <SectionDivider label="Brand Story" />

              <Field label="Tell us about your brand">
                <textarea
                  name="brandStory"
                  value={form.brandStory}
                  onChange={handleChange}
                  placeholder="What does your brand do, who does it serve, what makes it different?"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Where is your brand stuck right now?">
                <textarea
                  name="brandStuck"
                  value={form.brandStuck}
                  onChange={handleChange}
                  placeholder="Growth plateau, low conversions, weak brand awareness…"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Where do you see your brand in 3 years?">
                <textarea
                  name="brandVision"
                  value={form.brandVision}
                  onChange={handleChange}
                  placeholder="Revenue targets, market position, brand feeling…"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {/* ─── Marketing Snapshot ─── */}
              <SectionDivider label="Marketing Snapshot" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Monthly Marketing Spend (approx.)">
                  <select
                    name="marketingSpend"
                    value={form.marketingSpend}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="">Select a range</option>
                    {SPEND_RANGES.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Agency or In-house?">
                  <select
                    name="workingWith"
                    value={form.workingWith}
                    onChange={handleChange}
                    className={`${inputCls} appearance-none cursor-pointer`}
                  >
                    <option value="">Select one</option>
                    {WORKING_WITH.map((w) => (
                      <option key={w} value={w}>{w}</option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Which channels are you currently active on?">
                <div className="flex flex-wrap gap-2 mt-1">
                  {CHANNELS.map((ch) => (
                    <button
                      type="button"
                      key={ch}
                      onClick={() => handleChannelToggle(ch)}
                      className={`px-3 py-1.5 text-xs border rounded-sm transition-colors ${
                        form.channels.includes(ch)
                          ? 'bg-(--fg) text-(--bg) border-(--fg)'
                          : 'bg-(--surface) text-(--fg-muted) border-(--border) hover:border-(--fg-muted)'
                      }`}
                    >
                      {ch}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="What's your biggest frustration with marketing right now?">
                <textarea
                  name="frustration"
                  value={form.frustration}
                  onChange={handleChange}
                  placeholder="Be honest — we've heard it all."
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="How did you hear about us?">
                <select
                  name="heardFrom"
                  value={form.heardFrom}
                  onChange={handleChange}
                  className={`${inputCls} appearance-none cursor-pointer`}
                >
                  <option value="">Select one</option>
                  {HEARD_FROM.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="mt-4 px-6 py-3.5 bg-(--fg) text-(--bg) font-medium text-sm rounded-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending…' : 'Book a Strategy Call →'}
              </button>

              {error && (
                <p className="text-xs text-red-500 text-center">{error}</p>
              )}

              <p className="text-xs text-(--fg-muted) text-center pb-8">
                We respond within 24 hours.
              </p>
            </form>
          )}
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
