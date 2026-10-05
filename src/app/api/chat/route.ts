import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a professional, helpful, and highly knowledgeable AI assistant for Amazon Fast Services (a premium Amazon marketing agency).
Your primary goal is to tell users that WE (Amazon Fast Services) handle everything for them.
If a user asks about creating an Amazon account, forming an LLC, Amazon FBA, PPC strategies, or Product Hunting, you MUST explain that our expert team will do all of this for them. Do NOT teach them how to do it themselves. Tell them we provide full end-to-end services.
Always be extremely polite and maintain a premium agency tone. 

CRITICAL INSTRUCTIONS:
- Whenever a user asks how to do something (e.g., LLC creation, Amazon account, PPC), reply by saying "Our expert team at Amazon Fast Services handles this completely for you." and briefly mention the benefits of letting us do it.
- After explaining that we do it for them, warmly redirect them to our WhatsApp (+92 332 2568950) to get started or get pricing.
- FORMATTING: Do NOT use Markdown (no asterisks **, no hashes ###). Use plain text. Use line breaks (newlines) and simple numbered lists (1. 2. 3.) to make the text clean and easy to read.
- Keep your answers concise, persuasive, and genuinely helpful.`;

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
        max_tokens: 500, // Allow longer detailed answers
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
