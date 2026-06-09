import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function AccountPage() {
  const { user, updateUser, logout } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ ...user });

  const handleChange = (field) => (e) =>
    setForm({ ...form, [field]: e.target.value });

  const handleSave = (e) => {
    e.preventDefault();
    updateUser(form);
  };

  const handleLogout = () => {
    logout();
    navigate("/auth");
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-black px-6 py-12 text-white min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-12">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-lg p-6 text-sm text-gray-600 dark:text-white/60">
          <p className="font-bold text-xs uppercase tracking-widest text-white/90 mb-4">Manage My Account</p>
          <ul className="space-y-3 mb-6">
            <li className="text-[#F47C5A] font-medium cursor-pointer">My Profile</li>
            <li className="text-gray-500 dark:text-white/40 hover:text-white/80 cursor-pointer transition-colors">Address Book</li>
            <li className="text-gray-500 dark:text-white/40 hover:text-white/80 cursor-pointer transition-colors">My Payment Options</li>
          </ul>
          <p className="font-bold text-xs uppercase tracking-widest text-white/90 mb-4">My Orders</p>
          <ul className="space-y-3">
            <li className="text-gray-500 dark:text-white/40 hover:text-white/80 cursor-pointer transition-colors">My Returns</li>
            <li className="text-gray-500 dark:text-white/40 hover:text-white/80 cursor-pointer transition-colors">My Cancellations</li>
          </ul>
        </aside>

        {/* Main Form */}
        <div className="flex-1 bg-[#0a0a0a] border border-black/10 dark:border-white/10 rounded-lg p-6 md:p-8">
          <div className="flex justify-between items-center mb-8 pb-4 border-b border-black/10 dark:border-white/10">
            <h2 className="text-xl font-bold text-white uppercase tracking-widest">Edit Your Profile</h2>
            <button
              onClick={handleLogout}
              className="text-xs uppercase tracking-widest font-semibold text-[#F47C5A] hover:text-[#e06a4a] transition-colors"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">First Name</label>
                <input
                  type="text"
                  value={form.name.split(" ")[0]}
                  onChange={handleChange("name")}
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Last Name</label>
                <input
                  type="text"
                  value={form.name.split(" ")[1] || ""}
                  onChange={(e) =>
                    setForm({ ...form, name: `${form.name.split(" ")[0]} ${e.target.value}` })
                  }
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded"
                />
              </div>
              <div>
                <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Address</label>
                <input
                  type="text"
                  value={form.address || ""}
                  onChange={handleChange("address")}
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded"
                />
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10">
              <p className="text-sm font-bold text-white uppercase tracking-widest mb-4">Password Changes</p>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded placeholder-white/30"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded placeholder-white/30"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-3 bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 text-white/90 focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all rounded placeholder-white/30"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-6">
              <button
                type="button"
                className="text-xs uppercase tracking-widest font-semibold text-gray-500 dark:text-white/50 hover:text-white transition-colors px-6 py-3"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-white text-black hover:bg-[#F47C5A] hover:text-white text-xs uppercase tracking-widest font-bold px-8 py-3 rounded transition-all shadow-lg hover:shadow-[#F47C5A]/20"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
