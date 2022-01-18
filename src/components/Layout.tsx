import Head from "next/head";
import Navbar from "./Navbar/index";
import Footer from "./Footer";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): ReactElement {
  const [fixedNav, setFixedNav] = useState(true);
  const handleScroll = () => {
    if (window.scrollY > 54) {
      return setFixedNav(false);
    }
    return setFixedNav(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="w-full h-full">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <div className="w-full h-full">
        <main className={` min-h-screen min-w-320`}>
          <Navbar isBgTransparent={fixedNav} />
          <div className="flex justify-center h-full my-0 mx-auto  bg-white">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
