import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { siteKeywords } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Frady's Flooring Service, a family business rooted in Western NC with over 30 years of combined flooring experience.",
  keywords: siteKeywords,
};

export default function AboutPage() {
  return (
    <div className="pb-16">
      <PageHero
        overline="About Frady's Flooring Service"
        title="A Family Flooring Business Built Across Generations"
        description="Hoot and Ott Frady lead a father and son flooring team focused on trusted craftsmanship, honest service, and reliable results for homeowners in Western North Carolina."
      />

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <SectionHeading
          overline="Our Story"
          title="Passed Down Through the Frady Family"
        />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f2b46]">
              Father and Son Team
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2f3c48]">
              Frady&apos;s Flooring Service is run by Hoot and Ott Frady, a
              father and son team serving families across Western North
              Carolina. Every project is hands-on and focused on dependable
              workmanship from start to finish.
            </p>
          </article>
          <article className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f2b46]">
              Family Business Legacy
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2f3c48]">
              The business was passed down from Hoot&apos;s father, keeping the
              family standards and work ethic alive. That legacy still shapes
              how every flooring job is planned, installed, and finished today.
            </p>
          </article>
          <article className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f2b46]">
              30+ Years of Combined Experience
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2f3c48]">
              With over 30 years of combined flooring experience, Frady&apos;s
              Flooring Service brings proven process and detail to hardwood,
              laminate, LVP, and refinishing work.
            </p>
          </article>
          <article className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[#0f2b46]">
              Local Western NC Roots
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#2f3c48]">
              This is a local company with roots in Western North Carolina.
              Frady&apos;s Flooring Service is committed to honest workmanship,
              straightforward recommendations, and finished floors built to last.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pt-16 sm:px-6">
        <CtaBanner />
      </section>
    </div>
  );
}
