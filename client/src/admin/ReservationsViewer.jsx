import { useEffect, useState } from "react";
import { fetchReservations, updateReservationStatus } from "../api/reservationApi";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function ReservationsViewer() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadData = () => {
    setLoading(true);
    fetchReservations().then(setReservations).finally(() => setLoading(false));
  };

  useEffect(() => { loadData(); }, []);

  const handleStatusChange = async (id, status) => {
    await updateReservationStatus(id, status);
    loadData();
  };

  if (loading) return <p className="text-teal-700">Loading reservations...</p>;

  return (
    <div>
      <h1 className="font-heading text-3xl text-teal-900 mb-6">Reservations</h1>

      {reservations.length === 0 ? (
        <p className="text-teal-700/60">No reservations yet.</p>
      ) : (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-teal-50 text-teal-800 text-left">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Phone</th>
                <th className="px-4 py-3">Date / Time</th>
                <th className="px-4 py-3">Guests</th>
                <th className="px-4 py-3">Message</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((r) => (
                <tr key={r._id} className="border-t border-teal-100">
                  <td className="px-4 py-3 font-medium text-teal-900">{r.name}</td>
                  <td className="px-4 py-3 text-teal-700">
                    <a href={`tel:${r.phone}`} className="hover:underline">{r.phone}</a>
                  </td>
                  <td className="px-4 py-3 text-teal-700">{r.date} at {r.time}</td>
                  <td className="px-4 py-3 text-teal-700">{r.guests}</td>
                  <td className="px-4 py-3 text-teal-700 max-w-[200px] truncate">{r.message || "—"}</td>
                  <td className="px-4 py-3">
                    <select
                      value={r.status}
                      onChange={(e) => handleStatusChange(r._id, e.target.value)}
                      className={`text-xs px-2 py-1 rounded-full border-0 ${statusColors[r.status]}`}
                    >
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}