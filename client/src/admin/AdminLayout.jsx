import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const links = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4zM14 16a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2v-4z" />
      </svg>
    ),
  },
  {
    name: "Menu Items",
    path: "/admin/menu",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    name: "Gallery",
    path: "/admin/gallery",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: "Reservations",
    path: "/admin/reservations",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const email = user?.email || "admin@bawarchi.com";
  const initial = email.charAt(0).toUpperCase();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Title */}
      <div className="mb-8 flex items-center gap-3">
        <img
          src="/images/logo.jpg"
          alt="Bawarchi Logo"
          className="h-10 w-10 rounded-full object-cover border border-olive-300/30"
        />
        <div className="flex flex-col">
          <span className="font-display text-2xl text-cream-100 leading-none">Bawarchi</span>
          <span className="text-[10px] text-olive-300 font-heading tracking-widest uppercase mt-0.5">Admin Panel</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {links.map((l) => {
          const isActive = location.pathname === l.path;
          return (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-heading text-sm ${
                isActive
                  ? "bg-amber-500 text-teal-950 font-semibold shadow-md"
                  : "text-cream-200 hover:bg-teal-800/60 hover:text-cream-100"
              }`}
            >
              {l.icon}
              {l.name}
            </Link>
          );
        })}
      </nav>

      {/* Profile & Logout */}
      <div className="pt-6 border-t border-teal-800/80 mt-6 flex flex-col gap-4">
        <div className="flex items-center gap-3 px-2">
          <div className="w-9 h-9 rounded-full bg-olive-500 text-teal-950 flex items-center justify-center font-bold text-sm shrink-0">
            {initial}
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs text-cream-300 font-medium truncate">{email}</p>
            <p className="text-[10px] text-olive-300 uppercase tracking-wider font-semibold">Store Manager</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-cream-200 hover:bg-red-500/10 hover:text-red-400 font-heading text-sm text-left transition-colors"
        >
          <svg className="w-5 h-5 text-red-400/80" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Log Out
        </button>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-full flex overflow-hidden bg-cream-100">
      
      {/* Mobile Top Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-teal-900 text-cream-100 flex items-center justify-between px-6 z-40 shadow-md">
        <div className="flex items-center gap-3">
          <img src="/images/logo.jpg" alt="Logo" className="h-8 w-8 rounded-full" />
          <span className="font-display text-xl">Bawarchi Admin</span>
        </div>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-cream-100 p-1"
          aria-label="Toggle admin sidebar"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-teal-900 text-cream-100 flex-col p-6 shadow-xl shrink-0 h-full overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 bg-teal-950/60 z-40 backdrop-blur-xs"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`md:hidden fixed top-0 bottom-0 left-0 w-64 bg-teal-900 text-cream-100 z-50 p-6 flex flex-col shadow-2xl transition-transform duration-300 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 overflow-y-auto h-full pt-24 md:pt-10">
        <Outlet />
      </main>
    </div>
  );
}