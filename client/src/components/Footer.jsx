import { Link } from "react-router-dom";

const navLinks = [
  { name: "Menu", path: "/menu" },
  { name: "Banquet & Events", path: "/banquet" },
  { name: "Gallery", path: "/gallery" },
  { name: "About Us", path: "/about" },
  { name: "Contact & Reservations", path: "/contact" },
];

const cuisines = [
  "Chinese & Oriental",
  "Tandoori Specials",
  "Mexican Food",
  "Thai Food",
  "Punjabi Cuisine",
  "Sizzlers",
  "Dal & Khichdi",
  "Desserts",
];

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-cream-200">
      {/* Top CTA strip */}
      <div className="bg-teal-gradient py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-olive-300 text-center sm:text-left font-heading text-sm uppercase tracking-widest mb-1">
              Ready to dine?
            </p>
            <h3 className="font-display text-3xl sm:text-4xl text-cream-100">
              Book Your Table Today
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+917621927000"
              className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-heading font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 shadow-glow"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91 76219 27000
            </a>
            <a
              href="https://wa.me/917621927000?text=Hi%20Bawarchi%21%20I%27d%20like%20to%20make%20a%20reservation."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-500 text-white font-heading font-semibold px-6 py-3 rounded-full text-sm transition-all hover:scale-105 text-center"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="mb-5 inline-flex items-center gap-3 group">
            <img
              src="/images/logo.jpg"
              alt="Bawarchi logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-olive-300/30 group-hover:border-olive-300/70 transition-all shadow-card"
            />
            <div>
              <span className="font-display text-3xl text-cream-100 block leading-none">
                Bawarchi
              </span>
              <span className="text-olive-300/80 text-xs font-heading tracking-widest uppercase">
                Restaurant & Banquet
              </span>
            </div>
          </Link>
          <p className="text-sm text-cream-300/80 leading-relaxed mt-2">
            Kalol's premier vegetarian dining destination — where every meal
            feels like a celebration, from a quiet family dinner to a 500-guest
            banquet.
          </p>

          {/* Social */}
          <div className="mt-5 flex gap-3">
            <a
              href="https://www.instagram.com/bawarchirestaurant_kalol/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-yellow-400 hover:to-pink-600 flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.97-6.98.06-1.28.08-1.69.08-4.95s-.02-3.67-.08-4.95c-.19-4.35-2.62-6.78-6.97-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/917621927000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-green-600 flex items-center justify-center transition-all hover:scale-110"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-5">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-cream-300/80 hover:text-olive-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-olive-500 text-xs">›</span>
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/admin/login"
                className="text-cream-300/40 hover:text-cream-300/70 transition-colors flex items-center gap-2 text-xs mt-4"
              >
                <span className="text-xs">🔐</span>
                Admin Panel
              </a>
            </li>
          </ul>
        </div>

        {/* Our Menu */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-5">
            Our Menu
          </h4>
          <ul className="space-y-2.5 text-sm">
            {cuisines.map((c) => (
              <li key={c}>
                <Link
                  to="/menu"
                  className="text-cream-300/80 hover:text-olive-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-olive-500 text-xs">›</span>
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-5">
            Visit Us
          </h4>
          <ul className="space-y-4 text-sm text-cream-300/80">
            <li className="flex gap-2">
              <span className="text-olive-300 shrink-0 mt-0.5">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="leading-relaxed">
                Helipad, 76/2, Gopalnagar Rd, nr. Green City - 3, Tirupati
                Society, Panchavati, Ambika Nagar, Kalol, Gujarat 382721
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-olive-300 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <a
                href="tel:+917621927000"
                className="hover:text-olive-300 transition-colors"
              >
                +91 76219 27000
              </a>
            </li>
            <li className="flex gap-2">
              <span className="text-olive-300 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span>10:00 AM – 11:00 PM, Daily</span>
            </li>
            <li className="flex gap-2">
              <span className="text-olive-300 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Free On-Site & Street Parking</span>
            </li>
            <li className="flex gap-2">
              <span className="text-olive-300 shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
              </span>
              <span>Free Wi-Fi Available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 border-t border-teal-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream-400/60">
        <p>
          © {new Date().getFullYear()} Bawarchi Restaurant & Banquet. All rights
          reserved.
        </p>
        <p className="flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-olive-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          <span>100% Vegetarian | Swaminarayan Jain &amp; Pure Jain options available</span>
        </p>
      </div>
    </footer>
  );
}