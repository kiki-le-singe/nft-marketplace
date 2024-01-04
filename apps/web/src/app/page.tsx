import {
  GridArtistCard,
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
  SectionsContainer,
} from "ui";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full py-10">
      <SectionsContainer>
        <GridArtistCard />
        <GridCategoryCard />
        <GridNFTCard />
      </SectionsContainer>

      <NFTHighlight />

      <SectionsContainer>
        <HowItWorks />
      </SectionsContainer>
    </div>
  );
}
