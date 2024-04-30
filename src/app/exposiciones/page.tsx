"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Wallpaper from "../components/Wallpaper/Walpaper";

export default function ExhibitionPage() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/colecciones");
    else if (deltaX < -50) router.push("/visitas");

    setTouchStartX(0);
  };

  return (
    <div
      className="h-full min-h-screen w-full bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Exposiciones" />
      <Wallpaper />
      <h1 className="text-2xl font-bold mx-auto my-5 w-[80vw]">
        Exposición permanente
      </h1>
      <h2 className="text-xl mx-auto my-5 pl-4 w-[80vw]">Plano del museo</h2>
      <div className="flex flex-wrap w-full justify-center">
        <picture className="flex justify-center w-full md:w-96 z-10">
          <img
            src="img/museum-map.jpg"
            alt="Plano del museo"
            className="opacity-100"
            width={400}
          />
        </picture>
        <div className="flex flex-col justify-end pl-5 pb-10 w-96 bg-white z-10">
          <p>1. Taquillas y guardarropa.</p>
          <p>2. Vestíbulo de entrada.</p>
          <p>3. Punto de encuentro.</p>
          <p>4. Recepción, adquisición de entradas.</p>
          <p>
            5. Sala de introducción histórica con elementos visuales,
            proyecciones, etc.
          </p>
          <p>6. Sala de los papiros.</p>
          <p>7. Sala de las joyas.</p>
          <p>8. Sala de las estatuas.</p>
        </div>
      </div>
    </div>
  );
}
