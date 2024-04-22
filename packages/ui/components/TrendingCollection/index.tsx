import { TrendingCollectionData } from "../../types";
import { fetchTrendingData } from "../../../lib/data";
import { TextNormalSans } from "../TextNormalSans";
import { TextSemiBoldSans } from "../TextSemiBoldSans";
import { TrendingCollectionItem } from "./TrendingCollectionItem";

import "./styles.css";

export async function TrendingCollection() {
  const data = await fetchTrendingData();

  if (!data?.length) {
    return null;
  }

  return (
    <section className="w-full flex flex-col gap-y-6 md:gap-y-10">
      <div>
        <TextSemiBoldSans
          tag="h2"
          className="text-lg md:text-[38px] mb-0 md:mb-4 text-purple"
        >
          Trending Collection
        </TextSemiBoldSans>

        <TextNormalSans tag="p" className="md:text-[22px]">
          Checkout our weekly updated trending collection.
        </TextNormalSans>
      </div>

      <ul className="grid-trending-collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-30px gap-y-10">
        {data.map((trending: TrendingCollectionData, index: number) => (
          <li key={`TrendingCollection-${index}`}>
            <TrendingCollectionItem {...trending} />
          </li>
        ))}
      </ul>
    </section>
  );
}
