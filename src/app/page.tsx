import type { Metadata } from "next";
import Link from "next/link";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { CtaButtons } from "@/components/cta-buttons";
import { GalleryGrid } from "@/components/gallery-grid";
import { SectionHeading } from "@/components/section-heading";
import { ServiceGrid } from "@/components/service-grid";
import {
  businessDetails,
  businessTagline,
  galleryImages,
  homeTrustBarItems,
  servicePreviewItems,
  siteKeywords,
  whyChooseItems,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Family-Owned Flooring Service in Western North Carolina",
  description:
    "Family-owned flooring Sylva NC company offering hardwood installation, LVP installation, laminate, and sanding refinishing throughout Western NC.",
  keywords: siteKeywords,
};

export default function Home() {
  return (
    <div className="pb-16">
      <section className="relative isolate overflow-hidden bg-[#0f2b46]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1617098474202-0d0d7f60f6f9?auto=format&fit=crop&w=1800&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,20,32,.94),rgba(15,43,70,.78),rgba(200,156,74,.42))]" />
        <div className="relative mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0dcb4]">
            Frady&apos;s Flooring Service
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-white md:text-6xl">
            Family-Owned Flooring Service in Western North Carolina
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-[#f4ecdc]">{businessTagline}</p>
          <CtaButtons className="mt-8" />
          <div className="mt-10 grid gap-3 text-sm text-[#f4ecdc] sm:grid-cols-3">
            <p className="rounded-md border border-[#f0dcb4]/35 bg-[#0f2b46]/45 px-3 py-2">
              Family Owned &amp; Operated
            </p>
            <p className="rounded-md border border-[#f0dcb4]/35 bg-[#0f2b46]/45 px-3 py-2">
              30+ Years Combined Experience
            </p>
            <p className="rounded-md border border-[#f0dcb4]/35 bg-[#0f2b46]/45 px-3 py-2">
              Free Quotes Across Western NC
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d9c8a8] bg-[#f4ecdc]">
        <div className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {homeTrustBarItems.map((item) => (
            <p
              key={item}
              className="rounded-md border border-[#d9c8a8] bg-white px-3 py-3 text-center text-sm font-semibold text-[#0f2b46]"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="Services"
          title="Professional Flooring Services"
          description="Trusted installation and refinishing services for homeowners in Sylva and across Western North Carolina."
        />
        <div className="mt-8">
          <ServiceGrid items={servicePreviewItems} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="Why Choose Frady&apos;s"
          title="Built on Family Craftsmanship and Honest Work"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {whyChooseItems.map((item) => (
            <article
              key={item.title}
              className="rounded-xl border border-[#d9c8a8] bg-white p-5 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[#0f2b46]">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#2f3c48]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            overline="Gallery Preview"
            title="Recent Flooring Project Looks"
          />
          <Link
            href="/gallery"
            className="inline-flex rounded-md bg-[#0f2b46] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#163a5e]"
          >
            View Full Gallery
          </Link>
        </div>
        <div className="mt-8">
          <GalleryGrid images={galleryImages} compact />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading overline="Service Area" title="Western North Carolina" />
        <p className="mt-4 rounded-xl border border-[#d9c8a8] bg-white px-5 py-4 text-[#2f3c48]">
          {businessDetails.serviceAreaSentence}
        </p>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <CtaBanner
          title="Call Now or Request Your Free Quote"
          description="Frady&apos;s Flooring Service is ready to help with hardwood installation, LVP installation, laminate, and sanding refinishing."
        />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <ContactBlock />
      </section>
    </div>
  );
}
