import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Kalol, Gujarat",
    rating: 5,
    text: "Absolutely loved the experience at Bawarchi! The Bawarchi Special Sizzler was out of this world. The ambience with the Buddha fountain and live music made our anniversary dinner truly special. Will definitely visit again!",
    avatar: "PS",
    color: "bg-teal-700",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Gandhinagar, Gujarat",
    rating: 5,
    text: "We booked their banquet hall for our daughter's birthday. The team was extremely professional, food was delicious, and the garden setup was beautiful. Over 200 guests and everyone was impressed!",
    avatar: "RP",
    color: "bg-olive-600",
  },
  {
    id: 3,
    name: "Meena Joshi",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "Best restaurant near Kalol! The Mexican food and Thai curries are authentic and flavourful. Swaminarayan Jain options are a huge plus for our family. The staff is very courteous and attentive.",
    avatar: "MJ",
    color: "bg-amber-600",
  },
  {
    id: 4,
    name: "Vikram Desai",
    location: "Kalol, Gujarat",
    rating: 5,
    text: "The Punjabi Fix Lunch at ₹235 is unbelievably value for money! Roti, Dal, Rice, Buttermilk and Gulab Jamun — all perfectly made. The fireplace seating in the evening is just magical.",
    avatar: "VD",
    color: "bg-teal-600",
  },
];

const StarRating = ({ count }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section className="bg-teal-gradient py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="What Our Guests Say"
          title="Loved by Families & Food Lovers"
          subtitle="Don't just take our word for it — here's what our guests have to say about Bawarchi."
          light
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40, rotateY: -10 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                rotateY: 3,
                rotateX: -2,
                transition: { duration: 0.2 },
              }}
              style={{ perspective: 1000, transformStyle: "preserve-3d" }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-colors"
            >
              <StarRating count={t.rating} />
              <p className="text-cream-200 text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`${t.color} w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-cream-100 font-heading font-semibold text-sm">
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-heading text-cream-100 text-sm font-semibold">
                    {t.name}
                  </p>
                  <p className="text-cream-400 text-xs">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <p className="text-cream-300 text-sm mb-3 flex items-center justify-center gap-1">
            <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            4.8/5 average rating on Google Maps
          </p>
          <a
            href="https://maps.google.com/?q=Bawarchi+Restaurant+and+Banquet+Kalol"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-olive-300 hover:text-olive-200 font-heading text-sm underline underline-offset-4 transition-colors"
          >
            View all reviews on Google →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
