import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BanquetTeaser() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/banquet-night.png')" }}
      />
      <div className="absolute inset-0 bg-teal-900/85" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/10 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Celebrations & Events
          </p>
          <h2 className="font-display text-5xl sm:text-6xl text-cream-100 mb-5">
            Host Your Next Big Day With Us
          </h2>
          <p className="text-cream-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our banquet hall accommodates up to 500 guests — perfect for
            birthdays, ring ceremonies, weddings, receptions, and corporate
            meetings, complete with full catering and dedicated event support.
          </p>
          <Link
            to="/banquet"
            className="inline-block bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-colors"
          >
            Explore Banquet & Events
          </Link>
        </motion.div>
      </div>
    </section>
  );
}