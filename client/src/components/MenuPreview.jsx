import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const featured = [
  {
    name: "Tandoori Specials",
    desc: "Smoky paneer tikka, kababs & more from the clay oven",
    icon: (
      <svg className="w-12 h-12 text-orange-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
    bg: "from-orange-500/20 to-amber-500/10"
  },
  {
    name: "Chinese & Oriental",
    desc: "Manchurian, sizzling noodles, fried rice",
    icon: (
      <svg className="w-12 h-12 text-teal-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 009-9H3a9 9 0 009 9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12c0-3 1.5-5 4-5s4 2 4 5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12c0-4.5 2.5-7 6-7s6 2.5 6 7" />
      </svg>
    ),
    bg: "from-teal-500/20 to-green-500/10"
  },
  {
    name: "Mexican Food",
    desc: "Tacos, nachos, kasa dila & sizzling platters",
    icon: (
      <svg className="w-12 h-12 text-amber-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14C4 9.58 7.58 6 12 6c4.42 0 8 3.58 8 8v1H4v-1z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12c1.5-1 3-1 4.5 0s3 1 4.5 0 3-1 4.5 0" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15V6" />
      </svg>
    ),
    bg: "from-yellow-500/20 to-orange-400/10"
  },
  {
    name: "Sizzlers",
    desc: "Bawarchi Special & 10+ continental sizzlers",
    icon: (
      <svg className="w-12 h-12 text-olive-600 mx-auto" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M8 3v2M16 3v2" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 14h16v2a4 4 0 01-4 4H8a4 4 0 01-4-4v-2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M2 14h20M7 8h10" />
      </svg>
    ),
    bg: "from-olive-300/20 to-teal-400/10"
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
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.3 }}
                className="mb-3 block"
              >
                {f.icon}
              </motion.div>
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