import React, { useState } from "react";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { useCart } from "../components/CartContext";
import { allSampleProducts } from "../data/products";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import ProductCard from "../components/ProductCard";

const Workstations = () => {
  const products = allSampleProducts.pcs.filter(pc => pc.useCase !== "Gaming");
  const navigate = useNavigate();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0 });

  
  const [selectedUseCase, setSelectedUseCase] = useState("");
  const [selectedPerformance, setSelectedPerformance] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sort, setSort] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const { addToCart } = useCart();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const applySort = (products, sortType) => {
    if (sortType === "asc") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortType === "desc") {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  };

  const handleApplyFilters = () => {
    let filtered = products.filter((p) => {
      const matchUseCase = !selectedUseCase || p.useCase === selectedUseCase;
      const matchPerf = !selectedPerformance || p.performance === selectedPerformance;
      const matchPrice =
        !selectedPriceRange ||
        (selectedPriceRange === "<3k" && p.price < 300000) ||
        (selectedPriceRange === "3k-5k" && p.price >= 300000 && p.price <= 500000) ||
        (selectedPriceRange === ">5k" && p.price > 500000);
      return matchUseCase && matchPerf && matchPrice;
    });

    const sorted = applySort(filtered, sort);
    setFilteredProducts(sorted);
  };

  const handleClearFilters = () => {
    setSelectedUseCase("");
    setSelectedPerformance("");
    setSelectedPriceRange("");
    setSort("none");
    setFilteredProducts(products);
  };

  const handleSortChange = (value) => {
    setSort(value);
    const sorted = applySort(filteredProducts, value);
    setFilteredProducts(sorted);
  };

  const handleRadioClick = (currentValue, setter) => {
    setter((prev) => (prev === currentValue ? "" : currentValue));
  };

  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); // Prevent the product card's onClick (handleProductClick) from firing
    const product = products.find(p => p.id === productId);
    console.log(`Added ${product.name} to cart!`);
    addToCart(product);
  };

  const handleProductClick = (productId) => {
    // console.log(`Navigating to product detail page for: ${productId}`); // You can keep or remove this console.log
    navigate('/product/' + productId); // <--- THIS IS THE REQUIRED CHANGE
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#f8f9fa] dark:bg-black text-white">
      {/* Mobile Filter Button */}
      <div className="mt-8 mr-2 md:hidden flex justify-end">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-white text-black hover:bg-[#F47C5A] hover:text-white transition-all duration-300 rounded"
        >
          Filter
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          bg-[#0a0a0a] border-r border-black/10 dark:border-white/10 w-[260px] p-6 space-y-8 z-10
          ${isSidebarOpen ? "fixed top-20 bottom-0 left-0" : "hidden"}
          md:static md:block md:shadow-none
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={closeSidebar}>
            <X className="w-5 h-5 text-gray-500 dark:text-white/50" />
          </button>
        </div>

        {/* Filter sections here */}
        {/* ⚡ Performance */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">Performance</h3>
          {["Beast", "High", "Regular"].map((type) => (
            <div key={type} className="text-sm text-gray-700 dark:text-white/70 mb-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="performance"
                  checked={selectedPerformance === type}
                  onClick={() => handleRadioClick(type, setSelectedPerformance)}
                  readOnly
                  className="accent-[#F47C5A]"
                />
                <span className="group-hover:text-white transition-colors">{type} Performance</span>
              </label>
            </div>
          ))}
        </div>

        {/* ⚡ Use Case */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">Use Case</h3>
          {["Gaming", "Video Editing", "3D Rendering", "Development"].map((type) => (
            <div key={type} className="text-sm text-gray-700 dark:text-white/70 mb-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="radio"
                  name="usecase"
                  checked={selectedUseCase === type}
                  onClick={() => handleRadioClick(type, setSelectedUseCase)}
                  readOnly
                  className="accent-[#F47C5A]"
                />
                <span className="group-hover:text-white transition-colors">{type}</span>
              </label>
            </div>
          ))}
        </div>

        {/* ⚡ Price Range */}
        <div>
          <h3 className="text-xs uppercase tracking-widest font-semibold text-white mb-4">Price Range</h3>
          <div className="text-sm text-gray-700 dark:text-white/70 space-y-2">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === "<3k"}
                onClick={() => handleRadioClick("<3k", setSelectedPriceRange)}
                readOnly
                className="accent-[#F47C5A]"
              />
              <span className="group-hover:text-white transition-colors">Under $3,000</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === "3k-5k"}
                onClick={() => handleRadioClick("3k-5k", setSelectedPriceRange)}
                readOnly
                className="accent-[#F47C5A]"
              />
              <span className="group-hover:text-white transition-colors">$3,000 - $5,000</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === ">5k"}
                onClick={() => handleRadioClick(">5k", setSelectedPriceRange)}
                readOnly
                className="accent-[#F47C5A]"
              />
              <span className="group-hover:text-white transition-colors">Above $5,000</span>
            </label>
          </div>

          <div className="border-t border-black/10 dark:border-white/10 pt-6 mt-6 flex flex-col justify-center items-center gap-y-3">
            <button onClick={handleApplyFilters} className="w-full bg-white text-black hover:bg-[#F47C5A] hover:text-white px-4 py-2.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300">
              Apply Filters
            </button>
            <button onClick={handleClearFilters} className="text-[10px] text-gray-500 dark:text-white/40 uppercase tracking-widest hover:text-white transition-colors">
              Clear All
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 px-5 lg:px-8 py-8 lg:py-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-8 gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-widest mb-1">Workstations</h1>
            <p className="text-gray-500 dark:text-white/50 text-sm font-light">Professional Computing Systems</p>
          </div>
          <select
            className="bg-[#0a0a0a] border border-black/10 dark:border-white/10 px-4 py-2.5 rounded text-xs text-gray-800 dark:text-white/80 focus:outline-none focus:border-white/30 uppercase tracking-wider"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sort}
          >
            <option value="none">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              inView={inView}
              onClick={handleProductClick}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workstations;
