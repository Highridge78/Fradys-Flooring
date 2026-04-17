type ServiceItem = {
  title: string;
  description: string;
};

type ServiceGridProps = {
  items: ServiceItem[];
};

export function ServiceGrid({ items }: ServiceGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-xl border border-[#d9c8a8] bg-white p-6 shadow-sm"
        >
          <h3 className="text-xl font-semibold text-[#0f2b46]">{item.title}</h3>
          <p className="mt-3 text-sm leading-7 text-[#2f3c48]">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
