import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import Hero3DScene from "./Hero3DScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/banquet-night.png')" }}
      />

      {/* Dark teal overlay — keeps text readable, ties to brand color */}
      <div className="absolute inset-0 bg-teal-950/75" />

      {/* Subtle gradient overlay — fades bottom to blend with next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950/30 via-transparent to-teal-950/80" />

      {/* 3D Scene sits on top of image */}
      <div className="absolute inset-0 z-10">
        <Suspense fallback={null}>
          <Hero3DScene />
        </Suspense>
      </div>

      {/* Radial glow behind text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] rounded-full bg-teal-900/40 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-4"
        >
          Welcome to
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-7xl sm:text-9xl text-cream-100 mb-2 drop-shadow-2xl"
        >
          Bawarchi
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-px bg-gradient-to-r from-transparent via-olive-300 to-transparent mx-auto mb-4 w-64"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-olive-300 font-heading text-lg sm:text-xl tracking-wide mb-8"
        >
          Restaurant & Banquet — Kalol
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-cream-200 font-body text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Chinese, Tandoori, Mexican, Thai & Punjabi flavours — set amidst
          gardens, fountains, and warm evening lights in the heart of Kalol.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-all hover:scale-105 hover:shadow-lg"
          >
            View Menu
          </Link>
          <a
            href="tel:+917621927000"
            className="border border-cream-100/40 hover:border-olive-300 hover:bg-teal-800/40 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            Reserve a Table
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-cream-100/60 z-20"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}