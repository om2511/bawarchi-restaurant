import { useEffect, useState } from "react";
import { fetchMenu } from "../api/menuApi";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const [categories, setCategories] = useState([]);
  const [activeSlug, setActiveSlug] = useState("");
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-100">
        <p className="font-heading text-teal-800 text-lg">Loading menu...</p>
      </div>
    );
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

      {/* Sticky category nav */}
      <div className="sticky top-20 z-40 bg-cream-100/95 backdrop-blur-sm border-b border-teal-200 mb-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => scrollToCategory(cat.slug)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-heading font-medium transition-colors ${
                activeSlug === cat.slug
                  ? "bg-teal-800 text-cream-100"
                  : "bg-white text-teal-800 hover:bg-teal-50 border border-teal-200"
              }`}
            >
              {cat.name}
            </button>
          ))}
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
            <div className="grid sm:grid-cols-2 gap-4">
              {cat.items.map((item) => (
                <MenuCard key={item._id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}