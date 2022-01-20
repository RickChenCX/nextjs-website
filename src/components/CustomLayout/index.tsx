import React, { ReactElement, ReactNode } from "react";
import { ProductType } from "components/CustomAnchor/index.d";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";

interface CustomLayoutProps {
  type: ProductType;
  children: ReactNode;
}
function CustomLayout({ children, type }: CustomLayoutProps): ReactElement {
  return (
    <div className={styles.layoutContainer}>
      <div className={`${styles.layoutSideSection} relative maxlg:hidden`}>
        <CustomAnchor type={type} />
      </div>
      <div
        id="anchorList"
        className={`${styles.layoutContent} lg:max-w-1095 maxlg:max-w-full`}
      >
        {children}
      </div>
    </div>
  );
}

export default CustomLayout;
