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
      {/* Bluish overlay */}
      <div className="absolute inset-0 bg-blue-900 opacity-50 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24">
        <img
          src="/images/Logo.png"
          alt="Empress PC Logo"
          className="h-10 md:h-12 mb-2"
        />
        <p className="text-lg md:text-xl">
          Quality Custom{" "}
          <span
            className={`inline-block transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            } bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent font-semibold`}
          >
            {keywords[index]}
          </span>{" "}
          PCs
        </p>
      </div>
    </section>
  );
}
