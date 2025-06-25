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
    alert("Order placed!");
    clearCart();
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-400 mb-4">
        Account / My Account / Product / View Cart /{" "}
        <span className="font-semibold text-black">CheckOut</span>
      </p>

      <h2 className="text-2xl font-bold mb-6">Billing Details</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Billing Form */}
        <form className="space-y-4">
          <div>
            <label className="text-sm font-medium">First Name*</label>
            <input
              type="text"
              required
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Company Name</label>
            <input
              type="text"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Street Address*</label>
            <input
              type="text"
              required
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Apartment, floor, etc. (optional)</label>
            <input
              type="text"
              value={form.apartment}
              onChange={(e) => setForm({ ...form, apartment: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Town/City*</label>
            <input
              type="text"
              required
              value={form.city}
              onChange={(e) => setForm({ ...form, city: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Phone Number*</label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>
          <div>
            <label className="text-sm font-medium">Email Address*</label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="border w-full px-4 py-2 rounded mt-1"
            />
          </div>

          <label className="flex items-center gap-2 mt-2 text-sm">
            <input
              type="checkbox"
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
              className="accent-red-500"
            />
            Save this information for faster check-out next time
          </label>
        </form>

        {/* Order Summary */}
        <div className="space-y-4">
            <div className="space-y-4 text-sm">
                {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                    <img
                        src={item.images?.[0] || "https://via.placeholder.com/40"}
                        alt={item.name}
                        className="w-10 h-10 object-cover rounded"
                    />
                    <span>
                        {item.name} × <span className="font-semibold">{item.quantity}</span>
                    </span>
                    </div>
                    <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </div>
                ))}
                <div className="border-t pt-2">
                <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold pt-1">
                    <span>Total:</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                </div>
                </div>
            </div>

            <div className="space-y-2">
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                />
                Bank
                <img
                    src="/images/RuPay.png"
                    alt="RuPay"
                    className="h-4 bg-black"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                    alt="Visa"
                    className="h-4"
                />
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
                    alt="Mastercard"
                    className="h-4"
                />
                </label>
                <label className="flex items-center gap-2">
                <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                />
                Cash on delivery
                </label>
            </div>

            <div className="flex gap-2 mt-4">
                <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border px-4 py-2 w-full rounded"
                />
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                Apply Coupon
                </button>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-2"
            >
                Place Order
            </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
