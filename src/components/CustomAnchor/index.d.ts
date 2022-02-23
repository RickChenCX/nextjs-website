import { AnchorProps } from "antd/lib/anchor";
import { ProductType } from "constant/formConfig";
export enum ChildType {
  carousel = "CAROUSEL",
  contcat = "CONTCAT",
}
export interface ConfigProps extends AnchorProps {
  type: ProductType;
  handleFixTitle?: (fixed: boolean) => void;
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
  imageUrlMobile?: string;
  imageUrlInLeft?: string;
  imageUrlInLeftMobile?: string;
  child?: ChildType | undefined;
}
