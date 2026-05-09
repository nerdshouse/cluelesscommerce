import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const {
    name, email, phone, brandName, websiteUrl, socialHandles,
    brandCategory, brandStory, brandStuck, brandVision,
    marketingSpend, workingWith, channels, frustration, heardFrom,
  } = await request.json();

  if (!name || !email || !phone || !brandName) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    value
      ? `<tr>
           <td style="padding:8px 0;border-bottom:1px solid #eee;font-weight:600;width:220px;vertical-align:top;font-size:13px;">${label}</td>
           <td style="padding:8px 0;border-bottom:1px solid #eee;white-space:pre-wrap;font-size:13px;">${value}</td>
         </tr>`
      : '';

  const section = (title: string, rows: string) =>
    `<h3 style="margin:28px 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.1em;color:#999;">${title}</h3>
     <table style="width:100%;border-collapse:collapse;">${rows}</table>`;

  const channelList = Array.isArray(channels) ? channels.join(', ') : channels;

  try {
    await resend.emails.send({
      from: 'Clueless Commerce <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      subject: `New Strategy Call — ${brandName}`,
      replyTo: email,
      html: `
        <div style="font-family:sans-serif;max-width:640px;margin:0 auto;padding:32px;color:#111;">
          <h2 style="margin:0 0 4px;font-size:22px;">New Strategy Call Request</h2>
          <p style="margin:0 0 24px;color:#999;font-size:13px;">Submitted via cluelesscommerce.com</p>

          ${section('Contact Info',
            row('Name', name) +
            row('Email', email) +
            row('Phone', phone) +
            row('Brand Name', brandName) +
            row('Website', websiteUrl) +
            row('Social Handles', socialHandles) +
            row('Brand Category', brandCategory)
          )}

          ${section('Brand Story',
            row('About the brand', brandStory) +
            row('Where stuck', brandStuck) +
            row('3-year vision', brandVision)
          )}

          ${section('Marketing Snapshot',
            row('Monthly spend', marketingSpend) +
            row('Working with', workingWith) +
            row('Active channels', channelList) +
            row('Biggest frustration', frustration) +
            row('Heard about us via', heardFrom)
          )}

          <p style="margin:32px 0 0;font-size:12px;color:#999;">
            Reply to this email to respond directly to ${name}.
          </p>
        </div>
      `,
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
