import { ShoppingCart } from "lucide-react";
import { allSampleProducts } from "../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from '../context/CartContext';
import ProductCard from "../components/ProductCard";

export default function Productivity() {
  const { addToCart } = useCart();
  const pcs = allSampleProducts.pcs.filter(pc => ["Video Editing", "3D Rendering", "Development"].includes(pc.useCase));
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
              <span className="text-white">Productivity</span>
              <br />
              <span className="text-chrome">PC Builds</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-500 dark:text-white/50 max-w-md mx-auto md:mx-0 font-light leading-relaxed">
              Maximize your productivity with our high-performance PCs, efficient peripherals, and smart accessories built for creators, professionals, and multitaskers.
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
              alt="Productivity PC"
              className="relative z-10 w-64 sm:w-72 md:w-80 lg:w-full max-w-sm drop-shadow-2xl object-contain"
            />
          </div>
        </div>
      </section>


      {/* Why Productivity Matters */}
      <section className="w-full text-center py-10 md:py-16 px-5 lg:px-8 border-b border-white/[0.06]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-widest mb-4">
            <span className="text-chrome">Why Productivity Matters</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-white/50 font-light leading-relaxed">
            Productivity isn't just about getting things done—it's about unlocking focus, creativity, and growth in an increasingly digital world.
          </p>
        </div>
      </section>

      {/* Featured Builds */}
      <section className="py-10 md:py-16 px-5 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-10 text-center md:text-left flex flex-col items-center md:items-start">
          <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Top Category</p>
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-widest text-white">Featured PC Builds</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visiblePCs.map((pc, index) => (
            <ProductCard
              key={pc.id}
              product={pc}
              index={index}
              inView={true}
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
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>, title: "Express Delivery", desc: "Get your PCs Delivered Swiftly with our Shipping Partner." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>, title: "After Sales Service", desc: "Support that Sticks with you, even After the Purchase." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg>, title: "Support 24/7", desc: "Contact us 24/7 hours a day." },
              { icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>, title: "100% Secure Payment", desc: "Experience safe, encrypted, and reliable payment options." }
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
