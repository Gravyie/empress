"use client";
import { ShoppingCart } from "lucide-react";
import { allSampleProducts } from "../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";


export default function Gaming() {
  const { addToCart } = useCart();

  const pcs = allSampleProducts.pcs;
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visiblePCs = showAll ? pcs : pcs.slice(0, 8);

  const handleProductClick = (productId) => {
    // console.log(`Navigating to product detail page for: ${productId}`); // You can keep or remove this console.log
    navigate('/product/' + productId); // <--- THIS IS THE REQUIRED CHANGE
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); // Prevent the product card's onClick (handleProductClick) from firing
    const product = pcs.find(p => p.id === productId);
    console.log(`Added ${product.name} to cart!`);
    addToCart(product)
  };
      // In a real application, you would dispatch an action to add to a global cart state (e.g., using Context API or Redux)
      // For now, it's just a console log.
    

  return (
    <div>
    <section
      className="w-full bg-cover bg-center py-10 bg-[url('/images/CategoryBg.jpg')]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Content */}
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-blue-400">GAMING</span>{" "}
            <span className="text-purple-400">PC BUILDS</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Experience the ultimate gaming performance with our premium collection of gaming PCs, peripherals, and accessories designed for champions.
          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="border border-purple-500 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-500 hover:text-white transition">
              View All Pc Builds
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              Customize My Pc
            </button>
          </div>
        </div>

        {/* Right: PC Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/images/CategoryPC.png"
            alt="Gaming PC"
            className="w-full max-w-sm mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>

    <section className="w-full bg-white text-center py-6 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Why Gaming Matters
      </h2>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
        Gaming isn't just entertainment—it's a gateway to enhanced cognitive abilities, social connections, and personal growth in the digital age.
      </p>
    </section>

    <section className="p-5 px-4">
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

    <section className="py-12 px-4 md:px-8 bg-white">
        <div className="mb-6">
          <p className="text-red-500 text-sm font-semibold">Top Category</p>
          <h2 className="text-2xl md:text-3xl font-bold">Feature PC Builds for Gaming</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visiblePCs.map((pc) => (
            <div key={pc.id} onClick={() => handleProductClick(pc.id)} className="bg-white rounded-lg shadow p-4 relative group">
              {/* Discount Badge */}
              {pc.discount && (
                <span className="absolute top-2 left-2 bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-0.5 rounded">
                  -{pc.discount}%
                </span>
              )}

              {/* Image */}
              <img
                src={pc.images[0]}
                alt={pc.name}
                className="w-full h-40 object-cover rounded-md mb-3"
              />

              {/* Name + Cart */}
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-800">{pc.name}</h3>
                <button className="text-[#F47C5A] hover:text-purple-800 transition">
                  <ShoppingCart onClick={(e) => handleAddToCart(e, pc.id)} className="w-5 h-5" />
                </button>
              </div>

              {/* Specs */}
              <p className="text-xs text-gray-600 mb-2">
                {Object.values(pc.specs).join(", ")}
              </p>

              {/* Pricing */}
              <div className="text-sm font-semibold text-gray-900">
                ₹{pc.price.toLocaleString()}
                {pc.originalPrice && (
                  <span className="ml-2 line-through text-gray-400 text-xs">
                    ₹{pc.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {pcs.length > 8 && !showAll && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition"
            >
              Show More
            </button>
          </div>
        )}
    </section>
    </div>
  );
}
