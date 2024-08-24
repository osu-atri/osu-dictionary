// Generate one box at a time.
// Use <RandomBox />
import React from "react";

const maxBoxWidth = 200;
const maxDelay = 20;
const maxDuration = 60;

export default function RandomBox() {
  const boxLeft = `${Math.floor(Math.random() * 100)}%`;
  const boxWidth = `${Math.floor(Math.random() * maxBoxWidth)}px`;
  const animationDelay = `${Math.floor(Math.random() * maxDelay)}s`;
  const animationDuration = `${Math.floor(Math.random() * maxDuration)}s`;
  const direction = Math.floor(Math.random()) == 0 ? "reverse" : "normal";

  return (
    <li
      style={{
        left: boxLeft,
        width: boxWidth,
        height: boxWidth,
        animationDelay: animationDelay,
        animationDuration: animationDuration,
        animationDirection: direction,
      }}
    ></li>
  );
}
