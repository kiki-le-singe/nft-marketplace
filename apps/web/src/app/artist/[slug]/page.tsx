import { fetchCategoriesData, fetchExploreData } from "lib";
import {
  GridCategoryCard,
  GridNFTCard,
  HowItWorks,
  NFTHighlight,
  SectionsContainer,
} from "ui";

export async function generateMetadata({ params }) {
  const { slug } = params;

  return {
    title: `Artist ${slug}`,
  };
}

export default async function Page({
  params: { slug },
}: {
  params: { slug: number };
}) {
  const categoriesData = await fetchCategoriesData();
  const creationsExploreData = await fetchExploreData();

  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <SectionsContainer>
        <GridCategoryCard data={categoriesData} />
        <GridNFTCard data={creationsExploreData} />
      </SectionsContainer>

      <NFTHighlight />

      <SectionsContainer>
        <HowItWorks />
      </SectionsContainer>
    </div>
  );
}
