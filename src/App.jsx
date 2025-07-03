import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import EmpressNavbar from "./components/EmpressNavbar";

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

// Auth-related
import SignupLoginPage from "./pages/SignUp-Login-Page";
import AccountPage from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import ComponentsPage from "./pages/ComponentsPage";
import ScrollToTop from "./components/ScrollToTop";
import BuildPC from "./pages/BuildPC";


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <EmpressNavbar />

          {/* Main Content */}
          <main className="flex-grow">
            <Routes>
              {/* Auth Routes */}
              <Route path="/auth" element={<SignupLoginPage />} />
              <Route
                path="/account"
                element={
                  <ProtectedRoute>
                    <AccountPage />
                  </ProtectedRoute>
                }
              />

              {/* Core Pages */}
              <Route path="/" element={<LandingPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/workstations" element={<Workstations />} />
              <Route path="/gaming" element={<Gaming />} />
              <Route path="/components" element={<ComponentsPage />} />
              <Route path="/productivity" element={<Productivity />} />
              <Route path="/server" element={<Server />} />
              <Route path="/custom-pc" element={<CustomPC />} />
              <Route path="/build-pc" element={<BuildPC />} />             
              <Route path="/events" element={<Events />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<CategoriesPage />} />
              <Route path="/products/:categoryId" element={<ComponentsListingPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/pc-builder" element={<PCBuilder />} />
              <Route path="/faqs" element={<FAQSection />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
