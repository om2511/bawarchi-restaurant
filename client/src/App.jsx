import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Banquet from "./pages/Banquet";
import About from "./pages/About";
import Contact from "./pages/Contact";

import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import MenuManager from "./admin/MenuManager";
import GalleryManager from "./admin/GalleryManager";
import ReservationsViewer from "./admin/ReservationsViewer";

function App() {
  return (
    <Routes>
      {/* Public site */}
      <Route
        path="/*"
        element={
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/banquet" element={<Banquet />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        }
      />

      {/* Admin */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="menu" element={<MenuManager />} />
        <Route path="gallery" element={<GalleryManager />} />
        <Route path="reservations" element={<ReservationsViewer />} />
      </Route>
    </Routes>
  );
}

export default App;