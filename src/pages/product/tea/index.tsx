import Head from "next/head";
import styles from "../styles/Home.module.css";
import type { ReactElement } from "react";
import Layout from "components/Layout";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "components/CustomAnchor/index.d";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
export default function Flex() {
  return (
    <main>
      <div style={{ height: "100px" }}></div>
      <div className={`sm:hidden`}>
        <CustomAnchor type={ProductType.tea} />
      </div>
      <SectionLayout mode="moblie" type={ProductType.tea}>
        {LocalJson &&
          LocalJson[ProductType.tea] &&
          LocalJson[ProductType.tea].map((child, ind) => {
            const title = child.title;
            return child.content.map((item, index) => {
              return (
                <div
                  key={`${ProductType.tea}-${ind}-${index}`}
                  id={`${ProductType.tea}-${ind}-${index}`}
                  style={{
                    height: "900px",
                    width: "100%",
                    background: "yellow",
                  }}
                >
                  {item.title}
                  {item.description}
                </div>
              );
            });
          })}
      </SectionLayout>
    </main>
  );
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <Layout>{Flex}</Layout>;
};
