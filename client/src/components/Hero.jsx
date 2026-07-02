import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import Hero3DScene from "./Hero3DScene";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-24">

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
      <div className="relative z-20 text-center px-6 max-w-4xl w-full pt-8">

        {/* Lunch Deal Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 backdrop-blur-sm text-amber-300 font-heading sm:text-xs text-[0.65rem] tracking-widest uppercase px-4 py-2 rounded-full mb-6"
        >
          <motion.span
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-2 h-2 bg-amber-400 rounded-full inline-block"
          />
          Punjabi Fix Lunch @ ₹235 — Daily 11AM–3PM
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm"
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
          Restaurant & Banquet — Kalol, Gujarat
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="text-cream-200 font-body text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed"
        >
          Chinese, Tandoori, Mexican, Thai & Punjabi flavours — served amidst
          gardens, fountains, and warm evening lights in the heart of Kalol.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-all hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            View Menu
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-cream-100/40 hover:border-olive-300 hover:bg-teal-800/40 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Reserve a Table
          </Link>
          <a
            href="tel:+917621927000"
            className="inline-flex items-center gap-2 border border-amber-400/40 hover:border-amber-400 hover:bg-amber-500/10 text-amber-300 font-heading font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-center"
        >
          {[
            { val: "280+", label: "Dishes" },
            { val: "500+", label: "Banquet Guests" },
            { val: "10 AM", label: "Opens Daily" },
            { val: "11 PM", label: "Closes Daily" },
          ].map((s) => (
            <div key={s.label} className="text-cream-100">
              <p className="font-display text-2xl text-olive-300">{s.val}</p>
              <p className="font-heading text-xs tracking-wide text-cream-300/70 uppercase">{s.label}</p>
            </div>
          ))}
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
