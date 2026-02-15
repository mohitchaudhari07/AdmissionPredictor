const { OpenAI } = require("openai");

// Function to ask chatbot
async function askai(req, res) {
  const { Message } = req.body;
  const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  try {
    const response = await client.responses.create({
      model: "openai/gpt-oss-20b",

      input: [
        {
          role: "system",
          content: `
You are an AI Engineering Admission Counselor.

You help students with:
- Answer must be concise, accurate, and student-friendly.
- Answer should be maximum 50 words.
- College admission chances
- Cutoff analysis
- Branch prediction
- Safe/Target/Dream colleges
- Counseling guidance

Answer specifically for Maharshtra engineering admissions 
(JEE, MHT-CET).

Be concise, accurate, and student-friendly.
          `,
        },
        {
          role: "user",
          content: Message,
        },
      ],
    });

    const answer = response.output_text.trim();
    res.json({ answer });
  } catch (error) {
    console.error("Chatbot Error:", error);
    res.status(500).json({ error: "Sorry, I couldn’t process your query." });
  }
}

module.exports = {
  askai,
};
