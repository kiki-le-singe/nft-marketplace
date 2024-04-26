import { Suspense } from "react";
import {
  GridArtistCard,
  GridArtistCardSkeleton,
  GridCategoryCard,
  Modal,
  NFTHighlight,
  SectionsContainer,
} from "ui";

export default function ArtistModal({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <Modal slug={slug}>
      <SectionsContainer>
        <NFTHighlight />

        <Suspense fallback={<GridArtistCardSkeleton />}>
          <GridArtistCard />
        </Suspense>

        <GridCategoryCard />
      </SectionsContainer>
    </Modal>
  );
}
