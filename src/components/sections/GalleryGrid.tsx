import { gallery } from "@/config/gallery";
import { getService } from "@/config/services";
import { Container } from "@/components/ui/Container";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";

/** Project proof: interactive before/after per job, with context. */
export function GalleryGrid() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <article key={item.title} className="flex flex-col">
              <BeforeAfterSlider
                beforeSrc={item.before}
                afterSrc={item.after}
                beforeAlt={`${item.title} — before restoration`}
                afterAlt={`${item.title} — after restoration`}
              />
              <h2 className="mt-5 font-display text-lg font-bold text-brand-900">{item.title}</h2>
              <p className="text-sm font-medium text-slate-500">
                {item.location} · {getService(item.serviceSlug)?.shortName}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
