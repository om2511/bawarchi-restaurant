export default function SectionHeading({ eyebrow, title, subtitle, light = false }) {
  return (
    <div className="text-center mb-12">
      <p className={`font-heading tracking-[0.3em] uppercase text-sm mb-2 ${
        light ? "text-olive-300" : "text-olive-600"
      }`}>
        {eyebrow}
      </p>
      <h2 className={`font-display text-5xl sm:text-6xl mb-3 ${
        light ? "text-cream-100" : "text-teal-900"
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-xl mx-auto ${light ? "text-cream-300" : "text-teal-700/70"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}