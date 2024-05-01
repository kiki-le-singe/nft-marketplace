import { Suspense } from "react";
import {
  GridArtistCard,
  GridArtistCardSkeleton,
  NFTHighlight,
  SectionsContainer,
  TrendingCollection,
  TrendingCollectionSkeleton,
} from "ui";

export default function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <NFTHighlight />

      <SectionsContainer>
        <Suspense fallback={<TrendingCollectionSkeleton />}>
          <TrendingCollection />
        </Suspense>
        <Suspense fallback={<GridArtistCardSkeleton />}>
          <GridArtistCard />
        </Suspense>
      </SectionsContainer>
    </div>
  );
}
