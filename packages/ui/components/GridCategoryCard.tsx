import { CategoryCard } from "./CategoryCard";

interface CategoryCardData {
  image: string;
  title: string;
}

export function GridCategoryCard() {
  const data: CategoryCardData[] = [
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-54@2x.png",
      title: "art",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png",
      title: "collectibles",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-56@2x.png",
      title: "music",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-57@2x.png",
      title: "photography",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-58@2x.png",
      title: "video",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-59@2x.png",
      title: "utility",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-60@2x.png",
      title: "sport",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-61@2x.png",
      title: "virtual worlds",
    },
  ];

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-5 md:gap-7 lg:gap-7">
      {data.map((categoryCard: CategoryCardData, index) => (
        <li key={`CategoryCard-${index}`}>
          <CategoryCard {...categoryCard} />
        </li>
      ))}
    </ul>
  );
}
