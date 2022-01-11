import { useState, useCallback } from "react";
import Link from "next/link";
import styles from "./index.module.css";
import Image, { ImageProps } from "next/image";
import Logo from "images/logo1.png";
import navConfig, { NavConfigItem } from "./nav.config";
import ProductNavItem from "./ProductNavItem";
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
            className="lg:px-6 lg:py-2 maxlg:mx-4 maxlg:py-6 maxlg:border-b maxlg:border-grayLine"
          >
            <div className="flex items-baseline maxlg:justify-between" onClick={handleChangeSubNav}>
              <span className={`${showMobileNav ?"text-black": "text-white"}cursor-pointer`}>{navItem.name}</span>
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
                      fill={showMobileNav ? "#0D0D0D" : "#ffffff"}
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
                      fill={showMobileNav ? "#0D0D0D" : "#ffffff"}
                    />
                  </svg>
                )}
              </span>
            </div>
            <div
              className={`lg:absolute lg:z-10 lg:bg-black lg:bg-opacity-40 lg:w-screen lg:h-54 lg:left-0 lg:mt-5 ${
                currentSubNav === navItem.name ? "" : "hidden"
              }`}
             
            >
                <ProductNavItem items={navItem.children} />
            </div>
          </li>
        );
      }
      return (
        <li
          key={i}
          className={`lg:px-6 lg:py-2 relative maxlg:py-6 maxlg:mx-4 maxlg:border-b maxlg:border-grayLine ${
            navItem.flag === "login" ? "lg:grow lg:text-right" : ""
          }`}
        >
          {navItem.path ? (
            <Link href={navItem?.path}>
              <a className={ showMobileNav ?"text-black": "text-white"}>{navItem.name}</a>
            </Link>
          ) : (
            <span className={`${showMobileNav ?"text-black": "text-white"}cursor-pointer`}>{navItem.name}</span>
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
      className={`lg:py-2 lg:px-8 maxlg:py-2 maxlg:px-4 maxlg:justify-between w-full flex items-center absolute z-10 top-0 bg-opacity-0`}
    >
      <div className="flex items-center">
        <span className="lg:hidden maxlg:mr-4" onClick={handleMobileNav}>
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
        <Image src={Logo} alt="logo" width={68} height={24} />
      </div>

      <ul
        className={`lg:flex lg:items-center lg:grow font-medium lg:text-sm maxlg:text-base maxlg:ml-6 mb-0   ${
          showMobileNav
            ? "maxlg:absolute maxlg:z-20  maxlg:top-0 maxlg:right-0 maxlg:overflow-hidden maxlg:w-full top-0 bg-white"
            : "maxlg:hidden"
        } `}
      >
        <li className="lg:hidden maxlg:pb-8 maxlg:pt-4 maxlg:px-4  maxlg:flex maxlg:justify-end maxlg:items-center  ">
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
      <button
        className={`px-6 py-2 ml-4 max-h-10 text-white  lg:text-sm maxlg:text-base border border-solid border-white maxlg:hidden`}
      >
        Contact Us
      </button>
      <button className="px-6 py-2 ml-4 max-h-10 text-white bg-primary lg:text-sm maxlg:text-base border border-solid border-primary">
        Book Free Demo
      </button>
    </nav>
  );
}
