import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";
import { useState } from "react";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  // Fix floating point precision issue by rounding
  const subtotal = Math.round(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
  ) / 100;

  // Show empty cart message
  if (cart.length === 0) {
    return (
      <div className="py-24 text-center text-gray-600">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="mb-6">Looks like you haven’t added anything yet.</p>
        <button
          onClick={() => navigate("/products")}
          className="px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-4">
        <span className="text-gray-500">Home</span> /{" "}
        <span className="font-semibold text-black">Cart</span>
      </p>

      {/* Cart Table */}
      <div className="overflow-x-auto border rounded-lg mb-8">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-gray-100 text-gray-700 font-semibold">
            <tr>
              <th className="p-4">Product</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              const itemSubtotal = Math.round(
                item.price * item.quantity * 100
              ) / 100;

              return (
                <tr key={item.id} className="border-t">
                  <td className="p-4">
                    <div className="relative flex items-center gap-4">
                        <div className="relative">
                        <img
                            src={item.images?.[0] || item.image || "https://via.placeholder.com/80"}
                            alt={item.name}
                            className="w-16 h-16 rounded object-contain"
                        />
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="absolute -top-2 -left-2 bg-white text-red-500 font-bold text-sm rounded-full w-5 h-5 flex items-center justify-center shadow"
                        >
                            ×
                        </button>
                        </div>
                        <span>{item.name}</span>
                    </div>
                  </td>

                  <td className="p-4">₹{item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="border px-2 py-1 rounded"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 font-medium">₹{itemSubtotal.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        {/* Left Actions */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <button
            onClick={() => navigate("/products")}
            className="border border-black px-4 py-2 rounded hover:bg-gray-100 w-fit"
          >
            Return To Shop
          </button>

          <div className="flex gap-2 max-w-md">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border w-full px-4 py-2 rounded"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/3 border rounded-lg p-6 shadow">
          <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>₹{subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
