import Link from "next/link";
import { primaryPhone, toTelHref } from "@/lib/site-data";

type CtaButtonsProps = {
  centered?: boolean;
  className?: string;
};

export function CtaButtons({
  centered = false,
  className = "",
}: CtaButtonsProps) {
  return (
    <div
      className={`flex flex-wrap gap-3 ${centered ? "justify-center" : ""} ${className}`}
    >
      <a
        href={toTelHref(primaryPhone)}
        className="inline-flex items-center justify-center rounded-md bg-[#c89c4a] px-5 py-3 text-sm font-bold text-[#0f2b46] transition hover:bg-[#d7ac59] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0dcb4]"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md border border-[#c89c4a] bg-white px-5 py-3 text-sm font-bold text-[#0f2b46] transition hover:bg-[#f4ecdc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f0dcb4]"
      >
        Get a Free Quote
      </Link>
    </div>
  );
}
