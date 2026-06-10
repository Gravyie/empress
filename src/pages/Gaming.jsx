import { ShoppingCart, Truck, ShieldCheck, Headset, CreditCard } from "lucide-react";
import { allSampleProducts } from "../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useInView } from "react-intersection-observer";
import ProductCard from "../components/ProductCard";

export default function Gaming() {
  const { addToCart } = useCart();
  const pcs = allSampleProducts.pcs.filter(pc => pc.useCase === "Gaming");
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const visiblePCs = showAll ? pcs : pcs.slice(0, 8);
  const { ref, inView } = useInView({ threshold: 0.1 });


  const handleProductClick = (productId) => {
    navigate('/product/' + productId);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    const product = pcs.find(p => p.id === productId);
    addToCart(product);
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative w-full py-10 md:py-16 md:py-24 overflow-hidden border-b border-white/[0.06]">
        {/* Ambient background */}
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#F47C5A]/[0.02] to-black pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Left: Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight uppercase">
              <span className="text-white">Gaming</span>
              <br />
              <span className="text-chrome">PC Builds</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-white/50 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
              Experience the ultimate gaming performance with our premium collection of gaming PCs, peripherals, and accessories designed for champions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <button className="px-8 py-3.5 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 text-xs font-semibold uppercase tracking-[0.15em] hover:border-white/50 hover:text-white hover:bg-white/[0.03] transition-all duration-300">
                View All PC Builds
              </button>
              <button className="px-8 py-3.5 bg-white text-black text-xs font-semibold uppercase tracking-[0.15em] hover:bg-[#F47C5A] hover:text-white transition-all duration-300">
                Customize My PC
              </button>
            </div>
          </div>

          {/* Right: PC Image */}
          <div className="w-full md:w-1/2 flex justify-center relative">
            <div className="absolute inset-0 bg-[#F47C5A]/20 blur-[100px] rounded-full pointer-events-none" />
            <img
              src="/images/CategoryPC.png"
              alt="Gaming PC"
              className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-full max-w-sm drop-shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>


      {/* Why Gaming Matters */}
      <section className="w-full text-center py-10 md:py-16 px-5 lg:px-8 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-widest mb-4">
            <span className="text-chrome">Why Gaming Matters</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-white/50 font-light leading-relaxed">
            Gaming isn't just entertainment—it's a gateway to enhanced cognitive abilities, social connections, and personal growth in the digital age.
          </p>
        </div>
      </section>

      {/* Featured Builds */}
      <section className="py-10 md:py-16 px-5 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Top Category</p>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white">Featured PC Builds</h2>
        </div>

        <div ref={ref} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePCs.map((pc, index) => (
            <ProductCard
              key={pc.id}
              product={pc}
              index={index}
              inView={inView}
              onClick={handleProductClick}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>


        {pcs.length > 8 && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3.5 border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 text-xs font-semibold uppercase tracking-[0.15em] hover:border-white/50 hover:text-white hover:bg-white/[0.03] transition-all duration-300"
            >
              Load More Builds
            </button>
          </div>
        )}
      </section>

      {/* Feature Highlight Section */}
      <section className="py-10 md:py-16 px-5 lg:px-8 border-t border-white/[0.06] bg-[#0a0a0a]/50">
        <div className="max-w-7xl mx-auto border border-white/[0.06] bg-[#f8f9fa] dark:bg-black/60 backdrop-blur-sm p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-white/[0.06]">
            {[
              { icon: <Truck size={24} />, title: "Express Delivery", desc: "Get your PCs Delivered Swiftly with our Shipping Partner." },
              { icon: <ShieldCheck size={24} />, title: "After Sales Service", desc: "Support that Sticks with you, even After the Purchase." },
              { icon: <Headset size={24} />, title: "Support 24/7", desc: "Contact us 24/7 hours a day." },
              { icon: <CreditCard size={24} />, title: "100% Secure Payment", desc: "Experience safe, encrypted, and reliable payment options." }
            ].map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center text-center lg:px-8 first:lg:pl-0 last:lg:pr-0">
                <div className="mb-4 text-gray-500 dark:text-white/50">{feature.icon}</div>
                <h3 className="text-xs uppercase tracking-[0.15em] font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[11px] text-gray-500 dark:text-white/40 font-light leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
