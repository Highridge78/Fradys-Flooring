import type { Metadata } from "next";
import { ContactBlock } from "@/components/contact-block";
import { ContactForm } from "@/components/contact-form";
import { CtaButtons } from "@/components/cta-buttons";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { businessDetails, siteKeywords } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or request a free quote from Frady's Flooring Service in Sylva, NC for hardwood installation, LVP installation, laminate, and sanding refinishing.",
  keywords: siteKeywords,
};

export default function ContactPage() {
  return (
    <div className="pb-16">
      <PageHero
        overline="Contact Frady's Flooring Service"
        title="Call Now or Request Your Free Quote"
        description="Reach Frady's Flooring Service for hardwood installation, LVP installation, laminate, tear-out, and sanding refinishing in Western North Carolina."
      />

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="Get in Touch"
          title="Talk Directly with the Frady Team"
          description={businessDetails.serviceAreaSentence}
        />
        <div className="mt-6">
          <CtaButtons />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-4 pt-12 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
        <ContactBlock />
        <ContactForm />
      </section>
    </div>
  );
}
