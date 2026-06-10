import { useEffect, useState } from "react";

const keywords = [
  "Gaming",
  "Engineering",
  "Liquid",
  "Server",
  "Research",
  "Content-Creation",
];

export default function OurStory() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % keywords.length);
        setFade(true);
      }, 200);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative w-full bg-center bg-cover bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/OurStory.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#f8f9fa] dark:bg-black/70 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-28">
        <img
          src="/images/Logo.png"
          alt="Empress PC Logo"
          className="h-8 md:h-10 mb-3"
        />
        <p className="text-lg md:text-xl font-light text-gray-700 dark:text-white/70">
          Quality Custom{" "}
          <span
            className={`inline-block transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } text-chrome font-semibold`}
          >
            {keywords[index]}
          </span>{" "}
          PCs
        </p>
      </div>
    </section>
  );
}
