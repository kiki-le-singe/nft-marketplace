"use client";

import React from "react";

interface Props {
  primary?: boolean;
  size?: "small" | "large";
  backgroundColor?: string;
  label?: string;
}

export const Button = ({
  primary = false,
  label = "Boop",
  size = "small",
}: Props) => {
  return (
    <button
      style={{
        backgroundColor: primary ? "red" : "blue",
        fontSize: size === "large" ? "24px" : "14px",
      }}
    >
      {label}
    </button>
  );
};
