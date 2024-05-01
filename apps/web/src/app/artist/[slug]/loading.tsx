import {
  GridCategoryCardSkeleton,
  GridNFTCardSkeleton,
  SectionsContainer,
} from "ui";

export default function Loading() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <SectionsContainer>
        <GridCategoryCardSkeleton />
        <GridNFTCardSkeleton />
      </SectionsContainer>
    </div>
  );
}
