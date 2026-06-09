import React, { useState } from "react";

const coreValues = {
  Performance: "At Empress PC, we engineer systems that prioritize speed, power, and efficiency — ensuring every build delivers exceptional real-world performance.",
  Precision: "Every detail matters. From cable management to thermal optimization, we build each PC with a craftsman's precision and a gamer's mindset.",
  Passion: "We're more than builders — we're enthusiasts. Our passion drives us to stay on the cutting edge of technology, so your system is future-proof and flawless.",
};

export default function CoreValues() {
  const [selected, setSelected] = useState("Performance");

  return (
    <section className="bg-[#f8f9fa] dark:bg-black py-10 md:py-16 px-4 md:px-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white">Our Core Values</h2>
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(coreValues).map((key) => (
          <button
            key={key}
            className={`px-5 py-2 text-xs uppercase tracking-[0.15em] font-semibold transition-all duration-300 ${
              selected === key
                ? "bg-white text-black"
                : "bg-transparent text-gray-500 dark:text-white/50 border border-black/10 dark:border-white/10 hover:border-white/30 hover:text-white"
            }`}
            onClick={() => setSelected(key)}
          >
            {key}
          </button>
        ))}
      </div>
      <p className="max-w-2xl mx-auto text-gray-500 dark:text-white/50 text-base md:text-lg font-light leading-relaxed">
        {coreValues[selected]}
      </p>
    </section>
  );
}
