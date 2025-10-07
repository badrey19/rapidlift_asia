// src/pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";

type MessageIn = {
  id?: string;
  role: "user" | "assistant" | "system";
  text: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();

  const { messages } = req.body as { messages?: MessageIn[] };

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Invalid messages" });
  }

  try {
    const systemPrompt = {
      role: "system",
      content:
        "You are RapidLift Asia assistant. Provide concise, helpful, and safety-minded recommendations for heavy-equipment rental (especially cranes). If asked about price, clearly say it's only an estimate and suggest contacting sales.",
    };

    const chatMessages = [
      systemPrompt,
      ...messages.map((m: MessageIn) => ({
        role: m.role,
        content: m.text,
      })),
    ];

    const result = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant", // ✅ model gratis Groq
        messages: chatMessages,
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!result.ok) {
      const txt = await result.text();
      console.error("Groq API error:", txt);
      return res.status(500).json({ error: "Groq request failed", detail: txt });
    }

    const payload = await result.json();
    const assistantText =
      payload?.choices?.[0]?.message?.content ??
      "Maaf, saya tidak bisa membantu saat ini.";

    return res.status(200).json({ text: assistantText });
  } catch (err: unknown) {
  const error = err instanceof Error ? err.message : String(err);
  console.error(error);
  return res.status(500).json({ error });
}

}
