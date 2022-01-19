import type { ReactElement } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "components/CustomAnchor/index.d";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";
import Card from "components/Card";
export default function Flex() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>
          BOSS Tenant Engagement App - Deliver Engaging Workplace Experience to
          Delight Your Tenants
        </title>
        <meta
          name="description"
          content="BOSS TEA delivers a transformative and digital experience for every tenant in your workplace. Book your demo today."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <main className={`max-w-full`}>
        <div
          className={`${styles.banner} bg-center bg-cover bg-no-repeat relative xl:bg-tea-pc xl:pt-25 xl:h-300 xl:pl-89 xs:bg-tea-mobile xs:pt-18 xs:h-336 xs:pl-4 xs:pr-10`}
        >
          <h3 className={`xl:pb-4 xs:pb-3`}>
            For landlords or space operators
          </h3>
          <h1 className={`xl:pb-2 xl:f-5xxl xs:pb-6 xs:3xxl`}>
            BOSS Tenant Engage
          </h1>
          <h4 className={`xl:f-text-sml xs:tex-sm`}>
            BOSS Tenant Engage is a comprehensive platform for landlords or
            space operators to connect better with tenants, strengthen
            satisfaction and conduct tenant management in an automated and
            efficient way.
          </h4>
        </div>
        <div className={`xl:hidden`}>
          <CustomAnchor type={ProductType.tea} />
        </div>
        <SectionLayout mode="mobile" type={ProductType.tea}>
          {LocalJson &&
            LocalJson[ProductType.tea] &&
            LocalJson[ProductType.tea].map((child, ind) => {
              const title = child.title;
              return child.content.map((item, index) => {
                return (
                  <Card
                    key={`${ProductType.tea}-${ind}-${index}`}
                    id={`${ProductType.tea}-${ind}-${index}`}
                    itemConfig={item}
                  />
                );
              });
            })}
        </SectionLayout>
      </main>
    </div>
  );
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <Layout>{Flex}</Layout>;
};
