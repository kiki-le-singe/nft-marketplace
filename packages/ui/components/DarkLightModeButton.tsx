// https://tailwindcss.com/docs/dark-mode
// https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
// https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia

"use client";

import { useEffect } from "react";
import { MoonIconContainer } from "./icons/MoonIcon";
import { SunIconContainer } from "./icons/SunIcon";

export default function DarkLightModeButton() {
  function handleClick() {
    const newTheme = localStorage.theme === "dark" ? "light" : "dark";

    localStorage.theme = newTheme;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!localStorage.theme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    document.documentElement.classList.toggle("dark", isDarkMode);

    if (!("theme" in localStorage)) {
      localStorage.theme = isDarkMode ? "dark" : "light";
    }
  }, []);

  return (
    <button
      type="button"
      className="custom-animation-scale flex items-center text-purple cursor-pointer"
      onClick={handleClick}
    >
      <SunIconContainer className="hidden dark:block" />
      <MoonIconContainer className="block dark:hidden" />
    </button>
  );
}
