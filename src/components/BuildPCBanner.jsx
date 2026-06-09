import React from "react";

export default function BuildPCBanner() {
  return (
    <section className="w-full bg-[#f8f9fa] dark:bg-black text-white px-6 py-12 lg:px-16 lg:py-20">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 h-[200px]">
        {/* Left Text Block */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            CONFIGURE <br />
            <span className="text-[#F47C5A] text-5xl md:text-6xl lg:text-7xl">
              YOUR DREAM PC
            </span>
            <br />
            FROM SCRATCH!
          </h2>
          <button className="mt-6 px-6 py-3 bg-[#F47C5A] hover:bg-orange-500 transition text-black text-lg font-semibold rounded-md">
            BUY NOW
          </button>
        </div>

        {/* Right Image Block */}
        <div className="flex flex-row flex-1 items-center lg:items-end">
          <img
            src="/images/CustomMoniter.png" // Replace with actual path
            alt="Top PC"
            className="w-[300px] object-contain relative z-10"
          />

          <img
            src="/images/CustomPC.png" // Replace with actual path
            alt="Bottom Game Scene"
            className="w-[300px] object-contain absolute top-[80px] right-[250px] z-0"
          />
        </div>
      </div>
    </section>
  );
}
