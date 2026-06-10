import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const winners = [
  {
    title: "Empress Mortal Combat Tournament Winner",
    image: "/images/team/member2.png",
  },
  {
    title: "Empress Mortal Combat Tournament Winner",
    image: "/images/team/member3.png",
  },
  {
    title: "Empress Mortal Combat Tournament Winner",
    image: "/images/team/member4.png",
  },
];

export default function WinnersCarousel() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % winners.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? winners.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section
      ref={ref}
      className={`bg-[#f8f9fa] dark:bg-black py-6 text-white transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold">WINNERS</h2>
        </div>

        <div className="relative">
          <div className="bg-[url('/images/Event/winner-bg.jpg')] bg-cover bg-center rounded-lg p-6 mb-6">
            {/* Grid for desktop, single card for mobile */}
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {winners.map((winner, index) => (
                <div
                  key={index}
                  className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors"
                >
                  <img
                    src={winner.image}
                    alt={winner.title}
                    className="w-full h-48 object-contain rounded-lg mb-3"
                  />
                  <p className="text-sm text-center font-medium">
                    {winner.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile carousel */}
            <div className="md:hidden relative">
              <div className="bg-black/10 dark:bg-white/10 backdrop-blur-sm border border-black/20 dark:border-white/20 rounded-xl p-4 transition-all duration-500">
                <img
                  src={winners[current].image}
                  alt={winners[current].title}
                  className="w-full h-48 object-contain rounded-lg mb-3"
                />
                <p className="text-sm text-center font-medium">
                  {winners[current].title}
                </p>
              </div>

              {/* Arrows */}
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 border border-white/10 flex items-center justify-center text-white/70 hover:text-white rounded-full transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center gap-2 md:hidden">
            {winners.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white scale-110" : "bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}