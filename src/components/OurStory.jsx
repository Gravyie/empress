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
    <section className="bg-black text-white py-12 px-4 text-center">
      <img
        src="/images/Logo.png"
        alt="Empress PC Logo"
        className="mx-auto h-10 md:h-12 mb-2"
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
    </section>
  );
}
