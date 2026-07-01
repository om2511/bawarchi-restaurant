import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const featured = [
  { name: "Tandoori Specials", desc: "Smoky paneer tikka, kababs & more from the clay oven", emoji: "🔥", bg: "from-orange-500/20 to-amber-500/10" },
  { name: "Chinese & Oriental", desc: "Manchurian, sizzling noodles, fried rice", emoji: "🥢", bg: "from-teal-500/20 to-green-500/10" },
  { name: "Mexican Food", desc: "Tacos, nachos, kasa dila & sizzling platters", emoji: "🌮", bg: "from-yellow-500/20 to-orange-400/10" },
  { name: "Sizzlers", desc: "Bawarchi Special & 10+ continental sizzlers", emoji: "🍳", bg: "from-olive-300/20 to-teal-400/10" },
];

export default function MenuPreview() {
  return (
    <section className="bg-cream-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Taste the Menu"
          title="Flavours From Around the World"
          subtitle="Over 280 dishes spanning Indian, Chinese, Mexican & Thai cuisines — all vegetarian, all crafted with care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                rotateY: 5,
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              className={`bg-gradient-to-br ${f.bg} bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-card cursor-default border border-white/60`}
            >
              <motion.span
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                className="text-4xl mb-3 block"
              >
                {f.emoji}
              </motion.span>
              <h3 className="font-heading font-semibold text-teal-900 mb-1">{f.name}</h3>
              <p className="text-sm text-teal-700/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/menu"
              className="inline-block bg-teal-800 hover:bg-teal-900 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-colors shadow-card"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}