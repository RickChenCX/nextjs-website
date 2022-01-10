import { Anchor, Button, Affix } from "antd";
import { AnchorProps } from "antd/lib/anchor";
import { ReactElement, useState } from "react";

import LocalJson from "./SectionContainer";
import { ConfigProps } from "./index.d";
import styles from "./index.module.css";
function SectionAnchor(props: ConfigProps) {
  const sections = LocalJson[props.type];
  const [activeItem, setActiveItem] = useState("");

  const onChange = (link: string) => {
    console.log("Anchor:OnChange", link);
    setActiveItem(link);
  };
  const jumpTo = (link: string) => {
    console.log(link, "??!!");
    setActiveItem(link);
  };
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
        {sections.map(({ title }, index) => (
          <Anchor.Link
            title={title}
            href={`#${props.type}-${index}`}
            key={index}
          />
        ))}
      </Anchor>
      <Affix offsetTop={10}>
        <ul>
          {sections.map(({ title }, index) => (
            <li key={index}>
              <a
                href={`#${props.type}-${index}`}
                className={
                  activeItem === `#${props.type}-${index}`
                    ? styles.activeColor
                    : styles.normolColor
                }
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </Affix>
    </>
  );
}

export default SectionAnchor;
