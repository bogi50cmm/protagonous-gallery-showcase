import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return new Response(
      JSON.stringify({ message: "Nedostaju podaci" }),
      { status: 400 }
    );
  }

  try {
    await resend.emails.send({
      from: "Kontakt forma <onboarding@resend.dev>",
      to: ["malici125@gmail.com"],
      subject: "Nova poruka sa sajta",
      html: `
        <h2>Nova poruka</h2>
        <p><b>Ime:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Poruka:</b></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ message: "Greška pri slanju emaila" }),
      { status: 500 }
    );
  }
}