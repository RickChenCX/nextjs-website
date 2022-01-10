import Head from "next/head";
import Navbar from "./Navbar/index";
import Footer from "./Footer";
import type { AppProps } from "next/app";
import React, { ReactElement, ReactNode } from "react";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps): ReactElement {
  return (
    <div className={styles.wrapper}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <div className={styles.container}>
        <main className={`${styles.main} min-h-screen bg-white`}>
          <Navbar />
          <div className="max-w-screen-1440 flex justify-center h-full w-full ">
          {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}
