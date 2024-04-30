import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-20 bg-black text-white absolute bottom-0">
      <p className="text-sm">© 2024 BaKa Museo</p>
      <div className="flex flex-row">
        <p className="text-sm mr-1">¿Quieres una página como esta? Visita</p>
        <Link
          href="https://www.linkedin.com/in/ruben-palomo-fontan/"
          target="_blank"
          rel="LinkedIn Ruben Palomo"
        >
          <p className="text-sm text-blue-300 font-bold hover:scale-150 hover:text-blue-500 hover:bg-black">
            mi perfil
          </p>
        </Link>
      </div>
    </footer>
  );
}
