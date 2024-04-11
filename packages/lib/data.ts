import { TrendingCollectionData } from "../ui/types";

export async function fetchTrendingData(): Promise<TrendingCollectionData[]> {
  try {
    const res = await fetch(`${process.env.API_URL}/categories/trending`);

    if (!res.ok) {
      return [];
    }

    return await res.json();
  } catch (error) {
    console.error(`Fetching data failed: ${error.message}`);

    throw error;
  }
}
