import React from "react";

export default function WhyChooseUs() {
  return (
    <section className="pt-5 pb-10 px-4 bg-black">
      <style>{`
        .animated-gradient {
          background: linear-gradient(-45deg, #2E003E, #7F7FFF, #2E003E, #000);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <div className="animated-gradient text-white py-8 px-4 rounded-xl shadow-xl backdrop-blur-md bg-black/60 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:divide-x divide-gray-600">
          
          <div className="px-6 md:w-1/4 animate-fadeUp">
            <div className="text-3xl mb-2">🚚</div>
            <h3 className="font-bold text-lg mb-1">Fastest Shipping</h3>
            <p className="text-sm text-gray-300">
              Get your PCs Delivered Swiftly with our Shipping Partner.
            </p>
          </div>

          <div className="px-6 md:w-1/4 animate-fadeUp">
            <div className="text-3xl mb-2">🛍️</div>
            <h3 className="font-bold text-lg mb-1">After Sales Service</h3>
            <p className="text-sm text-gray-300">
              Support that Sticks with you, even After the Purchase.
            </p>
          </div>

          <div className="px-6 md:w-1/4 animate-fadeUp">
            <div className="text-3xl mb-2">💬</div>
            <h3 className="font-bold text-lg mb-1">Support 24/7</h3>
            <p className="text-sm text-gray-300">
              Contact us 24/7 hours a day.
            </p>
          </div>

          <div className="px-6 md:w-1/4 animate-fadeUp">
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
