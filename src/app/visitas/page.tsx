"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Header from "../components/Header/Header";
import Location from "./components/Location/Location";
import Wallpaper from "../components/Wallpaper/Walpaper";

export default function VisitsPage() {
  const router = useRouter();
  const [touchStartX, setTouchStartX] = useState(0);

  const handleTouchStart = (e: any) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: any) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;

    if (deltaX > 50) router.push("/exposiciones");
    else if (deltaX < -50) router.push("/contacto");

    setTouchStartX(0);
  };

  return (
    <div
      className="h-full min-h-screen bg-white"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Header currentPage="Visitas" />
      <Wallpaper />
      <h1 className="text-2xl font-bold mx-auto my-5 w-[80vw]">Visitas</h1>
      <div className="flex flex-wrap justify-center w-full">
        <div className="flex flex-col w-full md:w-[40vw] mx-5">
          <h2 className="text-lg font-bold text-center my-5">Ubicación</h2>
          <Location />
          <div className="mx-auto">
            <p className="text-sm mt-2">
              Calle de Fuencarral, 70. Madrid, 28004
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Teléfono:</span> 91 024 572 144
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Autobús:</span> 147, 21, 37, 40
            </p>
            <p className="text-sm mt-2">
              <span className="font-bold">Metro:</span> Línea 10
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-[40vw] mx-5">
          <h2 className="text-lg font-bold text-center my-5">Horarios</h2>
          <p className="text-sm mt-2">
            De <span className="font-bold">lunes a viernes</span>, de 10:00 a
            20:00
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Domingos y festivos</span>, de 10:00 a
            14:00
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Cerrado:</span> Todos los sábados del
            año, 1 y 6 de enero, 1 y 15 de mayo, y 24 y 25 de diciembre
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Horario de la biblioteca:</span> de
            10:00 a 14:00
          </p>
          <p className="text-sm mt-2">
            Acceso al museo hasta 30 minutos antes del cierre. El desalojo de
            las solas comenzará 10 minutos antes del cierre
          </p>
        </div>
        <div className="flex flex-col w-full md:w-[40vw] mx-5">
          <h2 className="text-lg font-bold text-center my-5">Tarifas</h2>
          <p className="text-sm mt-2">
            <span className="font-bold">Entrada general:</span> 5€
          </p>
          <p className="text-sm mt-2">
            <span className="font-bold">Entrada reducida:</span> 1,5€ con previa
            acreditación para:
          </p>
          <ul>
            <li className="text-xs">
              - Menores de 18 años y mayores de 65 años
            </li>
            <li className="text-xs">- Estudiantes entre 18 y 25 años</li>
            <li className="text-xs">- Titulares de Carné Joven</li>
            <li className="text-xs">
              - Personas con discapacidad. También podrá acceder al museo su
              acompañante de la misma forma
            </li>
            <li className="text-xs">- Pensionistas</li>
            <li className="text-xs">
              - Personas en situación legal de desempleo
            </li>
            <li className="text-xs">- Miembros de familias numerosas</li>
            <li className="text-xs">- Personal docente</li>
            <li className="text-xs">- Guías Oficiales de Turismo</li>
            <li className="text-xs">- Periodistas</li>
          </ul>
        </div>
        <div className="flex flex-col w-full md:w-[40vw] mx-5">
          <h2 className="text-lg font-bold text-center my-5">
            Visitas guiadas
          </h2>
          <p className="text-sm mt-2">
            El número máximo de personas por cada grupo, debe ser 12. Se dispone
            de visitas guiadas tanto para adultos, como para niños
          </p>
        </div>
      </div>
    </div>
  );
}
