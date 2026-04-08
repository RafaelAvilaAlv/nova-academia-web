type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mb-12 max-w-2xl md:mb-14">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#C9895B] sm:text-sm">
        {eyebrow}
      </p>

      <h2 className="mb-6 text-3xl font-bold leading-tight text-[#1E3A5F] sm:text-4xl md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="text-base leading-8 text-[#355070] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}