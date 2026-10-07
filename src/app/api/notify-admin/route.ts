import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const { fullName, email, type, docType } = await req.json();

    if (type === 'NEW_REGISTRATION') {
      const date = new Date().toLocaleString('en-US', { 
        timeZone: 'Asia/Karachi', 
        dateStyle: 'full', 
        timeStyle: 'long' 
      });
      
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; padding: 24px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
          <div style="text-align: center; border-bottom: 2px solid #ff6b35; padding-bottom: 16px; mb-4">
            <h2 style="color: #111; margin: 0; font-size: 24px;">🚀 New Client Registered!</h2>
          </div>
          
          <p style="font-size: 16px; margin-top: 24px;">Hello Admin,</p>
          <p style="font-size: 16px;">A new client has just created an account on your portal. Here are their details:</p>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 24px 0; border: 1px solid #f3f4f6;">
            <p style="margin: 8px 0; font-size: 15px;"><strong>👤 Full Name:</strong> ${fullName}</p>
            <p style="margin: 8px 0; font-size: 15px;"><strong>✉️ Email Address:</strong> ${email}</p>
            <p style="margin: 8px 0; font-size: 15px;"><strong>🕒 Date & Time:</strong> ${date}</p>
          </div>
          
          <div style="text-align: center; margin-top: 32px;">
            <a href="https://amazonfastservices.com/admin-portal" style="background-color: #ff6b35; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block;">Open Admin Dashboard</a>
          </div>
        </div>
      `;

      // Send to Admin
      await sendEmail({
        to: process.env.EMAIL_USER || 'appointmentstudio@gmail.com',
        subject: `New Client Alert: ${fullName}`,
        html: emailHtml
      });
    } else if (type === 'DOCUMENT_UPLOAD') {
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; padding: 24px;">
          <h2 style="color: #ff6b35;">📄 Document Uploaded</h2>
          <p>Hello Admin,</p>
          <p><strong>${fullName}</strong> (${email}) has just uploaded a new document:</p>
          <h3 style="background-color: #f9fafb; padding: 12px; border-radius: 8px;">${docType}</h3>
          <p>Please log in to the admin portal to review it.</p>
          <a href="https://amazonfastservices.com/admin-portal" style="background-color: #ff6b35; color: white; padding: 10px 20px; text-decoration: none; border-radius: 6px; display: inline-block; margin-top: 10px;">Review Document</a>
        </div>
      `;

      await sendEmail({
        to: process.env.EMAIL_USER || 'appointmentstudio@gmail.com',
        subject: `Document Uploaded: ${fullName}`,
        html: emailHtml
      });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Notify Admin API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
