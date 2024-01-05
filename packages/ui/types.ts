export enum ButtonTheme {
  PURPLE = "purple",
  WHITE = "white",
  TRANSPARENT = "transparent",
}
export interface CreatorData {
  avatar: string;
  name: string;
}
export interface TrendingCollectionData {
  image: string;
  images: Array<string>;
  title: string;
  creator: CreatorData;
}
