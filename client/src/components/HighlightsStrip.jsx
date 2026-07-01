import { motion } from "framer-motion";

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
    <section className="bg-teal-800 py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {highlights.map((h, i) => (
          <motion.div
            key={h.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.07 }}
            whileHover={{ scale: 1.15, y: -4 }}
            className="flex flex-col items-center text-center gap-2 text-cream-100 cursor-default"
          >
            <motion.span
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: i * 0.4 }}
              className="text-3xl"
            >
              {h.icon}
            </motion.span>
            <span className="font-heading text-sm tracking-wide">{h.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}