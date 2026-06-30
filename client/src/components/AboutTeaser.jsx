import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function AboutTeaser() {
  return (
    <section className="bg-cream-100 py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Our Story
          </p>
          <h2 className="font-display text-5xl text-teal-900 mb-5">
            A Garden of Flavours
          </h2>
          <p className="text-teal-700/80 leading-relaxed mb-4">
            Tucked beside a tranquil fountain courtyard in Kalol, Bawarchi
            brings together Chinese, Tandoori, Mexican, Thai and Punjabi
            cuisines under one roof — served amidst gardens, a cosy fireplace,
            and the gentle sound of live music in the evenings.
          </p>
          <p className="text-teal-700/80 leading-relaxed mb-8">
            Whether it's a quiet family dinner or a 500-guest celebration in
            our banquet hall, we treat every gathering as worth doing right.
          </p>
          <Link
            to="/about"
            className="inline-block bg-teal-800 hover:bg-teal-900 text-cream-100 font-heading font-semibold px-7 py-3 rounded-full transition-colors"
          >
            Learn More About Us
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-teal-100">
            <img
              src="/images/buddha-fountain.png"
              alt="Bawarchi entrance fountain"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-olive-300 text-teal-900 rounded-xl px-6 py-4 shadow-card hidden sm:block">
            <p className="font-display text-3xl">500+</p>
            <p className="font-heading text-xs uppercase tracking-wide">Guest Capacity</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}