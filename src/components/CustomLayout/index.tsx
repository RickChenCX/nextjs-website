import React, { ReactElement, ReactNode } from "react";
import { ProductType } from "components/CustomAnchor/index.d";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";

interface CustomLayoutProps {
  type: ProductType;
  mode: String;
  children: ReactNode;
}
function CustomLayout({
  children,
  mode,
  type,
}: CustomLayoutProps): ReactElement {
  return (
    <div className={styles.layoutContainer}>
      <div className={`${styles.layoutSideSection} xs:hidden`}>
        <CustomAnchor type={type} />
      </div>
      <div className={`${styles.layoutContent} xl:max-w-1095 xs:max-w-full`}>
        {children}
      </div>
    </div>
  );
}

export default CustomLayout;