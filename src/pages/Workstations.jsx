import React, { useState } from "react";

const allProducts = [
  {
    id: 1,
    image: "/images/img1.JPG",
    name: "Creator Beast X1",
    brand: "Asus",
    gpu: "RTX 4090",
    ram: "64GB",
    memory: "2TB SSD",
    config: "Intel i9, RTX 4090, 64GB RAM, 2TB SSD",
    price: "₹3,49,999",
    processor: "Intel i9",
    cooling: "Air",
    useCase: "Content Creation",
  },
  {
    id: 2,
    image: "/images/img2.JPG",
    name: "Gaming Edge Z5",
    brand: "MSI",
    gpu: "RTX 4070 Ti",
    ram: "32GB",
    memory: "1TB SSD",
    config: "Ryzen 7, RTX 4070 Ti, 32GB RAM, 1TB SSD",
    price: "₹2,15,000",
    processor: "Ryzen 7",
    cooling: "Air",
    useCase: "Gaming",
  },
  {
    id: 3,
    image: "/images/img3.JPG",
    name: "AI Workstation Pro",
    brand: "HP",
    gpu: "RTX A6000",
    ram: "128GB",
    memory: "4TB NVMe",
    config: "Xeon, RTX A6000, 128GB ECC RAM, 4TB NVMe",
    price: "₹6,75,000",
    processor: "Xeon",
    cooling: "Liquid",
    useCase: "AI Research",
  },
  {
    id: 4,
    image: "/images/img4.JPG",
    name: "LiquidCool Reactor",
    brand: "MSI",
    gpu: "RTX 4080",
    ram: "64GB",
    memory: "2TB SSD",
    config: "Ryzen 9, RTX 4080, 64GB RAM, 2TB SSD",
    price: "₹2,89,000",
    processor: "Ryzen 9",
    cooling: "Liquid",
    useCase: "Gaming",
  },
  {
    id: 5,
    image: "/images/img5.JPG",
    name: "Compact Creator",
    brand: "Asus",
    gpu: "RTX 4060",
    ram: "32GB",
    memory: "1TB SSD",
    config: "Intel i7, RTX 4060, 32GB RAM, 1TB SSD",
    price: "₹1,65,000",
    processor: "Intel i7",
    cooling: "Air",
    useCase: "Content Creation",
  },
  {
    id: 6,
    image: "/images/img6.JPG",
    name: "Entry Gaming Core",
    brand: "HP",
    gpu: "GTX 1660",
    ram: "16GB",
    memory: "512GB SSD",
    config: "Ryzen 5, GTX 1660, 16GB RAM, 512GB SSD",
    price: "₹82,999",
    processor: "Ryzen 5",
    cooling: "Air",
    useCase: "Entry-Level",
  },
];

const Workstations = () => {
  const [filters, setFilters] = useState({
    brand: "All",
    gpu: "All",
    ram: "All",
    memory: "All",
    processor: "All",
    cooling: "All",
    useCase: "All",
  });

  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [isFiltering, setIsFiltering] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    const isActive = Object.values(filters).some((val) => val !== "All");
    setIsFiltering(isActive);

    const filtered = allProducts.filter((product) => {
      return (
        (filters.brand === "All" || product.brand === filters.brand) &&
        (filters.gpu === "All" || product.gpu === filters.gpu) &&
        (filters.ram === "All" || product.ram === filters.ram) &&
        (filters.memory === "All" || product.memory === filters.memory) &&
        (filters.processor === "All" || product.processor === filters.processor) &&
        (filters.cooling === "All" || product.cooling === filters.cooling) &&
        (filters.useCase === "All" || product.useCase === filters.useCase)
      );
    });

    setFilteredProducts(filtered);
  };

  return (
    <div className="flex min-h-screen bg-gray-100 p-6">
      <aside className="w-1/4 pr-4">
        <div className="bg-white p-4 rounded shadow space-y-4">
          <h2 className="text-lg font-semibold mb-2">Filter</h2>

          {[
            { name: "brand", label: "Brand", options: ["Asus", "MSI", "HP"] },
            {
              name: "gpu",
              label: "GPU",
              options: [
                "RTX 4090",
                "RTX 4080",
                "RTX 4070 Ti",
                "RTX 4060",
                "GTX 1660",
                "RTX A6000",
              ],
            },
            { name: "ram", label: "RAM", options: ["16GB", "32GB", "64GB", "128GB"] },
            {
              name: "memory",
              label: "Memory",
              options: ["512GB SSD", "1TB SSD", "2TB SSD", "4TB NVMe"],
            },
            {
              name: "processor",
              label: "Processor",
              options: ["Intel i7", "Intel i9", "Ryzen 5", "Ryzen 7", "Ryzen 9", "Xeon"],
            },
            {
              name: "cooling",
              label: "Cooling",
              options: ["Air", "Liquid"],
            },
            {
              name: "useCase",
              label: "Use Case",
              options: ["Content Creation", "Gaming", "AI Research", "Entry-Level"],
            },
          ].map((filter) => (
            <div key={filter.name}>
              <label className="block text-sm font-medium mb-1">{filter.label}</label>
              <select
                name={filter.name}
                onChange={handleFilterChange}
                className="w-full border px-2 py-1 rounded"
              >
                <option>All</option>
                {filter.options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          <button
            className="w-full bg-white text-[#F47C5A] border py-2 rounded mt-4"
            onClick={applyFilters}
          >
            Apply Filters
          </button>
        </div>
      </aside>

      <div className="w-3/4">
        {!isFiltering && (
          <section className="mb-6 bg-white p-6 rounded shadow flex gap-6">
            <div className="w-1/2 h-64 bg-gray-200 rounded overflow-hidden">
              <img
                src="/images/img6.JPG"
                alt="Featured Product"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  🔥 Featured: Titan Ultra
                </h2>
                <p className="text-sm text-gray-700 mb-3">
                  The ultimate custom workstation for AI research, game
                  development, and content creation. With unmatched GPU power
                  and liquid cooling.
                </p>
                <p className="mb-1 text-gray-600 text-sm">
                  <strong>Config:</strong> Intel Xeon W9, RTX 6000 Ada, 256GB
                  ECC RAM, 8TB Gen4 NVMe SSD
                </p>
                <p className="text-lg font-semibold text-black mb-3">
                  ₹9,49,000
                </p>
              </div>
              <button className="w-full bg-[#C9A200] text-white py-2 rounded-lg">
                Add to Cart
              </button>
            </div>
          </section>
        )}

        <main className="grid grid-cols-2 gap-6">
          {filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <div
      key={product.id}
      className="bg-white p-4 rounded shadow flex flex-col justify-between min-h-[300px]"
    >
      <div>
        <div className="w-full h-40 bg-gray-200 rounded mb-4 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full rounded"
          />
        </div>
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.config}</p>
        <p className="font-bold mb-3">{product.price}</p>
      </div>
      <button className="w-full bg-[#F47C5A] text-white py-2 rounded mt-auto">
        Add to Cart
      </button>
    </div>
  ))
          ) : (
            <div className="col-span-2 text-center bg-white p-6 rounded shadow">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                This configuration is currently unavailable
                </h3>
                <p className="text-gray-600 mb-4">
                But you can still get the perfect PC for your needs.
                </p>
                <a href="/custom-pc" className="inline-block">
                <button className="bg-[#F47C5A] text-white px-6 py-2 rounded hover:bg-[#e96843] transition">
                    Build Your Own Custom PC
                </button>
                </a>
            </div>
            )}
        </main>
      </div>
    </div>
  );
};

export default Workstations;
