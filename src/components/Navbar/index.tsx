import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import navConfig, { NavConfigItem } from "./nav.config";
import ProductNavItem from "./ProductNavItem";
import MenuBlack from "../../svgs/Menu_black.svg";
import Menu from "../../svgs/Menu.svg";
import Close from "../../svgs/Close.svg";
import Logo from "../../svgs/logo.svg";
import LogoPrimary from "../../svgs/logo_primary.svg";

import ContactUsButton from "../ContactUsButton";
import BookFreeDemoButton from "../BookFreeDemoButton";
interface NavbarProps {
  isBgTransparent?: boolean;
}
export default function Navbar({ isBgTransparent = true }: NavbarProps) {
  const [currentSubNav, setCurrentSubNav] = useState<string>();
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const router = useRouter();

  const handleChangeSubNav = useCallback(
    (e) => {
      if (String(e.target.textContent) === currentSubNav) {
        return setCurrentSubNav(undefined);
      }
      return setCurrentSubNav(String(e.target.textContent));
    },
    [currentSubNav]
  );
  const handleRouter = useCallback(
    (path: string) => {
      router.push(path);
      setShowMobileNav(false);
      return setCurrentSubNav(undefined);
    },
    [router]
  );
  const navItemRender = (item: NavConfigItem[]) => {
    return item.map((navItem, i) => {
      if (navItem.children && navItem.children.length > 0) {
        return (
          <li
            key={i}
            className="lg:px-6 lg:py-2 maxlg:py-6 maxlg:border-b maxlg:border-grayLine relative"
          >
            <div
              className={`flex items-center maxlg:justify-between ${
                isBgTransparent
                  ? "lg:after:bg-arrow-white"
                  : "lg:after:bg-arrow"
              }
              ${
                !showMobileNav
                  ? "maxlg:after:bg-arrow-white"
                  : "maxlg:after:bg-arrow"
              } 
              after:block 
              after:w-3 after:h-3 lg:after:ml-2 
              ${
                currentSubNav === navItem.name
                  ? "after:animate-rotate180"
                  : "after:animate-rotate0"
              } `}
              onClick={handleChangeSubNav}
            >
              <span
                className={`${
                  showMobileNav || !isBgTransparent
                    ? "text-black"
                    : "text-white"
                } cursor-pointer hover:text-primary2`}
              >
                {navItem.name}
              </span>
            </div>
            <div
              className={`lg:absolute lg:z-10 lg:bg-black lg:bg-opacity-40 lg:w-screen lg:h-screen lg:left-0 lg:top-13 ${
                currentSubNav === navItem.name ? "" : "hidden"
              }`}
              onClick={handleChangeSubNav}
            >
              <ProductNavItem
                items={navItem.children}
                handleRoute={handleRouter}
              />
            </div>
          </li>
        );
      }
      return (
        <li
          key={i}
          className={`lg:px-6 lg:py-2 relative maxlg:py-6 maxlg:border-b maxlg:border-grayLine ${
            navItem.flag === "login" ? "lg:grow lg:text-right" : ""
          }
          ${navItem.isMobile ? "lg:hidden" : ""}
          `}
        >
          {navItem.path ? (
            <div
              className={`${
                navItem.flag === "login" ? "lg:inline-block" : "block"
              }`}
              onClick={() => {
                handleRouter(
                  (navItem.flag === "login" && showMobileNav
                    ? navItem.path
                    : navItem?.extraPath ?? navItem?.path) as string
                );
              }}
            >
              <span
                className={`${
                  showMobileNav || !isBgTransparent
                    ? "text-black"
                    : "text-white "
                } hover:text-primary2 cursor-pointer inline-block w-full`}
              >
                {navItem.name}
              </span>
            </div>
          ) : (
            <span
              className={`${
                showMobileNav || !isBgTransparent ? "text-black" : "text-white "
              } hover:text-primary2 cursor-pointer`}
            >
              {navItem.name === "Contact Us" ? (
                <ContactUsButton
                  textColor={isBgTransparent ? "white" : "primary"}
                  borderColor={isBgTransparent ? "white" : "primary"}
                  from="footer"
                  onClose={handleCloseMobileNav}
                />
              ) : (
                navItem.name
              )}
            </span>
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
      className={`lg:py-2 lg:px-8 maxlg:py-2 maxlg:px-4 maxlg:justify-between w-full flex items-center  z-30 top-0 ${
        isBgTransparent
          ? "bg-opacity-0 absolute"
          : "bg-opacity-100 bg-white border-b boder-b-grayLine fixed"
      }`}
    >
      <div className="flex items-center">
        <span className="lg:hidden maxlg:mr-4" onClick={handleMobileNav}>
          {isBgTransparent ? <Menu /> : <MenuBlack />}
        </span>

        <a className="flex" onClick={() => handleRouter("/")}>
          {isBgTransparent ? <Logo /> : <LogoPrimary />}
        </a>
      </div>
      <ul
        className={`flex maxlg:flex-col lg:items-center lg:grow font-medium lg:text-sm maxlg:text-base maxlg:ml-6 mb-0 maxlg:px-4  ${
          showMobileNav
            ? "maxlg:fixed maxlg:z-20 maxlg:top-0 maxlg:right-0 overflow-x-hidden overflow-y-scroll maxlg:w-full maxlg:h-screen top-0 bg-white"
            : "maxlg:hidden"
        } `}
      >
        <li className="lg:hidden maxlg:pb-8 maxlg:pt-4 maxlg:flex maxlg:justify-end maxlg:items-center  ">
          <Close onClick={handleCloseMobileNav} />
        </li>
        {navItemRender(navConfig)}
        <li className="lg:hidden mt-4 flex-1 h-20 flex items-start flex-col justify-end ">
          <LogoPrimary />
          <p className="text-neutral7 text-xxs my-4">
            ©2022 BOSS All Rights Reserved.
          </p>
        </li>
      </ul>
      <div className={`maxlg:hidden`}>
        <ContactUsButton
          textColor={isBgTransparent ? "white" : "primary"}
          borderColor={isBgTransparent ? "white" : "primary"}
          btnWidth="117px"
        />
      </div>
      <div className="maxlg:hidden ml-4">
        <BookFreeDemoButton
          textColor={isBgTransparent ? "primary" : "white"}
          bgColor={isBgTransparent ? "white" : "primary"}
          borderColor={isBgTransparent ? "white" : "primary"}
        />
      </div>
      <div className="lg:hidden ml-4">
        <BookFreeDemoButton
          textColor={isBgTransparent ? "primary" : "white"}
          bgColor={isBgTransparent ? "white" : "primary"}
          borderColor={isBgTransparent ? "white" : "primary"}
          buttonText="Book Demo"
        />
      </div>
    </nav>
  );
}
