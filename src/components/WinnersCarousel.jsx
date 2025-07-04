"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
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

  return (
    <section ref={ref} className={`bg-black py-6 text-white transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-3">
          <h2 className="text-3xl font-bold">WINNERS</h2>
        </div>

        <div className="relative">
          <div className="bg-[url('/images/Event/winner-bg.jpg')] bg-cover bg-center rounded-lg p-6 mb-6">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              pagination={{
                clickable: true,
                el: '.winners-pagination',
              }}
              modules={[Pagination]}
              className="winners-swiper"
            >
              {winners.map((winner, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-colors">
                    <img
                      src={winner.image}
                      alt={winner.title}
                      className="w-full h-48 object-contain rounded-lg mb-3"
                    />
                    <p className="text-sm text-center font-medium">
                      {winner.title}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          {/* Pagination dots outside the background */}
          <div className="winners-pagination flex justify-center"></div>
        </div>
      </div>

      <style jsx global>{`
        .winners-pagination .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.4);
          width: 10px;
          height: 10px;
          margin: 0 4px;
          opacity: 1;
        }
        
        .winners-pagination .swiper-pagination-bullet-active {
          background: white;
        }
      `}</style>
    </section>
  );
}