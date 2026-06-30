import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";

const featured = [
  { name: "Tandoori Specials", desc: "Smoky paneer tikka, kababs & more", emoji: "🔥" },
  { name: "Chinese & Oriental", desc: "Manchurian, noodles, fried rice", emoji: "🥢" },
  { name: "Mexican Food", desc: "Tacos, nachos, kasa dila & platters", emoji: "🌮" },
  { name: "Sizzlers", desc: "Bawarchi Special & continental sizzlers", emoji: "🍳" },
];

export default function MenuPreview() {
  return (
    <section className="bg-cream-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Taste the Menu"
          title="Flavours From Around the World"
          subtitle="Over 280 dishes spanning Indian, Chinese, Mexican & Thai cuisines — all vegetarian, all crafted with care."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((f) => (
            <div
              key={f.name}
              className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-card hover:-translate-y-1 transition-all"
            >
              <span className="text-4xl mb-3 block">{f.emoji}</span>
              <h3 className="font-heading font-semibold text-teal-900 mb-1">{f.name}</h3>
              <p className="text-sm text-teal-700/70">{f.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            to="/menu"
            className="inline-block bg-teal-800 hover:bg-teal-900 text-cream-100 font-heading font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}