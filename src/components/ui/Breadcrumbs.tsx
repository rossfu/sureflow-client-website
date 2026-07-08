import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

/** Breadcrumb trail + BreadcrumbList schema, from one prop. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="overflow-x-auto no-scrollbar">
      <JsonLd data={breadcrumbSchema(items)} />
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-sm text-white/60">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 text-white/40" />}
              {last ? (
                <span aria-current="page" className="font-medium text-white/90">
                  {item.name}
                </span>
              ) : (
                <Link href={item.path} className="transition-colors duration-200 hover:text-white">
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
