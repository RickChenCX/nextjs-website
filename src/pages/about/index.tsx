import type { ReactElement } from "react";
import Layout from "components/Layout";
import Head from "next/head";
import styles from "./index.module.css";
import Image from "next/image";
import Navbar from "components/Navbar/index";
import Footer from "components/Footer";
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
    <div className="w-full h-full">
      <Head>
        <title>About BOSS - Proptech Software and Solution Provider</title>
        <meta
          name="description"
          content="We provide the most powerful software to help you manage your coworking, flex and hybrid workplaces around the world."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <div
        className={`${styles.banner} bg-center bg-cover bg-no-repeat relative lg:bg-about-banner-pc lg:pt-39 lg:h-300  maxlg:bg-about-banner-mobile maxlg:h-336 maxlg:pl-8 maxlg:pt-215`}
      >
        <h1
          className={`text-5xxl lg:pl-151 max-w-1440 block ${styles.marginAuto}`}
        >
          About Us
        </h1>
      </div>
      <main className={`w-full`}>
        <div
          className={`bg-bg1 bg-top bg-auto bg-no-repeat lg:bg-about-article-pc maxlg:bg-about-article-mobile`}
        >
          <div
            className={`${styles.article} ${styles.marginAuto} max-w-1440 relative flex flex-col justify-start  lg:pt-20 lg:h-1324 lg:px-151  maxlg:h-1152 maxlg:px-4 maxlg:pt-0`}
          >
            <div className={`lg:w-568`}>
              <h3 className={`text-neutral9 lg:text-xlx lg:pb-4 maxlg:pt-10`}>
                Who we are
              </h3>
              <h4
                className={`text-neutral2 lg:text-5xxl lg:pb-8 maxlg:text-3xxl maxlg:pb-4`}
              >
                We are a <span>SaaS provider</span> with deep roots in the
                <span> proptech</span> industry.
              </h4>
              <h5 className={`text-neutral12 text-base maxlg:pb-4`}>
                Connected business modules ensure your business efficiency and
                growth. We invest talent and resources into a repeatable process
                that outputs valuable companies.
              </h5>
            </div>
            <div className={`lg:w-568 lg:self-end`}>
              <h3 className={`text-neutral9 lg:text-xlx lg:pb-4 maxlg:pt-10`}>
                Our Vision
              </h3>
              <h4
                className={`text-neutral2 lg:text-5xxl lg:pb-8 maxlg:text-3xxl maxlg:pb-4`}
              >
                BOSS is the <span>solution.</span>
              </h4>
              <h5 className={`text-neutral12 text-2xl lg:pb-6 maxlg:pb-2`}>
                BOSS = Business Operating System for Space
              </h5>
              <h5 className={`text-neutral12 text-base maxlg:pb-4`}>
                BOSS helps you to automate workspace processes, manage tenant
                lifecycles and streamline flex & workspace operations. With
                BOSS, you can strengthen a gratifying customer experience and
                boost retention. In turn, maximize profitability while ensuring
                accuracy and efficiency.
              </h5>
            </div>
            <div className={`lg:w-568`}>
              <h3 className={`text-neutral9 lg:text-xlx lg:pb-4 maxlg:pt-10`}>
                Our Mission
              </h3>
              <h4
                className={`text-neutral2 lg:text-5xxl lg:pb-8 maxlg:text-3xxl maxlg:pb-8`}
              >
                Unified business modules ensure your business
                <span>efficiency</span> and <span>growth.</span>
              </h4>
              <h5 className={`text-neutral12 text-base maxlg:pb-4`}>
                BOSS’s mission is to improve the world by reinventing real
                estate and how people use it by using our strengths in
                technology innovation, venture building, and business model
                innovation.
              </h5>
            </div>
          </div>
        </div>

        <div
          className={`${styles.teamGroup} max-w-1440 ${styles.marginAuto} lg:px-151 lg:pt-16 lg:pb-14 maxlg:py-10 maxlg:px-4`}
        >
          <h2
            className={`${styles.marginAuto} text-neutral12 text-center lg:text-3xxl pb-8 lg:w-568 maxlg:text-2xl`}
          >
            Leadership team with vast real estate and tech expertise.
          </h2>
          <p className={`${styles.marginAuto} text-center text-base lg:w-568`}>
            BOSS’s management team has a proven track record in proptech in
            Asia, having served as the leadership team of some of the most
            technology-forward real estate brands in Asia.
          </p>
        </div>
        <div
          className={`${styles.brand} ${styles.marginAuto} max-w-1440 lg:grid lg:grid-cols-7 lg:h-50 lg:px-151 lg:pb-28 maxlg:flex maxlg:flex-wrap maxlg:justify-around maxlg:items-center maxlg:px-4 maxlg:pb-10 maxlg:h-306`}
        >
          {brandList.map((item) => {
            return (
              <a
                key={item.localUrl}
                className={`${styles.img} text-center lg:relative`}
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
    </div>
  );
}
About.getLayout = function getLayout(About: ReactElement) {
  return (
    <div className="w-full h-full">
      <main className={` min-h-screen min-w-320`}>
        <Navbar isBgTransparent={true} />
        <div className="flex justify-center h-full my-0 mx-auto  bg-white">
          {About}
        </div>
        <Footer from="aboutPage" />
      </main>
    </div>
  );
};
