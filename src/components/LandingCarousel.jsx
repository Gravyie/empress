import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    id: "productivity",
    title: 'Enhance Your Productivity',
    description:
      'Multitask, manage, and move faster with PCs designed for workflows, responsiveness, and seamless business workflows.',
    image: '/images/img1.JPG',
  },
  {
    id: "gaming",
    title: 'Enhance Your Gaming Experience',
    description:
      'Dominate every game with high-performance PCs built for immersive graphics, fast response times, and smooth gameplay.',
    image: '/images/img2.JPG',
  },
  {
    id: "server",
    title: 'Enhance Your Servers',
    description:
      'Power your infrastructure with robust servers built for reliability, scalability, and high-performance data management and processing.',
    image: '/images/img3.JPG',
  },
];

export default function LandingCarousel() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <div className="max-w-7xl mx-auto my-10 px-5">
      <div className="w-full flex flex-col items-center bg-[#0a0a0a] border border-white/[0.06] py-6 px-4">

        {/* Slide card */}
        <div className="w-full max-w-6xl bg-[#f8f9fa] dark:bg-black border border-white/[0.08] flex flex-col md:flex-row items-center justify-between p-6 md:p-8 transition-all duration-500 ease-in-out space-y-6 md:space-y-0">
          
          {/* Text */}
          <div className="text-white w-full md:w-1/2 space-y-3 md:space-y-4 text-center md:text-left">
            <p className="text-[#F47C5A] text-[10px] uppercase tracking-[0.2em] font-semibold">Featured Category</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight text-white">{slide.title}</h2>
            <p className="text-sm text-gray-500 dark:text-white/40 hidden md:block font-light">{slide.description}</p>
            <button
              onClick={() => navigate("/" + slide.id)}
              className="mt-3 md:mt-4 bg-white hover:bg-gray-200 text-black px-5 py-2.5 text-xs uppercase tracking-[0.1em] font-semibold transition-all cursor-pointer"
            >
              View More
            </button>
          </div>

          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full md:w-1/2 h-64 md:h-80 object-contain"
          />
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-5 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === index ? 'bg-white w-6' : 'bg-black/20 dark:bg-white/20 w-1.5'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}