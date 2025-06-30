// ...other imports
import { ShoppingCart } from "lucide-react";
import { allSampleProducts } from "../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/CartContext";

export default function Server() {
  const { addToCart } = useCart();
  const pcs = allSampleProducts.pcs;
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visiblePCs = showAll ? pcs : pcs.slice(0, 8);

  const handleProductClick = (productId) => {
    navigate('/product/' + productId);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    const product = pcs.find(p => p.id === productId);
    addToCart(product);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="w-full bg-cover bg-center py-8 md:py-10 bg-[url('/images/CategoryBg.jpg')]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left: Text Content */}
          <div className="text-white w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
              <span className="text-blue-400">SERVER</span>{" "}
              <span className="text-purple-400">PC BUILDS</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-md mx-auto md:mx-0">
              Power your operations with enterprise-grade servers, optimized for reliability, speed, and scalability across demanding workloads.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <button className="border border-purple-500 text-purple-400 px-5 py-2 rounded-md text-sm hover:bg-purple-500 hover:text-white transition">
                View All PC Builds
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-5 py-2 rounded-md text-sm hover:opacity-90 transition">
                Customize My PC
              </button>
            </div>
          </div>

          {/* Right: PC Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/images/CategoryPC.png"
              alt="Server PC"
              className="w-64 sm:w-72 md:w-80 lg:w-full max-w-sm drop-shadow-2xl"
            />
          </div>
        </div>
      </section>


      {/* Why Server Matters */}
      <section className="w-full bg-white text-center py-6 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          Why Server Matters
        </h2>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto">
          Server isn't just entertainment—it's a gateway to enhanced cognitive abilities, social connections, and personal growth in the digital age.
        </p>
      </section>

      {/* Featured Builds */}
      <section className="py-10 px-4 md:px-8 bg-white">
        <div className="mb-6">
          <p className="text-red-500 text-sm font-semibold">Top Category</p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Feature PC Builds for Server</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePCs.map((pc) => (
            <div
              key={pc.id}
              onClick={() => handleProductClick(pc.id)}
              className="bg-white rounded-lg shadow p-4 relative group flex flex-row md:flex-col gap-4 sm:items-start md:items-stretch"
            >
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
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-full md:h-40 object-cover rounded-md"
              />

              {/* Content */}
              <div className="flex flex-col justify-between flex-1">
                <div className="flex justify-between items-start md:items-center mb-1">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">{pc.name}</h3>
                  <button className="text-[#F47C5A] hover:text-purple-800 transition">
                    <ShoppingCart onClick={(e) => handleAddToCart(e, pc.id)} className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs text-gray-600 mb-2 line-clamp-2">
                  {Object.values(pc.specs).join(", ")}
                </p>

                <div className="text-sm font-semibold text-gray-900">
                  ₹{pc.price.toLocaleString()}
                  {pc.originalPrice && (
                    <span className="ml-2 line-through text-gray-400 text-xs">
                      ₹{pc.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>


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

      {/* Feature Highlight Section */}
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
            {[
              { emoji: "🚚", title: "Fastest Shipping", desc: "Get your PCs Delivered Swiftly with our Shipping Partner." },
              { emoji: "🛍️", title: "After Sales Service", desc: "Support that Sticks with you, even After the Purchase." },
              { emoji: "💬", title: "Support 24/7", desc: "Contact us 24/7 hours a day." },
              { emoji: "✅", title: "100% Secure Payment", desc: "Experience safe, encrypted, and reliable payment options." }
            ].map((feature, idx) => (
              <div key={idx} className="px-6 md:w-1/4 animate-fadeUp">
                <div className="text-3xl mb-2">{feature.emoji}</div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
