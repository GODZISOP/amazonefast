import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export async function POST(request: Request) {
  try {
    const { docId, newStatus } = await request.json();

    if (!docId || !newStatus) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!; // Admin bypass key

    if (!supabaseKey) {
        console.error("SUPABASE_SERVICE_ROLE_KEY is not defined in environment variables.");
        return NextResponse.json({ error: 'Server misconfiguration: Service Role Key missing' }, { status: 500 });
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data: updatedDoc, error } = await supabase
      .from('documents')
      .update({ status: newStatus })
      .eq('id', docId)
      .select('document_type, clients(email, full_name)')
      .single();

    if (error) {
      console.error('Error updating document status:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Attempt to send email to client if their details are found
    if (updatedDoc && updatedDoc.clients) {
      // @ts-ignore
      const clientEmail = updatedDoc.clients.email || (Array.isArray(updatedDoc.clients) ? updatedDoc.clients[0]?.email : null);
      // @ts-ignore
      const clientName = updatedDoc.clients.full_name || (Array.isArray(updatedDoc.clients) ? updatedDoc.clients[0]?.full_name : null) || 'Client';

      if (clientEmail) {
        const docName = updatedDoc.document_type;
        const isApproved = newStatus === 'Approved';
        const isRejected = newStatus === 'Rejected';
        
        // Only notify for approved or rejected, not pending
        if (isApproved || isRejected) {
          const emailHtml = `
            <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eaeaea; border-radius: 12px; padding: 24px;">
              <h2 style="color: ${isApproved ? '#22c55e' : '#ef4444'}; text-align: center;">Document ${newStatus}!</h2>
              <p style="font-size: 16px;">Hello <b>${clientName}</b>,</p>
              <p style="font-size: 16px;">We have reviewed your recently uploaded document.</p>
              
              <div style="background: #f9fafb; padding: 16px; border-radius: 8px; margin: 20px 0; border-left: 4px solid ${isApproved ? '#22c55e' : '#ef4444'};">
                <p style="margin: 0; font-size: 15px;"><b>Document:</b> ${docName}</p>
                <p style="margin: 8px 0 0 0; font-size: 15px;"><b>Status:</b> ${newStatus}</p>
              </div>

              ${isRejected ? '<p style="font-size: 16px; color: #ef4444;">Please log in to your portal and re-upload a clear and valid version of this document.</p>' : '<p style="font-size: 16px;">Thank you for providing the required information.</p>'}
              
              <div style="text-align: center; margin-top: 30px;">
                <a href="https://amazonfast.vercel.app/portal" style="background-color: #ff6b35; color: white; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 8px; display: inline-block;">Go to Portal</a>
              </div>
            </div>
          `;

          // Import dynamically or we can add it to the top
          try {
            const { sendEmail } = await import('@/lib/email');
            await sendEmail({
              to: clientEmail,
              subject: `Update on your document: ${docName}`,
              html: emailHtml
            });
          } catch (e) {
            console.error('Failed to send status update email:', e);
          }
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Error in update-doc-status:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
