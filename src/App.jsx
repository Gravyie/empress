import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import Footer from "./components/Footer";
import EmpressNavbar from "./components/EmpressNavbar";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import ErrorBoundary from "./components/ErrorBoundary";

// Pages
const LandingPage = lazy(() => import("./pages/LandingPage"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const BlogsPage = lazy(() => import("./pages/BlogsPage"));

const Events = lazy(() => import("./pages/Events"));
const Workstations = lazy(() => import("./pages/Workstations"));
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"));
const ComponentsListingPage = lazy(() => import("./pages/ComponentsListingPage"));
const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
const PCBuilder = lazy(() => import("./pages/PCBuilder"));
const FAQSection = lazy(() => import("./components/FAQs"));
const Gaming = lazy(() => import("./pages/Gaming"));
const Productivity = lazy(() => import("./pages/Productivity"));
const Server = lazy(() => import("./pages/Server"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const SignupLoginPage = lazy(() => import("./pages/SignUp-Login-Page"));
const AccountPage = lazy(() => import("./pages/Account"));
const ComponentsPage = lazy(() => import("./pages/ComponentsPage"));


// Admin
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const AdminPanel = lazy(() => import("./admin/AdminPanel"));
const OrdersPage = lazy(() => import("./admin/OrdersPage"));
const ProductsPage = lazy(() => import("./admin/ProductsPage"));
const AdminComponentsPage = lazy(() => import("./admin/AdminComponentsPage"));
const UsersPage = lazy(() => import("./admin/UsersPage"));
const AdminEventPage = lazy(() => import("./admin/AdminEventsPage"));
const AdminBlogPage = lazy(() => import("./admin/AdminBlogs"));

function PageLoader() {
  return (
    <div className="w-full min-h-[calc(100vh-160px)] flex flex-col items-center justify-center">
      <div className="w-8 h-8 border-2 border-black/10 dark:border-white/10 border-t-[#F47C5A] rounded-full animate-spin"></div>
    </div>
  );
}

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

        <Route path="/events" element={wrap(<Events />)} />
        <Route path="/blogs" element={wrap(<BlogsPage />)} />
        <Route path="/about" element={wrap(<About />)} />
        <Route path="/contact" element={wrap(<Contact />)} />
        <Route path="/products" element={wrap(<CategoriesPage />)} />
        <Route path="/categories" element={wrap(<CategoriesPage />)} />
        <Route path="/products/:categoryId" element={wrap(<ComponentsListingPage />)} />
        <Route path="/product/:productId" element={wrap(<ProductDetailPage />)} />
        <Route path="/pc-builder" element={wrap(<PCBuilder />)} />
        <Route path="/faqs" element={wrap(<FAQSection />)} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><AdminPanel /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><OrdersPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><ProductsPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/components"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><AdminComponentsPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/users"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><UsersPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/events"
          element={
            <ProtectedRoute adminOnly>
              <AdminLayout><AdminEventPage /></AdminLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute adminOnly>
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
      className="flex flex-col min-h-[calc(100vh-80px)]"
    >
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </motion.div>
  );
}

// Main App
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#f8f9fa] dark:bg-black">
          <EmpressNavbar />
          <AnimatedRoutes />
        </div>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.08)',
              color: '#fff',
              fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
            },
          }}
        />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

