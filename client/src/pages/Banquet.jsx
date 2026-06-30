import { motion } from "framer-motion";

const eventTypes = [
  { icon: "🎂", name: "Birthday Party" },
  { icon: "💍", name: "Ring Ceremony" },
  { icon: "👰", name: "Married Function" },
  { icon: "🎉", name: "Reception Party" },
  { icon: "💼", name: "Corporate Meeting" },
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
          <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Facilities
          </p>
          <h3 className="font-display text-4xl text-teal-900 mb-6">
            Everything Your Event Needs
          </h3>
          <ul className="space-y-3">
            {facilities.map((f) => (
              <li key={f} className="flex items-start gap-3 text-teal-800">
                <span className="text-olive-500 mt-1">✓</span>
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
          className="inline-block bg-amber-500 hover:bg-amber-600 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-colors"
        >
          Call +91 76219 27000
        </a>
      </section>
    </div>
  );
}