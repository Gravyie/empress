import React from 'react';
import { useInView } from 'react-intersection-observer';

const Blogs = () => {
  const categories = [
    {
      id: 1,
      name: "Prebuilt vs Custom PCs: What's Right for You?",
      image: '/images/img1.JPG',
      description: "A quick guide to help you choose between convenience and customization.",
    },
    {
      id: 2,
      name: "Gaming PC Guide: Specs That Matter",
      image: '/images/img2.JPG',
      description: "Know what to prioritize when building your dream gaming rig.",
    },
    {
      id: 3,
      name: "Liquid Cooling: Is It Worth It?",
      image: '/images/img4.JPG',
      description: "Explore if liquid cooling fits your setup and performance goals.",
    },
    {
      id: 4,
      name: "Inside Our Builds: How We Craft PCs",
      image: '/images/img6.JPG',
      description: "A peek into our process — from part selection to perfection.",
    },
    {
      id: 5,
      name: "PCs for Engineers & Researchers",
      image: '/images/img7.JPG',
      description: "Tailored systems for heavy tasks like simulations and data crunching.",
    },
  ];

  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="bg-white py-20 px-6 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
            Blogs & Articles
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Explore insights, guides, and deep dives into performance computing.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="overflow-x-auto pb-4" ref={sectionRef}>
          <div className="flex gap-6 min-w-max px-2">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group flex-shrink-0 w-64 sm:w-72 md:w-80 bg-gray-50 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="w-full h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-2 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F47C5A] text-white font-semibold text-sm rounded-full shadow hover:bg-white hover:text-[#F47C5A] border border-[#F47C5A] transition duration-300"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
