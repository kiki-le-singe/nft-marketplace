import { NFTCard } from "./NFTCard";

interface NFTCardData = {
  image: string;
  title: string;
};

export function GridNFTCard() {
  const data: NFTCardData[] = [
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-9@2x.png",
      title: "foxy life",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-40@2x.png",
      title: "cat from future",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-8@2x.png",
      title: "psycho dog",
    },
    {
      image:
        "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-12@2x.png",
      title: "designer bear",
    },
  ];

  return (
    <div className="flex w-full justify-center py-10 md:py-14 lg:py-20 xxs:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
        {data.map((nftCard: NFTCardData) => {
          const { title, image } = nftCard;

          return <NFTCard title={title} image={image} />;
        })}
      </div>
    </div>
  );
}
