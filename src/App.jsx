import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <div className="pt-16">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<BlogsPage />} />
      </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
