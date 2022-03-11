import Layout from "components/Layout";
import { ProductType } from "constant/formConfig";
import Head from "next/head";
import SectionLayout from "components/CustomLayout";
import CustomAnchor from "components/CustomAnchor";
import LocalJson from "components/CustomAnchor/Custom";
import Card from "components/Card";
import styles from "./../flex/index.module.css";

export default function EmployeeEngage() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>
          BOSS Employee Engage – Empowering your hybrid workplace needs
        </title>
        <meta
          name="description"
          content="BOSS Employee Engage helps to inspire motivation and productivity in your hybrid workplace environment. Book your demo today."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <main className={`max-w-full`}>
        <div
          className={`bg-center bg-cover bg-no-repeat lg:bg-employee-engage-pc maxlg:bg-employee-engage-mobile`}
        >
          <div
            id="banner"
            className={`${styles.banner} max-w-1440 relative lg:pt-25 lg:h-300 lg:pl-89  maxlg:pt-18 maxlg:h-336 maxlg:pl-4 maxlg:pr-10`}
          >
            <h3 className={`lg:pb-4 maxlg:pb-3`}>
              For enterprises & organizations
            </h3>
            <h1 className={`lg:pb-2 lg:text-5xxl maxlg:pb-6 maxlg:text-3xxl`}>
              BOSS Employee Engage
            </h1>
            <h4 className={`lg:f-text-sml maxlg:tex-sm`}>
              Boss Employee Engage is a smart workplace solution empowering your
              teams for all your organization&apos;s needs.
            </h4>
          </div>
        </div>
        <div className={`${styles.marginAuto} overflow-x-hidden max-w-1440`}>
          <div className={`lg:hidden`}>
            <CustomAnchor type={ProductType.BOSSEmployeeEngage} />
          </div>
          <SectionLayout type={ProductType.BOSSEmployeeEngage}>
            {LocalJson &&
              LocalJson[ProductType.BOSSEmployeeEngage] &&
              LocalJson[ProductType.BOSSEmployeeEngage].map((child, ind) => {
                return child.content.map((item, index) => {
                  return (
                    <Card
                      key={`${ProductType.BOSSEmployeeEngage}-${ind}-${index}`}
                      id={`${ProductType.BOSSEmployeeEngage}-${ind}-${index}`}
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

EmployeeEngage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout product={[ProductType.BOSSEmployeeEngage]}>{page}</Layout>;
};
