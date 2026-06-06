import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

// Where contact form submissions are delivered.
const TO_EMAIL = process.env.CONTACT_TO_EMAIL
// Verified sender. Use Resend's shared domain until a custom domain is verified.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>"

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY || !TO_EMAIL) {
    console.error("Contact form misconfigured: missing RESEND_API_KEY or CONTACT_TO_EMAIL")
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    )
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  const { name, email, message } = (body ?? {}) as Record<string, unknown>

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !message.trim()
  ) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 })
  }

  if (name.length > 100 || email.length > 200 || message.length > 5000) {
    return NextResponse.json({ error: "One or more fields are too long." }, { status: 400 })
  }

  const safeName = escapeHtml(name.trim())
  const safeEmail = escapeHtml(email.trim())
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />")

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      replyTo: email.trim(),
      subject: `New portfolio message from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`,
      html: `
        <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin: 0 0 16px;">New portfolio message</h2>
          <p style="margin: 0 0 4px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin: 0 0 16px;"><strong>Email:</strong> ${safeEmail}</p>
          <div style="border-top: 1px solid #ddd; padding-top: 16px;">${safeMessage}</div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send message." }, { status: 502 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("Contact route error:", err)
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 })
  }
}
