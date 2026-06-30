const highlights = [
  { icon: "🔥", label: "Fireplace" },
  { icon: "🎵", label: "Live Music" },
  { icon: "🍰", label: "Great Dessert" },
  { icon: "📶", label: "Free Wi-Fi" },
  { icon: "🅿️", label: "Free Parking" },
  { icon: "👨‍👩‍👧‍👦", label: "Family Friendly" },
  { icon: "🐾", label: "Pet Friendly" },
  { icon: "🌱", label: "Veg Options" },
];

export default function HighlightsStrip() {
  return (
    <section className="bg-teal-800 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {highlights.map((h) => (
          <div
            key={h.label}
            className="flex flex-col items-center text-center gap-2 text-cream-100"
          >
            <span className="text-3xl">{h.icon}</span>
            <span className="font-heading text-sm tracking-wide">{h.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}