import Link from "next/link";
import React from "react";

export default function Location() {
  return (
    <Link
      href="https://www.google.es/maps/place/Calle+de+Fuencarral,+70,+Centro,+28004+Madrid/@40.4247384,-3.7031865,17z/data=!3m1!4b1!4m6!3m5!1s0xd422888594e110f:0xb0fe2e05d8b8ee7!8m2!3d40.4247343!4d-3.7006116!16s%2Fg%2F11c22f19h6?entry=ttu"
      className="flex justify-center hover:scale-110 hover:cursor-pointer z-0"
      target="_blank"
    >
      <picture>
        <img
          src="img/museum-location.png"
          alt="Localización del museo"
          className="rounded-lg"
        />
      </picture>
    </Link>
  );
}
