import {
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { featuredProducts } from "../data/sampleData";
import { useCart } from '../context/CartContext';

function FeaturedProducts() {
  const products = featuredProducts;
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleProductClick = (productId) => {
    navigate('/product/' + productId);
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation();
    const product = products.find(p => p.id === productId);
    addToCart(product);
  };

  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="py-12 px-5 md:px-8 bg-[#f8f9fa] dark:bg-black">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">Trending Now</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Featured Products</h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-white/50 hover:text-[#F47C5A] text-xs font-semibold uppercase tracking-[0.1em] transition-colors group"
          >
            View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Product Cards */}
      <div className="relative max-w-7xl mx-auto">
        {/* Product List */}
        <div
          className="flex gap-4 sm:gap-5 overflow-x-auto pb-6 no-scrollbar"
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className={`group relative bg-[#050505] border border-white/[0.04] p-5 rounded-2xl w-[220px] sm:w-[300px] flex-shrink-0 cursor-pointer hover:border-white/10 hover:bg-[#0a0a0a] transition-all duration-500 ease-out
                ${sectionInView ? "opacity-100" : "opacity-0"}
              `}
              style={{
                transitionDelay: sectionInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative w-full h-40 sm:h-48 mb-6 overflow-hidden rounded-xl bg-black">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-semibold text-white/90 leading-tight">
                  {product.name}
                </h3>
                <div className="text-[#F47C5A] text-xs mb-3">
                  {"★".repeat(product.rating)}{" "}
                  <span className="text-white/30 text-[10px]">({product.reviews})</span>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-white text-sm font-medium">
                    ${product.price.toLocaleString()}{" "}
                    {product.originalPrice && (
                      <span className="line-through text-xs text-white/30 ml-1">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                  <button
                    className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-[#F47C5A] group-hover:border-[#F47C5A] transition-all"
                    onClick={(e) => handleAddToCart(e, product.id)}
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
