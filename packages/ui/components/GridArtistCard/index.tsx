import { ArtistCard } from "../ArtistCard";

import "./styles.css";

interface ArtistCardData {
  avatar: string;
  name: string;
}

export function GridArtistCard() {
  const data: ArtistCardData[] = [
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
      name: "Keepitreal",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-88@2x.png",
      name: "Digilab",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-90@2x.png",
      name: "Juanie",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-89@2x.png",
      name: "Gravityone",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-92@2x.png",
      name: "Mr Fox",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-91@2x.png",
      name: "Bluewhale",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-103@2x.png",
      name: "Shroomie",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-104@2x.png",
      name: "Robotica",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-105@2x.png",
      name: "Rustyrobot",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-106@2x.png",
      name: "Animakid",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-107@2x.png",
      name: "Dotgu",
    },
    {
      avatar:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-108@2x.png",
      name: "Ghiblier",
    },
  ];

  return (
    <ul className="grid-artist-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[30px]">
      {data.map((artistCardData: ArtistCardData, index) => (
        <li
          className="relative custom-animation-scale"
          key={`ArtistCard-${index}`}
        >
          <div className="absolute top-3 left-3 lg:top-3.5 lg:left-5 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-black text-white">
            {index + 1}
          </div>
          <ArtistCard creator={artistCardData} />
        </li>
      ))}
    </ul>
  );
}
