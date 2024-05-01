import {
  CategoriesData,
  NFTCardData,
  TrendingCollectionData,
  UsersData,
} from "../ui/types";

async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const url = `${process.env.API_URL}${endpoint}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP status ${response.status}`);
    }

    return await response.json();
  } catch (error: unknown) {
    handleError(endpoint, error);
    return null;
  }
}

function handleError(endpoint: string, error: unknown): void {
  const messagePrefix = `Fetching data from ${endpoint} failed:`;
  console.error(
    `${messagePrefix} ${error instanceof Error ? error.message : "Non-standard error"}`
  );
}

export function fetchTrendingData(): Promise<TrendingCollectionData[] | null> {
  return fetchData<TrendingCollectionData[]>("/categories/trending");
}

export function fetchUsersData(): Promise<UsersData[] | null> {
  return fetchData<UsersData[]>("/users");
}

export function fetchCategoriesData(): Promise<CategoriesData[] | null> {
  return fetchData<CategoriesData[]>("/categories");
}

export function fetchExploreData(): Promise<NFTCardData[] | null> {
  return fetchData<NFTCardData[]>("/creations/explore");
}
