export default function Footer() {
  return (
    <footer className="bg-teal-900 text-cream-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-3xl text-cream-100 mb-3">Bawarchi</h3>
          <p className="text-sm text-cream-300 leading-relaxed">
            Restaurant & Banquet, Kalol — where every meal feels like a celebration.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-4">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/menu" className="hover:text-olive-300 transition-colors">Menu</a></li>
            <li><a href="/banquet" className="hover:text-olive-300 transition-colors">Banquet & Events</a></li>
            <li><a href="/gallery" className="hover:text-olive-300 transition-colors">Gallery</a></li>
            <li><a href="/about" className="hover:text-olive-300 transition-colors">About Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-4">
            Visit Us
          </h4>
          <ul className="space-y-2 text-sm text-cream-300 leading-relaxed">
            <li>Helipad, 76/2, Gopalnagar Rd, nr. Green City - 3, Tirupati Society, Panchavati, Ambika Nagar, Kalol, Gujarat 382721</li>
            <li><a href="tel:+917621927000" className="hover:text-olive-300 transition-colors">+91 76219 27000</a></li>
            <li>10:00 AM – 11:00 PM, Daily</li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-heading text-olive-300 text-sm uppercase tracking-wider mb-4">
            Follow Us
          </h4>
          <a
            href="https://www.instagram.com/bawarchirestaurant_kalol/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm hover:text-olive-300 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.97-6.98.06-1.28.08-1.69.08-4.95s-.02-3.67-.08-4.95c-.19-4.35-2.62-6.78-6.97-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 18.16 12 6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm6.41-10.85a1.44 1.44 0 1 0 1.44 1.44 1.44 1.44 0 0 0-1.44-1.44z" />
            </svg>
            @bawarchirestaurant_kalol
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-6 border-t border-teal-700 text-center text-xs text-cream-400">
        © {new Date().getFullYear()} Bawarchi Restaurant & Banquet. All rights reserved.
      </div>
    </footer>
  );
}