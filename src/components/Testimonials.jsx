import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    title: "Flawless Performance",
    rating: 5,
    content:
      "Got my custom gaming rig from Empress PC, and it runs every AAA title on ultra settings without breaking a sweat. Absolutely loving the build quality.",
    name: "Jordan Smith",
    location: "Seattle, Washington",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    title: "Expert Support",
    rating: 5,
    content:
      "Had a few doubts before ordering, but their support team helped me pick the perfect configuration. Even followed up after delivery to ensure everything was smooth.",
    name: "Taylor Christos",
    location: "Austin, Texas",
    img: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    title: "Fully Custom, Fully Satisfied",
    rating: 4.5,
    content:
      "Loved how I could choose every part. They even gave me thermal and airflow optimization tips. My workstation looks clean and runs cooler than expected.",
    name: "Alex Williams",
    location: "London, England",
    img: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    title: "Delivered Fast & Ready",
    rating: 5,
    content:
      "PC arrived earlier than estimated and was perfectly assembled. Plug and play—no hassles. Packaging was secure, and the aesthetics were exactly as I imagined.",
    name: "Reena Desai",
    location: "Mumbai, India",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    title: "Clean Build, Killer Looks",
    rating: 4.5,
    content:
      "Ordered a liquid-cooled editing rig for my studio work. The RGB sync, cable management, and quiet fans make it a dream setup.",
    name: "Diego Morales",
    location: "Barcelona, Spain",
    img: "https://randomuser.me/api/portraits/men/72.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="bg-[#f8f9fa] dark:bg-black py-10 md:py-16 px-4 sm:px-6 md:px-24">
      <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10 text-white">
        Don't take our word for it...
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black flex items-center justify-center text-gray-500 dark:text-white/50 hover:text-white hover:border-white/30 transition-all z-10"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 border border-black/10 dark:border-white/10 bg-[#f8f9fa] dark:bg-black flex items-center justify-center text-gray-500 dark:text-white/50 hover:text-white hover:border-white/30 transition-all z-10"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Card */}
        <div className="transition-all duration-500 p-8 bg-[#0a0a0a] border border-white/[0.06] text-center space-y-5 mx-12 sm:mx-0 relative overflow-hidden">
          <div className="shimmer-line" />
          
          {/* Quote Icon */}
          <div className="flex justify-center">
            <Quote size={24} className="text-white/10" />
          </div>

          <div className="text-[#F47C5A] text-sm tracking-wider">
            {"★".repeat(Math.floor(t.rating))}
            {t.rating % 1 ? "½" : ""}
          </div>
          <h3 className="text-lg font-semibold text-white">{t.title}</h3>
          <p className="text-gray-500 dark:text-white/50 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">{t.content}</p>

          <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/[0.06]">
            <img
              src={t.img}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-white/10"
            />
            <div className="text-left">
              <p className="text-sm font-medium text-white/90">{t.name}</p>
              <p className="text-xs text-gray-500 dark:text-white/40">{t.location}</p>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-1.5">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1 rounded-full transition-all duration-300 ${
                current === index ? 'bg-white w-5' : 'bg-white/15 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
