import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-teal-gradient overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-7xl sm:text-8xl text-cream-100 mb-2"
        >
          Bawarchi
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-olive-300 font-heading text-lg sm:text-xl tracking-wide mb-8"
        >
          Restaurant & Banquet — Kalol
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-cream-200 font-body text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          A family-friendly retreat for Chinese, Tandoori, Mexican, Thai & Punjabi
          flavours — set amidst gardens, fountains, and warm evening lights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-colors"
          >
            View Menu
          </Link>
          <a
            href="tel:+917621927000"
            className="border border-cream-100/40 hover:border-olive-300 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-100/60"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}