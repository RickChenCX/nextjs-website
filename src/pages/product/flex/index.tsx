import Head from "next/head";
import styles from "../styles/Home.module.css";
import type { ReactElement } from "react";
import Layout from "components/Layout";
import SectionAnchor from "components/SectionAnchor";
import LocalJson from "components/SectionAnchor/SectionContainer";
import { ProductType } from "components/SectionAnchor/index.d";
import SectionLayout from "components/SectionLayout";
export default function Flex() {
  console.log(LocalJson.FLEX);
  return (
    <div>
      <main>
        <SectionLayout mode="moblie" type={ProductType.flex}>
          {LocalJson &&
            LocalJson[ProductType.flex] &&
            LocalJson[ProductType.flex].map((item, index) => {
              return (
                <div
                  key={`${index}`}
                  id={`${ProductType.flex}-${index}`}
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
            })}
        </SectionLayout>
      </main>
    </div>
  );
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <Layout>{Flex}</Layout>;
};
