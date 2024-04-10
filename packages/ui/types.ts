export enum ButtonTheme {
  PURPLE = "purple",
  WHITE = "white",
  TRANSPARENT = "transparent",
}
export interface CreatorData {
  avatar: string;
  name: string;
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

type CreationSubset = Pick<CreationData, "id" | "title" | "image">;

export interface TrendingCollectionData {
  id: number;
  title: string;
  creations: CreationSubset[];
}
