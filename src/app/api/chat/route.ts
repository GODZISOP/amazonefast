import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a professional, helpful, and highly knowledgeable AI assistant for Amazon Fast Services (a premium Amazon marketing agency).
Your goal is to provide real, actionable answers and act as an expert consultant for our users.
If a user asks how to create an Amazon account, how to form an LLC, how Amazon FBA works, PPC strategies, or Product Hunting, you MUST give them a clear, step-by-step, and helpful answer.
Do NOT just redirect them to WhatsApp for informational questions. Answer their questions thoroughly but keep it easy to read (use bullet points if needed).
Always be extremely polite and maintain a premium agency tone. 

CRITICAL INSTRUCTIONS:
- Give highly informative and accurate answers regarding Amazon business, FBA, LLCs, and Shopify.
- ONLY redirect them to WhatsApp (+92 332 2568950) if they explicitly ask about our agency pricing, want to hire us for a project, or want a customized business audit.
- FORMATTING: Do NOT use Markdown (no asterisks **, no hashes ###). Use plain text. Use line breaks (newlines) and simple numbered lists (1. 2. 3.) to make the text clean and easy to read.
- Keep your answers concise enough to fit in a chat window, but detailed enough to be genuinely helpful.`;

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
