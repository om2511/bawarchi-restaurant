import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";

export default function AboutTeaser() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={ref} className="bg-cream-100 py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">Our Story</p>
          <h2 className="font-display text-5xl text-teal-900 mb-5">A Garden of Flavours</h2>
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
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              to="/about"
              className="inline-block bg-teal-800 hover:bg-teal-900 text-cream-100 font-heading font-semibold px-7 py-3 rounded-full transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ scale }}
          className="relative"
          whileHover={{ rotateY: 3, rotateX: -2 }}
        >
          <motion.div
            style={{ y }}
            className="aspect-[4/5] rounded-2xl overflow-hidden shadow-card bg-teal-100"
          >
            <img
              src="/images/buddha-fountain.png"
              alt="Bawarchi entrance fountain"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, type: "spring" }}
            className="absolute -bottom-6 -left-6 bg-olive-300 text-teal-900 rounded-xl px-6 py-4 shadow-card hidden sm:block"
          >
            <p className="font-display text-3xl">500+</p>
            <p className="font-heading text-xs uppercase tracking-wide">Guest Capacity</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}