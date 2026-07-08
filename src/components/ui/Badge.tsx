import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

/** Trust chip: check icon + short claim. */
export function Badge({ label, onDark = false }: { label: string; onDark?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium",
        onDark ? "text-white/80" : "text-slate-700",
      )}
    >
      <CheckCircle2 aria-hidden="true" className={cn("h-4 w-4 shrink-0", onDark ? "text-accent-400" : "text-accent-600")} />
      {label}
    </span>
  );
}
