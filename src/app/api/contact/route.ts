import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { MailtrapTransport } from 'mailtrap';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

// nodemailer / Mailtrap need the Node.js runtime (not Edge).
export const runtime = 'nodejs';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://samer.com.tr';
const MAX_BODY_BYTES = 10_000;

const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(100),
  email: z.string().trim().toLowerCase().pipe(z.email().max(255)),
  phone: z.string().trim().min(6).max(30),
  oemOrDetails: z.string().trim().max(500).optional(),
  message: z.string().trim().min(10).max(2000),
  honeypot: z.string().max(500).optional(),
});

function createRatelimit(): Ratelimit | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.error(
      '[contact] Upstash env vars are missing — rate limiting is DISABLED.',
    );
    return null;
  }
  try {
    return new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, '10 m'),
      prefix: 'samer:contact',
    });
  } catch (err) {
    console.error('[contact] Failed to initialize rate limiter:', err);
    return null;
  }
}
const ratelimit = createRatelimit();

function getMailConfig() {
  const token = process.env.MAILTRAP_TOKEN;
  const to = process.env.CONTACT_TO_EMAIL;
  // Must be an address on a domain verified in Mailtrap.
  const from = process.env.CONTACT_FROM_EMAIL ?? process.env.SMTP_USER;
  return token && to && from ? { token, to, from } : null;
}

function getClientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  return request.headers.get('x-real-ip');
}

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return true; // non-browser client; validation + rate limit still apply
  try {
    const originHost = new URL(origin).host;
    const allowed = new Set<string>([new URL(SITE_URL).host]);
    const host = request.headers.get('host');
    if (host) allowed.add(host);
    return allowed.has(originHost);
  } catch {
    return false;
  }
}

const oneLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

export async function POST(request: Request) {
  try {
    if (!isAllowedOrigin(request)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ip = getClientIp(request);
    if (ratelimit && ip) {
      const { success } = await ratelimit.limit(ip);
      if (!success) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 },
        );
      }
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Payload too large' }, { status: 413 });
    }

    let json: unknown;
    try {
      json = JSON.parse(raw);
    } catch {
      return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
    }

    const parsed = contactSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { fullName, company, email, phone, oemOrDetails, message, honeypot } =
      parsed.data;

    // Bot filled the hidden field: pretend everything is fine.
    if (honeypot) return NextResponse.json({ success: true });

    const mail = getMailConfig();
    if (!mail) {
      console.error(
        '[contact] Missing MAILTRAP_TOKEN / CONTACT_TO_EMAIL / CONTACT_FROM_EMAIL',
      );
      return NextResponse.json(
        { error: 'Service unavailable' },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport(
      MailtrapTransport({ token: mail.token }),
    );

    const text = [
      `Full Name: ${fullName}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `OEM/Details: ${oemOrDetails || '-'}`,
      '',
      'Message:',
      message,
    ].join('\n');

    await transporter.sendMail({
      from: { name: 'Samer Tempo Website', address: mail.from },
      to: [mail.to],
      replyTo: { name: oneLine(fullName), address: email },
      subject: `New contact form submission from ${oneLine(fullName)}`,
      text,
      category: 'Contact Form',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[contact] send failed:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 },
    );
  }
}
