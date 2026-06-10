import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { cn } from "../lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
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
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
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
          <Link to="/" className="flex-shrink-0">
            <img src="/images/Logo.png" alt="Empress PC" className="h-7 xl:h-8" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "px-3 py-2 text-[11px] uppercase tracking-[0.15em] font-medium transition-colors duration-200 relative group",
                    isActive ? "text-white" : "text-gray-600 dark:text-white/60 hover:text-white"
                  )}
                >
                  {link.label}
                  <span 
                    className={cn(
                      "absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] transition-all duration-300",
                      isActive ? "w-full bg-[#F47C5A]" : "w-0 bg-white group-hover:w-3/4"
                    )} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/cart"
              className="flex w-8 h-8 sm:w-9 sm:h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <ShoppingCart size={16} />
            </Link>
            <Link
              to="/auth"
              className="flex w-8 h-8 sm:w-9 sm:h-9 items-center justify-center rounded-full border border-black/10 dark:border-white/10 text-gray-600 dark:text-white/60 hover:text-white hover:border-white/30 transition-all"
            >
              <User size={16} />
            </Link>
            <Link
              to="/contact"
              className="hidden xl:inline-flex px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-semibold text-black bg-white hover:bg-white/90 transition-all"
            >
              Contact
            </Link>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="xl:hidden w-9 h-9 flex items-center justify-center border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 relative z-[60]"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — fixed overlay, does NOT push page content */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[55] bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
      <div
        className={cn(
          "fixed top-0 right-0 z-[56] w-[280px] h-full bg-[#0a0a0a] border-l border-white/[0.06] xl:hidden transition-transform duration-300 ease-out flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Close button area */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <img src="/images/Logo.png" alt="Empress PC" className="h-6" />
          <button
            onClick={() => setMobileOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white"
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div className="flex-1 overflow-y-auto px-5 py-3">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "block py-3 text-sm font-medium border-b border-white/[0.04] transition-colors",
                  isActive ? "text-[#F47C5A]" : "text-white/60 hover:text-white"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-5 border-t border-white/[0.06]">
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full py-3 text-center text-sm font-semibold bg-white text-black hover:bg-white/90 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}