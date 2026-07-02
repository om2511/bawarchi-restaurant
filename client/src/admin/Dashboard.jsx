import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchReservations, updateReservationStatus } from "../api/reservationApi";
import { fetchMenuAdmin } from "../api/menuApi";
import { fetchGallery } from "../api/galleryApi";
import FoodLoader from "../components/FoodLoader";

export default function Dashboard() {
  const [reservations, setReservations] = useState([]);
  const [menuCount, setMenuCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      setLoading(true);
      const resData = await fetchReservations();
      setReservations(resData);
      
      const menuData = await fetchMenuAdmin();
      setMenuCount(menuData.items?.length || 0);

      const galleryData = await fetchGallery();
      setGalleryCount(galleryData.length || 0);
    } catch (err) {
      console.error("Dashboard failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      await updateReservationStatus(id, status);
      // Reload reservation data only to keep it smooth
      const updatedRes = await fetchReservations();
      setReservations(updatedRes);
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  if (loading) {
    return <FoodLoader message="Gathering dashboard statistics..." />;
  }

  // Calculate metrics
  const totalReservations = reservations.length;
  const pendingReservations = reservations.filter((r) => r.status === "pending").length;
  const confirmedReservations = reservations.filter((r) => r.status === "confirmed").length;

  // Recent 5 reservations
  const recentReservations = reservations.slice(0, 5);

  const stats = [
    {
      label: "Pending Bookings",
      value: pendingReservations,
      icon: (
        <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      label: "Confirmed Table",
      value: confirmedReservations,
      icon: (
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bg: "bg-green-50 border-green-200 text-green-800",
    },
    {
      label: "Total Menu Items",
      value: menuCount,
      icon: (
        <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      bg: "bg-teal-50 border-teal-200 text-teal-800",
    },
    {
      label: "Gallery Images",
      value: galleryCount,
      icon: (
        <svg className="w-6 h-6 text-olive-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      bg: "bg-olive-50 border-olive-200 text-olive-800",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl text-teal-900 font-bold">Dashboard Overview</h1>
        <p className="text-teal-700/70 text-sm">Welcome back to your administration command center.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className={`border rounded-2xl p-5 flex items-center justify-between shadow-sm bg-white ${s.bg}`}
          >
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-wider font-semibold opacity-70">{s.label}</p>
              <p className="text-3xl font-display font-bold leading-none">{s.value}</p>
            </div>
            <div className="p-3 bg-white rounded-xl shadow-xs border border-teal-100/50">
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Main dashboard content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Reservations */}
        <div className="lg:col-span-2 space-y-4 min-w-0">
          <div className="flex justify-between items-center">
            <h2 className="font-heading text-xl text-teal-900 font-semibold">Recent Booking Requests</h2>
            <Link to="/admin/reservations" className="text-xs text-olive-600 hover:underline font-semibold">
              View All Reservations &rarr;
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-teal-100/50 overflow-hidden">
            {recentReservations.length === 0 ? (
              <div className="p-8 text-center text-teal-700/50 text-sm">
                No reservation requests found.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[500px] text-sm text-left">
                  <thead className="bg-teal-50/50 text-teal-900 font-semibold border-b border-teal-100">
                    <tr>
                      <th className="px-5 py-3.5">Guest</th>
                      <th className="px-5 py-3.5">Details</th>
                      <th className="px-5 py-3.5">Status</th>
                      <th className="px-5 py-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-teal-50">
                    {recentReservations.map((r) => (
                      <tr key={r._id} className="hover:bg-teal-50/10 transition-colors">
                        <td className="px-5 py-4">
                          <p className="font-semibold text-teal-950">{r.name}</p>
                          <p className="text-xs text-teal-700/60 mt-0.5">{r.phone}</p>
                        </td>
                        <td className="px-5 py-4 text-teal-800">
                          <p className="font-medium text-xs sm:text-sm">{r.date}</p>
                          <p className="text-xs text-teal-700/70 mt-0.5">{r.time} • {r.guests} guests</p>
                        </td>
                        <td className="px-5 py-4">
                          <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${
                            r.status === "pending"
                              ? "bg-amber-100 text-amber-800 border border-amber-200"
                              : r.status === "confirmed"
                              ? "bg-green-100 text-green-800 border border-green-200"
                              : "bg-red-100 text-red-800 border border-red-200"
                          }`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-right space-x-2">
                          {r.status === "pending" && (
                            <>
                              <button
                                onClick={() => handleStatusChange(r._id, "confirmed")}
                                className="text-xs bg-green-600 hover:bg-green-500 text-white px-2.5 py-1 rounded-md transition-colors"
                              >
                                Confirm
                              </button>
                              <button
                                onClick={() => handleStatusChange(r._id, "cancelled")}
                                className="text-xs bg-white hover:bg-red-50 text-red-600 border border-red-200 px-2.5 py-1 rounded-md transition-all"
                              >
                                Cancel
                              </button>
                            </>
                          )}
                          {r.status !== "pending" && (
                            <span className="text-xs text-teal-700/40">Processed</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="space-y-4">
          <h2 className="font-heading text-xl text-teal-900 font-semibold">Quick Actions</h2>
          <div className="bg-white rounded-2xl p-5 border border-teal-100/50 shadow-sm space-y-3">
            <Link
              to="/admin/menu"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-teal-50 text-teal-900 border border-teal-100/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Add Menu Item</span>
              </div>
              <span className="text-teal-400 group-hover:text-teal-700 transition-colors">&rarr;</span>
            </Link>
            <Link
              to="/admin/gallery"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-teal-50 text-teal-900 border border-teal-100/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-olive-500/10 text-olive-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Upload Gallery Image</span>
              </div>
              <span className="text-olive-400 group-hover:text-olive-700 transition-colors">&rarr;</span>
            </Link>
            <Link
              to="/admin/reservations"
              className="flex items-center justify-between p-3 rounded-xl hover:bg-teal-50 text-teal-900 border border-teal-100/30 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-700 flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold">Manage Bookings</span>
              </div>
              <span className="text-amber-400 group-hover:text-amber-700 transition-colors">&rarr;</span>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}