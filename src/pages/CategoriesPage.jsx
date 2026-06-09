import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Monitor,
  Cpu,
  Gamepad,
  Headphones,
} from "lucide-react";
import { useInView } from 'react-intersection-observer';


const CategoriesPage = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1,
    });

  const handleProductClick = (productId) => {
    navigate("/product/" + productId);
  };

  const categories = [
    {
      category: "gaming",
      name: "Gaming Rig",
      description: "High-performance gaming desktops and custom builds",
      icon: <Gamepad className="w-5 h-5" />,
      systems: [
        {
          id: "cyberpowerpc-gamer-master",
          name: "Ultra Gaming Beast",
          specs: "RTX 4090 | i9-13900K | 64GB DDR5",
          price: "$3,990",
          rating: 5,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Midrange Monster",
          specs: "RTX 4070 Ti | Ryzen 7 7700X | 32GB DDR5",
          price: "$2,490",
          rating: 4.8,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Starter Gaming Setup",
          specs: "RTX 3060 | i5-12400F | 16GB DDR4",
          price: "$1,490",
          rating: 4.5,
        },
      ],
    },
    {
      category: "workstations",
      name: "Workstation",
      description: "Professional-grade systems for design and development",
      icon: <Monitor className="w-5 h-5" />,
      systems: [
        {
          id: "cyberpowerpc-gamer-master",
          name: "Render Pro Studio",
          specs: "RTX A6000 | Xeon W9 | 128GB ECC RAM",
          price: "$6,800",
          rating: 5,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "EditPro X7",
          specs: "RTX 4080 | Ryzen 9 7950X | 64GB DDR5",
          price: "$3,200",
          rating: 4.9,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "DevStation Mini",
          specs: "RTX 3060 | i5-12400F | 16GB RAM",
          price: "$1,190",
          rating: 4.6,
        },
      ],
    },
    {
      category: "accessories",
      name: "Gaming Peripherals",
      description: "Professional gaming accessories and peripherals",
      icon: <Headphones className="w-5 h-5" />,
      systems: [
        {
          id: "cyberpowerpc-gamer-master",
          name: "Mechanical Keyboards",
          specs: "RGB Backlit | Hot Swappable | Wireless",
          price: "$64",
          rating: 4.9,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Gaming Mice",
          specs: "16000 DPI | Lightweight | RGB",
          price: "$29",
          rating: 4.8,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Gaming Headsets",
          specs: "7.1 Surround | Noise Cancelling | RGB",
          price: "$44",
          rating: 4.7,
        },
      ],
    },
    {
      category: "components",
      name: "Component",
      description: "High-performance individual PC components",
      icon: <Cpu className="w-5 h-5" />,
      systems: [
        {
          id: "intel-i9-13900k",
          name: "Intel Core i9-14900K",
          specs: "24-Core | 32-Thread | LGA1700",
          price: "$629",
          rating: 4.9,
        },
        {
          id: "intel-i9-13900k",
          name: "NVIDIA RTX 4090",
          specs: "24GB GDDR6X | PCIe 4.0",
          price: "$1,599",
          rating: 5,
        },
        {
          id: "intel-i9-13900k",
          name: "ASUS Z790 Hero",
          specs: "DDR5 | WiFi 6E | Thunderbolt 4",
          price: "$480",
          rating: 4.8,
        },
      ],
    },
  ];

  return (
    <div className="pb-20 bg-[#f8f9fa] dark:bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="bg-[#0a0a0a] border-b border-black/10 dark:border-white/10 text-center p-10 md:p-16 px-4 md:px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 uppercase tracking-widest text-white">
            Premium Tech Solutions
          </h1>
          <p className="text-sm md:text-base text-gray-500 dark:text-white/50 font-light max-w-2xl mx-auto">
            Unleash your potential with cutting-edge gaming systems, professional
            workstations, and premium components
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8 text-[10px] md:text-xs uppercase tracking-widest font-semibold text-gray-700 dark:text-white/70">
            <span className="px-4 py-1.5 rounded bg-white/[0.02] border border-black/10 dark:border-white/10">
              3-Year Warranty
            </span>
            <span className="px-4 py-1.5 rounded bg-white/[0.02] border border-black/10 dark:border-white/10">
              Express Delivery
            </span>
            <span className="px-4 py-1.5 rounded bg-white/[0.02] border border-black/10 dark:border-white/10">
              24/7 Support
            </span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-[#f8f9fa] dark:bg-black px-5 md:px-10 pt-10 md:pt-16 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-bold mb-2">Portfolio</p>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white mb-3">
            Explore Our Categories
          </h2>
          <p className="text-gray-500 dark:text-white/50 text-sm md:text-base font-light">
            From high-performance gaming rigs to professional workstations, find
            the perfect tech solution for your needs
          </p>
        </div>

        <div ref={ref} className="space-y-6 md:space-y-16">
          {categories.map((cat, idx, index) => (
            <div 
              key={idx} 
              className={`transition-all duration-500
                  ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{
                  transitionDelay: inView ? `${index * 100}ms` : '0ms',
                }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[#F47C5A]/10 text-[#F47C5A] border border-[#F47C5A]/20">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-white leading-tight mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-gray-500 dark:text-white/50 text-xs md:text-sm font-light">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Scrollable Cards on Mobile, Grid on Desktop */}
              <div className="overflow-x-auto no-scrollbar md:overflow-visible pb-4">
                <div ref={ref} className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 px-1 md:px-0 min-w-max md:min-w-0">
                  {cat.systems.map((sys, i) => (
                    <div
                      onClick={() => handleProductClick(sys.id)}
                      key={i}
                      className={`min-w-[200px] max-w-[220px] md:min-w-0 md:max-w-none bg-[#f8f9fa] dark:bg-black/40 backdrop-blur-xl border border-black/10 dark:border-white/10 rounded-xl px-5 py-4 flex flex-col justify-between hover:border-black/20 dark:border-white/20 hover:shadow-[0_0_30px_rgba(244,124,90,0.1)] transition-all cursor-pointer text-xs md:text-sm duration-500
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                        style={{
                          transitionDelay: inView ? `${i * 100}ms` : '0ms',
                        }}
                    >
                      <div>
                        <h4 className="font-semibold text-white/90 mb-1.5 truncate">
                          {sys.name}
                        </h4>
                        <p className="text-[10px] text-gray-500 dark:text-white/40 font-light mb-4 line-clamp-2">
                          {sys.specs}
                        </p>
                        <div className="font-bold text-white text-sm mb-4">
                          {sys.price}
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 border-t border-white/[0.04]">
                        <button className="text-[10px] uppercase tracking-wider font-semibold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-800 dark:text-white/80 px-3 py-1.5 rounded hover:bg-[#F47C5A] hover:border-[#F47C5A] hover:text-white transition-colors">
                          View
                        </button>
                        <div className="text-[11px] text-[#F47C5A] font-bold flex items-center gap-1">
                          ★ {sys.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View All Button */}
              <div className="mt-8 text-center md:text-left">
                <button
                  onClick={() => navigate(`/${cat.category}`)}
                  className="bg-transparent border border-black/20 dark:border-white/20 text-gray-800 dark:text-white/80 hover:border-white/50 hover:text-white transition-all px-6 py-3 rounded text-[10px] md:text-xs font-semibold uppercase tracking-widest inline-flex items-center gap-2"
                >
                  View All {cat.name} Systems <span className="text-[#F47C5A]">&rarr;</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CategoriesPage;
