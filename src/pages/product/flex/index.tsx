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
          BOSS Flex - Property & Tenant Management Platform for Flex and Hybrid
          Workspaces
        </title>
        <meta
          name="description"
          content="BOSS Flex helps you automate operational processes and deliver an engaging experience for your tenants. Book your demo today."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <main className={`max-w-full`}>
        <div
          id="banner"
          className={`${styles.banner} bg-center bg-cover bg-no-repeat relative lg:bg-flex-pc lg:pt-25 lg:h-300 lg:pl-89 maxlg:bg-flex-mobile maxlg:pt-18 maxlg:h-336 maxlg:pl-4 maxlg:pr-10`}
        >
          <h3 className={`lg:pb-4 maxlg:pb-3`}>
            For flex & hybrid coworking space operators
          </h3>
          <h1 className={`lg:pb-2 lg:f-5xxl maxlg:pb-6 maxlg:3xxl`}>
            BOSS Flex
          </h1>
          <h4 className={`lg:f-text-sml maxlg:tex-sm`}>
            BOSS Flex is a leading management platform for flex & hybrid
            workspaces. It enables landlords or space operators to automate
            business processes, make data-driven decisions, and deliver an
            amazing tenant experience.
          </h4>
        </div>
        <div className={`lg:hidden`}>
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
    </div>
  );
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <Layout>{Flex}</Layout>;
};
