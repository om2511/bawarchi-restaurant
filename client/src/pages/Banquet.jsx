import { motion } from "framer-motion";

const eventTypes = [
  {
    icon: (
      <svg className="w-8 h-8 text-olive-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-8 8h16v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6zm0-4a2 2 0 012-2h12a2 2 0 012 2v4H4v-4z" />
      </svg>
    ),
    name: "Birthday Party"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <circle cx="12" cy="14" r="7" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7V3l3 2-3 2z" />
      </svg>
    ),
    name: "Ring Ceremony"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    name: "Married Function"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0012 18.75c-.93 0-1.77.375-2.38 1.007l-.548-.547z" />
      </svg>
    ),
    name: "Reception Party"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-olive-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.25A1.75 1.75 0 0119.25 15H4.75A1.75 1.75 0 013 13.25V7.75A1.75 1.75 0 014.75 6h14.5A1.75 1.75 0 0121 7.75v5.5zM12 6V3m0 12v3m-4 0h8" />
      </svg>
    ),
    name: "Corporate Meeting"
  },
];

const facilities = [
  "Banquet capacity up to 500 persons",
  "Dedicated outdoor garden & lawn space",
  "Kids play area on premises",
  "Full catering & table service",
  "Free on-site parking",
  "Swaminarayan Jain & Pure Jain food available",
  "Wi-Fi & gender-neutral restrooms",
  "Live music arrangements",
];

export default function Banquet() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/banquet-night.png')" }}
        />
        <div className="absolute inset-0 bg-teal-900/80" />
        <div className="relative text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-3"
          >
            Banquet & Events
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-6xl sm:text-7xl text-cream-100"
          >
            Celebrate in Style
          </motion.h1>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="font-display text-5xl text-teal-900 mb-5">
          A Venue Built for Every Occasion
        </h2>
        <p className="text-teal-700/80 leading-relaxed">
          From intimate ring ceremonies to grand wedding receptions hosting
          up to 500 guests, our banquet hall and garden lawns offer the space,
          service, and ambience to make your celebration unforgettable.
        </p>
      </section>

      {/* Event types */}
      <section className="bg-teal-800 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="font-heading text-cream-100 text-2xl text-center mb-10">
            We Host All Types of Functions
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
            {eventTypes.map((e) => (
              <div key={e.name} className="flex flex-col items-center text-center gap-2">
                <span className="text-4xl">{e.icon}</span>
                <span className="text-cream-100 font-heading text-sm">{e.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + facilities */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src="/images/banquet-restaurant.png"
            alt="Bawarchi banquet hall exterior"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-olive-600 text-center sm:text-left font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Facilities
          </p>
          <h3 className="font-display text-4xl text-center sm:text-left text-teal-900 mb-6">
            Everything Your Event Needs
          </h3>
          <ul className="space-y-3">
            {facilities.map((f) => (
              <li key={f} className="flex items-start gap-3 text-teal-800">
                <svg className="w-5 h-5 text-olive-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-teal-gradient py-20 text-center px-6">
        <h3 className="font-display text-5xl text-cream-100 mb-4">
          Ready to Plan Your Event?
        </h3>
        <p className="text-cream-300 mb-8 max-w-xl mx-auto">
          Call us to discuss dates, packages, and menu options tailored to
          your celebration.
        </p>
        <a
          href="tel:+917621927000"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-all hover:scale-105"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Call +91 76219 27000
        </a>
      </section>
    </div>
  );
}