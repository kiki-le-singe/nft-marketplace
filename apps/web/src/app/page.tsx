import { Suspense } from "react";
import {
  GridArtistCard,
  GridArtistCardSkeleton,
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
  SectionsContainer,
  TrendingCollection,
  TrendingCollectionSkeleton,
} from "ui";

// TODO:
// Lighthouse performance(revoir mais pas mal du tout)/Best practices/Accessibility
// faire une error page, 404,...
// faire une animation genre https://www.framer.com/motion/examples/#scroll-triggered-animations mais que pour un composant (ou creer une page speciale pour ca) car ca necessite d'etre en "use client". Ou bien essayer une animation comme du parallax https://www.framer.com/motion/scroll-animations/##parallax.
// - update api packages

export default function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <SectionsContainer>
        <Suspense fallback={<TrendingCollectionSkeleton />}>
          <TrendingCollection />
        </Suspense>
        <Suspense fallback={<GridArtistCardSkeleton />}>
          <GridArtistCard />
        </Suspense>

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
