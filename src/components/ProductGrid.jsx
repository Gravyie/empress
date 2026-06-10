import React from "react";
import { useInView } from "react-intersection-observer";

export default function ProductsGrid() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const images = [
    "/images/img1.JPG",
    "/images/keyb1.jpeg",
    "/images/img3.JPG",
    "/images/img4.JPG",
    "/images/img5.JPG",
    "/images/keyb2.jpeg",
  ];

  return (
    <div
      ref={ref}
      className={`mx-4 sm:mx-6 lg:mx-12 xl:mx-16 my-6 bg-[#0a0a0a] border border-white/[0.06] p-2 sm:p-3 lg:p-4 transition-opacity duration-1000 ${
        inView ? "animate-fadeInFromBack" : "opacity-0"
      }`}
    >
      <h2 className="text-chrome text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-5 lg:mb-6">
        Featured Products
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          grid-rows-10
          grid-flow-row-dense
          gap-1
          h-[650px]
          sm:gap-2
          sm:h-[750px]
          md:h-[850px]
          lg:grid-flow-row
          lg:grid-cols-6 
          lg:grid-rows-3
          lg:gap-4
          lg:h-[600px]
          xl:h-[650px]
          2xl:h-[700px]
        "
      >
        {images.map((src, idx) => {
          const sharedClass = `
            overflow-hidden 
            ring-1 ring-white/[0.06]
            transition-all 
            duration-300 
            hover:ring-white/20
            hover:shadow-lg 
            hover:shadow-white/[0.02]
            group
          `;

          const imageClass = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";

          const gridItemClasses = [
            "col-span-1 row-span-3 lg:col-span-3 lg:row-span-2",
            "col-span-2 row-span-2 lg:col-span-3 lg:row-span-1",
            "col-span-1 row-span-3 lg:col-span-1 lg:row-span-1",
            "col-span-1 row-span-3 lg:col-span-2 lg:row-span-2",
            "col-span-1 row-span-3 lg:col-span-1 lg:row-span-1",
            "col-span-2 row-span-2 lg:col-span-3 lg:row-span-1",
          ];

          return (
            <div key={idx} className={`${gridItemClasses[idx]} ${sharedClass}`}>
              <img src={src} alt={`Featured Product ${idx + 1}`} className={imageClass} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
