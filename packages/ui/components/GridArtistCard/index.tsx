import { ArtistCard } from "../ArtistCard";

import "./styles.css";

interface ArtistCardData {
  avatar: string;
  name: string;
}

export function GridArtistCard() {
  const data: ArtistCardData[] = [
    {
      avatar: "http://localhost:3002/images/cat.png",
      name: "Keepitreal",
    },
    {
      avatar: "http://localhost:3002/images/dog.png",
      name: "Digilab",
    },
    {
      avatar: "http://localhost:3002/images/fox.png",
      name: "Juanie",
    },
    {
      avatar: "http://localhost:3002/images/crocodile.png",
      name: "Gravityone",
    },
    {
      avatar: "http://localhost:3002/images/elephant.png",
      name: "Mr Fox",
    },
    {
      avatar: "http://localhost:3002/images/hyena.png",
      name: "Bluewhale",
    },
    {
      avatar: "http://localhost:3002/images/shark.png",
      name: "Shroomie",
    },
    {
      avatar: "http://localhost:3002/images/robot.png",
      name: "Robotica",
    },
    {
      avatar: "http://localhost:3002/images/mouse.png",
      name: "Rustyrobot",
    },
    {
      avatar: "http://localhost:3002/images/lion.png",
      name: "Animakid",
    },
    {
      avatar: "http://localhost:3002/images/panda.png",
      name: "Dotgu",
    },
    {
      avatar: "http://localhost:3002/images/bird.png",
      name: "Ghiblier",
    },
  ];

  return (
    <ul className="grid-artist-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-30px">
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
