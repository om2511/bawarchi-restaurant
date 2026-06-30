import { useState } from "react";
import { motion } from "framer-motion";
import { createReservation } from "../api/reservationApi";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    guests: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: "", msg: "" });
    try {
      await createReservation({ ...form, guests: Number(form.guests) });
      setStatus({ type: "success", msg: "Reservation request sent! We'll call you to confirm." });
      setForm({ name: "", phone: "", email: "", date: "", time: "", guests: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: "Something went wrong. Please call us directly." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-cream-100 pt-32 pb-20">
      <div className="text-center mb-12 px-6">
        <p className="text-olive-600 font-heading tracking-[0.3em] uppercase text-sm mb-2">
          Get in Touch
        </p>
        <h1 className="font-display text-6xl text-teal-900 mb-3">Reserve a Table</h1>
        <p className="text-teal-700/70 max-w-xl mx-auto">
          Reservations are recommended — fill the form below or call us directly.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-card p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text" name="name" placeholder="Your Name" required
              value={form.name} onChange={handleChange}
              className="border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
            />
            <input
              type="tel" name="phone" placeholder="Phone Number" required
              value={form.phone} onChange={handleChange}
              className="border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
            />
          </div>
          <input
            type="email" name="email" placeholder="Email (optional)"
            value={form.email} onChange={handleChange}
            className="w-full border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
          />
          <div className="grid sm:grid-cols-3 gap-4">
            <input
              type="date" name="date" required
              value={form.date} onChange={handleChange}
              className="border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
            />
            <input
              type="time" name="time" required
              value={form.time} onChange={handleChange}
              className="border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
            />
            <input
              type="number" name="guests" placeholder="Guests" min="1" required
              value={form.guests} onChange={handleChange}
              className="border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600"
            />
          </div>
          <textarea
            name="message" placeholder="Special requests (optional)" rows="3"
            value={form.message} onChange={handleChange}
            className="w-full border border-teal-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-teal-600 resize-none"
          />
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-teal-900 font-heading font-semibold py-3.5 rounded-full shadow-glow transition-colors"
          >
            {submitting ? "Sending..." : "Request Reservation"}
          </button>
          {status.msg && (
            <p className={`text-sm text-center ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>
              {status.msg}
            </p>
          )}
        </motion.form>

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-8"
        >
          <div>
            <h3 className="font-heading text-teal-900 font-semibold mb-2">Address</h3>
            <p className="text-teal-700/80 leading-relaxed">
              Helipad, 76/2, Gopalnagar Rd, nr. Green City - 3, Tirupati
              Society, Panchavati, Ambika Nagar, Kalol, Gujarat 382721
            </p>
          </div>
          <div>
            <h3 className="font-heading text-teal-900 font-semibold mb-2">Phone</h3>
            <a href="tel:+917621927000" className="text-olive-600 hover:underline">
              +91 76219 27000
            </a>
          </div>
          <div>
            <h3 className="font-heading text-teal-900 font-semibold mb-2">Hours</h3>
            <p className="text-teal-700/80">10:00 AM – 11:00 PM, Daily</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-card aspect-video">
            <iframe
              title="Bawarchi Location"
              src="https://www.google.com/maps?q=Bawarchi+Restaurant+and+Banquet+Kalol&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}