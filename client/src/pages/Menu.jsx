import { useEffect, useState, useRef } from "react";
import { fetchMenu } from "../api/menuApi";
import MenuCard from "../components/MenuCard";
import AnimatedMenuCard from "../components/AnimatedMenuCard";
import { motion } from "framer-motion";
import FoodLoader from "../components/FoodLoader";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [activeSlug, setActiveSlug] = useState("");
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchMenu()
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setActiveSlug(data[0].slug);
      })
      .catch((err) => console.error("Failed to load menu:", err))
      .finally(() => setLoading(false));
  }, []);

  const scrollToCategory = (slug) => {
    setActiveSlug(slug);
    const el = document.getElementById(slug);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollNav = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return <FoodLoader message="Plating the menu..." />;
  }

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-20">
      {/* Page header */}
      <div className="text-center mb-12 px-6">
        <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
          Bawarchi
        </p>
        <h1 className="font-display text-6xl text-teal-900 mb-3">Our Menu</h1>
        <p className="text-teal-700/70 max-w-xl mx-auto">
          From sizzling tandoori to comforting dal-khichdi, Chinese, Mexican &
          Thai favourites — explore every dish on offer.
        </p>
      </div>

      {/* Mobile category dropdown — sticky */}
      <div className="md:hidden sticky top-20 z-40 bg-cream-100/95 backdrop-blur-sm border-b border-teal-200 px-6 py-3 mb-6">
        <div className="relative">
          <select
            value={activeSlug}
            onChange={(e) => scrollToCategory(e.target.value)}
            className="w-full appearance-none bg-white border border-teal-200 text-teal-900 font-heading font-medium text-sm px-5 py-3.5 pr-10 rounded-2xl shadow-sm focus:outline-none focus:border-teal-600 cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
          <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-teal-700">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </div>
      </div>

      {/* Sticky category nav - desktop only */}
      <div className="hidden md:block sticky top-20 z-40 bg-cream-100/95 backdrop-blur-sm border-b border-teal-200 mb-10">
        <div className="max-w-6xl mx-auto px-6 relative flex items-center group">
          
          {/* Left fading overlay */}
          <div className="absolute left-6 top-0 bottom-0 w-8 bg-gradient-to-r from-cream-100 to-transparent pointer-events-none z-10 hidden md:block" />

          {/* Left Arrow Button */}
          <button
            onClick={() => scrollNav("left")}
            className="hidden md:flex absolute left-4 z-20 w-8 h-8 items-center justify-center rounded-full bg-white/90 shadow-md border border-teal-200 text-teal-800 hover:bg-teal-50 transition-colors"
            aria-label="Scroll category nav left"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            ref={scrollRef}
            className="w-full py-4 flex flex-nowrap gap-2.5 overflow-x-auto no-scrollbar scroll-smooth px-8 md:px-10"
          >
            {categories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => scrollToCategory(cat.slug)}
                className={`whitespace-nowrap px-4 py-2 rounded-full text-xs sm:text-sm font-heading font-medium transition-all ${
                  activeSlug === cat.slug
                    ? "bg-teal-800 text-cream-100 shadow-sm scale-105"
                    : "bg-white text-teal-800 hover:bg-teal-50 border border-teal-200"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={() => scrollNav("right")}
            className="hidden md:flex absolute right-4 z-20 w-8 h-8 items-center justify-center rounded-full bg-white/90 shadow-md border border-teal-200 text-teal-800 hover:bg-teal-50 transition-colors"
            aria-label="Scroll category nav right"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Right fading overlay */}
          <div className="absolute right-6 top-0 bottom-0 w-8 bg-gradient-to-l from-cream-100 to-transparent pointer-events-none z-10 hidden md:block" />

        </div>
      </div>

      {/* Category sections */}
      <div className="max-w-5xl mx-auto px-6 space-y-16">
        {categories.map((cat) => (
          <section key={cat.slug} id={cat.slug} className="scroll-mt-36">
            <div className="flex items-center gap-4 mb-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-teal-900">
                {cat.name}
              </h2>
              <div className="flex-1 h-px bg-olive-300" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cat.items.map((item, idx) => (
                <motion.div
                  key={item._id}
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  style={{ perspective: 1000 }}
                >
                  <AnimatedMenuCard item={item} />
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}