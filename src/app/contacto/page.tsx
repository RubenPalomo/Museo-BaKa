"use client";

import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";
import Header from "../components/Header/Header";
import Wallpaper from "../components/Wallpaper/Walpaper";
import Footer from "./Footer/Footer";

export default function ContactPage(): ReactNode {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/visitas");
    else if (deltaX < -50) router.push("/");

    setTouchStartX(0);
  };

  return (
    <div
      className="flex flex-col items-center w-full h-full min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Contacto" />
      <Wallpaper />
      <div className="flex flex-col items-center justify-center w-fit bg-white bg-opacity-60 p-10 border rounded-xl mt-[5vh] z-10">
        <h1 className="text-2xl sm:text-4xl font-bold italic">Contacto</h1>
        <div className="flex flex-col">
          <div className="mt-4">
            <h2 className="font-bold text-center">Información de contacto</h2>
            <p className="text-sm">
              <span className="font-bold">Número de teléfono: </span>91 024 572
              144
            </p>
            <p className="text-sm">
              <span className="font-bold">Correo electrónico: </span>
              museoBaKa@gmail.com
            </p>
          </div>
          <div className="mt-4">
            <h2 className="font-bold text-center">Redes sociales</h2>
            <p className="text-sm">
              <span className="font-bold">Facebook: </span>BaKamuseo
            </p>
            <p className="text-sm">
              <span className="font-bold">Instagram: </span>museoBaKa
            </p>
            <p className="text-sm">
              <span className="font-bold">Twitter: </span>museoBaKa
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
