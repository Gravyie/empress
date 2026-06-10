import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, LayoutDashboard, ShoppingBag, Box, Cpu, FileText, Calendar, Users } from "lucide-react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const navLinks = [
    { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
    { name: "Orders", path: "/admin/orders", icon: ShoppingBag },
    { name: "Products", path: "/admin/products", icon: Box },
    { name: "Components", path: "/admin/components", icon: Cpu },
    { name: "Blogs", path: "/admin/blogs", icon: FileText },
    { name: "Events", path: "/admin/events", icon: Calendar },
    { name: "Users", path: "/admin/users", icon: Users },
  ];

  return (
    <div className="min-h-screen flex bg-black text-white">
      {/* Mobile Header & Hamburger */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a] border-b border-white/[0.06] z-50 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Admin Panel</h1>
        <button onClick={toggleSidebar} className="text-white hover:text-[#F47C5A] transition-colors">
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:sticky top-0 left-0 h-screen w-64 bg-[#0a0a0a] border-r border-white/[0.06] z-50
        flex flex-col pt-16 md:pt-10 p-4 space-y-4
        transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <h1 className="hidden md:block text-2xl font-bold mb-6 px-2 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Admin Panel</h1>
        <nav className="flex flex-col space-y-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <Link 
                key={link.path}
                to={link.path} 
                onClick={() => setIsSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200
                  ${isActive 
                    ? 'bg-[#F47C5A]/10 text-[#F47C5A] border border-[#F47C5A]/20' 
                    : 'text-gray-400 hover:text-white hover:bg-white/[0.04] border border-transparent'}
                `}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium text-sm">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8 pt-20 md:pt-8 overflow-y-auto w-full max-w-full">
        {children}
      </main>
    </div>
  );
}
