import { useState, useCallback, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
// import { PlayCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import { Carousel as CarouselMobile } from "antd-mobile";
import ShowMoreIcon from "./../svgs/add-icon.svg";
import ArrowBackLeft from "./../svgs/ArrowBack-left.svg";
import ArrowBackLeftActive from "./../svgs/ArrowBack-left-active.svg";
import ArrowBackRight from "./../svgs/ArrowBack-right.svg";
import ArrowBackRightActive from "./../svgs/ArrowBack-right-active.svg";
import LearnMoreButton from "./../components/LearnMoreButton";
import BookFreeDemoButton from "./../components/BookFreeDemoButton";

import {
  HomePageSectionOneData,
  HomePageSectionTwoData,
  HomePageSectionFourData,
  HomePageSectionFiveData,
} from "./../constant";

export default function Page() {
  const [isShowMore, setIsShowMore] = useState<boolean>(false);
  const [isFirstBanner, setIsFirstBanner] = useState<boolean>(true);
  const carouselRef = useRef(null);
  const handleShowMore = useCallback(() => {
    setIsShowMore(true);
  }, []);

  const handlePrev = useCallback(() => {
    setIsFirstBanner(true);
    (carouselRef.current as any)?.prev();
  }, []);

  const handleNext = useCallback(() => {
    setIsFirstBanner(false);
    (carouselRef.current as any)?.next();
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <Head>
        <title>
          BOSS - The Ultimate Software for Coworking, Flex and Hybrid Workspaces
        </title>
        <meta
          name="description"
          content="BOSS provides a revolutionary solution for managing your coworking, flex, and hybrid workspaces."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=0"
        />
      </Head>
      <div>
        {/* ===== section1 ======= */}
        <section
          className={`w-full bg-home-banner maxlg:bg-home-banner-mobile bg-center bg-cover bg-no-repeat lg:flex lg:justify-center lg:py-32 maxlg:pt-32 maxlg:pb-10`}
        >
          <div className={`maxlg:px-4 lg:w-800 xl:w-1122`}>
            <h2
              className={`text-white font-roboto font-thin lg:text-7xxl text-5xxl lg:max-w-5xl max-w-343 mb-0`}
            >
              {HomePageSectionOneData.title}
            </h2>
            <div
              className={`maxlg:hidden text-sm text-white font-roboto my-6 leading-snug font-normal lg:max-w-1056`}
            >
              {HomePageSectionOneData.paragraph1}
              <p className="text-sm text-white font-roboto mt-1.5 mb-0">
                {HomePageSectionOneData.paragraph2}
              </p>
            </div>
            <div className="lg:hidden mt-6">
              <div className={`${isShowMore ? "hidden" : ""}`}>
                <div
                  className={`text-sm text-white font-roboto leading-snug font-normal mb-3 ${styles.textOverflow}`}
                >
                  {HomePageSectionOneData.paragraph1}
                </div>
              </div>
              <div
                className={`${
                  isShowMore ? "" : "hidden"
                } text-sm text-white font-roboto leading-snug font-normal mb-3`}
              >
                {HomePageSectionOneData.paragraph1}
                <p className="text-sm text-white font-roboto mt-1.5 mb-0">
                  {HomePageSectionOneData.paragraph2}
                </p>
              </div>
              <button
                className={`${isShowMore ? "hidden" : ""} text-white text-sm`}
                onClick={handleShowMore}
              >
                <span className="pr-1.5">Show More</span>
                <ShowMoreIcon className="inline-block" />
              </button>
            </div>
            <div>
              {/* 查看视频的按钮暂时隐藏，等下一sprint */}
              {/* <button
                className={`border border-solid border-primary w-155 h-10 mr-4 text-white bg-primary lg:text-sm xs:text-base maxlg:mt-32`}
              >
                What is BOSS
                <PlayCircleOutlined className={styles.playIcon} />
              </button> */}
              <div className="inline-block maxlg:hidden">
                <BookFreeDemoButton bgColor="primary" borderColor="primary" />
              </div>
            </div>
          </div>
        </section>
      </div>
      <main className={`max-w-1440 h-full bg-white ${styles.marginAuto}`}>
        {/* ===== section2 ======= */}
        <section
          className={`w-full flex justify-center lg:bg-home-bg lg:h-1104`}
        >
          <div className={`lg:mt-14 lg:w-1122`}>
            <div className={`bg-primary1 py-8 maxlg:px-4`}>
              <h4
                className={`text-white font-roboto text-base text-center pb-2`}
              >
                Products
              </h4>
              <h3
                className={`text-white font-roboto lg:text-4xxl text-2xl text-center lg:max-w-882 font-normal maxlg:font-light ${styles.marginAuto}`}
              >
                The leading software for flex & hybrid workspace management and
                tenant engagement
              </h3>
            </div>
            <div className="lg:bg-white bg-bgOne grid grid-cols-1 lg:grid-cols-2 maxlg:p-4">
              {HomePageSectionTwoData.map((item, index1) => (
                <div
                  key={index1}
                  className={`bg-white box-border border border-solid border-default py-8 ${
                    index1 === 0 ? "maxlg:mb-4" : "lg:border-l-0"
                  }`}
                >
                  <div className={`px-12 maxlg:px-4`}>
                    <h3
                      className={`text-center text-primary text-3xxl maxlg:text-2xl pb-2`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-center font-roboto text-base text-neutral7 lg:w-max-434`}
                    >
                      {item.content}
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <Image
                      src={item.url}
                      alt={item.title}
                      width={560}
                      height={320}
                    />
                  </div>
                  <div
                    className={`lg:px-11 maxlg:p-4 maxlg:pb-0 maxlg:mb-8 mb-14`}
                  >
                    {item.desc.map((item, index2) => (
                      <div key={index2} className={`mb-0 flex`}>
                        <div>
                          <Image
                            src="/images/vector.png"
                            alt="vector"
                            width={16}
                            height={13}
                          />
                        </div>
                        <div
                          className={`text-base text-neutral12 pb-2 pl-2.5 max-w-434 maxmd:max-w-290`}
                        >
                          {item}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex align-center justify-center mb-6 maxlg:hidden">
                    <BookFreeDemoButton
                      borderColor="primary"
                      bgColor="primary"
                    />
                  </div>
                  <div className="lg:flex lg:align-center lg:justify-center maxlg:ml-9">
                    <LearnMoreButton linkUrl={item.linkUrl} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ===== section3 ======= */}
        <section
          className={`bg-white lg:mt-20 lg:py-10 xl:px-40 lg:px-24 py-10 px-4`}
        >
          <div>
            <p className={`text-xl font-normal mb-4 text-neutral9`}>
              Solutions for you
            </p>
            <div
              className={`lg:grid lg:grid-cols-2 lg:gap-16 lg:relative border-b border-solid pb-6 border-borderColor`}
            >
              <div
                className={`lg:text-5xxl text-xl font-roboto font-light lg:max-w-642 max-w-172 italic`}
              >
                Revolutionizing Flex & Hybrid Workspace Management & Business
              </div>
              <div
                className={`lg:pt-16 pt-6 text-base max-w-464 lg:absolute bottom-6 right-0`}
              >
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
          <div className="maxmd:hidden">
            <Image
              src="/images/home-section3.png"
              alt="section3"
              width={1140}
              height={675}
            />
          </div>
          <div className="md:hidden">
            <Image
              src="/images/home-section3-mobile.png"
              alt="section3"
              width={344}
              height={400}
            />
          </div>
        </section>
        {/* ===== section4 ======= */}
        <section
          className={`w-full bg-home-section4-bg pt-12 maxlg:pt-10 pb-9 maxlg:pb-16`}
        >
          <div className={`bg-primary1 pb-8 lg:pb-16 maxlg:px-4`}>
            <h4
              className={`text-white font-roboto text-base lg:text-center pb-2`}
            >
              Highlights
            </h4>
            <h3
              className={`text-white font-roboto lg:text-4xxl text-2xl lg:text-center lg:max-w-882 font-normal maxlg:font-light ${styles.marginAuto}`}
            >
              Flexibility, scalability and user experience to empower business
              growth
            </h3>
          </div>
          <div className="maxlg:hidden">
            <Carousel dots={false} ref={carouselRef}>
              {HomePageSectionFourData.images.map((item, index1) => (
                <div key={index1}>
                  <div className="flex justify-center">
                    {item.urllList.map((temp, index2) => (
                      <div
                        key={index2}
                        className={`${index2 !== 0 ? "pl-10" : ""}`}
                      >
                        <Image
                          key={index2}
                          src={temp}
                          alt=""
                          width={322}
                          height={562}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
            <div className="flex justify-center pt-8">
              {isFirstBanner ? (
                <>
                  <ArrowBackLeft className="inline-block mr-6" />
                  <ArrowBackRightActive
                    className="inline-block cursor-pointer"
                    onClick={handleNext}
                  />
                </>
              ) : (
                <>
                  <ArrowBackLeftActive
                    className="inline-block cursor-pointer mr-6"
                    onClick={handlePrev}
                  />
                  <ArrowBackRight className="inline-block" />
                </>
              )}
            </div>
          </div>
          <div className="lg:hidden">
            <div>
              <CarouselMobile cellSpacing={10} slideWidth="270px">
                {HomePageSectionFourData.mobileImages.map((item, index) => (
                  <div
                    key={index}
                    className="relative"
                    style={{
                      width: "270px",
                      height: "456px",
                    }}
                  >
                    <Image alt="" src={item} layout="fill" objectFit="cover" />
                  </div>
                ))}
              </CarouselMobile>
            </div>
          </div>
        </section>
        {/* ===== section5 ======= */}
        <section className={`w-full lg:py-10 lg:px-40 py-10 px-4`}>
          <div>
            <p className={`text-xl font-normal mb-4 text-neutral9`}>
              Technology
            </p>
            <div className={`lg:grid lg:grid-cols-2 lg:gap-10 `}>
              <div>
                <div
                  className={`lg:text-5xxl text-xl font-roboto font-light lg:max-w-500 max-w-270 italic`}
                >
                  The most intelligent software powered by modern IT
                  Infrastructure
                </div>
                <div className="lg:mt-40 maxlg:hidden">
                  <BookFreeDemoButton borderColor="primary" bgColor="primary" />
                </div>
              </div>
              <div className={`text-base maxlg:pt-8 `}>
                {HomePageSectionFiveData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex  ${index < 3 ? "mb-6" : ""}`}
                  >
                    <div>
                      <Image src={item.url} alt="" width={80} height={80} />
                    </div>
                    <div className={`pb-6 ml-4 border-b border-solid lg:w-464`}>
                      <h3
                        className={`lg:text-3xxl text-xl font-normal text-neutral12`}
                      >
                        {item.title}
                      </h3>
                      <p className={`text-neutral8 mb-0 text-base font-normal`}>
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-center align-bottom">
          <div className="maxmd:hidden flex">
            <Image
              src="/images/breakImage.png"
              alt=""
              width={1440}
              height={480}
            />
          </div>
          <div
            className="md:hidden flex"
            style={{ position: "relative", width: "100%", height: "125px" }}
          >
            <Image
              alt=""
              src="/images/breakImage-mobile.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
