import Head from "next/head";

export default function Custom404() {
  return (
    <div className="w-full h-full">
      <Head>
        <title>404</title>
        <meta name="description" content="The page is not found" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="bg-bg1 w-screen h-screen flex items-center">
        <article className="lg:w-8/12 lg:my-0 lg:mx-auto bg-white lg:h-3/5 flex flex-col justify-center items-center">
            <div className="lg:bg-404_title lg:w-300 lg:h-20 bg-no-repeat bg-auto"></div>
        </article>
      </main>
    </div>
  );
}
