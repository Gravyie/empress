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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
