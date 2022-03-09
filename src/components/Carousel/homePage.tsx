import React, { useState, useEffect } from "react";
import { productList } from "./homePageConst";
import Image from "next/image";
import LearnMoreButton from "components/LearnMoreButton";
import BookFreeDemoButton from "components/BookFreeDemoButton";

const HomePageCarousel = function () {
  const [slideIndex, setSlideIndex] = useState(1);
  const [transformNum, setTransformNum] = useState([-65, 390, 945]);
  const [focusStop, setFocusStop] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      let newIndex = slideIndex + 1;
      const slideTransformArr = transformNum;
      if (newIndex > 2) {
        newIndex = 0;
      }
      const lastItem = slideTransformArr.splice(2, 1);
      slideTransformArr.splice(0, 0, ...lastItem);
      setTransformNum(slideTransformArr);
      setSlideIndex(newIndex);
    }, 3000);
    if (focusStop) {
      clearInterval(timer);
    }
    return () => {
      // cleanup
      clearInterval(timer);
    };
  }, [slideIndex, focusStop, transformNum]);

  return (
    <div>
      <div
        className="carousel"
        onMouseOver={() => {
          setFocusStop(true);
        }}
        onMouseOut={() => {
          setFocusStop(false);
        }}
      >
        <button
          className="prev cursor-pointer"
          onClick={() => {
            let newIndex = slideIndex - 1;
            const slideTransformArr = transformNum;

            if (newIndex < 0) {
              newIndex = 2;
            }
            const firstItem = slideTransformArr.splice(0, 1);
            slideTransformArr.splice(2, 0, ...firstItem);

            setTransformNum(slideTransformArr);
            setSlideIndex(newIndex);
          }}
        />
        <button
          className="next cursor-pointer"
          onClick={() => {
            let newIndex = slideIndex + 1;
            const slideTransformArr = transformNum;

            if (newIndex > 2) {
              newIndex = 0;
            }
            const lastItem = slideTransformArr.splice(2, 1);
            slideTransformArr.splice(0, 0, ...lastItem);

            setTransformNum(slideTransformArr);
            setSlideIndex(newIndex);
          }}
        />
        <div className="absolute flex z-10 items-center bottom-12 w-full justify-center">
          {productList.map((item, i) => {
            return (
              <span
                key={i}
                className={`${
                  i === slideIndex ? "" : "bg-opacity-50"
                } w-2.5 h-2.5 bg-white mx-2.5 inline-block rounded-full`}
              ></span>
            );
          })}
        </div>
        <div className="slideContainer">
          {productList.map((item, i) => {
            return (
              <div
                className={`slide ${slideIndex === i ? "slideActive" : ""}`}
                key={i}
                style={{
                  transform: `translate3d(${transformNum[i]}px, 0,0)`,
                }}
              >
                <p className="text-primary text-3xxl tracking-small mb-2">
                  {item.productName}
                </p>
                <p
                  className={`text-base text-neutral7 tracking-smaller mx-auto my-0 ${
                    slideIndex === i ? "px-23" : "w-420"
                  }`}
                >
                  {item.productDescription}
                </p>
                <Image
                  src={item.productImage}
                  alt=""
                  width={560}
                  height={296}
                  quality={100}
                />
                <ul
                  className={`mt-4 mb-8 text-left  ${
                    slideIndex === i ? "animate-fullHeight" : "hidden"
                  }`}
                  style={{ animationDelay: `${500}ms` }}
                >
                  {item.list.map((lisItem, l) => {
                    return (
                      <li
                        className={`text-base mb-2  tracking-tracking-smaller list-outside flex items-start overflow-hidden  delay-${
                          l * 50 + 300
                        } ease-in-out`}
                        key={l}
                      >
                        <span className="productListFrontIcon block"></span>
                        {lisItem.title}
                      </li>
                    );
                  })}
                </ul>
                <div
                  className={`${
                    slideIndex === i ? "" : "hidden"
                  } flex items-center justify-center bottom-10 w-full left-0 absolute`}
                >
                  <div className="flex align-center justify-center mr-6 maxlg:hidden">
                    <BookFreeDemoButton
                      type="primary"
                      product={[item.product]}
                    />
                  </div>
                  <div className="lg:flex lg:align-center lg:justify-center maxlg:ml-9">
                    <LearnMoreButton linkUrl={item.path} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePageCarousel;
