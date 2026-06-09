import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const updateOrderStatus = (orderId, newStatus) => {
    const updated = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">All Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders placed yet.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="p-4 border rounded shadow-md">
              <div className="mb-2 text-sm text-gray-600">
                <strong>Order ID:</strong> {order.id} <br />
                <strong>Date:</strong> {new Date(order.createdAt).toLocaleString()}
              </div>
              <div className="mb-2">
                <strong>Customer:</strong> {order.user.firstName} <br />
                <strong>Email:</strong> {order.user.email} <br />
                <strong>Phone:</strong> {order.user.phone}
              </div>
              <div className="mb-2">
                <strong>Items:</strong>
                <ul className="list-disc ml-6 text-sm">
                  {order.items.map((item, idx) => (
                    <li key={idx}>
                      {item.name} × {item.quantity} — ${item.price * item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="font-semibold mb-2">
                <strong>Total:</strong> ${order.total.toLocaleString()}
              </div>

              <div className="flex items-center gap-4">
                <strong>Status:</strong>
                <select
                  value={order.status}
                  onChange={(e) => updateOrderStatus(order.id, e.target.value)}
                  className="border px-3 py-1 rounded"
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
