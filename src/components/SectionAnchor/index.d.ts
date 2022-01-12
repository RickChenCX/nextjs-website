import { AnchorProps } from "antd/lib/anchor";
export enum ProductType {
  flex = "FLEX",
  tea = "TEA",
}
export interface ConfigProps extends AnchorProps {
  type: ProductType;
}
