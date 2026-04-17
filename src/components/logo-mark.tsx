import Link from "next/link";

type LogoMarkProps = {
  compact?: boolean;
  className?: string;
};

export function LogoMark({ compact = false, className = "" }: LogoMarkProps) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c89c4a] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${className}`}
      aria-label="Frady's Flooring Service home"
    >
      <span className="grid h-12 w-12 place-items-center rounded-full bg-[#0f2b46] text-[#f0dcb4] shadow-sm ring-2 ring-[#c89c4a]/45">
        <svg
          viewBox="0 0 64 64"
          role="img"
          aria-hidden="true"
          className="h-8 w-8"
        >
          <path
            d="M10 16h44v6H10zm0 13h44v6H10zm0 13h44v6H10z"
            fill="currentColor"
          />
          <path
            d="M18 9h6v46h-6zm22 0h6v46h-6z"
            fill="#c89c4a"
            opacity=".9"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="leading-tight">
          <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-[#835d24]">
            Frady's
          </span>
          <span className="block text-base font-bold text-[#0f2b46] group-hover:text-[#1b4b75]">
            Flooring Service
          </span>
        </span>
      ) : null}
    </Link>
  );
}
