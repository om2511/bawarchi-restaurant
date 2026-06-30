import { motion } from "framer-motion";

const offerings = [
  "Outdoor Seating", "Kerbside Pickup", "No-Contact Delivery", "Delivery",
  "Drive-Through", "Takeaway", "Dine-In",
];

const diningOptions = [
  "Breakfast", "Brunch", "Lunch", "Dinner", "Catering", "Counter Service",
  "Dessert", "Table Service",
];

export default function About() {
  return (
    <div className="bg-cream-100 pt-32 pb-20">
      <div className="text-center mb-16 px-6">
        <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
          About Us
        </p>
        <h1 className="font-display text-6xl text-teal-900 mb-3">Our Story</h1>
        <p className="text-teal-700/70 max-w-2xl mx-auto leading-relaxed">
          Bawarchi Restaurant & Banquet is a family-friendly, vegetarian
          dining destination in Kalol — built around the idea that good food,
          good company, and a beautiful setting make every visit special.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-card"
        >
          <img src="/images/reception-office.png" alt="Bawarchi reception" className="w-full h-full object-cover" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-teal-700/80 leading-relaxed mb-4">
            From quick solo dinners to large family celebrations, our menu
            spans Indian, Chinese, Mexican, and Thai cuisine — entirely
            vegetarian, with Swaminarayan Jain and Pure Jain options also
            available on request.
          </p>
          <p className="text-teal-700/80 leading-relaxed">
            With a fireplace for cooler evenings, live music, sports
            screenings, and a banquet hall that hosts up to 500 guests, we're
            built for every kind of gathering — casual, festive, or formal.
          </p>
        </motion.div>
      </div>

      {/* Offerings grid */}
      <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-2 gap-10 mb-16">
        <div>
          <h3 className="font-heading text-2xl text-teal-900 mb-4">Service Options</h3>
          <div className="flex flex-wrap gap-2">
            {offerings.map((o) => (
              <span key={o} className="bg-white border border-teal-200 text-teal-800 text-sm px-4 py-2 rounded-full">
                {o}
              </span>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading text-2xl text-teal-900 mb-4">Dining Options</h3>
          <div className="flex flex-wrap gap-2">
            {diningOptions.map((o) => (
              <span key={o} className="bg-white border border-teal-200 text-teal-800 text-sm px-4 py-2 rounded-full">
                {o}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Payments / parking / pets strip */}
      <div className="bg-teal-800 py-14">
        <div className="max-w-5xl mx-auto px-6 grid sm:grid-cols-3 gap-8 text-center text-cream-100">
          <div>
            <span className="text-3xl block mb-2">💳</span>
            <p className="font-heading text-sm">Cards, Google Pay & NFC Accepted</p>
          </div>
          <div>
            <span className="text-3xl block mb-2">🅿️</span>
            <p className="font-heading text-sm">Free On-Site & Street Parking</p>
          </div>
          <div>
            <span className="text-3xl block mb-2">🐕</span>
            <p className="font-heading text-sm">Dogs Allowed Inside</p>
          </div>
        </div>
      </div>
    </div>
  );
}