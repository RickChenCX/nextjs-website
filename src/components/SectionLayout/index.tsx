import { Anchor } from "antd";
import { AnchorProps } from "antd/lib/anchor";
import React, { ReactElement, ReactNode } from "react";
import { ProductType } from "components/SectionAnchor/index.d";
import SectionAnchor from "components/SectionAnchor";
import styles from './index.module.css';

interface SectionLayoutProps {
  type: ProductType;
  mode: String;
  children: ReactNode;
}
function SectionLayout({
  children,
  mode,
  type,
}: SectionLayoutProps): ReactElement {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.layoutSideSection}>
        <SectionAnchor type={type} />
      </div>
      <div className={styles.layoutContent}>{children}</div>
    </div>
  );
}

export default SectionLayout;
