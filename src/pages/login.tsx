
import React from "react";
import Head from "next/head";
import Link from 'next/link'

export default function Login() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>login</title>
        <meta name="description" content="The page is not found" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <section className="bg-login-bg-mobile w-full h-full pt-14 pb-9 px-8">
          <h3 className="text-white text-3xxl font-roboto font-thin pb-4">
            View on laptop for better experience
          </h3>
          <p className="text-neutral7 text-sm">
            It looks like you’re viewing on a mobile device. To get the best experience, please visit&nbsp;&nbsp;
            <Link href="/">
              <a className="text-white text-sm cursor-pointer">getbossbuilding.com</a>
            </Link>
            &nbsp;&nbsp;on a laptop computer. 
          </p>
          <button className="h-10 w-full mt-64 mb-6 border border-solid bg-white text-primary text-base font-medium">
            Ok, Got It
          </button>
          <Link href="/">
            <a className="block text-white text-base text-center cursor-pointer">view desktop version</a>
          </Link>
        </section>
        <footer className="bg-black p-4">
          <h3 className="mb-0 text-white pb-2">Reach Us at</h3>
          <h3 className="mb-0 text-white">contact@reinventventures.com</h3>
          <p className="mb-0 text-neutral7 pt-4 pb-6">
            The information you provide will be used in accordance with the terms of our
            <a className="text-white">&nbsp;&nbsp;Privacy Policy</a>.
          </p>
        </footer>
      </main>
    </div>
  );
}
Login.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <>
      {page}
    </>
  );
};
