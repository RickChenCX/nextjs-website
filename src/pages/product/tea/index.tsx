import { ReactElement, useCallback, useState } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import LocalJson from "components/CustomAnchor/Custom";
import { ProductType } from "constant/formConfig";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
import styles from "./index.module.css";
import Card from "components/Card";
import { Affix } from "antd";
export default function Tea() {
  const [isFixed, setIsFixed] = useState(true);
  const handleFixTitle = useCallback((fixed: boolean) => {
    setIsFixed(fixed);
  }, []);
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
          className={`bg-center bg-cover bg-no-repeat  lg:bg-tea-pc maxlg:bg-tea-mobile`}
        >
          <div
            id="banner"
            className={`${styles.banner} max-w-1440 relative lg:pt-25 lg:h-300 lg:pl-89  maxlg:pt-18 maxlg:h-336 maxlg:pl-4 maxlg:pr-10`}
          >
            <h3 className={`lg:pb-4 maxlg:pb-3`}>
              For landlords or space operators
            </h3>
            <h1 className={`lg:pb-2 lg:text-5xxl maxlg:pb-6 maxlg:text-3xxl`}>
              BOSS Tenant Engage
            </h1>
            <h4 className={`lg:f-text-sml maxlg:tex-sm`}>
              BOSS Tenant Engage is a comprehensive platform for landlords or
              space operators to connect better with tenants, strengthen
              satisfaction and conduct tenant management in an automated and
              efficient way.
            </h4>
          </div>
        </div>

        <div className={`${styles.marginAuto} max-w-1440`}>
          <div className={`lg:hidden`}>
            <CustomAnchor
              type={ProductType.BossTenantEngage}
              handleFixTitle={handleFixTitle}
            />
          </div>
          <SectionLayout type={ProductType.BossTenantEngage}>
            {LocalJson &&
              LocalJson[ProductType.BossTenantEngage] &&
              LocalJson[ProductType.BossTenantEngage].map((child, ind) => {
                const title = child.title;
                const titleHeader =
                  title &&
                  (isFixed
                    ? [
                        <Affix
                          key={`affix-${ind}-maxlg`}
                          offsetTop={57}
                          className={`maxlg:hidden`}
                        >
                          <div
                            key={`affix-${ind}-maxlg`}
                            className={`h-14 max-w-1440 bg-bg2 text-base text-neutral8 lg:border-l border-b lg:pl-10 border-neutral5 flex items-center`}
                          >
                            {title}
                          </div>
                        </Affix>,
                        <div
                          key={`affix-${ind}-lg`}
                          className={`lg:hidden h-8 bg-bg2 text-sm text-neutral8 flex items-center justify-center`}
                        >
                          {title}
                        </div>,
                      ]
                    : [
                        <div
                          key={`${ind}-maxlg`}
                          className={`maxlg:hidden h-14 max-w-1440 bg-bg2 text-base text-neutral8 lg:border-l border-b lg:pl-10 border-neutral5 flex items-center`}
                        >
                          {title}
                        </div>,
                        <div
                          key={`${ind}-lg`}
                          className={`lg:hidden h-8 bg-bg2 text-sm text-neutral8 flex items-center justify-center`}
                        >
                          {title}
                        </div>,
                      ]);
                const CardList = child.content.map((item, index) => {
                  return (
                    <Card
                      key={`${ProductType.BossTenantEngage}-${ind}-${index}`}
                      id={`${ProductType.BossTenantEngage}-${ind}-${index}`}
                      itemConfig={item}
                    />
                  );
                });
                return titleHeader ? [...titleHeader, ...CardList] : CardList;
              })}
          </SectionLayout>
        </div>
      </main>
    </div>
  );
}

Tea.getLayout = function getLayout(Tea: ReactElement) {
  return <Layout product={[ProductType.BossTenantEngage]}>{Tea}</Layout>;
};
