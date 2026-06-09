import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Build PC", href: "/pc-builder" },
  { label: "Workstations", href: "/workstations" },
  { label: "Gaming", href: "/gaming" },
  { label: "Products", href: "/products" },
  { label: "Events", href: "/events" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/faqs" },
];

export default function EmpressNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#f8f9fa] dark:bg-black/80 backdrop-blur-xl border-b border-black/10 dark:border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-white/5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img src="/images/Logo.png" alt="Empress PC" className="h-7 lg:h-8" />
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-[11px] uppercase tracking-[0.15em] font-medium text-gray-600 dark:text-white/60 hover:text-white transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-white group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="/cart"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            <ShoppingCart size={16} />
          </a>
          <a
            href="/auth"
            className="hidden sm:flex w-9 h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-white hover:border-white/30 transition-all"
          >
            <User size={16} />
          </a>
          <a
            href="/contact"
            className="hidden lg:inline-flex px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-semibold text-black bg-white hover:bg-white/90 transition-all"
          >
            Contact
          </a>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-[#f8f9fa] dark:bg-black/95 backdrop-blur-xl border-t border-white/5",
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 py-4 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-gray-600 dark:text-white/60 hover:text-white border-b border-white/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <a
              href="/cart"
              className="flex-1 py-3 text-center text-sm font-medium border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 hover:bg-black/5 dark:bg-white/5 transition-all"
            >
              Cart
            </a>
            <a
              href="/contact"
              className="flex-1 py-3 text-center text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}