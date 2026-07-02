import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream-100 flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
      {/* 3D-like floating main container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white rounded-3xl p-8 sm:p-10 shadow-card border border-teal-100/50 flex flex-col items-center relative overflow-hidden"
      >
        {/* Decorative background gradients */}
        <div className="absolute -top-12 -left-12 w-28 h-28 bg-amber-500/10 rounded-full blur-xl" />
        <div className="absolute -bottom-12 -right-12 w-28 h-28 bg-teal-800/10 rounded-full blur-xl" />

        {/* 404 Plate Display */}
        <div className="relative mb-6">
          {/* Steam lines */}
          <div className="absolute -top-10 left-0 right-0 flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-0.5 h-6 rounded-full bg-amber-500/40"
                animate={{
                  y: [-3, -12, -3],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Dish plate representation for 404 */}
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-32 h-32 rounded-full border-4 border-teal-800 flex items-center justify-center bg-cream-100/50 shadow-inner relative"
          >
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-amber-500/30 flex flex-col items-center justify-center">
              <span className="font-display text-4xl text-teal-900 font-bold tracking-tight">404</span>
              <span className="text-[10px] uppercase tracking-widest text-amber-600 font-heading font-semibold mt-0.5">Empty Plate</span>
            </div>
          </motion.div>
        </div>

        {/* Text Details */}
        <h2 className="font-display text-3xl text-teal-900 mb-3">Recipe Not Found</h2>
        <p className="text-teal-700/70 text-sm leading-relaxed mb-8 max-w-sm">
          The page you are looking for has either been eaten, moved, or never existed in our kitchen.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center bg-teal-800 hover:bg-teal-900 text-cream-100 font-heading font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm w-full sm:w-auto"
          >
            Back to Home
          </Link>
          <Link
            to="/menu"
            className="inline-flex items-center justify-center border border-teal-200 hover:border-teal-400 text-teal-800 font-heading font-semibold text-sm px-6 py-3 rounded-full transition-colors w-full sm:w-auto bg-white"
          >
            Explore Menu
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
