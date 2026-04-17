import { CtaButtons } from "@/components/cta-buttons";

type CtaBannerProps = {
  title?: string;
  description?: string;
};

export function CtaBanner({
  title = "Ready to Start Your Flooring Project?",
  description = "Call Frady's Flooring Service today or request your free quote to get expert flooring help in Western North Carolina.",
}: CtaBannerProps) {
  return (
    <section className="rounded-2xl bg-[#0f2b46] px-6 py-10 text-white shadow-lg md:px-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="mt-3 max-w-3xl text-[#f4ecdc]">{description}</p>
      <CtaButtons className="mt-6" />
    </section>
  );
}
