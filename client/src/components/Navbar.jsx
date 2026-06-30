import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "Banquet & Events", path: "/banquet" },
  { name: "Gallery", path: "/gallery" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-teal-800/95 backdrop-blur-sm shadow-card">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Bawarchi Restaurant & Banquet" className="h-12 w-12 rounded-full object-cover" />
          <div className="flex flex-col">
            <span className="font-display text-2xl text-cream-100 leading-none">Bawarchi</span>
            <span className="hidden sm:inline text-olive-300 font-heading text-[10px] tracking-widest uppercase">
              Restaurant & Banquet
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-cream-100 font-heading text-sm tracking-wide hover:text-olive-300 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+917621927000"
            className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold text-sm px-5 py-2.5 rounded-full transition-colors shadow-glow"
          >
            Reserve Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-cream-100"
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-teal-800 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-cream-100 font-heading text-sm py-2 border-b border-teal-700"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:+917621927000"
            className="bg-amber-500 text-teal-900 font-heading font-semibold text-sm px-5 py-3 rounded-full text-center mt-2"
          >
            Reserve Now
          </a>
        </div>
      )}
    </nav>
  );
}