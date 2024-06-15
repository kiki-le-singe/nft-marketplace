"use client";

import clsx from "clsx";

import { ButtonTheme } from "../types";
interface ButtonProps {
  icon?: JSX.Element | null;
  theme?: ButtonTheme;
  children?: React.ReactNode;
  onClick?: () => void;
  classNames?: string;
}

export function Button({
  icon = null,
  theme = ButtonTheme.PURPLE,
  children = null,
  onClick = () => {},
  classNames = "",
}: ButtonProps) {
  const _classNames = clsx(
    "flex justify-center items-center gap-3 px-30px h-[60px] rounded-20px  custom-animation-scale",
    classNames,
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
    <button type="button" onClick={handleClick} className={_classNames}>
      {icon}
      {children}
    </button>
  );
}
