import type { ReactElement } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "constant/formConfig";
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
          className={`bg-center bg-cover bg-no-repeat lg:bg-flex-pc maxlg:bg-flex-mobile`}
        >
          <div
            id="banner"
            className={`${styles.banner} max-w-1440 relative lg:pt-25 lg:h-300 lg:pl-89  maxlg:pt-18 maxlg:h-336 maxlg:pl-4 maxlg:pr-10`}
          >
            <h3 className={`lg:pb-4 maxlg:pb-3`}>
              For flex & hybrid coworking space operators
            </h3>
            <h1 className={`lg:pb-2 lg:text-5xxl maxlg:pb-6 maxlg:text-3xxl`}>
              BOSS Flex
            </h1>
            <h4 className={`lg:f-text-sml maxlg:tex-sm`}>
              BOSS Flex is a leading management platform for flex & hybrid
              workspaces. It enables landlords or space operators to automate
              business processes, make data-driven decisions, and deliver an
              amazing tenant experience.
            </h4>
          </div>
        </div>
        <div className={`${styles.marginAuto} overflow-x-hidden max-w-1440`}>
          <div className={`lg:hidden`}>
            <CustomAnchor type={ProductType.BossFlex} />
          </div>
          <SectionLayout type={ProductType.BossFlex}>
            {LocalJson &&
              LocalJson[ProductType.BossFlex] &&
              LocalJson[ProductType.BossFlex].map((child, ind) => {
                const title = child.title;
                return child.content.map((item, index) => {
                  return (
                    <Card
                      key={`${ProductType.BossFlex}-${ind}-${index}`}
                      id={`${ProductType.BossFlex}-${ind}-${index}`}
                      itemConfig={item}
                    />
                  );
                });
              })}
          </SectionLayout>
        </div>
      </main>
    </div>
  );
}

Flex.getLayout = function getLayout(Flex: ReactElement) {
  return <Layout product={[ProductType.BossFlex]}>{Flex}</Layout>;
};
