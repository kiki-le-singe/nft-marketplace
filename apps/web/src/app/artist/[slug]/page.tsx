import {
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
  SectionsContainer,
} from "ui";

export default function Page({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <div>{slug}</div>
      {/* <SectionsContainer>
        <GridCategoryCard />
        <GridNFTCard />
      </SectionsContainer>

      <NFTHighlight />

      <SectionsContainer>
        <HowItWorks />
      </SectionsContainer> */}
    </div>
  );
}
