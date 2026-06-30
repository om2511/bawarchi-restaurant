import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const links = [
  { name: "Dashboard", path: "/admin/dashboard" },
  { name: "Menu Items", path: "/admin/menu" },
  { name: "Gallery", path: "/admin/gallery" },
  { name: "Reservations", path: "/admin/reservations" },
];

export default function AdminLayout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-cream-100">
      <aside className="w-64 bg-teal-900 text-cream-100 flex flex-col p-6">
        <h2 className="font-display text-3xl mb-8">Bawarchi</h2>
        <nav className="flex-1 space-y-2">
          {links.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className="block px-4 py-2.5 rounded-lg hover:bg-teal-800 transition-colors text-sm font-heading"
            >
              {l.name}
            </Link>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="text-sm text-olive-300 hover:text-olive-200 text-left mt-6"
        >
          Log Out
        </button>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}