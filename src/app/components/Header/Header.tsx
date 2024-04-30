import React from "react";
import HeaderMenuComponent from "./HeaderMenuComponent/HeaderMenuComponent";
import HeaderIconComponent from "./HeaderIconComponent/HeaderIconComponent";

export default function Header({ currentPage }: { currentPage: string }) {
  return (
    <header className="flex flex-col md:flex-row justify-between w-full bg-white h-fit p-4 sticky top-0 z-50">
      <div className="flex">
        <HeaderIconComponent />
        <div>
          <h1 className="md:text-3xl font-bold">Museo BaKa</h1>
          <p className="text-xs sm:text-sm">El antiguo Egipto ante tus ojos</p>
        </div>
      </div>
      <HeaderMenuComponent
        menuElements={[
          "Inicio",
          "Colecciones",
          "Exposiciones",
          "Visitas",
          "Contacto",
        ]}
        currentPage={currentPage}
      />
    </header>
  );
}
