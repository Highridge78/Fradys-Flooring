import Link from "next/link";
import { LogoMark } from "@/components/logo-mark";
import { businessDetails, toTelHref } from "@/lib/site-data";

const footerNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[#d4c7ae] bg-[#0f2b46] text-[#f4ecdc]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr]">
        <div className="space-y-4">
          <LogoMark compact className="text-white" />
          <p className="max-w-xs text-sm text-[#d9c8a8]">
            Family-owned flooring craftsmanship with over 30 years of combined
            experience serving homeowners across Western North Carolina.
          </p>
          <a
            href={toTelHref(businessDetails.phones[0])}
            className="inline-flex rounded-md bg-[#c89c4a] px-4 py-2 text-sm font-bold text-[#0f2b46] transition hover:bg-[#d7ac59]"
          >
            Call Now: {businessDetails.phones[0]}
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {businessDetails.phones.map((phone) => (
              <li key={phone}>
                <a href={toTelHref(phone)} className="hover:text-[#c89c4a]">
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${businessDetails.email}`}
                className="hover:text-[#c89c4a]"
              >
                {businessDetails.email}
              </a>
            </li>
            <li>{businessDetails.serviceAreaSentence}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white">Hours & Navigation</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {businessDetails.hours.map((entry) => (
              <li key={entry.day}>
                {entry.day}: {entry.time}
              </li>
            ))}
          </ul>
          <nav aria-label="Footer" className="mt-5">
            <ul className="space-y-2 text-sm">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#c89c4a]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
