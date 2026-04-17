import { businessDetails, toTelHref } from "@/lib/site-data";

export function ContactBlock() {
  return (
    <section className="rounded-2xl border border-[#d9c8a8] bg-[#f4ecdc] p-6 md:p-8">
      <h2 className="text-2xl font-bold text-[#0f2b46]">Contact Frady&apos;s Flooring Service</h2>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#835d24]">Phones</h3>
          <ul className="mt-2 space-y-1 text-[#0f2b46]">
            {businessDetails.phones.map((phone) => (
              <li key={phone}>
                <a href={toTelHref(phone)} className="font-semibold hover:underline">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#835d24]">Email</h3>
          <a
            href={`mailto:${businessDetails.email}`}
            className="mt-2 inline-block text-[#0f2b46] font-semibold hover:underline"
          >
            {businessDetails.email}
          </a>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#835d24]">Hours</h3>
          <ul className="mt-2 space-y-1 text-[#0f2b46]">
            {businessDetails.hours.map((entry) => (
              <li key={entry.day}>
                {entry.day}: {entry.time}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#835d24]">
            Service Area
          </h3>
          <p className="mt-2 text-[#0f2b46]">{businessDetails.serviceAreaSentence}</p>
        </div>
      </div>
    </section>
  );
}
