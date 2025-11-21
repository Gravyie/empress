import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
    <section className="bg-gray-50 py-4 md:py-12 px-2 sm:px-6 md:px-24">
      <h2 className="text-lg sm:text-2xl md:text-4xl font-bold text-center mb-4 md:mb-10">
        Don’t take our word for it...
      </h2>

      <div className="relative max-w-3xl mx-auto">
        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow rounded-full p-2"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Card */}
        <div className="transition-all duration-500 p-6 bg-white shadow-xl rounded-2xl text-center space-y-6 sm:space-y-4 mx-10 sm:mx-0">
          <div className="text-yellow-500 text-lg">
            {"★".repeat(Math.floor(t.rating))}
            {t.rating % 1 ? "½" : ""}
          </div>
          <h3 className="text-xl font-semibold">{t.title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{t.content}</p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <img
              src={t.img}
              alt={t.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-gray-500">{t.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
