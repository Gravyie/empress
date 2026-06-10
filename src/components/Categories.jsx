import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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

  // Single inView observer for the entire scroll section
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-[#f8f9fa] dark:bg-black px-5 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header and Specialist Info */}
        <div className="pb-4 md:py-12 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-3 md:gap-6">
          <div className="max-w-xl text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-light text-gray-500 dark:text-white/40 leading-tight">
              <span className="font-semibold text-chrome">Categories.</span> Everything you want and more.
            </h1>
          </div>

          <div className="flex flex-col gap-6 text-sm text-gray-600 dark:text-white/60">
            <div className="flex items-start gap-3">
              <img src="/images/Specialist.JPG" alt="Specialist" className="w-8 h-8 rounded-full object-cover ring-1 ring-white/10" />
              <div>
                <p className="font-medium text-gray-800 dark:text-white/80">Need shopping help?</p>
                <Link to="/contact" className="text-[#F47C5A] hover:underline text-sm">Ask a Specialist ↗</Link>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <img src="/images/EMP.png" className="w-6 h-6 mt-1 brightness-200" />
              <div>
                <p className="font-medium text-gray-800 dark:text-white/80">Visit the Empress Store</p>
                <Link to="/contact" className="text-[#F47C5A] hover:underline text-sm">Find one near you ↗</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Category Cards */}
        <div className="overflow-x-auto pb-4 no-scrollbar" ref={sectionRef}>
          <div className="flex gap-5 min-w-max px-1">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group cursor-pointer flex-shrink-0 w-25 sm:w-40 md:w-55 lg:w-70 transition-all duration-500
                  ${inView ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="aspect-square bg-[#111] overflow-hidden mb-4 ring-1 ring-white/[0.06] group-hover:ring-white/20 transition-all duration-300">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-white/90 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-500 dark:text-white/40">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
