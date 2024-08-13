import React from "react";

export default function FntColor({ children, color }) {
  return (
    <span
      style={{
        color: color,
      }}
    >
      {children}
    </span>
  );
}
