import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const FeaturedProducts = ({ products }) => {
  const scrollRef = useRef();

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

  return (
    <section ref={sectionRef} className="py-10 px-4 md:px-8 bg-white">
      {/* Header */}
      <div className="mb-2 md:mb-6">
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-red-500 text-sm font-semibold">Trending Now</p>
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-xs font-small md:font-medium rounded-full shadow hover:bg-red-600 transition whitespace-nowrap"
          >
            View All <ArrowRight size={16} />
          </Link>
        </div>
      </div>


      {/* Product Cards with arrows on sides */}
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <ChevronLeft />
        </button>

        {/* Product List */}
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-2 px-1 sm:px-8"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow p-3 sm:p-4 w-[200px] sm:w-[280px] flex-shrink-0 transition-all duration-700 ease-out
                ${sectionInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
              `}
              style={{
                transitionDelay: sectionInView ? `${index * 100}ms` : "0ms",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-36 sm:h-40 object-cover rounded-md mb-3"
              />

              <div className="flex justify-between items-center mb-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  {product.name}
                </h3>
                <button className="text-[#F47C5A] hover:text-purple-800">
                  <ShoppingCart className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-2 text-gray-600 text-sm">
                ₹{product.price.toLocaleString()}{" "}
                {product.originalPrice && (
                  <span className="line-through text-xs text-gray-400">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="text-yellow-500 text-sm mb-1">
                {"★".repeat(product.rating)}{" "}
                <span className="text-gray-500 text-xs">({product.reviews})</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 shadow"
        >
          <ChevronRight />
        </button>

        {/* Hide scrollbar on WebKit */}
        <style>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>

    </section>
  );
};

export default FeaturedProducts;
