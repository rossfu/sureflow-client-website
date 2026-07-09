import {
  Droplets,
  Flame,
  Microscope,
  CloudLightning,
  Waves,
  Biohazard,
  type LucideIcon,
} from "lucide-react";
import type { Service } from "@/config/services";

const iconMap: Record<Service["icon"], LucideIcon> = {
  droplets: Droplets,
  flame: Flame,
  microscope: Microscope,
  "cloud-lightning": CloudLightning,
  waves: Waves,
  biohazard: Biohazard,
};

/** One accent color per service — used anywhere services are listed, for quick visual scanning. */
export const serviceColor: Record<Service["icon"], string> = {
  droplets: "bg-sky-600",
  flame: "bg-orange-600",
  microscope: "bg-emerald-600",
  "cloud-lightning": "bg-violet-600",
  waves: "bg-cyan-700",
  biohazard: "bg-rose-600",
};

export function ServiceIcon({
  icon,
  className = "h-6 w-6",
}: {
  icon: Service["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon aria-hidden="true" className={className} strokeWidth={2} />;
}
