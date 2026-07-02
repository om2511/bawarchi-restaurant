import { motion } from "framer-motion";

const offerings = [
  "Outdoor Seating", "Kerbside Pickup", "No-Contact Delivery", "Delivery",
  "Drive-Through", "Takeaway", "Dine-In",
];

const diningOptions = [
  "Breakfast", "Brunch", "Lunch", "Dinner", "Catering", "Counter Service",
  "Dessert", "Table Service",
];

const amenities = [
  {
    label: "Fireplace",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
      </svg>
    ),
  },
  {
    label: "Live Music",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
  },
  {
    label: "Sports Screening",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Free Wi-Fi",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
  },
  {
    label: "Gender-Neutral Toilets",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    label: "Dogs Allowed",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    label: "Good for Kids",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    label: "Kids Birthday",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
      </svg>
    ),
  },
];

const payments = [
  { icon: null, label: "Credit Cards" },
  { icon: null, label: "Debit Cards" },
  { icon: null, label: "Google Pay" },
  { icon: null, label: "NFC Payments" },
];

const parking = [
  "Free Parking Garage",
  "Free Parking Lot",
  "Free Street Parking",
  "On-Site Parking",
  "Plenty of Parking",
];

export default function About() {
  return (
    <div className="bg-cream-100">
      {/* Hero */}
      <div className="bg-teal-gradient pt-32 pb-16 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-olive-300 font-heading tracking-[0.3em] uppercase text-sm mb-2"
        >
          About Us
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-6xl sm:text-7xl text-cream-100 mb-4"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-cream-300/80 max-w-2xl mx-auto px-6 leading-relaxed"
        >
          Bawarchi Restaurant & Banquet is a family-friendly, vegetarian dining
          destination in Kalol — built around the idea that good food, good company,
          and a beautiful setting make every visit special.
        </motion.p>
      </div>

      {/* Story section */}
      <div className="max-w-5xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img
            src="/images/reception-office.png"
            alt="Bawarchi reception"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
            Who We Are
          </p>
          <h2 className="font-display text-4xl text-teal-900 mb-5">
            A Garden of Flavours
          </h2>
          <p className="text-teal-700/80 leading-relaxed mb-4">
            From quick solo dinners to large family celebrations, our menu spans
            Indian, Chinese, Mexican, and Thai cuisine — entirely vegetarian,
            with Swaminarayan Jain and Pure Jain options also available on
            request.
          </p>
          <p className="text-teal-700/80 leading-relaxed mb-6">
            With a fireplace for cooler evenings, live music, sports screenings,
            and a banquet hall that hosts up to 500 guests, we're built for every
            kind of gathering — casual, festive, or formal.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { val: "280+", label: "Menu Items" },
              { val: "500+", label: "Banquet Capacity" },
              { val: "13+", label: "Cuisine Categories" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-teal-800 text-cream-100 rounded-xl px-5 py-3 text-center"
              >
                <p className="font-display text-2xl text-olive-300">{s.val}</p>
                <p className="font-heading text-xs tracking-wide opacity-80 uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Offerings & Dining grid */}
      <div className="bg-cream-200 py-16">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-10">
          <div>
            <h3 className="font-heading text-2xl text-teal-900 mb-4">
              Service Options
            </h3>
            <div className="flex flex-wrap gap-2">
              {offerings.map((o) => (
                <span
                  key={o}
                  className="bg-white border border-teal-200 text-teal-800 text-sm px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-heading text-2xl text-teal-900 mb-4">
              Dining Options
            </h3>
            <div className="flex flex-wrap gap-2">
              {diningOptions.map((o) => (
                <span
                  key={o}
                  className="bg-white border border-teal-200 text-teal-800 text-sm px-4 py-2 rounded-full hover:bg-teal-50 transition-colors"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Amenities strip */}
      <div className="bg-teal-800 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="font-heading text-cream-100 text-xl text-center mb-10 uppercase tracking-wider">
            Amenities & Highlights
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {amenities.map((a, i) => (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center text-center gap-2 text-cream-100"
              >
                <span className="text-olive-300">{a.icon}</span>
                <span className="font-heading text-sm">{a.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Payments / Parking */}
      <div className="max-w-5xl mx-auto px-6 py-16 grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="font-heading text-2xl text-teal-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            Payment Methods
          </h3>
          <div className="flex flex-wrap gap-2">
            {payments.map((p) => (
              <span
                key={p.label}
                className="bg-white border border-teal-200 text-teal-800 text-sm px-4 py-2 rounded-full"
              >
                {p.label}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl text-teal-900 mb-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
            </svg>
            Parking
          </h3>
          <ul className="space-y-2">
            {parking.map((p) => (
              <li key={p} className="flex items-center gap-3 text-teal-700/80">
                <span className="text-olive-500">✓</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-teal-gradient py-16 text-center px-6">
        <h3 className="font-display text-4xl sm:text-5xl text-cream-100 mb-4">
          Come Visit Us Today
        </h3>
        <p className="text-cream-300 mb-8 max-w-lg mx-auto">
          Open daily from 10:00 AM to 11:00 PM at Kalol, Gujarat. We'd love to
          host you!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+917621927000"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-teal-900 font-heading font-semibold px-8 py-3.5 rounded-full shadow-glow transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call +91 76219 27000
          </a>
          <a
            href="https://maps.google.com/?q=Bawarchi+Restaurant+and+Banquet+Kalol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-cream-100/40 hover:border-olive-300 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-all hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </div>
  );
}