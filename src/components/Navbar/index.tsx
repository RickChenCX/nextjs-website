import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import navConfig, { NavConfigItem } from "./nav.config";
import ProductNavItem from "./ProductNavItem";
import ArrowDownWhite from "../../svgs/ArrowDown_white.svg";
import ArrowDown from "../../svgs/ArrowDown.svg";
import MenuBlack from "../../svgs/Menu_black.svg";
import Menu from "../../svgs/Menu.svg";
import Close from "../../svgs/Close.svg";

interface NavbarProps {
  isBgTransparent?: boolean;
  logoType?: "primary" | "white";
}
export default function Navbar({
  isBgTransparent = true,
  logoType = "white",
}: NavbarProps) {
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
            <div
              className="flex items-baseline maxlg:justify-between"
              onClick={handleChangeSubNav}
            >
              <span
                className={`${
                  showMobileNav || !isBgTransparent
                    ? "text-black"
                    : "text-white"
                } cursor-pointer`}
              >
                {navItem.name}
              </span>
              <span className="pl-2">
                {isBgTransparent ? (
                  <ArrowDownWhite
                    className={
                      currentSubNav === navItem.name
                        ? "animate-rotate180"
                        : "animate-rotate0"
                    }
                  />
                ) : (
                  <ArrowDown
                    className={
                      currentSubNav === navItem.name
                        ? "animate-rotate180"
                        : "animate-rotate0"
                    }
                  />
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
              <a
                className={
                  showMobileNav || !isBgTransparent
                    ? "text-black"
                    : "text-white"
                }
              >
                {navItem.name}
              </a>
            </Link>
          ) : (
            <span
              className={`${
                showMobileNav || !isBgTransparent ? "text-black" : "text-white"
              }cursor-pointer`}
            >
              {navItem.name}
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
      className={`lg:py-2 lg:px-8 maxlg:py-2 maxlg:px-4 maxlg:justify-between w-full flex items-center absolute z-10 top-0 ${
        isBgTransparent
          ? "bg-opacity-0"
          : "bg-opacity-100 bg-white border-b boder-b-grayLine"
      }`}
    >
      <div className="flex items-center ">
        <span className="lg:hidden maxlg:mr-4" onClick={handleMobileNav}>
          {isBgTransparent ? <Menu /> : <MenuBlack />}
        </span>
        <Image
          src={
            logoType === "primary" ? "/images/logo.png" : "/images/logo1.png"
          }
          alt="logo"
          width={68}
          height={24}
        />
      </div>
      <ul
        className={`lg:flex lg:items-center lg:grow font-medium lg:text-sm maxlg:text-base maxlg:ml-6 mb-0   ${
          showMobileNav
            ? "maxlg:absolute maxlg:z-20  maxlg:top-0 maxlg:right-0 maxlg:overflow-hidden maxlg:w-full top-0 bg-white"
            : "maxlg:hidden"
        } `}
      >
        <li className="lg:hidden maxlg:pb-8 maxlg:pt-4 maxlg:px-4  maxlg:flex maxlg:justify-end maxlg:items-center  ">
          <Close />
        </li>
        {navItemRender(navConfig)}
      </ul>
      <button
        className={`px-6 py-2 ml-4 max-h-10   lg:text-sm maxlg:text-base border border-solid  maxlg:hidden ${
          isBgTransparent
            ? "text-white border-white"
            : "text-primary border-primary"
        }`}
      >
        Contact Us
      </button>
      <button
        className={`px-6 py-2 ml-4 max-h-10  lg:text-sm maxlg:text-base border border-solid  ${
          isBgTransparent
            ? "border-white text-primary bg-white"
            : "border-primary text-white bg-primary"
        }`}
      >
        Book Free Demo
      </button>
    </nav>
  );
}
