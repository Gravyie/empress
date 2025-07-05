import { useEffect, useState } from "react";

export default function AdminPanel() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Admin Panel - Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map(order => (
            <div key={order.id} className="border p-4 rounded shadow">
              <div className="mb-2 text-sm text-gray-500">
                <strong>Order ID:</strong> {order.id} <br />
                <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
              </div>
              <div className="mb-2">
                <strong>Name:</strong> {order.user.firstName} <br />
                <strong>Email:</strong> {order.user.email}
              </div>
              <div className="mb-2">
                <strong>Items:</strong>
                <ul className="list-disc ml-6 text-sm">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} × {item.quantity} — ₹{item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mb-2">
                <strong>Total:</strong> ₹{order.total}
              </div>
              <div className="flex items-center gap-4">
                <strong>Status:</strong>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
