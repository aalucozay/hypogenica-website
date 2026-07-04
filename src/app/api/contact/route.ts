import { NextResponse } from "next/server";

// Contact form endpoint. Validates input server-side and, when a Resend API
// key is configured, delivers the message by email. If no provider is
// configured it returns 503 so the client can fall back to a mailto: link —
// the form keeps working with zero backend setup.
//
// Configure in the environment (see .env.example):
//   RESEND_API_KEY     – Resend API key (enables real delivery)
//   CONTACT_TO_EMAIL   – recipient (defaults to info@hypogenica.com)
//   CONTACT_FROM_EMAIL – verified sender (defaults to Resend's test sender)

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are all required." },
      { status: 400 },
    );
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }
  if (message.length > 5000) {
    return NextResponse.json(
      { error: "Message is too long." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // No provider wired up — tell the client to fall back to mailto.
    return NextResponse.json(
      { error: "Email delivery is not configured." },
      { status: 503 },
    );
  }

  const to = process.env.CONTACT_TO_EMAIL || "info@hypogenica.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Hypogenica <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `Website inquiry from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
    }),
  });

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to send message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
