import React from 'react';

const brandsRow1 = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
  "/images/img6.JPG",
];

const brandsRow2 = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
  "/images/img6.JPG",
];

const SCROLL_DURATION_SECONDS = 30;

export default function App() {
  return (
    <section className="w-full max-w-6xl mx-auto py-16 text-gray-900 overflow-hidden px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Trusted Partners</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          We collaborate with leading brands and businesses to deliver exceptional results and innovative solutions.
        </p>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }

        .scroll-container:hover .scroll-content {
            animation-play-state: paused;
        }
      `}</style>

      <div className="space-y-8">
        <div className="scroll-container overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <div className="scroll-content flex w-max items-center py-4"
               style={{ animation: `scroll-left ${SCROLL_DURATION_SECONDS}s linear infinite` }}>
            {[...brandsRow1, ...brandsRow1, ...brandsRow1].map((src, idx) => (
              <img
                key={`row1-${idx}`}
                src={src}
                alt={`Brand Logo ${idx}`}
                className="h-16 mx-8 object-contain filter grayscale opacity-70 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-105 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://placehold.co/150x80/9CA3AF/FFFFFF?text=Logo+${idx}`;
                }}
              />
            ))}
          </div>
        </div>

        <div className="scroll-container overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <div className="scroll-content flex w-max items-center py-4"
               style={{ animation: `scroll-right ${SCROLL_DURATION_SECONDS}s linear infinite` }}>
            {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((src, idx) => (
              <img
                key={`row2-${idx}`}
                src={src}
                alt={`Business Logo ${idx}`}
                className="h-16 mx-8 object-contain filter grayscale opacity-70 transition-all duration-300 ease-in-out hover:grayscale-0 hover:opacity-100 hover:scale-105 flex-shrink-0"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = `https://placehold.co/150x80/9CA3AF/FFFFFF?text=Logo+${idx}`;
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
