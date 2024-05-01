type CreatorSubset = Pick<UsersData, "avatar" | "name">;
type CreationSubset = Pick<CreationData, "id" | "title" | "image">;

export enum ButtonTheme {
  PURPLE = "purple",
  WHITE = "white",
  TRANSPARENT = "transparent",
}

export interface CreationData {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  published: boolean;
  creatorId: number;
  image: string;
}

export interface TrendingCollectionData {
  id: number;
  title: string;
  creations: CreationSubset[];
}

export interface UsersData {
  id: number;
  email: string;
  name: string;
  avatar: string;
}

export interface CategoriesData {
  id: number;
  title: string;
  image: string;
}

export interface CreatorData extends CreatorSubset {}

export interface NFTCardData {
  id: number;
  creatorId: number;
  image: string;
  title: string;
  creator: CreatorData;
}
