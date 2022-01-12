import Head from "next/head";
import styles from "../styles/Home.module.css";
import type { ReactElement } from "react";
import Layout from "components/Layout";
import Image from "next/image";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import Union from "./../svgs/Union.svg";
import pic from "./../images/breakImage.png";

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SectionTwoBossFlexData = [
  "Streamlined customer management from leads to move-in",
  "Scalable deal types & automated processes throughout the contract lifecycle",
  "Flexible product package set up with configurable rules",
  "Interactive floor plans with real-time occupancy info",
  "Automated billing & invoicing with flexible payment options",
  "Customizable dashboard to maximize business results",
];

const SectionTwoBossTenantEngage = [
  "White-label tenant app to connect with tenants as a brand",
  "Real-time room & desk booking across buildings",
  "Public availability to expand revenue source",
  "Centralized view of account-based tenants",
  "Full-spectrum content management system to enrich tenant engagement",
  "Various add-on service options with flexible payment options",
];
export default function Page() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>Homepage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="w-full h-full">
        <section
          className={`w-full h-600 ${styles.banner} bg-home-banner bg-center bg-cover bg-no-repeat relative`}
        >
          <div
            className={`${styles.bannerContainer} absolute top-119 sm:left-1/10`}
          >
            <h2
              className={`text-white font-roboto font-thin sm:text-7xxl max-w-5xl mb-0`}
            >
              Powering Flex & Hybrid Workspaces
            </h2>
            <h3 className="text-sm text-white font-roboto my-6 leading-snug font-light">
              BOSS - Business Operating System for Space - helps you to automate
              workspace processes, manage tenant lifecycles and streamline flex
              & hybrid workspace operations. With BOSS, you can strengthen a
              gratifying customer experience and boost retention.
              <p className="text-sm text-white font-roboto mt-1">
                In turn, maximize your business revenue while ensuring accuracy
                and efficiency.
              </p>
            </h3>
            <div>
              <button
                className={`border border-solid border-primary w-155 h-10 mr-4 text-white bg-primary sm:text-sm xs:text-base `}
              >
                What is BOSS
                <PlayCircleOutlined className={styles.playIcon} />
              </button>
              <button className="border border-solid border-white w-152 h-10 text-white sm:text-sm xs:text-base  maxmd:hidden">
                Book Free Demo
              </button>
            </div>
          </div>
        </section>
        {/* ********************************** */}
        <section
          className={`w-full flex justify-center md:bg-home-bg md:h-1035 ${styles.sectionTwo}`}
        >
          <div className={`mt-14 md:w-1122 ${styles.sectionTwoContent}`}>
            <div className={`bg-primary1 py-8`}>
              <h4 className={`text-white font-roboto text-base text-center`}>
                Products
              </h4>
              <h3
                className={`text-white font-roboto md:text-4xxl text-2xl text-center md:max-w-882 font-normal maxmd:font-light ${styles.sectionTwoTitle}`}
              >
                The leading software for flex & hybrid workspace management and
                tenant engagement
              </h3>
            </div>
            <div className="md:bg-white bg-bgOne grid grid-cols-1 md:grid-cols-2 maxmd:p-4">
              <div
                className={`bg-white box-border border border-solid border-default py-8 maxmd:mb-4`}
              >
                <div className={`px-12 maxmd:px-6`}>
                  <h3
                    className={`text-center text-primary text-3xxl maxmd:text-2xl pb-2`}
                  >
                    BOSS Flex
                  </h3>
                  <p
                    className={`text-center font-roboto text-base text-neutral7 md:w-max-434`}
                  >
                    A property management and tenant engagement platform for
                    flex & hybrid coworking spaces.
                  </p>
                </div>
                <Image
                  src="/images/home-section2-1.png"
                  alt="BOSS Flex"
                  width={560}
                  height={320}
                />
                <div className={`md:pl-12 maxmd:p-4 maxmd:mb-8 mb-14`}>
                  {SectionTwoBossFlexData.map((item, index) => (
                    <p key={index} className={`mb-0`}>
                      <Image
                        src="/images/vector.png"
                        alt="BOSS Flex"
                        width={16}
                        height={13}
                      />
                      <span className={`text-base text-neutral12 pb-2 pl-2.5`}>
                        {item}
                      </span>
                    </p>
                  ))}
                </div>
                <div className="flex align-center justify-center maxmd:hidden">
                  <button
                    className={`border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base mb-6`}
                  >
                    Book Free Demo
                  </button>
                </div>
                <div className="flex align-center justify-center ">
                  <span className={`text-primary text-sm text-center`}>
                    Learn more
                  </span>
                  <Union />
                </div>
              </div>
              <div
                className={`bg-white box-border border md:border-l-0 border-solid border-default py-8`}
              >
                <div className={`px-12 maxmd:px-6`}>
                  <h3
                    className={`text-center text-primary text-3xxl maxmd:text-2xl pb-2`}
                  >
                    BOSS Tenant Engage
                  </h3>
                  <p
                    className={`text-center font-roboto text-base text-neutral7 md:w-max-434`}
                  >
                    A tenant engagement platform to delight tenants and boost
                    customer satisfaction.
                  </p>
                </div>
                <Image
                  src="/images/home-section2-2.png"
                  alt="BOSS Flex"
                  width={560}
                  height={320}
                />
                <div className={`md:pl-12 maxmd:p-4 maxmd:mb-8 mb-14`}>
                  {SectionTwoBossTenantEngage.map((item, index) => (
                    <p key={index} className={`mb-0`}>
                      <Image
                        src="/images/vector.png"
                        alt="BOSS Flex"
                        width={16}
                        height={13}
                      />
                      <span className={`text-base text-neutral12 pb-2 pl-2.5`}>
                        {item}
                      </span>
                    </p>
                  ))}
                </div>
                <div className="flex align-center justify-center maxmd:hidden">
                  <button
                    className={`border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base mb-6`}
                  >
                    Book Free Demo
                  </button>
                </div>
                <div className="flex align-center justify-center ">
                  <span className={`text-primary text-sm text-center`}>
                    Learn more
                  </span>
                  <Union />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ********************************** */}
        {/* ===== section3 ======= */}
        <section className={`bg-white md:mt-16 md:py-10 md:px-40 py-10 px-4`}>
          <div className={`${styles.sectionThreeContent}`}>
            <p className={`text-xl font-normal mb-4 text-neutral9`}>
              Solutions for you
            </p>
            <div
              className={`md:grid md:grid-cols-2 border-b border-solid pb-6 border-borderColor`}
            >
              <div
                className={`md:text-5xxl text-xl font-roboto font-light md:max-w-642 max-w-172 italic`}
              >
                Revolutionizing Flex & Hybrid Workspace Management & Business
              </div>
              <div className={`md:pt-16 md:pl-12 pt-6 text-base max-w-464`}>
                <p className="font-light">
                  Revolutionize your end-to-end customer journey management —
                  starting all the way from leads acquisition, contract approval
                  workflow to tenant engagement.
                </p>
                <p className={`font-light mb-0`}>
                  Create fulfilling experiences to increase customer retention
                  and revenue.
                </p>
              </div>
            </div>
          </div>
          <Image
            src="/images/home-section3.png"
            alt="BOSS Flex"
            width={1140}
            height={675}
          />
        </section>
        {/* ==== section 4 ===== */}
        <section className={`w-full bg-home-section4-bg ${styles.sectionFour}`}>
          <div className={`bg-primary1 py-8 maxmd:px-4`}>
            <h4 className={`text-white font-roboto text-base md:text-center`}>
              Highlights
            </h4>
            <h3
              className={`text-white font-roboto md:text-4xxl text-2xl md:text-center md:max-w-882 font-normal maxmd:font-light ${styles.sectionTwoTitle}`}
            >
              Flexibility, scalability and user experience to empower business
              growth
            </h3>
          </div>
          <div>
            <Carousel>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
            </Carousel>
          </div>
        </section>
        {/* ======= section 5======= */}
        <section
          className={`w-full md:py-10 md:px-40 py-10 px-4 ${styles.sectionFive}`}
        >
          <div className={`${styles.sectionThreeContent}`}>
            <p className={`text-xl font-normal mb-4 text-neutral9`}>
              Technology
            </p>
            <div className={`md:grid md:grid-cols-2`}>
              <div>
                <div
                  className={`md:text-5xxl text-xl font-roboto font-light md:max-w-464 max-w-270 italic`}
                >
                  Competitive software powered by the modern engineering
                  infrastructure
                </div>
                <button
                  className={`md:mt-28 border border-solid border-primary w-155 h-10 text-white bg-primary sm:text-sm xs:text-base mb-6 maxmd:hidden`}
                >
                  Book Free Demo
                </button>
              </div>
              <div className={`text-base maxmd:pt-8 `}>
                <div className={`flex mb-6`}>
                  <div>
                    <Image
                      src="/images/home-section5-img1.png"
                      alt="BOSS Flex"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={`pb-6 ml-4 border-b border-solid md:w-464`}>
                    <h3
                      className={`md:text-3xxl text-xl font-normal text-neutral12`}
                    >
                      Microservices Architecture
                    </h3>
                    <p className={`text-neutral8 mb-0 text-base font-normal`}>
                      Customizable / Scalable / Resilient & Robust / Expedient
                    </p>
                  </div>
                </div>
                <div className={`flex mb-6`}>
                  <div>
                    <Image
                      src="/images/home-section5-img2.png"
                      alt="BOSS Flex"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={`pb-6 ml-4 border-b border-solid md:w-464`}>
                    <h3
                      className={`md:text-3xxl text-xl font-normal text-neutral12`}
                    >
                      Cloud Computing Technology
                    </h3>
                    <p className={`text-neutral8 mb-0 text-base font-normal`}>
                      Cost-effective / Secure / Flexible / Unlimited Storage
                    </p>
                  </div>
                </div>
                <div className={`flex mb-6`}>
                  <div>
                    <Image
                      src="/images/home-section5-img3.png"
                      alt="BOSS Flex"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={`pb-6 ml-4 border-b border-solid md:w-464`}>
                    <h3
                      className={`md:text-3xxl text-xl font-normal text-neutral12`}
                    >
                      API-Driven Development
                    </h3>
                    <p className={`text-neutral8 mb-0 text-base font-normal`}>
                      More Integrations / Higher Connectivity / Cost-saving /
                      Efficiency
                    </p>
                  </div>
                </div>
                <div className={`flex`}>
                  <div>
                    <Image
                      src="/images/home-section5-img4.png"
                      alt="BOSS Flex"
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className={`pb-6 ml-4 border-b border-solid md:w-464`}>
                    <h3
                      className={`md:text-3xxl text-xl font-normal text-neutral12`}
                    >
                      Super-App Framework
                    </h3>
                    <p className={`text-neutral8 mb-0 text-base font-normal`}>
                      More Revenue / More Features / More Usage / More Data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.homeSectionSix}`}>
          <Image
            src="/images/breakImage.png"
            alt="BOSS Flex"
            layout="intrinsic"
            width={1440}
            height={480}
            className="align-bottom"
          />
          {/* <img src="./../images/breakImage.png" alt="" /> */}
        </section>
      </main>
    </div>
  );
}
