import { AnchorProps } from "antd/lib/anchor";
export enum ChildType {
  carousel = "CAROUSEL",
  contcat = "CONTCAT",
}
export enum ProductType {
  flex = "FLEX",
  tea = "TEA",
}
export interface ConfigProps extends AnchorProps {
  type: ProductType;
}
export interface Introduce {
  title: string;
  description?: string;
  list?: string[];
  funcList?: {
    title: string;
    description: string;
  }[];
  imageUrl?: string;
  imageUrlInLeft?: string;
  child?: ChildType | undefined;
}
