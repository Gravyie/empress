import { Facebook, Instagram, Twitter, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "/images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06] text-white px-6 py-10">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8">
        <div>
          <img src={logo} alt="Logo" className="h-7 mb-5" />
          <p className="text-gray-400 dark:text-white/30 text-xs font-light leading-relaxed mb-5 max-w-xs">
            Performance-grade custom PCs engineered for gamers, creators, and professionals.
          </p>
          <div className="flex space-x-3">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Instagram, label: "Instagram" },
              { icon: Twitter, label: "Twitter" },
              { icon: Youtube, label: "Youtube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 border border-white/[0.08] flex items-center justify-center text-gray-500 dark:text-white/40 hover:text-white hover:border-white/25 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-[0.15em] text-gray-800 dark:text-white/80 mb-4">Build a PC</h3>
            <div className="w-8 h-[1px] bg-[#F47C5A] mb-4" />
            <ul className="space-y-2 text-sm">
              <li><Link to="/pc-builder" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Build a custom PC</Link></li>
              <li><Link to="/gaming" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Build a custom gaming PC</Link></li>
              <li><Link to="/products" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Build a liquid PC</Link></li>
              <li><Link to="/server" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Build a server PC</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-[0.15em] text-gray-800 dark:text-white/80 mb-4">Useful Links</h3>
            <div className="w-8 h-[1px] bg-[#F47C5A] mb-4" />
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">About Us</Link></li>
              <li><Link to="/terms" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Terms & Conditions</Link></li>
              <li><Link to="/shipping" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Shipping Policy</Link></li>
              <li><Link to="/refund" className="text-gray-500 dark:text-white/40 hover:text-white transition-colors font-light">Refund & Cancellation</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-[0.15em] text-gray-800 dark:text-white/80 mb-4">Contact Us</h3>
            <div className="w-8 h-[1px] bg-[#F47C5A] mb-4" />
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-gray-400 dark:text-white/30" /> <span className="text-gray-500 dark:text-white/50 font-light">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-gray-400 dark:text-white/30" /> <span className="text-gray-500 dark:text-white/50 font-light">customerhelp@empress.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-gray-400 dark:text-white/30" />
                <span className="text-gray-500 dark:text-white/50 font-light">MS-101, Sector D, Aliganj<br />Lucknow, UP 226024</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06] pt-5">
        <div className="flex flex-col sm:flex-row justify-between items-center text-[11px] text-white/25 max-w-7xl mx-auto">
          <span>© {new Date().getFullYear()} Empress PC. All rights reserved.</span>
          <Link to="/" className="text-gray-400 dark:text-white/30 hover:text-white/60 transition-colors mt-2 sm:mt-0">www.empresspc.in</Link>
        </div>
      </div>
    </footer>
  );
}
