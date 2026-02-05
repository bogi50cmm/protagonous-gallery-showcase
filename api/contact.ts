import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Nedostaju podaci" });
  }

  try {
    await resend.emails.send({
      from: "Kontakt forma <onboarding@resend.dev>",
      to: ["malici125@gmail.com"], // TVOJ EMAIL
      subject: "Nova poruka sa sajta",
      html: `
        <h2>Nova poruka</h2>
        <p><b>Ime:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Poruka:</b></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Email nije poslat" });
  }
}
