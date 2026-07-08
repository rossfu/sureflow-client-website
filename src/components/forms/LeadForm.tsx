"use client";

import { useActionState } from "react";
import { usePathname } from "next/navigation";
import { Phone, CheckCircle2, LoaderCircle } from "lucide-react";
import { submitLead, type LeadState } from "@/app/actions";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

const initialState: LeadState = { status: "idle" };

const inputClasses =
  "h-12 w-full rounded-lg border border-slate-300 bg-white px-4 text-base text-brand-900 placeholder:text-slate-400 transition-colors duration-200 focus:border-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-600/30";

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-semibold text-brand-900">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 text-sm font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

/**
 * Four fields. Every additional field costs conversions from people
 * standing in water — resist adding more.
 */
export function LeadForm() {
  const [state, formAction, isPending] = useActionState(submitLead, initialState);
  const pathname = usePathname();
  const errors = state.fieldErrors ?? {};

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center" role="status">
        <CheckCircle2 aria-hidden="true" className="mx-auto h-12 w-12 text-emerald-600" />
        <h3 className="mt-4 font-display text-2xl font-bold text-brand-900">Request received.</h3>
        {/* Peak-end rule: tell them exactly what happens next */}
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-slate-600">
          A team member will call you back within <strong className="text-brand-900">5 minutes</strong> during
          emergencies (within 30 minutes for non-urgent requests). Keep your phone nearby.
        </p>
        <p className="mt-5 text-sm text-slate-500">
          Situation getting worse? Don&rsquo;t wait for the callback:
        </p>
        <a
          href={`tel:${site.phoneE164}`}
          data-cta="form-success"
          className="mt-2 inline-flex items-center gap-2 font-display text-xl font-bold text-accent-600 transition-colors duration-200 hover:text-accent-700"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(inputClasses, errors.name && "border-red-400")}
            placeholder="Jane Smith"
          />
        </Field>
        <Field label="Phone number" name="phone" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={cn(inputClasses, errors.phone && "border-red-400")}
            placeholder="(512) 555-0199"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="City" name="city" error={errors.city}>
          <input
            id="city"
            name="city"
            type="text"
            autoComplete="address-level2"
            required
            aria-invalid={Boolean(errors.city)}
            aria-describedby={errors.city ? "city-error" : undefined}
            className={cn(inputClasses, errors.city && "border-red-400")}
            placeholder="Austin"
          />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What happened?" name="details" error={errors.details}>
          <textarea
            id="details"
            name="details"
            rows={4}
            required
            aria-invalid={Boolean(errors.details)}
            aria-describedby={errors.details ? "details-error" : undefined}
            className={cn(inputClasses, "h-auto py-3", errors.details && "border-red-400")}
            placeholder="e.g. Water heater burst in the garage about an hour ago — water reached the hallway carpet."
          />
        </Field>
      </div>

      {/* Honeypot — hidden from humans, catnip for bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
      <input type="hidden" name="page" value={pathname} />

      {state.status === "error" && state.message && (
        <p role="alert" className="mt-5 rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        data-cta="lead-form-submit"
        className="mt-6 flex h-14 w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent-600 px-8 text-lg font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isPending ? (
          <>
            <LoaderCircle aria-hidden="true" className="h-5 w-5 animate-spin" />
            Sending…
          </>
        ) : (
          "Request a Callback — 5 Minutes or Less"
        )}
      </button>
      <p className="mt-3 text-center text-sm text-slate-500">
        No obligation. Free estimate. Or skip the form:{" "}
        <a href={`tel:${site.phoneE164}`} data-cta="form-skip" className="font-semibold text-accent-600 hover:text-accent-700">
          {site.phone}
        </a>
      </p>
    </form>
  );
}
