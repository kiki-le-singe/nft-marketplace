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
  const backgroundColor = primary ? "bg-red-600" : "bg-cyan-500";
  const fontSize = size === "large" ? "text-2xl" : "text-sm";

  return (
    <button
      className={`rounded-lg p-1.5 text-white ${backgroundColor} ${fontSize}`}
    >
      {label}
    </button>
  );
};
