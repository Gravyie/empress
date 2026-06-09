import React from 'react';
import { useInView } from 'react-intersection-observer';

const brandsRow1 = [
  "/images/brands/1.png", "/images/brands/2.png", "/images/brands/3.png",
  "/images/brands/4.png", "/images/brands/5.png", "/images/brands/6.png",
  "/images/brands/7.png", "/images/brands/8.png", "/images/brands/9.png",
  "/images/brands/10.png", "/images/brands/11.png", "/images/brands/12.png",
];

const brandsRow2 = [
  "/images/brands/13.png", "/images/brands/14.png", "/images/brands/15.png",
  "/images/brands/16.png", "/images/brands/17.png", "/images/brands/18.png",
  "/images/brands/19.png", "/images/brands/20.png", "/images/brands/21.png",
  "/images/brands/22.png", "/images/brands/23.png", "/images/brands/24.png",
];

const SCROLL_DURATION_SECONDS = 30;

export default function TrustedPartners() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      ref={ref}
      className={`w-full px-5 sm:px-6 py-12 bg-[#f8f9fa] dark:bg-black transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <div className="relative max-w-6xl mx-auto overflow-hidden border border-white/[0.06] bg-[#0a0a0a]">
        {/* Chrome accent line */}
        <div className="absolute top-0 left-0 w-full h-[1px] shine-chrome" />

        {/* Content */}
        <div className="relative z-10 px-5 sm:px-8 py-10 sm:py-14">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
              Our <span className="text-chrome">Trusted Partners</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 dark:text-white/40 max-w-2xl mx-auto font-light">
              We collaborate with leading brands and businesses to deliver exceptional results and innovative solutions.
            </p>
          </div>

          {/* Scrolling Brands */}
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

          <div className="space-y-5 sm:space-y-6">
            {[{ brands: brandsRow1, animation: 'scroll-left' }, { brands: brandsRow2, animation: 'scroll-right' }].map(
              ({ brands, animation }, index) => (
                <div
                  key={index}
                  className="scroll-container overflow-hidden border border-white/[0.04] bg-white/[0.02]"
                >
                  <div
                    className="scroll-content flex w-max items-center py-4 sm:py-5"
                    style={{ animation: `${animation} ${SCROLL_DURATION_SECONDS}s linear infinite` }}
                  >
                    {[...brands, ...brands, ...brands].map((src, idx) => (
                      <img
                        key={`${animation}-${idx}`}
                        src={src}
                        alt={`Logo ${idx}`}
                        className="h-8 sm:h-14 mx-4 sm:mx-8 object-contain opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = `https://placehold.co/150x80/333/666?text=Logo+${idx}`;
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
