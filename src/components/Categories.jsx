import React from 'react';
import { useInView } from 'react-intersection-observer';

const Categories = () => {
  const categories = [
    { id: 1, name: 'Content Creation', image: '/images/img1.JPG', description: 'Render-Ready Power' },
    { id: 2, name: 'Research', image: '/images/img2.JPG', description: 'Data-Driven Performance' },
    { id: 3, name: 'Gaming', image: '/images/img3.JPG', description: 'Ultra-Fast Frames' },
    { id: 4, name: 'Engineering', image: '/images/img4.JPG', description: 'Precision-Optimized Systems' },
    { id: 5, name: 'Custom Servers', image: '/images/img5.JPG', description: 'Tailored Server Solutions' },
    { id: 6, name: 'Liquid Cooled PCs', image: '/images/img6.JPG', description: 'Silent Cooling Beast' },
    { id: 7, name: 'Other Workstations', image: '/images/img7.JPG', description: 'Pro-Grade Machines' },
  ];

  return (
    <div className="bg-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-600 leading-tight">
              <span className="font-semibold text-black">Categories.</span> Everything you want and more.
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-sm text-gray-700">
            <div className="flex items-start gap-3">
              <img src="/images/Specialist.JPG" alt="Specialist" className="w-8 h-8 rounded-full object-cover" />
              <div>
                <p className="font-medium text-black">Need shopping help?</p>
                <a href="contact" className="text-blue-600 hover:underline">Ask a Specialist ↗</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/images/EMP.png" className="w-6 h-6 mt-1" />
              <div>
                <p className="font-medium text-black">Visit the Empress Store</p>
                <a href="contact" className="text-blue-600 hover:underline">Find one near you ↗</a>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-max px-4">
            {categories.map((category, index) => {
              const { ref, inView } = useInView({
                triggerOnce: true,
                threshold: 0.15,
              });

              return (
                <div
                  key={category.id}
                  ref={ref}
                  className={`group cursor-pointer flex-shrink-0 w-25 sm:w-40 md:w-55 lg:w-70 transition-all duration-500
                    ${inView ? 'animate-fadeUp' : 'opacity-0 translate-y-10'}
                  `}
                  style={{
                    animationDelay: inView ? `${index * 0.1}s` : '0s',
                    animationFillMode: 'both'
                  }}
                >
                  <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4 group-hover:scale-105 transition-transform duration-200">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-900 mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500">
                      {category.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
