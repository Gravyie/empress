import { Search, Menu } from "lucide-react";
import logo from "/images/Logo.png";

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black px-4 py-3 flex items-center justify-between">
      
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <nav className="hidden sm:flex space-x-4 text-white text-xs sm:text-sm font-medium">
        <a href="/" className="hover:text-[#F47C5A] transition">Home</a>
        <a href="/products" className="hover:text-[#F47C5A] transition">Products</a>
        <a href="/CustomPC" className="hover:text-[#F47C5A] transition">Custom PC</a>
        <a href="/events" className="hover:text-[#F47C5A] transition">Events</a>
        <a href="/blogs" className="hover:text-[#F47C5A] transition">Blogs</a>
        <a href="/about" className="hover:text-[#F47C5A] transition">About</a>
        <a href="contact" className="hover:text-[#F47C5A] transition">Contact</a>
      </nav>

      <div className="flex items-center gap-3">

        <div className="sm:ml-30">
          <Search className="text-gray-400 hover:text-[#F47C5A] w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <details className="sm:hidden relative group">
          <summary className="list-none cursor-pointer">
            <Menu className="h-4 text-gray-700" />
          </summary>
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-md px-4 py-2 flex flex-col text-sm font-medium text-white space-y-1 z-50">
            <a href="#" className="hover:text-black transition">Home</a>
            <a href="#" className="hover:text-black transition">Products</a>
            <a href="#" className="hover:text-black transition">Custom</a>
            <a href="#" className="hover:text-black transition">Events</a>
            <a href="#" className="hover:text-black transition">Blogs</a>
            <a href="#" className="hover:text-black transition">About</a>
            <a href="#" className="hover:text-black transition">Contact</a>

          </div>
        </details>
      </div>
    </div>
  );
}
