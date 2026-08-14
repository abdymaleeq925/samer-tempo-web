import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '10 m')
});

export const contactSchema = z.object({
  fullName: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(100),
  email: z.string().trim().lowercase().email().max(255),
  phone: z.string().trim().min(6).max(30),
  oemOrDetails: z.string().trim().max(500).optional(),
  message: z.string().trim().min(10).max(2000),
  honeypot: z.string().max(0, 'Bot detected').optional()
});

export async function POST(request: Request) {
  try {
    const headerList = await headers();
    const rawIp = headerList.get('x-forwarded-for');
    const ip = rawIp ? rawIp.split(',')[0].trim() : '127.0.0.1';

    const { success: limitSuccess } = await ratelimit.limit(ip);
    if (!limitSuccess) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 });
    }

    const { fullName, company, email, phone, oemOrDetails, message, honeypot } = parsed.data;

    if (honeypot) {
      return NextResponse.json({ success: true });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `New contact form submission from ${fullName}`,
      text: `
				Full Name: ${fullName}
				Company: ${company}
				Email: ${email}
				Phone: ${phone}
				OEM/Details: ${oemOrDetails || '-'}

				Message:
				${message}
      `.trim(),
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
