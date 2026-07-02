import { motion } from "framer-motion";

export default function FoodLoader({ message = "Loading..." }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-cream-100">
      {/* Animated plate with steam */}
      <div className="relative mb-8 flex items-center justify-center">
        {/* Steam lines */}
        <div className="absolute -top-12 flex justify-center gap-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-0.5 rounded-full bg-amber-500/60"
              style={{ height: "24px" }}
              animate={{
                y: [-5, -24, -5],
                opacity: [0, 0.9, 0],
                scaleY: [0.8, 1.4, 0.8],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.25,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Plate */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-4 border-teal-800 flex items-center justify-center bg-white shadow-xl"
        >
          {/* Inner plate ring */}
          <div className="w-16 h-16 rounded-full border-2 border-dashed border-amber-400/40 flex items-center justify-center">
            {/* Cloche / Bowl shape inside */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center shadow-inner"
            >
              <div className="w-4 h-4 rounded-full bg-teal-800" />
            </motion.div>
          </div>
        </motion.div>

        {/* Orbiting spice dot */}
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          <div className="absolute w-3.5 h-3.5 rounded-full bg-teal-600 shadow-md" style={{ top: "-4px", left: "50%", transform: "translateX(-50%)" }} />
        </motion.div>
      </div>

      {/* Logo & status message */}
      <motion.p
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="font-heading text-teal-900 text-lg font-medium tracking-wide mt-2"
      >
        {message}
      </motion.p>
      <p className="text-teal-600/50 text-[10px] mt-1 font-heading tracking-[0.25em] uppercase">Bawarchi Restaurant</p>
    </div>
  );
}
