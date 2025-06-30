import React, { useState } from "react";
import { Heart, ShoppingCart, Star, X } from "lucide-react";
import { useCart } from "../components/CartContext";
import { allSampleProducts } from "../data/products";
import { useNavigate } from "react-router-dom";


const Workstations = () => {
  const products = allSampleProducts.pcs;
  const navigate = useNavigate();
  
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
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Mobile Filter Button */}
      <div className="mt-8 mr-2 md:hidden flex justify-end">
        <button
          onClick={toggleSidebar}
          className="px-4 py-2 text-sm bg-orange-500 text-white rounded"
        >
          Filter
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          bg-white shadow-md w-[260px] p-6 space-y-6 z-10
          ${isSidebarOpen ? "fixed top-20 bottom-0 left-0" : "hidden"}
          md:static md:block md:shadow-none
        `}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end mb-4">
          <button onClick={closeSidebar}>
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Filter sections here */}
        {/* ⚡ Performance */}
        <div>
          <h3 className="font-bold mb-3 flex items-center gap-2">⚡ Performance</h3>
          {["Beast", "High", "Regular"].map((type) => (
            <div key={type} className="text-sm text-gray-800">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="performance"
                  checked={selectedPerformance === type}
                  onClick={() => handleRadioClick(type, setSelectedPerformance)}
                  readOnly
                />
                {type} Performance
              </label>
            </div>
          ))}
        </div>

        {/* ⚡ Use Case */}
        <div>
          <h3 className="font-bold mb-3 flex items-center gap-2">⚡ Use Case</h3>
          {["Gaming", "Video Editing", "3D Rendering", "Development"].map((type) => (
            <div key={type} className="text-sm text-gray-800">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="usecase"
                  checked={selectedUseCase === type}
                  onClick={() => handleRadioClick(type, setSelectedUseCase)}
                  readOnly
                />
                {type}
              </label>
            </div>
          ))}
        </div>

        {/* ⚡ Price Range */}
        <div>
          <h3 className="font-bold mb-3 flex items-center gap-2">⚡ Price Range</h3>
          <div className="text-sm text-gray-800 space-y-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === "<3k"}
                onClick={() => handleRadioClick("<3k", setSelectedPriceRange)}
                readOnly
              />
              Under ₹3,00,000
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === "3k-5k"}
                onClick={() => handleRadioClick("3k-5k", setSelectedPriceRange)}
                readOnly
              />
              ₹3,00,000 - ₹5,00,000
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="price"
                checked={selectedPriceRange === ">5k"}
                onClick={() => handleRadioClick(">5k", setSelectedPriceRange)}
                readOnly
              />
              Above ₹5,00,000
            </label>
          </div>

          <div className="border-t text-gray-300 pt-4 mt-4 flex flex-col justify-center items-center gap-y-2">
            <button onClick={handleApplyFilters} className="bg-orange-500 text-white px-4 py-2 text-sm rounded">
              Apply Filters
            </button>
            <button onClick={handleClearFilters} className="text-sm text-gray-600 underline">
              Clear All
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <section className="flex-1 px-4 py-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl md:text-3xl font-bold">Workstations</h1>
            <p className="text-gray-500 text-xs md:text-sm">Professional Computing Systems</p>
          </div>
          <select
            className="border md:px-3 py-1 rounded text-xs md:text-sm"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sort}
          >
            <option value="none">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="relative bg-white shadow rounded overflow-hidden group cursor-pointer"
            >
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{product.discount}%
              </div>
              <button className="absolute top-2 right-2">
                <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
              </button>
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
                  <button className="text-[#F47C5A] hover:text-purple-800 transition">
                    <ShoppingCart onClick={(e) => handleAddToCart(e, product.id)} className="w-5 h-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-600 mb-2">
                  {Object.values(product.specs).join(", ")}
                </p>
                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                  {Array(5)
                    .fill()
                    .map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating ? "fill-yellow-500" : "stroke-gray-300"
                        }`}
                      />
                    ))}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#F47C5A] font-semibold text-sm">
                    ₹{product.price.toLocaleString()}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
              // <div
              //   key={product.id}
              //   onClick={() => handleProductClick(product.id)}
              //   className="relative bg-white shadow rounded overflow-hidden group cursor-pointer flex flex-row md:flex-col"
              // >
              //   {/* Discount badge & heart button */}
              //   <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              //     -{product.discount}%
              //   </div>
              //   <button className="absolute top-2 right-2 z-10">
              //     <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
              //   </button>

              //   {/* Image */}
              //   <div className="w-1/3 md:w-full">
              //     <img
              //       src={product.images[0]}
              //       alt={product.name}
              //       className="h-full md:h-48 w-full object-cover"
              //     />
              //   </div>

              //   {/* Text Content */}
              //   <div className="p-4 w-2/3 md:w-full flex flex-col justify-between">
              //     <div className="flex justify-between items-center mb-2">
              //       <h3 className="text-sm font-semibold text-gray-800">{product.name}</h3>
              //       <button className="text-[#F47C5A] hover:text-purple-800 transition">
              //         <ShoppingCart
              //           onClick={(e) => handleAddToCart(e, product.id)}
              //           className="w-5 h-5"
              //         />
              //       </button>
              //     </div>
              //     <p className="text-xs text-gray-600 mb-2">
              //       {Object.values(product.specs).join(", ")}
              //     </p>
              //     <div className="flex items-center gap-1 text-yellow-500 mb-2">
              //       {Array(5)
              //         .fill()
              //         .map((_, i) => (
              //           <Star
              //             key={i}
              //             className={`w-4 h-4 ${
              //               i < product.rating ? "fill-yellow-500" : "stroke-gray-300"
              //             }`}
              //           />
              //         ))}
              //     </div>
              //     <div className="flex items-center gap-2">
              //       <span className="text-[#F47C5A] font-semibold text-sm">
              //         ₹{product.price.toLocaleString()}
              //       </span>
              //       <span className="text-gray-400 line-through text-xs">
              //         ₹{product.originalPrice.toLocaleString()}
              //       </span>
              //     </div>
              //   </div>
              // </div> 
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workstations;
