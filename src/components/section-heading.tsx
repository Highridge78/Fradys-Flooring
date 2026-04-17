type SectionHeadingProps = {
  overline?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function SectionHeading({
  overline,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      {overline ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#835d24]">
          {overline}
        </p>
      ) : null}
      <h2 className="mt-2 text-3xl font-bold text-[#0f2b46]">{title}</h2>
      {description ? (
        <p className="mt-3 max-w-3xl text-base text-[#2f3c48]">{description}</p>
      ) : null}
    </div>
  );
}
