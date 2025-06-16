import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="pt-5 pb-10 px-30 bg-black">
    <div className="bg-gradient-to-r from-[#0f0f1a] to-[#1a1a2e] text-white py-8 rounded-xl">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:divide-x divide-gray-600">

        <div className="px-6 md:w-1/4">
          <div className="text-3xl mb-2">🚚</div>
          <h3 className="font-bold text-lg mb-1">Fastest Shipping</h3>
          <p className="text-sm text-gray-300">
            Get your PCs Delivered Swiftly with our Shipping Partner.
          </p>
        </div>

        <div className="px-6 md:w-1/4">
          <div className="text-3xl mb-2">🛍️</div>
          <h3 className="font-bold text-lg mb-1">After Sales Service</h3>
          <p className="text-sm text-gray-300">
            Support that Sticks with you, even After the Purchase.
          </p>
        </div>

        <div className="px-6 md:w-1/4">
          <div className="text-3xl mb-2">💬</div>
          <h3 className="font-bold text-lg mb-1">Support 24/7</h3>
          <p className="text-sm text-gray-300">
            Contact us 24/7 hours a day.
          </p>
        </div>

        <div className="px-6 md:w-1/4">
          <div className="text-3xl mb-2">✅</div>
          <h3 className="font-bold text-lg mb-1">100% Secure Payment</h3>
          <p className="text-sm text-gray-300">
            Experience safe, encrypted, and reliable payment options.
          </p>
        </div>

      </div>
    </div>
    </section>
  );
}
