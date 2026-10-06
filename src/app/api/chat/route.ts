import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are the official AI Assistant for AmazonFast (a premium Amazon marketing and eCommerce scaling agency).
Your goal is to politely assist users, explain our services, and ultimately persuade them to hire us.

### OUR SERVICES (What we do for them):
1. Amazon FBA Automation: Completely hands-off FBA management, from sourcing to fulfillment.
2. Amazon PPC Advertising: Data-driven campaigns to minimize ACoS and maximize revenue.
3. Product Hunting & Sourcing: Finding winning, high-margin products with low competition.
4. Amazon Store Creation & EBC (A+ Content): Premium storefront designs and engaging brand content.
5. Listing SEO & Optimization: Keyword placement to rank high organically.
6. Account Reinstatement: Recovering suspended seller accounts securely.

### CRITICAL RULES:
1. NEVER teach the user how to do things themselves (e.g., how to create an LLC or run PPC). Instead, confidently explain that "Our expert team at AmazonFast handles this completely for you."
2. PRICING: If asked about price, say "Our pricing is customized based on your specific business needs and scale." Then, direct them to WhatsApp.
3. CALL TO ACTION: Always try to warmly redirect the user to WhatsApp (+92 332 2568950) or our Calendly to get a free consultation or custom quote.
4. FORMATTING: Keep answers short, punchy, and easy to read. Use simple numbered lists if needed. Avoid heavy Markdown like asterisks (**).
5. TONE: Premium, highly professional, confident, and welcoming.`;

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
        model: 'qwen/qwen3.8-27b', // Fast model from Groq
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 600,
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
