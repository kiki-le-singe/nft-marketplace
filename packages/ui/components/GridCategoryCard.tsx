import { CategoryCard } from "./CategoryCard";

interface CategoryCardData {
  image: string;
  title: string;
}

export function GridCategoryCard() {
  const data: CategoryCardData[] = [
    {
      image: "http://localhost:3002/images/elephant2.png",
      title: "art",
    },
    {
      image: "http://localhost:3002/images/cat.png",
      title: "collectibles",
    },
    {
      image: "http://localhost:3002/images/fox.png",
      title: "music",
    },
    {
      image: "http://localhost:3002/images/crocodile2.png",
      title: "photography",
    },
    {
      image: "http://localhost:3002/images/dog2.png",
      title: "video",
    },
    {
      image: "http://localhost:3002/images/hyena2.png",
      title: "utility",
    },
    {
      image: "http://localhost:3002/images/raccoon.png",
      title: "sport",
    },
    {
      image: "http://localhost:3002/images/parrot.png",
      title: "virtual worlds",
    },
  ];

  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-5 md:gap-7 lg:gap-y-7">
        {data.map((categoryCard: CategoryCardData, index) => (
          <li
            key={`CategoryCard-${index}`}
            className="w-full custom-animation-scale"
          >
            <CategoryCard {...categoryCard} />
          </li>
        ))}
      </ul>
    </div>
  );
}
