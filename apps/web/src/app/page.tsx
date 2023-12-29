import {
  AvatarName,
  GridArtistCard,
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
} from "ui";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-10 md:gap-y-14 lg:gap-y-20 w-full">
      <div className="flex flex-col xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-10 md:gap-y-14 lg:gap-y-20 w-full">
        <div>
          <AvatarName
            avatar="http://localhost:3002/images/cat.png"
            name="Mr Fox"
          />
          <AvatarName
            avatar="http://localhost:3002/images/dog.png"
            name="Mr Fox"
            theme="big"
          />
        </div>

        <GridArtistCard />
        <GridCategoryCard />
        <GridNFTCard />
      </div>

      <NFTHighlight />

      <div className="flex flex-col xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-10 md:gap-y-14 lg:gap-y-20 w-full">
        <HowItWorks />
      </div>
    </div>
  );
}
