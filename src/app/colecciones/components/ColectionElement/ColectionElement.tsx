import React from "react";
import { ColectionElementProps } from "./ColectionElement.props";

export default function ColectionElement({
  title,
  imagePath,
  description,
}: ColectionElementProps) {
  return (
    <div className="flex flex-col md:flex-row items-center xl:w-[40vw] my-2 z-10">
      <picture>
        <img
          src={imagePath}
          alt={title}
          className="rounded-lg max-w-40 opacity-100"
        />
      </picture>
      <div className="m-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
