import { Suspense } from "react";
import {
  GridArtistCard,
  GridArtistCardSkeleton,
  GridCategoryCard,
  Modal,
  NFTHighlight,
} from "ui";

export default function ArtistModal({
  params: { slug },
}: {
  params: { slug: number };
}) {
  return (
    <Modal slug={slug}>
      <div className="flex flex-col gap-y-12">
        <NFTHighlight />

        <div className="flex flex-col w-full xxs:px-2 xs:px-2 sm:px-5 md:px-10 lg:px-[5vw] xl:px-[5vw] 2xl:px-[5vw] gap-y-12">
          <Suspense fallback={<GridArtistCardSkeleton />}>
            <GridArtistCard />
          </Suspense>

          <GridCategoryCard />
        </div>
      </div>
    </Modal>
  );
}
