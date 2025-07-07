import { Link } from "react-router-dom";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col pt-10 p-4 space-y-4">
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>
        <nav className="flex flex-col space-y-2">
          <Link to="/admin" className="hover:text-[#F47C5A]">Dashboard</Link>
          <Link to="/admin/orders" className="hover:text-[#F47C5A]">Orders</Link>
          <Link to="/admin/products" className="hover:text-[#F47C5A]">Products</Link>
          <Link to="/admin/components" className="hover:text-[#F47C5A]">Components</Link>
          <Link to="/admin/blogs" className="hover:text-[#F47C5A]">Blogs</Link>
          <Link to="/admin/events" className="hover:text-[#F47C5A]">Events</Link>
          <Link to="/admin/users" className="hover:text-[#F47C5A]">Users</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
