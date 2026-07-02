import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    name: "Indian Thali",
    desc: "Authentic dal, sabzi, paneer curry, roti & rice — a complete Punjabi/Gujarati feast.",
    image: "/images/food-thali.jpg",
    tag: "Most Loved",
  },
  {
    name: "Steaming Sizzlers",
    desc: "Paneer sizzlers, grilled vegetables, mashed potatoes, and chef's special herbs sauce.",
    image: "/images/food-sizzler.jpg",
    tag: "Chef's Special",
  },
  {
    name: "Sweet Endings",
    desc: "Golden warm gulab jamuns served with rose petals, saffron, and traditional sweetness.",
    image: "/images/food-dessert.jpg",
    tag: "Must Try",
  },
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          {featured.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-card cursor-pointer border border-teal-100/10 bg-white"
              style={{ aspectRatio: "4/3" }}
            >
              <img
                src={f.image}
                alt={f.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950 via-teal-950/40 to-transparent" />
              
              {/* Tag */}
              <span className="absolute top-4 left-4 bg-amber-500 text-teal-950 text-[10px] sm:text-xs font-heading font-bold px-3.5 py-1 rounded-full uppercase tracking-wider shadow-md">
                {f.tag}
              </span>
              
              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-heading font-bold text-cream-100 text-xl mb-1.5">{f.name}</h3>
                <p className="text-cream-300/80 text-xs leading-relaxed font-light">{f.desc}</p>
              </div>
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