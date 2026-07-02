import { useEffect, useState } from "react";
import { fetchReservations, updateReservationStatus } from "../api/reservationApi";

const statusColors = {
  pending: "bg-amber-100 text-amber-700 border-amber-200",
  confirmed: "bg-green-100 text-green-700 border-green-200",
  cancelled: "bg-red-100 text-red-700 border-red-200",
};

export default function ReservationsViewer() {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const loadData = () => {
    setLoading(true);
    fetchReservations().then(setReservations).finally(() => setLoading(false));
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateReservationStatus(id, status);
      // Fast refresh
      const updated = await fetchReservations();
      setReservations(updated);
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-teal-800 font-heading text-lg animate-pulse">Loading reservations list...</p>
      </div>
    );
  }

  // Apply filters & search
  const filteredReservations = reservations.filter((r) => {
    const matchesStatus = filterStatus === "all" || r.status === filterStatus;
    const matchesSearch =
      r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.phone.includes(searchQuery);
    return matchesStatus && matchesSearch;
  });

  const filterTabs = [
    { id: "all", label: "All Bookings" },
    { id: "pending", label: "Pending" },
    { id: "confirmed", label: "Confirmed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-heading text-3xl text-teal-900 font-bold">Reservations</h1>
          <p className="text-teal-700/70 text-sm">Review, approve, and manage customer table reservations.</p>
        </div>
        <button
          onClick={loadData}
          className="self-start sm:self-auto inline-flex items-center gap-2 bg-white hover:bg-teal-50 border border-teal-200 text-teal-800 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-3.182V12" />
          </svg>
          Refresh List
        </button>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-teal-100/50 shadow-xs">
        {/* Status Tabs */}
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
          {filterTabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setFilterStatus(t.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold font-heading transition-all whitespace-nowrap ${
                filterStatus === t.id
                  ? "bg-teal-800 text-cream-100 shadow-sm"
                  : "bg-teal-50/50 text-teal-800 hover:bg-teal-50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full md:max-w-xs">
          <span className="absolute inset-y-0 left-3 flex items-center text-teal-400">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search by name or phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-teal-200 focus:outline-none focus:border-teal-600 text-sm"
          />
        </div>
      </div>

      {/* Grid / Table */}
      {filteredReservations.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center text-teal-700/60 border border-teal-100/50">
          <svg className="w-12 h-12 text-teal-300 mx-auto mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm font-semibold">No reservations found match criteria.</p>
          <p className="text-xs text-teal-700/40 mt-1">Try changing the filters or search query.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-teal-100/50 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-sm text-left">
              <thead className="bg-teal-50 text-teal-900 font-semibold border-b border-teal-100">
                <tr>
                  <th className="px-5 py-4">Guest Details</th>
                  <th className="px-5 py-4">Phone</th>
                  <th className="px-5 py-4">Reservation Time</th>
                  <th className="px-5 py-4 text-center">Seats</th>
                  <th className="px-5 py-4">Special Requests</th>
                  <th className="px-5 py-4">Status</th>
                  <th className="px-5 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-teal-50">
                {filteredReservations.map((r) => (
                  <tr key={r._id} className="hover:bg-teal-50/10 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-semibold text-teal-950">{r.name}</p>
                      {r.email && <p className="text-xs text-teal-700/50 mt-0.5">{r.email}</p>}
                    </td>
                    <td className="px-5 py-4">
                      <a href={`tel:${r.phone}`} className="text-olive-600 hover:underline font-medium">
                        {r.phone}
                      </a>
                    </td>
                    <td className="px-5 py-4 text-teal-800">
                      <p className="font-medium">{r.date}</p>
                      <p className="text-xs text-teal-700/60 mt-0.5">{r.time}</p>
                    </td>
                    <td className="px-5 py-4 text-center text-teal-800 font-semibold">
                      {r.guests}
                    </td>
                    <td className="px-5 py-4 text-teal-700 max-w-[200px] truncate" title={r.message}>
                      {r.message || <span className="text-teal-700/30 font-light">&mdash;</span>}
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-[10px] uppercase tracking-wider font-bold px-2.5 py-1 rounded-full border ${statusColors[r.status]}`}>
                        {r.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-right space-x-2">
                      {r.status === "pending" ? (
                        <div className="inline-flex gap-1.5 justify-end">
                          <button
                            onClick={() => handleStatusChange(r._id, "confirmed")}
                            className="text-xs bg-green-600 hover:bg-green-500 text-white px-3 py-1.5 rounded-lg transition-colors font-medium shadow-xs"
                          >
                            Approve
                          </button>
                          <button
                            onClick={() => handleStatusChange(r._id, "cancelled")}
                            className="text-xs bg-white hover:bg-red-50 text-red-600 border border-red-200 px-3 py-1.5 rounded-lg transition-all"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <select
                          value={r.status}
                          onChange={(e) => handleStatusChange(r._id, e.target.value)}
                          className="text-xs border border-teal-200 rounded-lg px-2 py-1.5 bg-white text-teal-800 focus:outline-none"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}