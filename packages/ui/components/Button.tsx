"use client";

import clsx from "clsx";

import { ButtonTheme } from "../types";
interface ButtonProps {
  theme?: ButtonTheme;
  text: string | null;
  onClick?: () => void;
}

export function Button({
  theme = ButtonTheme.PURPLE,
  text,
  onClick = () => {},
}: ButtonProps) {
  const classNames = clsx(
    "flex justify-center items-center px-[30px] h-[60px] rounded-[20px] hover:scale-95 ease-in duration-200",
    {
      "bg-purple": theme === ButtonTheme.PURPLE,
      "bg-white": theme === ButtonTheme.WHITE,
      "bg-transparent border-2 border-purple":
        theme === ButtonTheme.TRANSPARENT,
      "text-white":
        theme === ButtonTheme.PURPLE || theme === ButtonTheme.TRANSPARENT,
    }
  );

  function handleClick() {
    onClick();
  }

  return (
    <button type="button" onClick={handleClick} className={classNames}>
      {text}
    </button>
  );
}
