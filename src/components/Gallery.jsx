import { useEffect, useState, useRef } from "react";

const images = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
];

const infoData = [
  {
    title: "Nebula Shadow",
    specs: [
      "Intel Core i5 12th Gen",
      "16GB DDR5 RAM",
      "NVIDIA RTX 3060",
      "512GB NVMe SSD",
    ],
  },
  {
    title: "Crimson Forge",
    specs: [
      "AMD Ryzen 7 5800X",
      "32GB DDR4 RAM",
      "Radeon RX 6700 XT",
      "1TB SSD + 2TB HDD",
    ],
  },
  {
    title: "Frostbyte Phantom",
    specs: [
      "Intel Core i7 13th Gen",
      "32GB DDR5 RAM",
      "NVIDIA RTX 4070",
      "2TB NVMe SSD",
    ],
  },
  {
    title: "Obsidian Vortex",
    specs: [
      "AMD Ryzen 5 7600X",
      "16GB DDR5 RAM",
      "NVIDIA RTX 3050",
      "1TB SSD",
    ],
  },
  {
    title: "Quantum Nova",
    specs: [
      "Intel Core i9 13th Gen",
      "64GB DDR5 RAM",
      "NVIDIA RTX 4090",
      "4TB Gen 4 SSD",
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState(2);
  const [showCard, setShowCard] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const transitionTimeout = useRef(null);
  const imageRefs = useRef([]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const getStyle = (index) => {
    const offset =
      ((index - active + images.length) % images.length + Math.floor(images.length / 2)) %
        images.length -
      Math.floor(images.length / 2);

    const scale = [1.1, 0.95, 0.85][Math.abs(offset)] || 0.75;
    const zIndex = 30 - Math.abs(offset) * 10;
    const x = offset * 220;
    const opacity = 1 - Math.abs(offset) * 0.2;

    return {
      transform: `translateX(${x}px) scale(${scale})`,
      zIndex,
      opacity,
      transition: "all 0.7s ease-in-out",
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-8 md:py-14 bg-[#f8f9fa] dark:bg-black overflow-hidden relative">
      <h2 className="text-3xl font-bold mb-8 text-white">Gallery</h2>

      <div className="relative w-full max-w-[100vw] h-[320px] flex items-center justify-center">
        {images.map((src, idx) => {
          const isActive = idx === active;
          const isCardVisible = isActive && showCard;

          return (
            <div
              key={idx}
              className="absolute"
              style={getStyle(idx)}
              ref={(el) => (imageRefs.current[idx] = el)}
              onMouseEnter={() => {
                setIsHovered(true);
                if (isActive) setShowCard(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setShowCard(false);
                clearTimeout(transitionTimeout.current);
              }}
              onClick={() => {
                setActive(idx);
                clearTimeout(transitionTimeout.current);
                transitionTimeout.current = setTimeout(() => {
                  const el = imageRefs.current[idx];
                  if (el && el.matches(":hover")) {
                    setShowCard(true);
                  }
                }, 700); // Only show card if still hovered after transition
              }}
            >
              <img
                src={src}
                alt={infoData[idx].title}
                className="shadow-lg w-72 h-72 object-cover cursor-pointer ring-1 ring-white/10"
              />

              {isCardVisible && (
                <div className="absolute left-[290px] top-1/2 -translate-y-1/2 bg-[#0a0a0a] border border-black/10 dark:border-white/10 shadow-2xl p-6 w-80 z-40 animate-fadeIn">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                    {infoData[idx].title}
                  </h3>
                  <ul className="mb-5 space-y-2 text-sm text-gray-500 dark:text-white/50">
                    {infoData[idx].specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#F47C5A] text-base mt-0.5">•</span>
                        <span className="font-light">{spec}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-2.5 hover:bg-[#e06a4a] text-xs uppercase tracking-[0.1em] transition-colors">
                    Add to Cart
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
