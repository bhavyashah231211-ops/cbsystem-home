// CBSystem Home - Supabase Edge Function "cbs-home"
// Receives website orders and enquiries, saves them to Postgres, and (optionally) emails you.
//
// Called by the website like this:
//   POST https://xjhkxqhomqdyxgahhtzn.supabase.co/functions/v1/cbs-home
//   body: { "type": "order" | "enquiry", ... }
//
// Secrets (Edge Functions > Secrets). SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are provided automatically.
//   ALLOWED_ORIGINS  optional, comma separated, e.g. https://cbsystem.co.uk,https://bhavyashah231211-ops.github.io
//                    If not set, any website may call the function.
//   RESEND_API_KEY   optional, enables email notifications to you (and a confirmation to the customer)
//   NOTIFY_EMAIL     where order/enquiry alerts go, e.g. orders@cbsystem.co.uk
//   FROM_EMAIL       sender, must be on a domain verified in Resend, e.g. "CBSystem <orders@cbsystem.co.uk>"

import { createClient } from "npm:@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  { auth: { persistSession: false } },
);

const ALLOWED = (Deno.env.get("ALLOWED_ORIGINS") ?? "")
  .split(",").map((s) => s.trim()).filter(Boolean);
const RESEND_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const NOTIFY_EMAIL = Deno.env.get("NOTIFY_EMAIL") ?? "";
const FROM_EMAIL = Deno.env.get("FROM_EMAIL") ?? "CBSystem <onboarding@resend.dev>";

const MAX_PER_EMAIL_PER_HOUR = 5;

function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get("origin") ?? "";
  let allow = "*";
  if (ALLOWED.length) allow = ALLOWED.includes(origin) ? origin : ALLOWED[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "content-type, authorization, apikey, x-client-info",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

function json(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(req), "Content-Type": "application/json" },
  });
}

const str = (v: unknown, max: number): string =>
  typeof v === "string" ? v.trim().slice(0, max) : "";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]!));

function makeReference(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // no 0/O/1/I
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return "CBS-" + Array.from(bytes, (b) => chars[b % chars.length]).join("");
}

async function sendEmail(to: string, subject: string, html: string, replyTo?: string) {
  if (!RESEND_KEY || !to) return;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${RESEND_KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: FROM_EMAIL, to: [to], subject, html, ...(replyTo ? { reply_to: replyTo } : {}) }),
    });
    if (!res.ok) console.error("Resend error", res.status, await res.text());
  } catch (err) {
    console.error("Resend failed", err);
  }
}

async function tooMany(table: string, email: string): Promise<boolean> {
  const since = new Date(Date.now() - 60 * 60 * 1000).toISOString();
  const { count, error } = await supabase
    .from(table).select("id", { count: "exact", head: true })
    .ilike("email", email).gte("created_at", since);
  if (error) { console.error("rate check", error.message); return false; }
  return (count ?? 0) >= MAX_PER_EMAIL_PER_HOUR;
}

