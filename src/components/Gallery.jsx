import { useEffect, useState } from "react";

const images = [
  "/images/img1.JPG",
  "/images/img2.JPG",
  "/images/img3.JPG",
  "/images/img4.JPG",
  "/images/img5.JPG",
];

export default function Gallery() {
  const [active, setActive] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 2500); // Slide every 2.5s
    return () => clearInterval(interval);
  }, [images.length]);

  const getStyle = (index) => {
    const diff = index - active;
    const offset =
      ((diff + images.length) % images.length + Math.floor(images.length / 2)) %
        images.length -
      Math.floor(images.length / 2);

    let scale = 0.75;
    let z = 0;
    let x = offset * 220;
    let blur = 'blur-sm';
    let opacity = 0;

    if (offset === 0) {
      scale = 1.1;
      z = 30;
      blur = '';
      opacity = 1;
    } else if (Math.abs(offset) === 1) {
      scale = 0.95;
      z = 20;
      blur = 'blur-xs';
      opacity = 0.9;
    } else if (Math.abs(offset) === 2) {
      scale = 0.85;
      z = 10;
      blur = 'blur-sm';
      opacity = 0.6;
    }

    return {
      transform: `translateX(${x}px) scale(${scale})`,
      zIndex: z,
      opacity,
      transition: 'all 0.7s ease-in-out',
    };
  };

  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-white overflow-hidden">
      <h2 className="text-3xl font-bold mb-6">Gallery</h2>
      <div className="relative w-full max-w-[100vw] h-[320px] flex items-center justify-center">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt=""
            className={`absolute rounded-xl shadow-lg w-72 h-72 object-cover ${blur}`}
            style={getStyle(idx)}
          />
        ))}
      </div>
    </div>
  );
}