import React from "react";

export default function HeaderIconComponent() {
  return (
    <div>
      <picture>
        <img
          src="img/baka-icon.png"
          alt="icon"
          width={60}
          data-testid="icon"
        />
      </picture>
    </div>
  );
}
