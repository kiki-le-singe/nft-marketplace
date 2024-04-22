import type { Metadata } from "next";
import localFont from "next/font/local";

import "../styles/globals.css";

import { Header } from "./Header";
import { Footer } from "./Footer";

// Font files can be colocated inside of `app`
const SpaceMonoFont = localFont({
  src: "../_fonts/SpaceMono-Regular.ttf",
  display: "swap",
  variable: "--font-space-mono",
});
const WorkSansFont = localFont({
  src: "../_fonts/WorkSans-Regular.woff2",
  display: "swap",
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`bg-black ${SpaceMonoFont.variable} ${WorkSansFont.variable}`}
    >
      <body>
        <Header />
        <div className="flex justify-center">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
