import React from "react";
import Head from "next/head";
import Link from "next/link";
import LinkArrowWhite from "../svgs/LinkArrow-white.svg";

export default function Login() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>BOSS: Sign-in</title>
        <meta
          name="description"
          content="Sign into your BOSS account. Enter your email and password."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="">
        <section className="bg-login-bg-mobile w-full h-full pt-14 pb-9 px-8">
          <h3 className="text-white text-3xxl font-roboto font-thin pb-4 italic">
            View on laptop for better experience
          </h3>
          <p className="text-neutral7 text-sm">
            It looks like you’re viewing on a mobile device. To get the best
            experience, please visit&nbsp;
            <Link href="/">
              <a className="text-white text-sm cursor-pointer hover:text-primary">
                getbossbuilding.com
              </a>
            </Link>
            &nbsp;on a laptop computer.
          </p>
          <Link href="/">
            <a>
              <button className="transition ease-in-out duration-300 h-10 w-full mt-64 mb-6 border border-solid bg-white text-primary text-base font-medium hover:text-primary2 hover:bg-purple-50 active:text-primary3">
                Ok, Got It
              </button>
            </a>
          </Link>
          <a
            href="https://boss-admin.reinventventures.com"
            className="block text-white text-base text-center cursor-pointer hover:text-white"
          >
            view desktop version
            <LinkArrowWhite className="inline-block ml-1.5" />
          </a>
        </section>
        <footer className="bg-black p-4">
          <h3 className="mb-0 text-white pb-2">Reach us at</h3>
          <h3 className="mb-0 text-white">contact@reinventventures.com</h3>
          <p className="mb-0 text-neutral7 pt-4 pb-6">
            The information you provide will be used in accordance with the
            terms of our
            <a className="text-white hover:text-primary">
              &nbsp;Privacy Policy
            </a>
            .
          </p>
        </footer>
      </main>
    </div>
  );
}
Login.getLayout = function getLayout(page: React.ReactNode) {
  return <>{page}</>;
};
