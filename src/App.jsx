import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";
import CustomPC from "./pages/CustomPC";
import Events from "./pages/Events";
import EmpressNavbar from "./components/EmpressNavbar";
import Workstations from "./pages/Workstations";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsListingPage from "./pages/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PCBuilder from "./pages/PCBuilder";
import FAQSection from "./components/FAQs";
import Gaming from "./pages/Gaming";
import Productivity from "./pages/Productivity";
import Server from "./pages/Server";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <EmpressNavbar />

        {/* Main content area grows to fill space */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/workstations" element={<Workstations />} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/productivity" element={<Productivity />} />
            <Route path="/server" element={<Server />} />
            <Route path="/custom-pc" element={<CustomPC />} />
            <Route path="/events" element={<Events />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<CategoriesPage />} />
            <Route path="/products/:categoryId" element={<ProductsListingPage />} />
            <Route path="/product/:productId" element={<ProductDetailPage />} />
            <Route path="/pc-builder" element={<PCBuilder />} />
            <Route path="/faqs" element={<FAQSection />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
