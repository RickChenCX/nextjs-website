import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image, { ImageProps } from "next/image";
import Logo from "images/logo.png";
import navConfig, { NavConfigItem } from "./nav.config";

export default function Navbar() {
  const [currentSubNav, setCurrentSubNav] = useState<string>();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const handleChangeSubNav = useCallback(
    (e) => {
      if (e.target.outerText === currentSubNav) {
        return setCurrentSubNav(undefined);
      }
      return setCurrentSubNav(e.target.outerText);
    },
    [currentSubNav]
  );
  const navItemRender = (item: NavConfigItem[]) => {
    return item.map((navItem, i) => {
      if (navItem.children && navItem.children.length > 0) {
        return (
          <li
            key={i}
            className="sm:px-6 sm:py-2 xs:mx-4 xs:py-6 xs:border-b xs:border-grayLine"
            onClick={handleChangeSubNav}
            
          >
            <div className="flex items-baseline xs:justify-between">
              <span>{navItem.name}</span>
              <span className="pl-2">
                {currentSubNav === navItem.name ? (
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
              </span>
            </div>

            <ul
              className={`sm:absolute sm:w-screen sm:mt-5 sm:left-0 bg-white  ${
                currentSubNav === navItem.name ? "" : "hidden"
              }`}
            >
              {navItemRender(navItem.children)}
            </ul>
          </li>
        );
      }
      return (
        <li
          key={i}
          className={`sm:px-6 sm:py-2 relative xs:py-6 xs:mx-4 xs:border-b xs:border-grayLine ${
            navItem.flag === "login" ? "sm:grow sm:text-right" : ""
          }`}
        >
          {navItem.path ? (
            <Link href={navItem?.path}>
              <a>{navItem.name}</a>
            </Link>
          ) : (
            <span className="cursor-pointer">{navItem.name}</span>
          )}
        </li>
      );
    });
  };
  const handleMobileNav = () => {
    setShowMobileNav(true);
  };
  const handleCloseMobileNav = () => {
    setShowMobileNav(false);
  };

  return (
    <nav
      className={`sm:py-2 sm:px-8 xs:py-2 xs:px-4 xs:justify-between w-full flex items-center`}
    >
      <div className="flex items-center">
        <span className="sm:hidden xs:mr-4" onClick={handleMobileNav}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M23 5H1V6.76H23V5Z" fill="#0D0D0D" />
            <path d="M23 11.76H1V13.52H23V11.76Z" fill="#0D0D0D" />
            <path d="M23 18.52H1V20.28H23V18.52Z" fill="#0D0D0D" />
          </svg>
        </span>
        <Image src={Logo} alt="logo" width={68} height={24} className="pr-6" />
      </div>

      <ul
        className={`sm:flex sm:items-center sm:grow font-medium ${
          showMobileNav
            ? "xs:absolute xs:z-10 xs:w-screen xs:h-screen xs:top-0 bg-white xs:right-0 xs:overflow-hidden"
            : "xs:hidden"
        } `}
      >
        <li className="sm:hidden xs:pb-8 xs:pt-4 xs:px-4  xs:flex xs:justify-end xs:items-center ">
          <svg
            width="14"
            height="14"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleCloseMobileNav}
          >
            <path
              d="M2.15534 0.288452L0.910828 1.53296L7.75562 8.37775L0.288574 15.8448L1.53308 17.0893L9.00013 9.62226L16.4672 17.0893L17.7117 15.8448L10.2446 8.37775L17.0894 1.53296L15.8449 0.288452L9.00013 7.13325L2.15534 0.288452Z"
              fill="#0D0D0D"
            />
          </svg>
        </li>
        {navItemRender(navConfig)}
      </ul>
      <button className="px-6 py-2 ml-4 max-h-10 text-white bg-primary ">
        book demo
      </button>
    </nav>
  );
}
