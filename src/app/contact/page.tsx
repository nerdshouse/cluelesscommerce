'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

const BRAND_CATEGORIES = ['Beauty', 'F&B', 'Apparel', 'Health', 'Other'];
const SPEND_RANGES = ['< ₹50K/mo', '₹50K–2L/mo', '₹2L–5L/mo', '₹5L+/mo', 'Not sure'];
const WORKING_WITH = ['Agency', 'In-house', 'Both', "Haven't started yet"];
const CHANNELS = ['Meta', 'Google', 'Marketplaces', 'Quick Commerce', 'Affiliate', 'Email / WhatsApp', 'None yet', 'Other'];
const HEARD_FROM = ['Instagram', 'LinkedIn', 'Referral', 'Google Search', 'Word of mouth', 'Other'];

interface FormState {
  name: string;
  email: string;
  phone: string;
  brandName: string;
  websiteUrl: string;
  socialHandles: string;
  brandCategory: string;
  brandCategoryOther: string;
  brandStory: string;
  brandStuck: string;
  brandVision: string;
  marketingSpend: string;
  workingWith: string;
  channels: string[];
  channelsOther: string;
  frustration: string;
  heardFrom: string;
  heardFromOther: string;
}

const INITIAL: FormState = {
  name: '', email: '', phone: '', brandName: '', websiteUrl: '',
  socialHandles: '', brandCategory: '', brandCategoryOther: '',
  brandStory: '', brandStuck: '', brandVision: '', marketingSpend: '',
  workingWith: '', channels: [], channelsOther: '',
  frustration: '', heardFrom: '', heardFromOther: '',
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

type Errors = Partial<{
  name: string; email: string; phone: string; brandName: string;
  websiteUrl: string; socialHandles: string;
  brandCategory: string; brandCategoryOther: string;
  brandStory: string; brandStuck: string; brandVision: string;
  marketingSpend: string; workingWith: string;
  channels: string; channelsOther: string;
  frustration: string; heardFrom: string; heardFromOther: string;
}>;

function validate(f: FormState): Errors {
  const e: Errors = {};

  if (!f.name.trim()) e.name = 'Name is required.';
  else if (f.name.trim().length < 2) e.name = 'Name must be at least 2 characters.';
  else if (f.name.trim().length > 80) e.name = 'Name must be under 80 characters.';
  else if (!/^[\p{L}\s'-]+$/u.test(f.name.trim())) e.name = 'Name can only contain letters, spaces, hyphens, or apostrophes.';

  if (!f.email.trim()) e.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = 'Enter a valid email address.';

  if (!f.phone.trim()) e.phone = 'Phone number is required.';
  else if (!/^[0-9\s+\-()]+$/.test(f.phone.trim())) e.phone = 'Enter a valid phone number.';
  else if (f.phone.replace(/\D/g, '').length < 7 || f.phone.replace(/\D/g, '').length > 15) e.phone = 'Phone number must be 7–15 digits.';

  if (!f.brandName.trim()) e.brandName = 'Brand name is required.';
  else if (f.brandName.trim().length < 2) e.brandName = 'Brand name must be at least 2 characters.';
  else if (f.brandName.trim().length > 100) e.brandName = 'Brand name must be under 100 characters.';

  if (!f.websiteUrl.trim()) e.websiteUrl = 'Website URL is required.';
  else if (!/^https?:\/\/.+/.test(f.websiteUrl.trim())) e.websiteUrl = 'URL must start with http:// or https://';

  if (!f.socialHandles.trim()) e.socialHandles = 'Please add your social handles.';
  else if (f.socialHandles.length > 300) e.socialHandles = 'Keep this under 300 characters.';

  if (!f.brandCategory) e.brandCategory = 'Please select a brand category.';
  else if (f.brandCategory === 'Other' && !f.brandCategoryOther?.trim()) e.brandCategoryOther = 'Please specify your brand category.';

  if (!f.brandStory.trim()) e.brandStory = 'Please tell us about your brand.';
  else if (f.brandStory.length > 1000) e.brandStory = 'Keep this under 1000 characters.';

  if (!f.brandStuck.trim()) e.brandStuck = 'Please describe where your brand is stuck.';
  else if (f.brandStuck.length > 1000) e.brandStuck = 'Keep this under 1000 characters.';

  if (!f.brandVision.trim()) e.brandVision = 'Please share your brand vision.';
  else if (f.brandVision.length > 1000) e.brandVision = 'Keep this under 1000 characters.';

  // marketingSpend is optional

  if (!f.workingWith) e.workingWith = 'Please select an option.';

  if (f.channels.length === 0) e.channels = 'Please select at least one channel.';
  else if (f.channels.includes('Other') && !f.channelsOther?.trim()) e.channelsOther = 'Please specify the other channel.';

  if (!f.frustration.trim()) e.frustration = 'Please share your biggest frustration.';
  else if (f.frustration.length > 1000) e.frustration = 'Keep this under 1000 characters.';

  if (!f.heardFrom) e.heardFrom = 'Please let us know how you heard about us.';
  else if (f.heardFrom === 'Other' && !f.heardFromOther?.trim()) e.heardFromOther = 'Please specify how you heard about us.';

  return e;
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs uppercase tracking-widest text-(--fg-muted)">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500 mt-0.5">{error}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleChannelToggle = (ch: string) => {
    setForm((prev) => ({
      ...prev,
      channels: prev.channels.includes(ch)
        ? prev.channels.filter((c) => c !== ch)
        : [...prev.channels, ch],
    }));
    setErrors((prev) => ({ ...prev, channels: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
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
                <Field label="Your Name" required error={errors.name}>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Jane Smith"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email" required error={errors.email}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@brand.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Contact Number" required error={errors.phone}>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className={inputCls}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Brand Name" required error={errors.brandName}>
                  <input
                    type="text"
                    name="brandName"
                    value={form.brandName}
                    onChange={handleChange}
                    placeholder="Your Brand"
                    className={inputCls}
                  />
                </Field>
                <Field label="Website URL" required error={errors.websiteUrl}>
                  <input
                    type="text"
                    name="websiteUrl"
                    value={form.websiteUrl}
                    onChange={handleChange}
                    placeholder="https://yourbrand.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Social Media Handles" required error={errors.socialHandles}>
                <textarea
                  name="socialHandles"
                  value={form.socialHandles}
                  onChange={handleChange}
                  placeholder="@yourbrand on Instagram, @yourbrand on LinkedIn, etc."
                  rows={2}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Brand Category" required error={errors.brandCategory}>
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
              {form.brandCategory === 'Other' && (
                <Field label="Please specify" required error={errors.brandCategoryOther}>
                  <input
                    type="text"
                    name="brandCategoryOther"
                    value={form.brandCategoryOther}
                    onChange={handleChange}
                    placeholder="Your brand category"
                    className={inputCls}
                  />
                </Field>
              )}

              {/* ─── Brand Story ─── */}
              <SectionDivider label="Brand Story" />

              <Field label="Tell us about your brand" required error={errors.brandStory}>
                <textarea
                  name="brandStory"
                  value={form.brandStory}
                  onChange={handleChange}
                  placeholder="What does your brand do, who does it serve, what makes it different?"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Where is your brand stuck right now?" required error={errors.brandStuck}>
                <textarea
                  name="brandStuck"
                  value={form.brandStuck}
                  onChange={handleChange}
                  placeholder="Growth plateau, low conversions, weak brand awareness…"
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="Where do you see your brand in 3 years?" required error={errors.brandVision}>
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
                <Field label="Agency or In-house?" required error={errors.workingWith}>
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

              <Field label="Which channels are you currently active on?" required error={errors.channels}>
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
              {form.channels.includes('Other') && (
                <Field label="Please specify" required error={errors.channelsOther}>
                  <input
                    type="text"
                    name="channelsOther"
                    value={form.channelsOther}
                    onChange={handleChange}
                    placeholder="Other channel(s) you use"
                    className={inputCls}
                  />
                </Field>
              )}

              <Field label="What's your biggest frustration with marketing right now?" required error={errors.frustration}>
                <textarea
                  name="frustration"
                  value={form.frustration}
                  onChange={handleChange}
                  placeholder="Be honest — we've heard it all."
                  rows={3}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <Field label="How did you hear about us?" required error={errors.heardFrom}>
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
              {form.heardFrom === 'Other' && (
                <Field label="Please specify" required error={errors.heardFromOther}>
                  <input
                    type="text"
                    name="heardFromOther"
                    value={form.heardFromOther}
                    onChange={handleChange}
                    placeholder="How did you find us?"
                    className={inputCls}
                  />
                </Field>
              )}

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
