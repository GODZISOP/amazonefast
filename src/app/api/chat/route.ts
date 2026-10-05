import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a professional, helpful, and concise AI assistant for Amazon Fast Services (a premium Amazon marketing agency).
Your goal is to answer basic questions about our services: Amazon FBA Automation, Amazon PPC, Amazon Product Hunting, Amazon Store Creation, A+ Content/EBC, and Shopify Dropshipping.
Always be extremely polite and maintain a premium agency tone.
Keep your answers brief (1-3 sentences max) to fit inside a small chat window. Do NOT write long paragraphs.

CRITICAL INSTRUCTIONS:
- If a user asks for complex details, pricing, says they want to start a project, or asks to talk to a human, you MUST warmly redirect them to our WhatsApp.
- Example redirect: "I'd love to help you with that! For detailed consultation and pricing, please connect with our senior strategists directly on WhatsApp at +92 332 2568950."`;

    const groqApiKey = process.env.GROQ_API_KEY;

    if (!groqApiKey) {
      return NextResponse.json({ error: 'Missing GROQ_API_KEY' }, { status: 500 });
    }

    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${groqApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant', // Fast model from Groq
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 150, // Keep responses short
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Groq API Error:', errorData);
      return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
