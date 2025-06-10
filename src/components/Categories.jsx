import React from 'react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: 'Content Creation',
      image: '/images/img1.JPG',
      description: 'Render-Ready Power'
    },
    {
      id: 2,
      name: 'Research',
      image: '/images/img2.JPG',
      description: 'Data-Driven Performance'
    },
    {
      id: 3,
      name: 'Gaming',
      image: '/images/img3.JPG',
      description: 'Ultra-Fast Frames'
    },
    {
      id: 4,
      name: 'Engineering',
      image: '/images/img4.JPG',
      description: 'Precision-Optimized Systems'
    },
    {
      id: 5,
      name: 'Custom Servers',
      image: '/images/img5.JPG',
      description: 'Tailored Server Solutions'
    },
    {
      id: 6,
      name: 'Liquid Cooled PCs',
      image: '/images/img6.JPG',
      description: 'Silent Cooling Beast'
    },
    {
      id: 7,
      name: 'Other Workstations',
      image: '/images/img7.JPG',
      description: 'Pro-Grade Machines'
    },
    
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-md md:text-2xl font-semibold text-gray-900 mb-2">
            Categories. Everything you want and more.
          </h2>
        </div>
        
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-8 min-w-max px-4">
            {categories.map((category) => (
              <div 
                key={category.id} 
                className="group cursor-pointer flex-shrink-0 w-25 sm:w-40 md:w-55 lg:w-70"
              >
                <div className="aspect-square bg-gray-50 rounded-2xl overflow-hidden mb-4 transition-transform duration-200 group-hover:scale-105">
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;