import { Suspense } from "react";
import {
  GridArtistCard,
  GridArtistCardSkeleton,
  Modal,
  SectionsContainer,
  TrendingCollection,
  TrendingCollectionSkeleton,
} from "ui";

export default function ArtistModal({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <Modal>
      <SectionsContainer>
        <Suspense fallback={<TrendingCollectionSkeleton />}>
          <TrendingCollection />
        </Suspense>
        <Suspense fallback={<GridArtistCardSkeleton />}>
          <GridArtistCard />
        </Suspense>
      </SectionsContainer>
    </Modal>
  );
}
