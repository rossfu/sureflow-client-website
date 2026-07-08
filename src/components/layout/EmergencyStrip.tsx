import { Phone, Zap } from "lucide-react";
import { site } from "@/config/site";
import { Container } from "@/components/ui/Container";

/** Thin top strip: the prompt (phone) is visible from pixel one. */
export function EmergencyStrip() {
  return (
    <div className="bg-brand-950 text-white">
      <Container className="flex h-10 items-center justify-between gap-4 text-sm">
        <p className="flex items-center gap-2 truncate">
          <Zap aria-hidden="true" className="h-4 w-4 shrink-0 text-accent-400" />
          <span className="truncate">
            24/7 Emergency Service
            <span className="hidden sm:inline"> — on-site in {site.responseTimeMinutes} minutes</span>
          </span>
        </p>
        <a
          href={`tel:${site.phoneE164}`}
          data-cta="top-strip"
          className="flex shrink-0 items-center gap-1.5 font-semibold text-accent-400 transition-colors duration-200 hover:text-accent-300"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          {site.phone}
        </a>
      </Container>
    </div>
  );
}
