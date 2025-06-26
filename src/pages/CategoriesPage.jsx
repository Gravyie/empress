import React from "react";
import { useNavigate } from "react-router-dom";
import { Monitor, Cpu, Gamepad, Headphones, Keyboard, Mouse, Mic } from "lucide-react";

const CategoriesPage = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: "gaming",
      name: "Gaming Rig",
      description: "High-performance gaming desktops and custom builds",
      icon: <Gamepad className="w-5 h-5" />,
      systems: [
        {
          name: "Ultra Gaming Beast",
          specs: "RTX 4090 | i9-13900K | 64GB DDR5",
          price: "₹3,99,000",
          rating: 5,
        },
        {
          name: "Midrange Monster",
          specs: "RTX 4070 Ti | Ryzen 7 7700X | 32GB DDR5",
          price: "₹2,49,000",
          rating: 4.8,
        },
        {
          name: "Starter Gaming Setup",
          specs: "RTX 3060 | i5-12400F | 16GB DDR4",
          price: "₹1,49,000",
          rating: 4.5,
        },
      ],
    },
    {
      id: "workstations",
      name: "Workstation",
      description: "Professional-grade systems for design and development",
      icon: <Monitor className="w-5 h-5" />,
      systems: [
        {
          name: "Render Pro Studio",
          specs: "RTX A6000 | Xeon W9 | 128GB ECC RAM",
          price: "₹6,80,000",
          rating: 5,
        },
        {
          name: "EditPro X7",
          specs: "RTX 4080 | Ryzen 9 7950X | 64GB DDR5",
          price: "₹3,20,000",
          rating: 4.9,
        },
        {
          name: "DevStation Mini",
          specs: "RTX 3060 | i5-12400F | 16GB RAM",
          price: "₹1,19,000",
          rating: 4.6,
        },
      ],
    },
    {
      id: "accessories",
      name: "Gaming Peripherals",
      description: "Professional gaming accessories and peripherals",
      icon: <Headphones className="w-5 h-5" />,
      systems: [
        {
          name: "Mechanical Keyboards",
          specs: "RGB Backlit | Hot Swappable | Wireless",
          price: "₹6,499",
          rating: 4.9,
        },
        {
          name: "Gaming Mice",
          specs: "16000 DPI | Lightweight | RGB",
          price: "₹2,999",
          rating: 4.8,
        },
        {
          name: "Gaming Headsets",
          specs: "7.1 Surround | Noise Cancelling | RGB",
          price: "₹4,499",
          rating: 4.7,
        },
      ],
    },
    {
      id: "components",
      name: "Component",
      description: "High-performance individual PC components",
      icon: <Cpu className="w-5 h-5" />,
      systems: [
        {
          name: "Intel Core i9-14900K",
          specs: "24-Core | 32-Thread | LGA1700",
          price: "₹62,999",
          rating: 4.9,
        },
        {
          name: "NVIDIA RTX 4090 Founders Edition",
          specs: "24GB GDDR6X | PCIe 4.0",
          price: "₹1,59,999",
          rating: 5,
        },
        {
          name: "ASUS Z790 Hero Motherboard",
          specs: "DDR5 | WiFi 6E | Thunderbolt 4",
          price: "₹48,000",
          rating: 4.8,
        },
      ],
    },
  ];

  return (
    <div className="pb-20">
      <section className="bg-[#191c29] text-white text-center p-16 px-6">
        <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
          Premium Tech Solution
        </h1>
        <p className="opacity-90">
          Unleash your potential with cutting-edge gaming systems, professional
          workstations, and premium components
        </p>
        <div className="flex justify-center gap-4 mt-4 text-xs font-medium text-white/80">
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

      <section className="bg-white text-black px-10 pt-20 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-black text-center mb-3">
          Explore Our Categories
        </h2>
        <p className="text-center text-black/70 mb-12">
          From high-performance gaming rigs to professional workstations, find
          the perfect tech solution for your needs
        </p>

        <div className="space-y-16">
          {categories.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-xl font-bold ${
                    cat.id === "gaming"
                      ? "bg-purple-500"
                      : cat.id === "accessories"
                      ? "bg-pink-400"
                      : cat.id === "components"
                      ? "bg-blue-500"
                      : "bg-cyan-500"
                  }`}
                >
                  {cat.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-black/70 text-sm -mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {cat.systems.map((sys, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-xl px-5 py-4 text-black shadow-md flex flex-col justify-between hover:shadow-xl transition"
                  >
                    <div>
                      <h4 className="font-semibold mb-1 text-sm">
                        {sys.name}
                      </h4>
                      <p className="text-xs text-gray-600 mb-2">{sys.specs}</p>
                      <div className="font-bold text-black text-sm mb-3">
                        {sys.price}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="text-xs bg-black text-white px-3 py-1 rounded-full hover:bg-gray-800">
                        View Detail
                      </button>
                      <div className="text-xs text-yellow-500 font-bold">
                        ⭐ {sys.rating}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <button 
                  onClick={() => navigate(`/${cat.id}`)}
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-5 py-2 rounded-full text-sm font-medium"
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