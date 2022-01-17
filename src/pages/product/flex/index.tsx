import type { ReactElement } from "react";
import Layout from "components/Layout";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "components/CustomAnchor/index.d";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";
import Card from "components/Card";
export default function Flex() {
  return (
    <main className={`max-w-full`}>
      <div
        className={`${styles.banner} bg-center bg-cover bg-no-repeat relative xl:bg-flex-pc xl:pt-25 xl:h-300 xl:pl-89 xs:bg-flex-mobile xs:pt-18 xs:h-336 xs:pl-4 xs:pr-10`}
      >
        <h3 className={`xl:pb-4 xs:pb-3`}>
          For flex & hybrid coworking space operators
        </h3>
        <h1 className={`xl:pb-2 xl:f-5xxl xs:pb-6 xs:3xxl`}>BOSS Flex</h1>
        <h4 className={`xl:f-text-sml xs:tex-sm`}>
          BOSS Flex is a leading management platform for flex & hybrid
          workspaces. It enables landlords or space operators to automate
          business processes, make data-driven decisions, and deliver an amazing
          tenant experience.
        </h4>
      </div>
      <div className={`xl:hidden`}>
        <CustomAnchor type={ProductType.flex} />
      </div>
      <SectionLayout mode="mobile" type={ProductType.flex}>
        {LocalJson &&
          LocalJson[ProductType.flex] &&
          LocalJson[ProductType.flex].map((child, ind) => {
            const title = child.title;
            return child.content.map((item, index) => {
              return (
                <Card
                  key={`${ProductType.flex}-${ind}-${index}`}
                  id={`${ProductType.flex}-${ind}-${index}`}
                  itemConfig={item}
                />
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
