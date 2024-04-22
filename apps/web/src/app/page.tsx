import { Suspense } from "react";
import {
  GridArtistCard,
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
  SectionsContainer,
  TrendingCollection,
  TrendingCollectionSkeleton,
} from "ui";

// TODO:
// - update packages
// faire une animate comme ca: https://www.framer.com/motion/scroll-animations/#examples pour les sections de la home page, au scroll???

export default function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full py-10 md:py-20">
      <SectionsContainer>
        <Suspense fallback={<TrendingCollectionSkeleton />}>
          <TrendingCollection />
        </Suspense>

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
