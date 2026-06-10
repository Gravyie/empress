import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
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
      <div className="py-16 md:py-28 text-center">
        <h2 className="text-2xl font-bold mb-4 text-white">Your cart is empty</h2>
        <p className="mb-8 text-gray-500 dark:text-white/40 font-light">Looks like you haven't added anything yet.</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/pc-builder")}
            className="px-6 py-3 border border-white/20 hover:border-[#F47C5A] hover:bg-[#F47C5A]/5 text-white text-xs uppercase tracking-[0.15em] font-semibold transition-all"
          >
            Custom Build
          </button>
          <button
            onClick={() => navigate("/workstations")}
            className="px-6 py-3 bg-white text-black hover:bg-[#F47C5A] hover:text-white text-xs uppercase tracking-[0.15em] font-semibold transition-all"
          >
            Shop Pre-Built
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-8 md:py-16">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 dark:text-white/30 mb-6">
        <span className="text-gray-500 dark:text-white/40">Home</span> /{" "}
        <span className="font-medium text-white">Cart</span>
      </p>

      {/* Cart Table */}
      <div className="overflow-x-auto border border-white/[0.06] mb-8">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-[#0a0a0a] text-gray-500 dark:text-white/50 font-medium text-xs uppercase tracking-wider">
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
                <tr key={item.id} className="border-t border-white/[0.06]">
                  <td className="p-4">
                    <div className="relative flex items-center gap-4">
                        <div className="relative">
                        <img
                            src={item.images?.[0] || item.image || "https://via.placeholder.com/80"}
                            alt={item.name}
                            className="w-14 h-14 object-contain bg-[#111] border border-white/[0.06]"
                        />
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="absolute -top-2 -left-2 bg-[#f8f9fa] dark:bg-black border border-black/20 dark:border-white/20 text-gray-600 dark:text-white/60 hover:text-white font-bold text-xs w-5 h-5 flex items-center justify-center transition-colors"
                        >
                            ×
                        </button>
                        </div>
                        <span className="text-gray-800 dark:text-white/80 text-sm max-w-[120px] sm:max-w-[200px] md:max-w-none truncate" title={item.name}>{item.name}</span>
                    </div>
                  </td>

                  <td className="p-4 text-gray-600 dark:text-white/60">${item.price.toFixed(2)}</td>
                  <td className="p-4">
                    <select
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm text-white focus:outline-none focus:border-white/30"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          {n.toString().padStart(2, "0")}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="p-4 font-medium text-gray-800 dark:text-white/80">${itemSubtotal.toFixed(2)}</td>
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
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/workstations")}
              className="border border-white/20 px-5 py-2.5 text-sm text-white/70 hover:text-white hover:border-white/40 transition-all w-fit"
            >
              Shop Pre-Built
            </button>
            <button
              onClick={() => navigate("/pc-builder")}
              className="border border-[#F47C5A]/50 bg-[#F47C5A]/5 text-[#F47C5A] hover:bg-[#F47C5A] hover:text-white px-5 py-2.5 text-sm transition-all w-fit"
            >
              Custom Build
            </button>
          </div>

          <div className="flex gap-2 max-w-md mt-4">
            <input
              type="text"
              placeholder="Coupon Code"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="border border-black/10 dark:border-white/10 bg-transparent w-full px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/30"
            />
            <button className="bg-white hover:bg-gray-200 text-black px-5 py-2.5 text-xs uppercase tracking-wider font-semibold whitespace-nowrap transition-colors">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full lg:w-1/3 border border-white/[0.06] bg-[#0a0a0a] p-6">
          <h3 className="text-base font-semibold mb-5 text-white">Cart Total</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-gray-500 dark:text-white/50">
              <span>Subtotal</span>
              <span className="text-gray-700 dark:text-white/70">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500 dark:text-white/50">
              <span>Shipping</span>
              <span className="text-gray-700 dark:text-white/70">Free</span>
            </div>
            <div className="border-t border-white/[0.06] pt-3 flex justify-between font-semibold text-white">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-white hover:bg-gray-200 text-black py-3 text-xs uppercase tracking-[0.15em] font-semibold transition-colors"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
