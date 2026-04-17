import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { primaryPhone, toTelHref } from "@/lib/site-data";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#d4c7ae] bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <LogoMark />
        <nav aria-label="Primary" className="order-3 w-full md:order-2 md:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-semibold text-[#0f2b46]">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded px-2 py-1 transition hover:text-[#835d24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89c4a]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={toTelHref(primaryPhone)}
          className="order-2 inline-flex items-center justify-center rounded-md bg-[#0f2b46] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#163a5e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89c4a] md:order-3"
        >
          Call Now: {primaryPhone}
        </a>
      </div>
    </header>
  );
}
