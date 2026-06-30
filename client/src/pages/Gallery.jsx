import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchGallery } from "../api/galleryApi";

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

      {/* Filters */}
      <div className="flex justify-center gap-3 flex-wrap mb-12 px-6">
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

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6">
        {loading ? (
          <p className="text-center text-teal-700">Loading gallery...</p>
        ) : filteredImages.length === 0 ? (
          <p className="text-center text-teal-700/60">No images in this category yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((img, i) => (
              <motion.div
                key={img._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
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
        <div
          onClick={() => setLightboxImg(null)}
          className="fixed inset-0 z-50 bg-teal-950/90 flex items-center justify-center p-6 cursor-zoom-out"
        >
          <img
            src={lightboxImg.imageUrl}
            alt={lightboxImg.title}
            className="max-w-4xl max-h-[85vh] rounded-xl object-contain"
          />
        </div>
      )}
    </div>
  );
}