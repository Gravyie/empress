import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);

    const revenue = storedOrders.reduce((acc, order) => acc + order.total, 0);
    setTotalRevenue(revenue);
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Orders</h2>
          <p className="text-3xl font-bold text-[#F47C5A]">{orders.length}</p>
        </div>

        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold text-[#F47C5A]">₹{totalRevenue.toLocaleString()}</p>
        </div>

        <div className="bg-white p-6 rounded shadow border">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Pending Orders</h2>
          <p className="text-3xl font-bold text-[#F47C5A]">
            {orders.filter(order => order.status === "Pending").length}
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
        {orders.length === 0 ? (
          <p className="text-gray-500">No orders found.</p>
        ) : (
          <table className="w-full table-auto border text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 border">Order ID</th>
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Amount</th>
                <th className="p-2 border">Status</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.slice(0, 5).map(order => (
                <tr key={order.id} className="text-center">
                  <td className="p-2 border">{order.id}</td>
                  <td className="p-2 border">{order.user.firstName}</td>
                  <td className="p-2 border">₹{order.total.toLocaleString()}</td>
                  <td className="p-2 border">{order.status}</td>
                  <td className="p-2 border">
                    {new Date(order.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
