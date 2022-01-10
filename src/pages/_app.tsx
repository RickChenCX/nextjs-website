import "../styles/globals.css";
// import 'antd/dist/antd.css'

import type { AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import "tailwindcss/tailwind.css";
import 'antd/dist/antd.css';
// import "tailwindcss/tailwind.css";
import Layout from "components/Layout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // const getLayout = Component.getLayout ?? ((page) => page);

  return (<Layout>
    <Component {...pageProps} />
    </Layout>);
}

export default MyApp;
