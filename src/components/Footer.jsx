import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import logo from "/images/Logo2.png";

export default function Footer() {
  return (
    <footer className="bg-[#fff6ef] text-[#333] px-6 py-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src={logo} alt="Logo" className="h-15 mb-4" />
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-7 h-7 text-gray-600 hover:text-blue-600 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-7 h-7 text-gray-600 hover:text-pink-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter className="w-7 h-7 text-gray-600 hover:text-sky-500 transition" />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube className="w-7 h-7 text-gray-600 hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Build a PC</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-60" />
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#F47C5A] transition">Build a custom PC</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Build a custom gaming PC</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Build a liquid PC</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Build a server PC</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Useful Links</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-60" />
            <ul className="space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:text-[#F47C5A] transition">About Us</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-[#F47C5A] transition">Refund & Cancellation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-black mb-2">Contact Us</h3>
            <div className="h-[1px] bg-gray-300 mb-3 w-60" />
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" /> customerhelp@empress.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                MS-101, Sector D, Aliganj
                Lucknow, Uttar Pradesh 226024
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
