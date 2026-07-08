import { site } from "@/config/site";
import { cities, type City } from "@/config/cities";
import type { Service } from "@/config/services";
import type { Faq } from "@/config/faqs";
import type { Review } from "@/config/reviews";
import type { Post } from "@/config/posts";

/**
 * JSON-LD builders. Rendered via <JsonLd /> (components/ui/JsonLd.tsx).
 * All data flows from config — no hand-maintained schema anywhere.
 */

const businessId = `${site.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phoneE164,
    email: site.email,
    foundingDate: String(site.foundedYear),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, ${c.state}`,
    })),
    sameAs: Object.values(site.social).filter(Boolean),
    ...(site.rating.showSchema
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: site.rating.value,
            reviewCount: site.rating.count,
          },
        }
      : {}),
  };
}

export function serviceSchema(service: Service, city?: City) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city ? `${service.name} in ${city.label}` : service.name,
    serviceType: service.name,
    description: service.excerpt,
    provider: { "@id": businessId },
    areaServed: city
      ? [{ "@type": "City", name: city.label }]
      : cities.map((c) => ({ "@type": "City", name: c.label })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: { "@type": "ContactPoint", telephone: site.phoneE164, contactType: "emergency" },
    },
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}

/** Only emitted when site.rating.showSchema is true (real reviews gate). */
export function reviewsPageSchema(reviewList: Review[]) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: site.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
    },
    review: reviewList.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: r.rating },
      reviewBody: r.text,
    })),
  };
}

export function blogPostingSchema(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@id": businessId },
    mainEntityOfPage: `${site.url}/blog/${post.slug}`,
  };
}
