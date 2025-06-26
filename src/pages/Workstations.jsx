import React, { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const allProducts = [
  {
    id: 1,
    image: "/images/img1.JPG",
    name: "Creator Pro Max",
    specs: ["Intel i9-13900K", "RTX 4090 24GB", "64GB DDR5"],
    originalPrice: 200000,
    discountedPrice: 143000,
    rating: 3,
    discount: "-40%",
    useCase: "Video Editing",
    performance: "Beast",
  },
  {
    id: 2,
    image: "/images/img2.JPG",
    name: "Gaming Edge Z5",
    specs: ["Ryzen 7 7700X", "RTX 4070 Ti", "32GB DDR5"],
    originalPrice: 250000,
    discountedPrice: 199999,
    rating: 4,
    discount: "-20%",
    useCase: "Gaming",
    performance: "High",
  },
  {
    id: 3,
    image: "/images/img3.JPG",
    name: "AI Workstation Pro",
    specs: ["Xeon W9", "RTX A6000", "128GB ECC RAM"],
    originalPrice: 675000,
    discountedPrice: 549000,
    rating: 5,
    discount: "-19%",
    useCase: "Development",
    performance: "Beast",
  },
  {
    id: 4,
    image: "/images/img4.JPG",
    name: "LiquidCool Reactor",
    specs: ["Ryzen 9 7950X", "RTX 4080", "64GB DDR5"],
    originalPrice: 350000,
    discountedPrice: 289000,
    rating: 4,
    discount: "-17%",
    useCase: "3D Rendering",
    performance: "High",
  },
  {
    id: 5,
    image: "/images/img5.JPG",
    name: "Compact Creator",
    specs: ["Intel i7-13700K", "RTX 4060", "32GB RAM"],
    originalPrice: 185000,
    discountedPrice: 165000,
    rating: 3,
    discount: "-11%",
    useCase: "Development",
    performance: "Regular",
  },
  {
    id: 6,
    image: "/images/img6.JPG",
    name: "Entry Gaming Core",
    specs: ["Ryzen 5 5600X", "GTX 1660", "16GB RAM"],
    originalPrice: 100000,
    discountedPrice: 82999,
    rating: 3,
    discount: "-17%",
    useCase: "Gaming",
    performance: "Regular",
  },
  {
    id: 7,
    image: "/images/img7.JPG",
    name: "DevStation Mini",
    specs: ["Intel i5-12400F", "RTX 3060", "16GB RAM"],
    originalPrice: 140000,
    discountedPrice: 119999,
    rating: 4,
    discount: "-14%",
    useCase: "Development",
    performance: "Regular",
  },
  {
    id: 8,
    image: "/images/img8.JPG",
    name: "RenderRaptor",
    specs: ["Threadripper PRO", "RTX 3090", "128GB DDR4"],
    originalPrice: 820000,
    discountedPrice: 680000,
    rating: 5,
    discount: "-17%",
    useCase: "3D Rendering",
    performance: "Beast",
  },
  {
    id: 9,
    image: "/images/img9.JPG",
    name: "GameForge Lite",
    specs: ["Intel i5-11400F", "GTX 1650", "8GB RAM"],
    originalPrice: 70000,
    discountedPrice: 61000,
    rating: 2,
    discount: "-13%",
    useCase: "Gaming",
    performance: "Regular",
  },
];

const Workstations = () => {
  const [selectedUseCase, setSelectedUseCase] = useState("");
  const [selectedPerformance, setSelectedPerformance] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");
  const [sort, setSort] = useState("none");
  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const applySort = (products, sortType) => {
    if (sortType === "asc") {
      return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
    } else if (sortType === "desc") {
      return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
    }
    return products;
  };

  const handleApplyFilters = () => {
    let filtered = allProducts.filter((p) => {
      const matchUseCase = !selectedUseCase || p.useCase === selectedUseCase;
      const matchPerf = !selectedPerformance || p.performance === selectedPerformance;
      const matchPrice =
        !selectedPriceRange ||
        (selectedPriceRange === "<3k" && p.discountedPrice < 300000) ||
        (selectedPriceRange === "3k-5k" && p.discountedPrice >= 300000 && p.discountedPrice <= 500000) ||
        (selectedPriceRange === ">5k" && p.discountedPrice > 500000);
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
    setFilteredProducts(allProducts);
  };

  const handleSortChange = (value) => {
    setSort(value);
    const sorted = applySort(filteredProducts, value);
    setFilteredProducts(sorted);
  };

  const handleRadioClick = (currentValue, setter) => {
    setter((prev) => (prev === currentValue ? "" : currentValue));
  };

  return (
    <div className="flex gap-6 p-8 bg-white min-h-screen">
      <aside className="w-[260px] space-y-8">
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

          <div className="mt-4 space-x-2">
            <button onClick={handleApplyFilters} className="bg-orange-500 text-white px-4 py-2 text-sm rounded">
              Apply Filters
            </button>
            <button onClick={handleClearFilters} className="text-sm text-gray-600 underline">
              Clear All
            </button>
          </div>
        </div>
      </aside>

      <section className="flex-1">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Workstation</h1>
            <p className="text-gray-500 text-sm">Professional Computing Systems</p>
          </div>
          <select
            className="border px-3 py-1 rounded text-sm"
            onChange={(e) => handleSortChange(e.target.value)}
            value={sort}
          >
            <option value="none">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow rounded overflow-hidden group"
            >
              <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                {product.discount}
              </div>
              <button className="absolute top-2 right-2">
                <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
                <ul className="text-xs text-gray-600 mb-2 space-y-0.5">
                  {product.specs.map((s, i) => (
                    <li key={i}>• {s}</li>
                  ))}
                </ul>
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
                    ₹{product.discountedPrice.toLocaleString()}
                  </span>
                  <span className="text-gray-400 line-through text-xs">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="absolute bottom-2 right-2 p-1 bg-gray-100 hover:bg-gray-200 rounded-full">
                <ShoppingCart className="w-4 h-4 text-black" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Workstations;
