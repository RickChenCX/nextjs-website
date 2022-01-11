import Head from "next/head";
import Navbar from "components/Navbar/index";
import React from "react";

export default function Custom404() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>404</title>
        <meta name="description" content="The page is not found" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="lg:bg-bg1 w-screen h-screen flex items-center">
        <article className="lg:w-944 my-0 mx-auto bg-white lg:h-4/6  flex flex-col justify-center items-center maxlg:mx-6">
          <div className="bg-404_title lg:w-300 maxlg:h-16 lg:h-20 maxlg:w-48 bg-no-repeat lg:bg-100% maxlg:bg-100% mb-4"></div>
          <h1 className="font-roboto lg:text-8xl maxlg:text-5xxl font-thin text-neutral10  ">
            404
          </h1>
          <h3 className="font-roboto lg:text-5xxl maxlg:text-3xxl font-extralight	 text-neutral10  italic">
            Sorry, page not found.
          </h3>
          <p className="font-roboto font-normal text-base lg:w-3/5 text-center mt-6">
            The page you are looking for doesn’t exist or an error occurred. Go
            back, or head over to Home to choose a new direction.
          </p>
        </article>
      </main>
    </div>
  );
}
Custom404.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      <Navbar isBgTransparent={false} logoType="primary" />
      {page}
    </>
  );
};