// ---------------- ORDER ----------------
async function handleOrder(req: Request, b: Record<string, unknown>): Promise<Response> {
  const business = str(b.business, 160);
  const contact = str(b.contact_name, 120);
  const email = str(b.email, 200);
  const phone = str(b.phone, 40);
  const address = str(b.address, 300);
  const notes = str(b.notes, 3000);
  const billing = b.billing === "yearly" ? "yearly" : "monthly";
  const trial = b.trial === true;

  if (!business || !contact || !phone || !address) return json(req, { ok: false, error: "Please complete all business details." }, 400);
  if (!EMAIL_RE.test(email)) return json(req, { ok: false, error: "Please enter a valid email address." }, 400);
  if (b.terms !== true) return json(req, { ok: false, error: "Please agree to the terms." }, 400);

  if (!Array.isArray(b.items) || b.items.length < 1 || b.items.length > 12) {
    return json(req, { ok: false, error: "Please choose at least one product." }, 400);
  }
  const items = (b.items as Record<string, unknown>[]).map((i) => ({
    id: str(i.id, 40),
    name: str(i.name, 120),
    price: str(String(i.price ?? ""), 20),
    unit: str(i.unit, 160),
  }));
  if (items.some((i) => !i.id || !i.name)) return json(req, { ok: false, error: "Invalid products." }, 400);

  // The total is recalculated here from the item prices, never trusted from the browser.
  const total = Math.round(items.reduce((s, i) => s + (parseFloat(i.price) || 0), 0) * 100) / 100;

  if (await tooMany("home_orders", email)) {
    return json(req, { ok: false, error: "Too many orders from this email. Please email us instead." }, 429);
  }

  const reference = makeReference();
  const { error } = await supabase.from("home_orders").insert({
    reference, business, contact_name: contact, email, phone, address,
    notes: notes || null, billing, trial, items, total,
    source_page: str(b.page, 300) || null,
    user_agent: (req.headers.get("user-agent") ?? "").slice(0, 300),
  });
  if (error) {
    console.error("insert order", error.message);
    return json(req, { ok: false, error: "We could not save your order. Please try again." }, 500);
  }

  const rows = items.map((i) => `<tr><td style="padding:4px 12px 4px 0">${esc(i.name)}</td><td>£${esc(i.price)} <span style="color:#777">${esc(i.unit)}</span></td></tr>`).join("");
  await Promise.all([
    sendEmail(NOTIFY_EMAIL, `New CBSystem order ${reference}: ${business}`,
      `<h2>New order ${reference}</h2>
       <p><b>${esc(business)}</b><br>${esc(contact)}<br>${esc(email)}<br>${esc(phone)}<br>${esc(address)}</p>
       <p>Billing: ${billing} &middot; Free trial: ${trial ? "yes" : "no"}</p>
       <table>${rows}</table><p><b>Total: £${total.toFixed(2)}</b> (${billing}, excl. VAT)</p>
       <p>Notes: ${esc(notes) || "-"}</p>`, email),
    sendEmail(email, `We received your CBSystem order ${reference}`,
      `<p>Hello ${esc(contact)},</p>
       <p>Thank you for your order. Your reference is <b>${reference}</b>.</p>
       <table>${rows}</table><p><b>Total: £${total.toFixed(2)}</b> (${billing}, excl. VAT)</p>
       <p>We will be in touch shortly to set up your system and send your login details.</p>
       <p>CBSystem</p>`),
  ]);

  return json(req, { ok: true, reference });
}

// ---------------- ENQUIRY ----------------
async function handleEnquiry(req: Request, b: Record<string, unknown>): Promise<Response> {
  const name = str(b.name, 120);
  const email = str(b.email, 200);
  const phone = str(b.phone, 40);
  const message = str(b.message, 3000);

  if (!name) return json(req, { ok: false, error: "Please enter your name." }, 400);
  if (!EMAIL_RE.test(email)) return json(req, { ok: false, error: "Please enter a valid email address." }, 400);

  if (await tooMany("home_enquiries", email)) {
    return json(req, { ok: false, error: "Too many enquiries from this email. Please try again later." }, 429);
  }

  const { error } = await supabase.from("home_enquiries").insert({
    name, email, phone: phone || null, message: message || null,
    source_page: str(b.page, 300) || null,
    user_agent: (req.headers.get("user-agent") ?? "").slice(0, 300),
  });
  if (error) {
    console.error("insert enquiry", error.message);
    return json(req, { ok: false, error: "We could not save your enquiry. Please try again." }, 500);
  }

  await sendEmail(NOTIFY_EMAIL, `CBSystem enquiry from ${name}`,
    `<h2>New enquiry</h2><p><b>${esc(name)}</b><br>${esc(email)}<br>${esc(phone) || "-"}</p><p>${esc(message).replace(/\n/g, "<br>") || "-"}</p>`,
    email);

  return json(req, { ok: true });
}

// ---------------- ENTRY ----------------
Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: corsHeaders(req) });
  if (req.method !== "POST") return json(req, { ok: false, error: "Method not allowed" }, 405);

  const origin = req.headers.get("origin") ?? "";
  if (ALLOWED.length && origin && !ALLOWED.includes(origin)) {
    return json(req, { ok: false, error: "Origin not allowed" }, 403);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json(req, { ok: false, error: "Invalid request." }, 400);
  }
  if (!body || typeof body !== "object") return json(req, { ok: false, error: "Invalid request." }, 400);

  // Honeypot: real visitors never fill this hidden field. Pretend success so bots move on.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return json(req, { ok: true, reference: "CBS-OK" });
  }

  try {
    if (body.type === "order") return await handleOrder(req, body);
    if (body.type === "enquiry") return await handleEnquiry(req, body);
    return json(req, { ok: false, error: "Unknown request type." }, 400);
  } catch (err) {
    console.error("unhandled", err);
    return json(req, { ok: false, error: "Something went wrong. Please try again." }, 500);
  }
});
