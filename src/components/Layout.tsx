import Head from "next/head";
import Navbar from "./Navbar/index";
import Footer from "./Footer";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): ReactElement {
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
        <main className={` min-h-screen bg-white`}>
          <Navbar />
          <div className="flex justify-center h-full ">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
