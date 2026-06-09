import { useState } from "react";
import { useCart } from "../components/CartContext";

const Checkout = () => {
  const { cart, clearCart } = useCart();
  const [form, setForm] = useState({
    firstName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
  });

  const [coupon, setCoupon] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [saveInfo, setSaveInfo] = useState(true);

  const subtotal = Math.round(
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0) * 100
  ) / 100;

  const handleSubmit = () => {
    const order = {
      id: Date.now(),
      items: cart,
      total: subtotal,
      user: form,
      payment: paymentMethod,
      createdAt: new Date().toISOString(),
      status: "Pending"
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    const updatedOrders = [...existingOrders, order];
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    alert("Order placed successfully!");
    clearCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-white">
      {/* Breadcrumb */}
      <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-white/50 font-semibold mb-8">
        Account / My Account / Product / View Cart /{" "}
        <span className="text-[#F47C5A]">CheckOut</span>
      </p>

      <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-white/90">Billing Details</h2>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Billing Form */}
        <form className="space-y-6">
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">First Name*</label>
            <input
              type="text"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Company Name</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Street Address*</label>
            <input
              type="text"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              value={form.apartment}
              onChange={(e) => setForm({ ...form, apartment: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Town/City*</label>
            <input
              type="text"
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Phone Number*</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-wider text-gray-500 dark:text-white/40 font-semibold mb-1 block">Email Address*</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90"
            />
          </div>

          <label className="flex items-center gap-3 mt-4 text-sm text-gray-600 dark:text-white/60">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="accent-[#F47C5A] w-4 h-4 bg-transparent border-black/20 dark:border-white/20 rounded"
            />
            Save this information for faster check-out next time
          </label>
        </form>

        {/* Order Summary */}
        <div className="bg-[#0a0a0a] border border-black/10 dark:border-white/10 p-6 sm:p-8 rounded-xl h-fit">
            <div className="space-y-4 text-sm mb-8">
                {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-white/[0.04] last:border-0">
                    <div className="flex items-center gap-4">
                    <img
                        src={item.images?.[0] || "https://via.placeholder.com/40"}
                        alt={item.name}
                        className="w-12 h-12 object-contain bg-white/[0.02] border border-white/[0.04] rounded p-1"
                    />
                    <span className="text-gray-800 dark:text-white/80 line-clamp-1 max-w-[150px] sm:max-w-[200px]">
                        {item.name} <span className="text-[#F47C5A] ml-2 font-bold">×{item.quantity}</span>
                    </span>
                    </div>
                    <span className="text-white font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
                ))}
                <div className="border-t border-black/10 dark:border-white/10 pt-6 mt-6 space-y-4 text-gray-800 dark:text-white/80">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/[0.04] text-white">
                    <span>Total:</span>
                    <span className="text-[#F47C5A]">${subtotal.toFixed(2)}</span>
                </div>
                </div>
            </div>

            <div className="space-y-4 mb-8">
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    className="accent-[#F47C5A] w-4 h-4 bg-transparent border-black/20 dark:border-white/20 rounded-full"
                />
                <span className="text-gray-800 dark:text-white/80 font-medium">Bank Transfer</span>
                <div className="flex gap-2 ml-auto">
                    <img src="/images/RuPay.png" alt="RuPay" className="h-5 bg-white p-0.5 rounded" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-5 bg-white p-0.5 rounded" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-5 bg-white p-0.5 rounded" />
                </div>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="accent-[#F47C5A] w-4 h-4 bg-transparent border-black/20 dark:border-white/20 rounded-full"
                />
                <span className="text-gray-800 dark:text-white/80 font-medium">Cash on Delivery</span>
                </label>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black w-full px-4 py-3 rounded focus:ring-1 focus:ring-[#F47C5A] focus:border-[#F47C5A] outline-none transition-all text-white/90 placeholder-white/30"
                />
                <button className="bg-transparent border border-black/20 dark:border-white/20 hover:border-white/50 text-gray-800 dark:text-white/80 hover:text-white px-6 py-3 rounded text-[10px] uppercase tracking-widest font-bold transition-all whitespace-nowrap">
                Apply Coupon
                </button>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-white hover:bg-gray-200 text-black py-4 rounded mt-6 text-xs uppercase tracking-widest font-bold transition-all shadow-lg hover:shadow-[#F47C5A]/20"
            >
                Place Order
            </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
