import { Anchor, Affix } from "antd";
import React, { useCallback, useEffect, useState, useRef } from "react";

import LocalJson from "components/CustomAnchor/Custom";
import { ConfigProps, ProductType } from "components/CustomAnchor/index.d";
import styles from "./index.module.css";
import BookFreeDemoButton from "../BookFreeDemoButton";

function CustomAnchor(props: ConfigProps) {
  const sections = LocalJson[props.type];
  const [activeItem, setActiveItem] = useState("");
  const [dropFlag, setDropFlag] = useState(false);
  const [fixedAside, setFixedAside] = useState(true);
  const asideHeight = useRef<HTMLDivElement>(null);
  const handleAnchor = () => {
    const anchorAsideHeight = asideHeight.current?.clientHeight ?? 0;
    const bannerHeight = document.getElementById("banner")?.clientHeight ?? 0;
    const anchorListHeight =
      document.getElementById("anchorList")?.clientHeight ?? 0;
    const scrollBottom =
      anchorListHeight +
      bannerHeight -
      document.documentElement.scrollTop -
      anchorAsideHeight -
      53;
    if (scrollBottom > 0) {
      return setFixedAside(true);
    }
    return setFixedAside(false);
  };
  const hanleClick = useCallback(() => {
    const mask = document.getElementById("detail_mask");
    setDropFlag(!dropFlag);
    mask && mask.remove();
  }, [dropFlag, setDropFlag]);
  useEffect(() => {
    const mask = document.getElementById("detail_mask");
    window.addEventListener("scroll", handleAnchor);
    mask && mask.addEventListener("click", hanleClick);
    return () => {
      window.removeEventListener("scroll", handleAnchor);
      mask && mask.removeEventListener("click", hanleClick);
    };
  }, [hanleClick]);

  const onChange = (link: string) => {
    setActiveItem(link);
  };
  const handleMask = useCallback((closeMask: boolean) => {
    const mask = document.getElementById("detail_mask");
    if (closeMask) {
      mask && mask.removeEventListener("click", handleAnchor);
      mask && mask.remove();
    } else {
      if (mask) return;
      let mask_dom = document.createElement("div");
      mask_dom.id = "detail_mask";
      mask_dom.style.position = "fixed";
      mask_dom.style.top = "53px";
      mask_dom.style.left = "0px";
      mask_dom.style.width = "100%";
      mask_dom.style.height = "100%";
      mask_dom.style.backgroundColor = "#777";
      mask_dom.style.opacity = "0.8";
      document.body.appendChild(mask_dom);
    }
  }, []);
  const changeDropFlag = useCallback(() => {
    handleMask(dropFlag);
    setDropFlag(!dropFlag);
  }, [dropFlag, handleMask]);

  const scrollTo = useCallback(
    (anchorName: string, closeMask = false, isMobile = true) => {
      isMobile && changeDropFlag();
      if (anchorName) {
        if (activeItem && closeMask === false) {
        } else {
          const anchorElementHeight =
            document.getElementById(anchorName)?.offsetTop ?? 0;
          const featureListHeight =
            document.getElementById("featureList")?.clientHeight ?? 0;
          if (anchorElementHeight) {
            if (anchorName === "featureList") {
              window.scrollTo({
                top: anchorElementHeight,
                behavior: "smooth",
              });
            } else {
              window.scrollTo({
                top: anchorElementHeight - featureListHeight - 53,
                behavior: "smooth",
              });
            }
          }
        }
      }
    },
    [changeDropFlag, activeItem]
  );
  const handleLink = useCallback(
    (link: string, isMobile = true) => {
      setActiveItem(link);
      scrollTo(link.replace("#", ""), true, isMobile);
    },
    [scrollTo]
  );

  if (sections.length === 0) {
    return null;
  }
  return (
    <>
      <Anchor
        style={{ display: "none" }}
        showInkInFixed
        affix={true}
        {...props}
        getCurrentAnchor={() => activeItem}
        onChange={onChange}
      >
        {sections.map(({ content }, ind) =>
          content.map(({ title }, index) => (
            <Anchor.Link
              title={title}
              href={`#${props.type}-${ind}-${index}`}
              key={`#${props.type}-${ind}-${index}`}
            />
          ))
        )}
      </Anchor>
      {fixedAside ? (
        <Affix offsetTop={57} className={`maxlg:hidden`}>
          <div className={styles.affixContainer} ref={asideHeight}>
            <ul className={styles.pcMode}>
              {sections.map(({ content, title: headTitle }, ind) => {
                const headIteam = (
                  <li className={styles.headTitle} key={headTitle}>
                    {headTitle}
                  </li>
                );
                const contentArray = content.map(({ title }, index) => (
                  <li key={`#${props.type}-${ind}-${index}`}>
                    <span
                      //href={`#${props.type}-${ind}-${index}`}
                      onClick={() =>
                        handleLink(`#${props.type}-${ind}-${index}`, false)
                      }
                      className={`${styles.baseSection} ${
                        activeItem === `#${props.type}-${ind}-${index}`
                          ? styles.activeSection
                          : styles.normolSection
                      }`}
                    >
                      {title}
                    </span>
                  </li>
                ));
                headTitle && contentArray.unshift(headIteam);
                return contentArray;
              })}
            </ul>
            <div className="mt-8 mb-8 ml-14">
              <BookFreeDemoButton
                textColor={"primary"}
                bgColor={"white"}
                borderColor={"primary"}
              />
            </div>
          </div>
        </Affix>
      ) : (
        <div
          className={`${styles.affixContainer} ${styles.asideAbsolute}`}
          ref={asideHeight}
        >
          <ul className={styles.pcMode}>
            {sections.map(({ content, title: headTitle }, ind) => {
              const headIteam = (
                <li className={styles.headTitle} key={headTitle}>
                  {headTitle}
                </li>
              );
              const contentArray = content.map(({ title }, index) => (
                <li key={`#${props.type}-${ind}-${index}`}>
                  <span
                    //href={`#${props.type}-${ind}-${index}`}
                    onClick={() =>
                      handleLink(`#${props.type}-${ind}-${index}`, false)
                    }
                    className={`${styles.baseSection} ${
                      activeItem === `#${props.type}-${ind}-${index}`
                        ? styles.activeSection
                        : styles.normolSection
                    }`}
                  >
                    {title}
                  </span>
                </li>
              ));
              headTitle && contentArray.unshift(headIteam);
              return contentArray;
            })}
          </ul>
          <div className="mt-8 mb-8 ml-14">
            <BookFreeDemoButton
              textColor={"primary"}
              bgColor={"white"}
              borderColor={"primary"}
            />
          </div>
        </div>
      )}

      <Affix offsetTop={53}>
        <div
          id="featureList"
          className={`${styles.mobileMode} flex justify-between lg:hidden z-10`}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <span onClick={() => scrollTo("featureList")}>Feature List</span>
          {dropFlag ? (
            <svg
              width="14"
              height="8"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.32878 12L11 2.58666L20.6712 12L22 10.7066L11 0L0 10.7067L1.32878 12Z"
                fill="#0D0D0D"
              />
            </svg>
          ) : (
            <svg
              width="14"
              height="8"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.32878 0L11 9.41334L20.6712 2.91632e-05L22 1.29338L11 12L0 1.29335L1.32878 0Z"
                fill="#0D0D0D"
              />
            </svg>
          )}

          <div className={`${styles.sectionList} ${dropFlag ? "" : "hidden"}`}>
            <ul>
              {sections.map(({ content, title: headTitle }, ind) => {
                const headIteam = (
                  <li className={styles.headTitle} key={headTitle}>
                    {headTitle}
                  </li>
                );
                const contentArray = content.map(({ title }, index) => (
                  <li key={`#${props.type}-${ind}-${index}`}>
                    <span
                      onClick={() =>
                        handleLink(`#${props.type}-${ind}-${index}`)
                      }
                      //href={`#${props.type}-${ind}-${index}`}
                      className={`${styles.mobileBaseSection}
                      ${
                        props.type === ProductType.flex
                          ? styles.underLineCss
                          : ""
                      }
                       ${
                         activeItem === `#${props.type}-${ind}-${index}`
                           ? styles.mobileActiveSection
                           : styles.mobileNormolSection
                       }`}
                    >
                      {title}
                    </span>
                  </li>
                ));
                headTitle && contentArray.unshift(headIteam);
                return contentArray;
              })}
            </ul>
          </div>
          {/* <div className={`${dropFlag?styles.mask:""} z-1`}></div> */}
        </div>
      </Affix>
    </>
  );
}

export default CustomAnchor;
