import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Banquet from "./pages/Banquet";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminLogin from "./admin/AdminLogin";
import AdminLayout from "./admin/AdminLayout";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import MenuManager from "./admin/MenuManager";
import GalleryManager from "./admin/GalleryManager";
import ReservationsViewer from "./admin/ReservationsViewer";

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -16 }}
    transition={{ duration: 0.35 }}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      {/* Public site */}
      <Route
        path="/*"
        element={
          <div>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/menu" element={<PageWrapper><Menu /></PageWrapper>} />
                <Route path="/gallery" element={<PageWrapper><Gallery /></PageWrapper>} />
                <Route path="/banquet" element={<PageWrapper><Banquet /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
            <Footer />
            <WhatsAppButton />
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