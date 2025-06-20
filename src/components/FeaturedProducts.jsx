import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom"; // Make sure react-router-dom is installed
import FeaturedProductCard from "./FeaturedProductCard";

const FeaturedProducts = ({ products }) => {
  const scrollRef = useRef();

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-white">
      {/* Top Header Row */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-red-500 text-sm font-semibold">Trending Now</p>
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
        </div>

        <div className="flex items-center gap-4">
          {/* View All Button */}
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-full shadow hover:bg-red-600 transition"
          >
            View All <ArrowRight size={16} />
          </Link>

          {/* Scroll Buttons */}
          <button onClick={() => scroll("left")} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronLeft />
          </button>
          <button onClick={() => scroll("right")} className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Scrollable Product List */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-2"
      >
        {products.map((product) => (
          <FeaturedProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
