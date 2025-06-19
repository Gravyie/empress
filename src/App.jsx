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
import CategoriesPage from "./pages/CategoriesPage"; // Assuming your CategoriesPage is in src/pages
import ProductsListingPage from "./pages/ProductsListingPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PCBuilder from "./pages/PCBuilder";

function App() {
  return (
    <BrowserRouter>
      <EmpressNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workstations" element={<Workstations />} />
        <Route path="/custom-pc" element={<CustomPC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/products/:categoryId" element={<ProductsListingPage />} />
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/pc-builder" element={<PCBuilder />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
