import { Search } from "lucide-react";
import logo from "/images/Logo.webp";

export default function TopBar() {
  return (
    <div className="w-full bg-[#161616] p-4 flex items-center justify-between shadow-md">
      <div className="flex-shrink-0">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <nav className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <a href="#" className="hover:text-[#F47C5A] transition">
          Home
        </a>
        <a href="#" className="hover:text-[#F47C5A] transition">
          Products
        </a>
        <a href="#" className="hover:text-[#F47C5A] transition">
          Blogs
        </a>
        <a href="#" className="hover:text-[#F47C5A] transition">
          About
        </a>
        <a href="#" className="hover:text-[#F47C5A] transition">
          Contact
        </a>
      </nav>

      <div className="flex items-center bg-gray-800 rounded-full px-3 py-1 w-40 md:w-64">
        <input
          type="search"
          placeholder="Search..."
          className="bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none flex-grow"
        />
        <button className="text-black hover:text-[#F47C5A] transition ml-2">
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
