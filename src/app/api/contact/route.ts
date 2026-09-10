import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';
import { MailtrapTransport } from 'mailtrap';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { z } from 'zod';

function createRatelimit(): Ratelimit | null {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.warn('Upstash env vars are missing — rate limiting is disabled.');
    return null;
  }
  try {
    return new Ratelimit({
      redis: Redis.fromEnv(),
      limiter: Ratelimit.slidingWindow(3, '10 m'),
    });
  } catch (err) {
    console.error('Failed to initialize rate limiter:', err);
    return null;
  }
}

const ratelimit = createRatelimit();

export const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(100),
  email: z.string().trim().lowercase().email().max(255),
  phone: z.string().trim().min(6).max(30),
  oemOrDetails: z.string().trim().max(500).optional(),
  message: z.string().trim().min(10).max(2000),
  honeypot: z.string().max(0, 'Bot detected').optional(),
});

export async function POST(request: Request) {
  try {
    if (ratelimit) {
      const headerList = await headers();
      const rawIp = headerList.get('x-forwarded-for');
      const ip = rawIp ? rawIp.split(',')[0].trim() : '127.0.0.1';

      const { success: limitSuccess } = (await ratelimit?.limit(ip)) ?? {
        success: true,
      };
      if (!limitSuccess) {
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { status: 429 },
        );
      }
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { fullName, company, email, phone, oemOrDetails, message, honeypot } =
      parsed.data;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport(
      MailtrapTransport({ token: process.env.MAILTRAP_TOKEN as string }),
    );

    const textLines = [
      `Full Name: ${fullName}`,
      `Company: ${company}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `OEM/Details: ${oemOrDetails || '-'}`,
      '',
      'Message:',
      message,
    ];

    await transporter.sendMail({
      from: {
        address: `"Website Contact Form" <${process.env.SMTP_USER}>`,
        name: fullName,
      },
      to: [process.env.CONTACT_TO_EMAIL as string],
      replyTo: email,
      subject: `New contact form submission from ${fullName}`,
      text: textLines.join('\n'),
      category: 'Contact Form',
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 },
    );
  }
}

// {
//   host: process.env.SMTP_HOST,
//   port: Number(process.env.SMTP_PORT),
//   secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
//   auth: {
//     user: process.env.SMTP_USER,
//     pass: process.env.SMTP_PASS,
//   },
// }
