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
          price: "₹3,99,000",
          rating: 5,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Midrange Monster",
          specs: "RTX 4070 Ti | Ryzen 7 7700X | 32GB DDR5",
          price: "₹2,49,000",
          rating: 4.8,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Starter Gaming Setup",
          specs: "RTX 3060 | i5-12400F | 16GB DDR4",
          price: "₹1,49,000",
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
          price: "₹6,80,000",
          rating: 5,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "EditPro X7",
          specs: "RTX 4080 | Ryzen 9 7950X | 64GB DDR5",
          price: "₹3,20,000",
          rating: 4.9,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "DevStation Mini",
          specs: "RTX 3060 | i5-12400F | 16GB RAM",
          price: "₹1,19,000",
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
          price: "₹6,499",
          rating: 4.9,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Gaming Mice",
          specs: "16000 DPI | Lightweight | RGB",
          price: "₹2,999",
          rating: 4.8,
        },
        {
          id: "cyberpowerpc-gamer-master",
          name: "Gaming Headsets",
          specs: "7.1 Surround | Noise Cancelling | RGB",
          price: "₹4,499",
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
          price: "₹62,999",
          rating: 4.9,
        },
        {
          id: "intel-i9-13900k",
          name: "NVIDIA RTX 4090",
          specs: "24GB GDDR6X | PCIe 4.0",
          price: "₹1,59,999",
          rating: 5,
        },
        {
          id: "intel-i9-13900k",
          name: "ASUS Z790 Hero",
          specs: "DDR5 | WiFi 6E | Thunderbolt 4",
          price: "₹48,000",
          rating: 4.8,
        },
      ],
    },
  ];

  return (
    <div className="pb-20">
      {/* Hero */}
      <section className="bg-[#191c29] text-white text-center p-10 md:p-16 px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Premium Tech Solution
        </h1>
        <p className="text-sm md:text-base opacity-90">
          Unleash your potential with cutting-edge gaming systems, professional
          workstations, and premium components
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-4 text-[10px] md:text-xs font-medium text-white/80">
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            💠 3-Year Warranty
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            ⚡ 3-Year Warranty
          </span>
          <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10">
            🧿 3-Year Warranty
          </span>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white text-black px-4 md:px-10 pt-4 md:pt-16 max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">
          Explore Our Categories
        </h2>
        <p className="text-center text-black/70 mb-6 md:mb-12 text-sm md:text-base">
          From high-performance gaming rigs to professional workstations, find
          the perfect tech solution for your needs
        </p>

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
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-[50px] h-[40px] flex items-center justify-center rounded-full text-white text-xl font-bold ${
                    cat.category === "gaming"
                      ? "bg-purple-500"
                      : cat.category === "accessories"
                      ? "bg-pink-400"
                      : cat.category === "components"
                      ? "bg-blue-500"
                      : "bg-cyan-500"
                  }`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="p-0.5 text-lg md:text-xl font-bold text-black leading-tight">
                    {cat.name}
                  </h3>
                  <p className="p-0.5 text-black/70 text-xs md:text-sm -mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Scrollable Cards on Mobile, Grid on Desktop */}
              <div className="overflow-x-auto no-scrollbar md:overflow-visible">
                <div ref={ref} className="flex md:grid md:grid-cols-3 gap-3 md:gap-6 px-1 md:px-0 min-w-max md:min-w-0">
                  {cat.systems.map((sys, i) => (
                    <div
                      
                      onClick={() => handleProductClick(sys.id)}
                      key={i}
                      className={`min-w-[170px] max-w-[180px] md:min-w-0 md:max-w-none bg-white rounded-lg px-3 py-2 text-black shadow-sm flex flex-col justify-between hover:shadow-lg transition cursor-pointer text-xs md:text-sm transition-all duration-500
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                        `}
                        style={{
                          transitionDelay: inView ? `${i * 100}ms` : '0ms',
                        }}
                    >
                      <div>
                        <h4 className="font-semibold mb-1 truncate">
                          {sys.name}
                        </h4>
                        <p className="text-[10px] text-gray-600 mb-2 line-clamp-2">
                          {sys.specs}
                        </p>
                        <div className="font-bold text-black text-sm mb-2">
                          {sys.price}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <button className="text-[10px] bg-black text-white px-2 py-1 rounded-full hover:bg-gray-800">
                          View
                        </button>
                        <div className="text-[11px] text-yellow-500 font-bold">
                          ⭐ {sys.rating}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* View All Button */}
              <div className="mt-6 text-center">
                <button
                  onClick={() => navigate(`/${cat.category}`)}
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full text-xs md:text-sm font-medium"
                >
                  View All {cat.name} System →
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
