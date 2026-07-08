"use server";

/**
 * LEAD CAPTURE — single integration point.
 * Wire this to the client's stack: CRM webhook, Resend/SendGrid email,
 * Twilio SMS to the on-call phone, or all three. Until wired, submissions
 * log server-side so nothing silently disappears in staging.
 */

export interface LeadState {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "phone" | "city" | "details", string>>;
}

const PHONE_RE = /^[\d\s()+\-.]{7,20}$/;

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Honeypot: real users never fill this hidden field
  if (formData.get("company")) {
    return { status: "success" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const details = String(formData.get("details") ?? "").trim();

  const fieldErrors: LeadState["fieldErrors"] = {};
  if (name.length < 2) fieldErrors.name = "Please enter your name.";
  if (!PHONE_RE.test(phone)) fieldErrors.phone = "Please enter a valid phone number.";
  if (city.length < 2) fieldErrors.city = "Please enter your city.";
  if (details.length < 5) fieldErrors.details = "Briefly describe what happened.";

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const lead = {
    name,
    phone,
    city,
    details,
    page: String(formData.get("page") ?? ""),
    receivedAt: new Date().toISOString(),
  };

  try {
    const webhook = process.env.LEAD_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
    } else {
      // TODO(agency): replace with the client's lead destination.
      console.log("[LEAD]", JSON.stringify(lead));
    }
    return { status: "success" };
  } catch (err) {
    console.error("[LEAD ERROR]", err);
    return {
      status: "error",
      message: "Something went wrong sending your request. Please call us directly — we answer 24/7.",
    };
  }
}
