"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import Header from "./components/Header/Header";
import Wallpaper from "./components/Wallpaper/Walpaper";

export default function Home() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/contacto");
    else if (deltaX < -50) router.push("/colecciones");

    setTouchStartX(0);
  };

  return (
    <main
      className="flex w-full h-screen flex-col items-center bg-white"
      data-testid="home"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="/" />
      <div className="flex flex-wrap justify-center items-center w-full h-screen">
        <Wallpaper />
        <Carousel />
        <div className="flex flex-col items-center mt-10 mx-4 xl:mx-20 md:w-1/2">
          <h1 className="font-bold text-2xl sm:text-4xl text-center">
            Nuestra historia
          </h1>
          <p className="font-bold text-center mt-5">
            En el corazón de Madrid, en un elegante edificio restaurado que
            combina la arquitectura clásica con toques modernos, se encuentra el
            Museo BaKa. Este museo único fue concebido por la visionaria
            historiadora Helena Martínez, quien soñaba con crear un espacio que
            trajera el antiguo Egipto al siglo XXI, fusionando el legado
            histórico con la creatividad contemporánea.
          </p>
          <div className="flex mt-4">
            <Link
              href="/historia"
              className="bg-blue-200 p-4 px-8 rounded-3xl transition-transform transform-gpu hover:scale-110"
            >
              <p className="font-bold text-2xl">Leer más</p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
