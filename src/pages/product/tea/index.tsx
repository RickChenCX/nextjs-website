import type { ReactElement } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "components/CustomAnchor/index.d";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";
import Card from "components/Card";
export default function Tea() {
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
          id="banner"
          className={`${styles.banner} bg-center bg-cover bg-no-repeat relative lg:bg-tea-pc lg:pt-25 lg:h-300 lg:pl-89 maxlg:bg-tea-mobile maxlg:pt-18 maxlg:h-336 maxlg:pl-4 maxlg:pr-10`}
        >
          <h3 className={`lg:pb-4 maxlg:pb-3`}>
            For landlords or space operators
          </h3>
          <h1 className={`lg:pb-2 lg:f-5xxl maxlg:pb-6 maxlg:3xxl`}>
            BOSS Tenant Engage
          </h1>
          <h4 className={`lg:f-text-sml maxlg:tex-sm`}>
            BOSS Tenant Engage is a comprehensive platform for landlords or
            space operators to connect better with tenants, strengthen
            satisfaction and conduct tenant management in an automated and
            efficient way.
          </h4>
        </div>
        <div className={`lg:hidden`}>
          <CustomAnchor type={ProductType.tea} />
        </div>
        <SectionLayout type={ProductType.tea}>
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

Tea.getLayout = function getLayout(Tea: ReactElement) {
  return <Layout>{Tea}</Layout>;
};
