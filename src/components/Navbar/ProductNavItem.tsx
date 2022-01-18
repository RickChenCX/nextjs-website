import React from "react";
import { NavConfigItem } from "./nav.config";
import Link from "next/link";
import LinkArrow from "../../svgs/LinkArrow.svg";
interface ProductNavItemProps {
  items: NavConfigItem[];
  handleRoute: (path: string) => void;
}
function ProductNavItem({ items, handleRoute }: ProductNavItemProps) {
  return (
    <ul
      className={`lg:absolute lg:z-20 bg-white  mx-8 lg:flex lg:w-1376 lg:self-center lg:justify-center maxlg:mt-8`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {items.length > 0
        ? items.map((item, i) => {
            return (
              <li
                key={i}
                className="border-solid border-l border-neutral5 lg:pl-8 lg:ml-20 lg:my-10 pl-4 "
              >
                <div className="text-neutral12   font-normal mb-4 text-2xl lg:text-3xxl  maxlg:flex items-baseline">
                  {item.name}
                  <a
                    className="text-primary text-sm font-medium flex items-center lg:hidden"
                    onClick={() => handleRoute(String(item?.extraPath))}
                  >
                    <LinkArrow className="ml-2" />
                  </a>
                </div>
                <p
                  className="text-neutral9 font-normal lg:text-base text-sm mb-8 "
                  style={{ maxWidth: "464px" }}
                >
                  {item.desc}
                </p>
                <ul className="mb-8 maxlg:hidden">
                  {item.children?.map((subItem, s) => {
                    return (
                      <li
                        key={s}
                        className="mb-2 font-normal list-square list-inside "
                      >
                        {subItem.name}
                      </li>
                    );
                  })}
                </ul>
                {item.extraPath ? (
                  <a
                    className="text-primary text-sm font-medium flex items-center maxlg:hidden"
                    onClick={() => handleRoute(String(item?.extraPath))}
                  >
                    See All Features
                    <LinkArrow className="ml-1" />
                  </a>
                ) : null}
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default ProductNavItem;
