import type { Metadata } from "next";
import { ContactBlock } from "@/components/contact-block";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { servicesPageSections, siteKeywords } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Frady's Flooring Service provides hardwood installation, LVP installation, laminate, tear-out, and sanding refinishing in Western North Carolina.",
  keywords: siteKeywords,
};

export default function ServicesPage() {
  return (
    <div className="pb-16">
      <PageHero
        overline="Flooring Services"
        title="Professional Installation and Refinishing in Western NC"
        description="Frady's Flooring Service provides professional flooring installation and refinishing for homeowners across Western North Carolina. From hardwood and LVP to laminate, tear-out, and refinishing, the focus is always on quality workmanship, honest service, and a finished product built to last."
      />

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="What We Offer"
          title="Complete Flooring Services"
        />
        <div className="mt-8 space-y-5">
          {servicesPageSections.map((service) => (
            <article
              key={service.title}
              className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold text-[#0f2b46]">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#2f3c48]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <CtaBanner />
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <ContactBlock />
      </section>
    </div>
  );
}
