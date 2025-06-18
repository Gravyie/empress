import React from 'react';
import { useInView } from 'react-intersection-observer';

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

export default function TrustedPartners() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  
  return (
    <section
      ref={ref}
      className={`w-full px-4 bg-white transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}>
      <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f1c2c] to-[#928dab] z-0" />
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 rounded-full opacity-30 blur-3xl z-0" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full opacity-20 blur-2xl z-0" />

        <div className="relative z-10 px-6 py-12">
          <div className="text-center mb-10 text-white">
            <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">Trusted Partners</span>
            </h2>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
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
            {[{ brands: brandsRow1, animation: 'scroll-left' }, { brands: brandsRow2, animation: 'scroll-right' }].map(
              ({ brands, animation }, index) => (
                <div key={index} className="scroll-container overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div
                    className="scroll-content flex w-max items-center py-4"
                    style={{ animation: `${animation} ${SCROLL_DURATION_SECONDS}s linear infinite` }}
                  >
                    {[...brands, ...brands, ...brands].map((src, idx) => (
                      <img
                        key={`${animation}-${idx}`}
                        src={src}
                        alt={`Logo ${idx}`}
                        className="h-16 mx-8 object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/150x80/6B7280/FFFFFF?text=Logo+${idx}`;
                        }}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
