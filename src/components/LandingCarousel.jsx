import { useEffect, useState } from 'react';

const slides = [
  {
    title: 'Enhance Your Productivity',
    description:
      'Multitask, manage, and move faster with PCs designed for workflows, responsiveness, and seamless business workflows.',
    image: '/images/img1.JPG',
  },
  {
    title: 'Enhance Your Gaming Experience',
    description:
      'Dominate every game with high-performance PCs built for immersive graphics, fast response times, and smooth gameplay.',
    image: '/images/img2.JPG',
  },
  {
    title: 'Enhance Your Servers',
    description:
      'Power your infrastructure with robust servers built for reliability, scalability, and high-performance data management and processing.',
    image: '/images/img3.JPG',
  },
];

export default function LandingCarousel() {
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
  <div className='max-w-7xl mx-auto my-10'>
    <div className="w-full flex justify-center items-center bg-gray-900 py-10 px-4 rounded-xl">
      <div className="w-full max-w-6xl h-[28rem] bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl flex items-center justify-between p-8 transition-all duration-500 ease-in-out">
        <div className="text-white w-1/2 space-y-4">
          <p className="text-green-500 text-sm font-semibold">Featured Category</p>
          <h2 className="text-3xl font-bold leading-tight">{slide.title}</h2>
          <p className="text-sm text-gray-300">{slide.description}</p>
          <button className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm">
            View More
          </button>
        </div>
        <img
          src={slide.image}
          alt={slide.title}
          className="w-1/2 h-auto object-contain"
        />
      </div>
    </div>
  </div>
  );
}