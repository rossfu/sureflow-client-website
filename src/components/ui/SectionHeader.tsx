import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "center" | "left";
  /** For dark section backgrounds */
  onDark?: boolean;
}

export function SectionHeader({ eyebrow, title, lede, align = "center", onDark = false }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <p className={cn("text-sm font-semibold uppercase tracking-widest", onDark ? "text-accent-400" : "text-accent-600")}>
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl",
          onDark ? "text-white" : "text-brand-900",
        )}
      >
        {title}
      </h2>
      {lede ? (
        <p className={cn("mt-4 text-lg leading-relaxed", onDark ? "text-white/70" : "text-slate-600")}>{lede}</p>
      ) : null}
    </div>
  );
}
