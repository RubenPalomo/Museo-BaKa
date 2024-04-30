import Image from "next/image";
import React from "react";
import wallpaper from "../../utils/images/museum.jpg";

export default function Wallpaper() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0">
      <Image
        src={wallpaper}
        alt="logo"
        className="opacity-20 w-full"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
