import { Metadata } from "next";

import { RootLayout } from "ui";

export const metadata: Metadata = {
  title: {
    template: "%s | NFT Marketplace",
    default: "NFT Marketplace",
  },
  description:
    "Exploring Modern Web Development: An NFT Marketplace with Turborepo, Next.js, TailwindCSS, NestJS, and More…",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "TypeScript",
    "NestJS",
    "TailwindCSS",
    "TurboRepo",
    "Monorepo",
  ],
  openGraph: {
    title: "NFT Marketplace",
    description:
      "Exploring Modern Web Development: An NFT Marketplace with Turborepo, Next.js, TailwindCSS, NestJS, and More…",
    siteName: "NFT Marketplace",
    images: `${process.env.IMG_URL}/monkey-driving.webp`,
  },
};

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return <RootLayout modal={modal}>{children}</RootLayout>;
}
