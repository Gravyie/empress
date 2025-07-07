import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Footer from "./components/Footer";
import EmpressNavbar from "./components/EmpressNavbar";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";

// Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";
import CustomPC from "./pages/CustomPC";
import Events from "./pages/Events";
import Workstations from "./pages/Workstations";
import CategoriesPage from "./pages/CategoriesPage";
import ComponentsListingPage from "./pages/ComponentsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PCBuilder from "./pages/PCBuilder";
import FAQSection from "./components/FAQs";
import Gaming from "./pages/Gaming";
import Productivity from "./pages/Productivity";
import Server from "./pages/Server";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import SignupLoginPage from "./pages/SignUp-Login-Page";
import AccountPage from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import ComponentsPage from "./pages/ComponentsPage";
import BuildPC from "./pages/BuildPC";

// Admin
import AdminLayout from "./layouts/AdminLayout";
import AdminPanel from "./admin/AdminPanel";
import OrdersPage from "./admin/OrdersPage";
import ProductsPage from "./admin/ProductsPage";
import AdminComponentsPage from "./admin/AdminComponentsPage";
import UsersPage from "./admin/UsersPage";
import AdminEventPage from "./admin/AdminEventsPage";
import AdminBlogPage from "./admin/AdminBlogs";

// Animation Wrapper for route changes
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Auth Routes */}
        <Route path="/auth" element={wrap(<SignupLoginPage />)} />
        <Route
          path="/account"
          element={
            <ProtectedRoute>
              {wrap(<AccountPage />)}
            </ProtectedRoute>
          }
        />

        {/* Core Pages */}
        <Route path="/" element={wrap(<LandingPage />)} />
        <Route path="/cart" element={wrap(<Cart />)} />
        <Route path="/checkout" element={wrap(<Checkout />)} />
        <Route path="/workstations" element={wrap(<Workstations />)} />
        <Route path="/gaming" element={wrap(<Gaming />)} />
        <Route path="/components" element={wrap(<ComponentsPage />)} />
        <Route path="/productivity" element={wrap(<Productivity />)} />
        <Route path="/server" element={wrap(<Server />)} />
        <Route path="/custom-pc" element={wrap(<CustomPC />)} />
        <Route path="/build-pc" element={wrap(<BuildPC />)} />
        <Route path="/events" element={wrap(<Events />)} />
        <Route path="/blogs" element={wrap(<BlogsPage />)} />
        <Route path="/about" element={wrap(<About />)} />
        <Route path="/contact" element={wrap(<Contact />)} />
        <Route path="/products" element={wrap(<CategoriesPage />)} />
        <Route path="/products/:categoryId" element={wrap(<ComponentsListingPage />)} />
        <Route path="/product/:productId" element={wrap(<ProductDetailPage />)} />
        <Route path="/pc-builder" element={wrap(<PCBuilder />)} />
        <Route path="/faqs" element={wrap(<FAQSection />)} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout><AdminPanel /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute>
              <AdminLayout><OrdersPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute>
              <AdminLayout><ProductsPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/components"
          element={
            <ProtectedRoute>
              <AdminLayout><AdminComponentsPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute>
              <AdminLayout><UsersPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/events"
          element={
            <ProtectedRoute>
              <AdminLayout><AdminEventPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <AdminLayout><AdminBlogPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}

function wrap(children) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

// Main App
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <EmpressNavbar />
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
