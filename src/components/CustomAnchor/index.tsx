import { Anchor, Button, Affix } from "antd";
import { useCallback, useState } from "react";

import LocalJson from "components/CustomAnchor/Custom";
import { ConfigProps, ProductType } from "components/CustomAnchor/index.d";
import styles from "./index.module.css";
function CustomAnchor(props: ConfigProps) {
  const sections = LocalJson[props.type];
  const [activeItem, setActiveItem] = useState("");
  const [dropFlag, setDropFlag] = useState(false);
  const onChange = (link: string) => {
    setActiveItem(link);
  };
  const handleMask = useCallback(
    (closeMask: boolean) => {
      const mask = document.getElementById("detail_mask");
      if (closeMask) {
        mask && mask.remove();
      } else {
        if (mask) return;
        let mask_dom = document.createElement("div");
        mask_dom.id = "detail_mask";
        mask_dom.style.position = "fixed";
        mask_dom.style.top = "54px";
        mask_dom.style.left = "0px";
        mask_dom.style.width = "100%";
        mask_dom.style.height = "100%";
        mask_dom.style.backgroundColor = "#777";
        mask_dom.style.opacity = "0.8";
        document.body.appendChild(mask_dom);
        mask_dom.addEventListener(
          "click",
          () => {
            setDropFlag(!dropFlag);
            mask_dom.remove();
          },
          false
        );
      }
    },
    [dropFlag, setDropFlag]
  );
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
          let anchorElement = document.getElementById(anchorName);
          if (anchorElement) {
            anchorElement.scrollIntoView({
              behavior: "smooth",
              inline: "start",
            });
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
      <Affix offsetTop={54} className={`xs:hidden`}>
        <div className={styles.affixContainer}>
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
          <Button type="primary" ghost className={`${styles.bookButton}`}>
            Book Free Demo
          </Button>
        </div>
      </Affix>
      <Affix offsetTop={54}>
        <div
          id="featureList"
          className={`${styles.mobileMode} flex justify-between xl:hidden z-10`}
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
