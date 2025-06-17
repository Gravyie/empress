// src/CategoriesPage.js or .jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 'prebuilt-pcs',
      name: 'Prebuilt PCs',
      description: 'Complete gaming and workstation systems ready to use out of the box',
      image: '/images/categories/prebuilt.jpg',
      count: 24,
    },
    {
      id: 'processors',
      name: 'Processors (CPUs)',
      description: 'Intel and AMD processors for gaming, content creation, and professional work',
      image: '/images/categories/cpu.jpg',
      count: 45,
    },
    {
      id: 'gpus',
      name: 'Graphics Cards',
      description: 'NVIDIA and AMD graphics cards for gaming and professional rendering',
      image: '/images/categories/gpu.jpg',
      count: 38,
    },
    {
      id: 'motherboards',
      name: 'Motherboards',
      description: 'Feature-rich motherboards supporting the latest processors and technologies',
      image: '/images/categories/motherboard.jpg',
      count: 32,
    },
    {
      id: 'memory',
      name: 'Memory (RAM)',
      description: 'High-performance DDR4 and DDR5 memory kits for optimal system performance',
      image: '/images/categories/ram.jpg',
      count: 56,
    },
    {
      id: 'storage',
      name: 'Storage',
      description: 'SSDs, HDDs, and NVMe drives for fast data access and storage',
      image: '/images/categories/storage.jpg',
      count: 67,
    },
    {
      id: 'cases',
      name: 'PC Cases',
      description: 'Stylish and functional cases with excellent airflow and cable management',
      image: '/images/categories/case.jpg',
      count: 29,
    },
    {
      id: 'power',
      name: 'Power Supplies',
      description: 'Reliable and efficient power supplies with modular and non-modular options',
      image: '/images/categories/psu.jpg',
      count: 41,
    },
    {
      id: 'cooling',
      name: 'Cooling',
      description: 'Air and liquid cooling solutions to keep your system running cool and quiet',
      image: '/images/categories/cooling.jpg',
      count: 33,
    }
  ];

  const handleCategoryClick = (categoryId) => {
    navigate('/products/' + categoryId);
  };

  return (
    <div className="min-h-screen bg-white p-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 text-black">
          <h1 className="text-5xl font-bold mb-4">PC Hardware Store</h1>
          <p className="text-xl opacity-90">Explore our premium collection of PC components and systems</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="group bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform transition-all duration-500 hover:scale-102 cursor-pointer border border-white/20"
            >
              {/* Category Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    {category.count} Products
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white transform group-hover:rotate-45 transition-transform duration-300">
                    →
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-white/80">
          <p className="text-lg">
            Need help choosing the right components?
            <span className="text-white font-semibold ml-2 cursor-pointer hover:underline">
              Contact our experts →
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
