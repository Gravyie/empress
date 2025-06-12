import { useRef } from "react";
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

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === "left" ? -400 : 400, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold  mb-10">
        Don't take our word for it...
      </h2>

      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          onClick={() => scroll("left")}
        >
          <ChevronLeft />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth px-2"
        >
          {testimonials.map((t, i) => (
            <div
                key={i}
                className="bg-white rounded-2xl shadow p-6 w-[300px] flex-shrink-0 flex flex-col justify-between h-[380px]"
            >

              <div className="flex mb-2 text-yellow-400 text-lg">
                {"★".repeat(Math.floor(t.rating)) +
                  (t.rating % 1 ? "½" : "")}
              </div>
              <h3 className="text-lg font-semibold mb-2">{t.title}</h3>
              <p className="text-gray-600 mb-4">{t.content}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2"
          onClick={() => scroll("right")}
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
