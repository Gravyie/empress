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
    <section className="bg-[#f8f9fa] dark:bg-black py-8 sm:py-14 px-5 sm:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 sm:mb-12 text-center">
          <h2 className="text-2xl sm:text-4xl font-semibold text-white mb-2">
            Blogs & Articles
          </h2>
          <p className="text-gray-500 dark:text-white/40 text-xs sm:text-base max-w-md mx-auto font-light">
            Explore insights, guides, and deep dives into performance computing.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="overflow-x-auto pb-3 sm:pb-4 no-scrollbar" ref={sectionRef}>
          <div className="flex gap-4 sm:gap-5 min-w-max px-1 sm:px-2">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className={`group flex-shrink-0 w-56 sm:w-72 md:w-80 bg-[#0a0a0a] border border-white/[0.06] overflow-hidden hover:border-white/15 transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}
              >
                <div className="w-full h-32 sm:h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 sm:p-5 text-left">
                  <h3 className="text-sm sm:text-base font-semibold text-white/90 mb-1.5 leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 dark:text-white/40 text-xs sm:text-sm font-light leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-6 sm:mt-8 text-center">
          <a
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black hover:bg-gray-200 font-semibold text-xs uppercase tracking-[0.1em] hover:bg-[#e06a4a] transition-all"
          >
            View All →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
