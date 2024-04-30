import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const images = Array.from(
    { length: 12 },
    (_, i) => `img/museum-images/Picture${i + 2}.jpg`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <picture className="relative w-96 h-96">
      {images.map((image, idx) => (
        <img
          key={idx}
          src={image}
          alt={`Picture ${idx + 1}`}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 rounded-xl ${
            idx === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </picture>
  );
}
