import type { ReactElement } from "react";
import Layout from "components/Layout";
import styles from "./index.module.css";
import Image from "next/image";

export default function About() {
  const brandList = [
    {
      localUrl: "brand-0",
      ulr: "",
      alt: "wework",
    },
    {
      localUrl: "brand-1",
      ulr: "",
      alt: "google",
    },
    {
      localUrl: "brand-2",
      ulr: "",
      alt: "AUTODESK",
    },
    {
      localUrl: "brand-3",
      ulr: "",
      alt: "CISHMAN&WAKEFIELD",
    },
    {
      localUrl: "brand-4",
      ulr: "",
      alt: "Microsoft",
    },
    {
      localUrl: "brand-5",
      ulr: "",
      alt: "Capitaland",
    },
    {
      localUrl: "brand-6",
      ulr: "",
      alt: "airbnb",
    },
  ];
  return (
    <main className={`w-full`}>
      <div
        className={`${styles.banner} bg-center bg-cover bg-no-repeat relative xl:bg-about-banner-pc xl:pt-39 xl:h-300 xl:pl-151 xs:bg-about-banner-mobile xs:h-336 xs:pl-8 xs:pt-215`}
      >
        <h1 className={`text-5xxl`}>About Us</h1>
      </div>
      <div
        className={`${styles.article} bg-center bg-cover bg-no-repeat relative flex flex-col justify-start xl:bg-about-article-pc xl:pt-20 xl:h-1324 xl:px-151 xs:bg-about-article-mobile xs:h-1152 xs:px-4 xs:pt-0`}
      >
        <div className={`xl:w-592`}>
          <h3 className={`text-neutral9 xl:text-xlx xl:pb-4 xs:pt-10`}>
            Who we are
          </h3>
          <h4
            className={`text-neutral2 xl:text-5xxl xl:pb-8 xs:text-3xxl xs:pb-4`}
          >
            We are a <span>SaaS provider</span> with deep roots in the
            <span> prop-tech</span> industry.
          </h4>
          <h5 className={`text-neutral12 text-base xs:pb-4`}>
            Connected business modules ensure your business efficiency and
            growth. We invest talent and resources into a repeatable process
            that outputs valuable companies.
          </h5>
        </div>
        <div className={`xl:w-592 xl:self-end`}>
          <h3 className={`text-neutral9 xl:text-xlx xl:pb-4 xs:pt-10`}>
            Our Vision
          </h3>
          <h4
            className={`text-neutral2 xl:text-5xxl xl:pb-8 xs:text-3xxl xs:pb-4`}
          >
            BOSS is the <span>solution.</span>
          </h4>
          <h5 className={`text-neutral12 text-2xl xl:pb-6 xs:pb-2`}>
            BOSS = Business Operating System for Space
          </h5>
          <h5 className={`text-neutral12 text-base xs:pb-4`}>
            BOSS helps you to automate workspace processes, manage tenant
            lifecycles and streamline flex & workspace operations. With BOSS,
            you can strengthen a gratifying customer experience and boost
            retention. In turn, maximize profitability while ensuring accuracy
            and efficiency.
          </h5>
        </div>
        <div className={`xl:w-592`}>
          <h3 className={`text-neutral9 xl:text-xlx xl:pb-4 xs:pt-10`}>
            Our Mission
          </h3>
          <h4
            className={`text-neutral2 xl:text-5xxl xl:pb-8 xs:text-3xxl xs:pb-8`}
          >
            Unified business modules ensure your business
            <span>efficiency</span> and <span>growth.</span>
          </h4>
          <h5 className={`text-neutral12 text-base xs:pb-4`}>
            BOSS’s mission is to improve the world by reinventing real estate
            and how people use it by using our strengths in technology
            innovation, venture building, and business model innovation.
          </h5>
        </div>
      </div>
      <div
        className={`${styles.teamGroup} xl:px-151 xl:pt-16 xl:pb-14 xs:pt-10 xs:px-4`}
      >
        <h2 className={`xl:text-5xxl pb-8 xl:w-600 xs:text-3xxl`}>
          Leadership team with well-rounded expertises
        </h2>
        <p className={`text-base xl:w-600`}>
          BOSS’s management team has a proven track record in PropTech in Asia,
          having served as the leadership team of some of the most
          technology-forward real estate brands in Asia prior to starting BOSS.
        </p>
      </div>
      <div
        className={`${styles.brandTitle} text-2xl xl:pt-14 xl:pb-6 xs:px-4 xs:py-8`}
      >
        Leadership Team&apos;s Experiences
      </div>
      <div
        className={`${styles.brand} xl:grid xl:grid-cols-7 xl:h-50 xl:px-151 xl:pb-28 xs:flex xs:flex-wrap xs:justify-around xs:items-center xs:px-4 xs:pb-10 xs:h-306`}
      >
        {brandList.map((item) => {
          return (
            <a
              key={item.localUrl}
              className={`${styles.img} text-center xl:relative`}
            >
              <Image
                src={`/images/${item.localUrl}.jpg`}
                width={130}
                height={50}
                alt={item.alt}
              />
            </a>
          );
        })}
      </div>
    </main>
  );
}
About.getLayout = function getLayout(About: ReactElement) {
  return <Layout>{About}</Layout>;
};
