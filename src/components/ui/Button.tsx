import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "dark" | "ghost";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  /* primary = call-to-action orange; reserved for the two site actions */
  primary:
    "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-600 shadow-sm",
  secondary:
    "bg-white text-brand-900 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 focus-visible:ring-brand-700",
  dark: "bg-brand-800 text-white hover:bg-brand-700 focus-visible:ring-brand-700",
  ghost: "text-brand-900 hover:bg-brand-50 focus-visible:ring-brand-700",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-lg",
};

interface ButtonProps {
  href?: string;
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Analytics hook: which placement drove the action */
  dataCta?: string;
  disabled?: boolean;
  children: React.ReactNode;
}

export function Button({
  href,
  type = "button",
  variant = "primary",
  size = "md",
  className,
  dataCta,
  disabled,
  children,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-colors duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const external = href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http");
    if (external) {
      return (
        <a href={href} className={classes} data-cta={dataCta}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} data-cta={dataCta}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} data-cta={dataCta} disabled={disabled}>
      {children}
    </button>
  );
}
