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
