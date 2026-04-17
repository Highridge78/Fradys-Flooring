import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { galleryImages, siteKeywords } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "View recent hardwood installation, LVP installation, laminate, and sanding refinishing work by Frady's Flooring Service in Western NC.",
  keywords: siteKeywords,
};

export default function GalleryPage() {
  return (
    <div className="pb-16">
      <PageHero
        overline="Project Gallery"
        title="See the Flooring Work in Detail"
        description="Browse flooring project examples from Frady's Flooring Service. This gallery is built to be easy to swap with real project photos as new work is completed."
      />

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="Gallery"
          title="Hardwood, LVP, and Laminate Project Looks"
          description="Responsive image grid with realistic flooring placeholders ready for future project image swaps."
        />
        <div className="mt-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <CtaBanner />
      </section>
    </div>
  );
}
