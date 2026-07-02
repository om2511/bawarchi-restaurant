import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchGallery } from "../api/galleryApi";
import FoodLoader from "../components/FoodLoader";

const filters = ["All", "Ambience", "Food", "Banquet", "Events", "Exterior"];

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [lightboxImg, setLightboxImg] = useState(null);

  useEffect(() => {
    fetchGallery()
      .then(setImages)
      .catch((err) => console.error("Failed to load gallery:", err))
      .finally(() => setLoading(false));
  }, []);

  const filteredImages =
    activeFilter === "All"
      ? images
      : images.filter((img) => img.category === activeFilter);

  if (loading) {
    return <FoodLoader message="Gathering our moments..." />;
  }

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-20">
      <div className="text-center mb-12 px-6">
        <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
          Bawarchi
        </p>
        <h1 className="font-display text-6xl text-teal-900 mb-3">Gallery</h1>
        <p className="text-teal-700/70 max-w-xl mx-auto">
          A glimpse into our ambience, food, and the celebrations we've hosted.
        </p>
      </div>

      {/* Filters (Sticky) */}
      <div className="sticky top-20 z-30 bg-cream-100/95 backdrop-blur-sm py-4 border-b border-teal-200/60 mb-12 px-6">
        {/* Mobile: Dropdown */}
        <div className="md:hidden flex justify-center">
          <div className="relative w-full max-w-xs">
            <select
              value={activeFilter}
              onChange={(e) => setActiveFilter(e.target.value)}
              className="w-full appearance-none bg-white border border-teal-200 text-teal-900 font-heading font-medium text-sm px-5 py-3 pr-10 rounded-full shadow-sm focus:outline-none focus:border-teal-600 cursor-pointer"
            >
              {filters.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-teal-700">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </div>
        {/* Desktop: Pills */}
        <div className="hidden md:flex justify-center gap-3 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-heading font-medium transition-colors ${
                activeFilter === f
                  ? "bg-teal-800 text-cream-100"
                  : "bg-white text-teal-800 border border-teal-200 hover:bg-teal-50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6">
        {filteredImages.length === 0 ? (
          <p className="text-center text-teal-700/60 font-heading">No images in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.07 }}
                whileHover={{ scale: 1.03, rotateY: 4, rotateX: -2, z: 20 }}
                style={{ transformStyle: "preserve-3d", perspective: 800 }}
                onClick={() => setLightboxImg(img)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-card cursor-pointer"
              >
                <img
                  src={img.imageUrl}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/40 transition-colors flex items-end p-4">
                  <span className="text-cream-100 font-heading text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-teal-950/95 flex flex-col items-center justify-center p-4 sm:p-6 cursor-zoom-out"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxImg(null)}
            className="absolute top-4 right-4 z-55 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
            aria-label="Close Lightbox"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImg.imageUrl}
              alt={lightboxImg.title}
              className="w-full max-w-3xl rounded-xl object-contain"
              style={{ maxHeight: 'calc(100vh - 120px)' }}
            />
            {lightboxImg.title && (
              <p className="mt-3 text-cream-200 font-heading text-sm text-center px-4">{lightboxImg.title}</p>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}