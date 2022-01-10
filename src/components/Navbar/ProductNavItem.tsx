import React from "react";
import { NavConfigItem } from "./nav.config";
import Link from "next/link";

interface ProductNavItemProps {
  items: NavConfigItem[];
}
function ProductNavItem({ items }: ProductNavItemProps) {
  return (
    <ul
      className={`sm:absolute sm:z-20 bg-white  mx-8 sm:flex sm:w-1376 sm:self-center sm:justify-center xs:mt-8`}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {items.length > 0
        ? items.map((item, i) => {
            return (
              <li
                key={i}
                className="border-solid border-l border-neutral5 sm:pl-8 sm:ml-20 sm:my-10 pl-4 "
              >
                <div className="text-neutral12   font-normal mb-4 text-2xl sm:text-3xxl  xs:flex items-baseline">
                  {item.name}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="m-2 sm:hidden"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.94786 1H11L11 10.1109H10.1379L10.1379 2.44002L1.59342 11L1 10.3704L9.48729 1.86771L1.94786 1.86771V1Z"
                      fill="#5528FF"
                    />
                  </svg>
                </div>
                <p
                  className="text-neutral9 font-normal sm:text-base text-sm mb-8 "
                  style={{ maxWidth: "464px" }}
                >
                  {item.desc}
                </p>
                <ul className="mb-8 xs:hidden">
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
                  <Link href={item.extraPath}>
                    <a className="text-primary text-sm font-medium flex items-baseline xs:hidden">
                      See All Features
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="m-1"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.94786 1H11L11 10.1109H10.1379L10.1379 2.44002L1.59342 11L1 10.3704L9.48729 1.86771L1.94786 1.86771V1Z"
                          fill="#5528FF"
                        />
                      </svg>
                    </a>
                  </Link>
                ) : null}
              </li>
            );
          })
        : null}
    </ul>
  );
}

export default ProductNavItem;
