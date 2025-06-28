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
    <div className=" bg-gray-100 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 md:gap-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white shadow rounded-lg p-6 text-sm text-gray-700">
          <p className="font-semibold text-black mb-2 md:mb-4">Manage My Account</p>
          <ul className="space-y-2 mb-2 md:mb-4">
            <li className="text-red-500 font-medium">My Profile</li>
            <li className="text-gray-400">Address Book</li>
            <li className="text-gray-400">My Payment Options</li>
          </ul>
          <p className="font-semibold text-black mb-2">My Orders</p>
          <ul className="space-y-2">
            <li className="text-gray-600">My Returns</li>
            <li className="text-gray-600">My Cancellations</li>
          </ul>
          {/* <p className="font-semibold text-black mb-2">My Wishlist</p> */}
        </aside>

        {/* Main Form */}
        <div className="flex-1 bg-white rounded-lg shadow p-4 md:p-8">
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <h2 className="text-xl font-semibold text-red-500">Edit Your Profile</h2>
            <button
              onClick={handleLogout}
              className="text-sm text-red-400 hover:underline"
            >
              Logout
            </button>
          </div>

          <form onSubmit={handleSave} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-6">
              <div>
                <label className="text-sm text-gray-600 block mb-1">First Name</label>
                <input
                  type="text"
                  value={form.name.split(" ")[0]}
                  onChange={handleChange("name")}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Last Name</label>
                <input
                  type="text"
                  value={form.name.split(" ")[1] || ""}
                  onChange={(e) =>
                    setForm({ ...form, name: `${form.name.split(" ")[0]} ${e.target.value}` })
                  }
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="text-sm text-gray-600 block mb-1">Address</label>
                <input
                  type="text"
                  value={form.address || ""}
                  onChange={handleChange("address")}
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-700 font-semibold mb-3">Password Changes</p>
              <div className="space-y-4">
                <input
                  type="password"
                  placeholder="Current Password"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-4">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 text-white text-sm font-semibold px-6 py-2 rounded-lg hover:bg-red-600 transition"
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
