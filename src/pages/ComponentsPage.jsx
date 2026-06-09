import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const ComponentsPage = () => {
  const navigate = useNavigate();

  const categories = [
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
    <div className="min-h-screen bg-[#f8f9fa] dark:bg-black py-16 px-5 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Hardware</p>
          <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-widest text-white mb-4">PC Components</h1>
          <p className="text-lg text-gray-500 dark:text-white/50 font-light max-w-2xl mx-auto">Explore our premium collection of PC components and systems</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.15,
            });
            
            return (
            <div
              ref={ref}
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`group bg-[#0a0a0a] rounded-xl overflow-hidden shadow-none transform transition-all duration-500 cursor-pointer border border-black/10 dark:border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-[#F47C5A]/[0.02]
                ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-10'} `
              }
              style={{
                animationDelay: inView ? `${index * 0.1}s` : '0s',
                animationFillMode: 'both'
              }}
            >
              {/* Category Image */}
              <div className="h-48 w-full overflow-hidden bg-white/[0.02] border-b border-white/[0.04]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Category Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-white/90 uppercase tracking-widest mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-500 dark:text-white/40 text-xs font-light leading-relaxed mb-6">
                  {category.description}
                </p>
                <div className="flex justify-between items-center pt-4 border-t border-white/[0.04]">
                  <span className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 px-3 py-1.5 rounded text-[10px] uppercase tracking-wider font-semibold">
                    {category.count} Products
                  </span>
                  <div className="text-[#F47C5A] transform group-hover:translate-x-1 transition-transform duration-300">
                    &rarr;
                  </div>
                </div>
              </div>
            </div>
          )})}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 text-gray-500 dark:text-white/40 text-sm font-light">
          <p>
            Need help choosing the right components?
            <span className="text-[#F47C5A] font-semibold ml-2 cursor-pointer hover:underline uppercase tracking-wider text-[10px]">
              Contact our experts &rarr;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComponentsPage;