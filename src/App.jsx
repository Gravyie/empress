import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";
import Products from "./pages/Products";
import CustomPC from "./pages/CustomPC";
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<Products />} />
        <Route path="/CustomPC" element={<CustomPC />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
