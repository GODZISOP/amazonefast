import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, message } = await request.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const to = process.env.EMAIL_USER || 'appointmentstudio@gmail.com';
    const subject = `New Contact Form Submission from ${firstName} ${lastName}`;
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #ddd; margin-top: 10px; color: #333;">
        ${message.replace(/\n/g, '<br>')}
      </div>
    `;

    const result = await sendEmail({ to, subject, html });
    if (!result.success) {
      throw result.error;
    }
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact email error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
