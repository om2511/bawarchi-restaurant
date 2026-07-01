import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FloatingParticles from "./FloatingParticles";

export default function BanquetTeaser() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banquet-night.png')" }}
      />
      <div className="absolute inset-0 bg-teal-900/85" />
      <FloatingParticles count={25} color="#cdc474" />
      <FloatingParticles count={15} color="#f5b942" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Celebrations & Events
          </p>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl text-cream-100 mb-5 drop-shadow-xl"
          >
            Host Your Next Big Day With Us
          </motion.h2>
          <p className="text-cream-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our banquet hall accommodates up to 500 guests — perfect for
            birthdays, ring ceremonies, weddings, receptions, and corporate
            meetings, with full catering and dedicated event support.
          </p>
          <motion.div
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              to="/banquet"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-colors"
            >
              Explore Banquet & Events
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}