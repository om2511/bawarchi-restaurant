import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AnimatedMenuCard({ item }) {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), springConfig);

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(nx);
    y.set(ny);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-4 flex justify-between items-start gap-4 shadow-sm hover:shadow-card border border-teal-100 cursor-default"
    >
      {/* Sheen overlay */}
      <motion.div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "0.75rem",
          background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 60%)",
          pointerEvents: "none",
          transformStyle: "preserve-3d",
          transform: "translateZ(1px)",
        }}
      />

      <div className="flex-1" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-center gap-2 mb-1">
          {item.vegOnly && (
            <span className="w-3.5 h-3.5 border-2 border-green-600 flex items-center justify-center rounded-sm shrink-0">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full" />
            </span>
          )}
          <h4 className="font-heading font-semibold text-teal-900 text-base">
            {item.name}
          </h4>
        </div>
        {item.description && (
          <p className="text-sm text-teal-700/70 leading-snug">{item.description}</p>
        )}
        {item.quantity && (
          <span className="inline-block mt-1.5 text-xs text-olive-600 font-medium">
            {item.quantity}
          </span>
        )}
      </div>

      <div className="text-right shrink-0" style={{ transform: "translateZ(20px)" }}>
        <span className="font-heading font-bold text-lg text-teal-800">₹{item.price}</span>
      </div>
    </motion.div>
  );
}