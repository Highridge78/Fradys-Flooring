import { CtaButtons } from "@/components/cta-buttons";

type PageHeroProps = {
  overline: string;
  title: string;
  description: string;
};

export function PageHero({ overline, title, description }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0f2b46] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(200,156,74,.35),_transparent_40%),linear-gradient(130deg,rgba(11,28,45,.95),rgba(26,64,100,.9))]" />
      <div className="relative mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f0dcb4]">
          {overline}
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold leading-tight md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-[#f4ecdc]">{description}</p>
        <CtaButtons className="mt-8" />
      </div>
    </section>
  );
}
