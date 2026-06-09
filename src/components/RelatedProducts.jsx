import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const RelatedProducts = ({ currentProduct, allSampleProducts, category }) => {
  const scrollRef = useRef();
  const navigate = useNavigate();

  // Single useInView for the entire section instead of individual cards
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  const related = allSampleProducts[category]?.filter(
    (p) => p.id !== currentProduct.id
  ) || [];

  if (!related.length) return null;

  return (
    <section ref={sectionRef} className="py-12 px-4 md:px-8 bg-[#0a0a0a] border-t border-black/10 dark:border-white/10 mt-12 text-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/90">Related Products</h2>

        <div className="flex items-center gap-4">
          <button onClick={() => scroll("left")} className="p-2 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 transition-colors">
            <ChevronLeft className="text-gray-800 dark:text-white/80 w-5 h-5" />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:bg-white/10 border border-black/10 dark:border-white/10 transition-colors">
            <ChevronRight className="text-gray-800 dark:text-white/80 w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 max-w-7xl mx-auto"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {related.map((product, index) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className={`bg-[#f8f9fa] dark:bg-black border border-black/10 dark:border-white/10 hover:border-white/30 rounded-lg p-4 w-[280px] flex-shrink-0 cursor-pointer transition-all duration-500 ease-out flex flex-col group
              ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{
              transitionDelay: sectionInView ? `${index * 50}ms` : "0ms",
            }}
          >
            <div className="bg-white/[0.02] border border-white/[0.04] p-4 rounded mb-4 flex items-center justify-center h-48">
              <img
                src={product.images[0]}
                alt={product.name}
                className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex justify-between items-start mb-3 flex-grow">
              <h3 className="text-xs font-semibold text-white/90 line-clamp-2 leading-snug">
                {product.name}
              </h3>
              <button className="text-gray-500 dark:text-white/40 hover:text-[#F47C5A] ml-3 transition-colors">
                <ShoppingCart className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-auto">
              <div className="mb-2 text-white font-bold text-lg">
                ${product.price.toLocaleString()}
                {product.originalPrice && (
                  <span className="line-through text-xs text-gray-400 dark:text-white/30 font-light ml-2">
                    ${product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="text-[#F47C5A] text-[10px] tracking-widest flex items-center gap-2">
                <div>{"★".repeat(product.rating || 5)}</div>
                <span className="text-gray-500 dark:text-white/40 tracking-normal">
                  ({product.reviews || 150})
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hide Scrollbar for WebKit */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default RelatedProducts;