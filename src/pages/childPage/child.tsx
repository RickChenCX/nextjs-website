import type { NextPage } from "next";
import Head from "next/head";
import Image, { ImageProps } from "next/image";
import Link from "next/link";

interface ChildProps {
  title: string;
  testImg: string;
  numberList: number[];
}
const myLoader = ({ src, width, quality }: ImageProps) => {
  return `https://flexi-boss-static-dev.reinventventures.com/${src}`;
};
/**
 * 静态生成example
 * @param props
 * @returns
 */
function Child(props: ChildProps) {
  return (
    <div>
      <Head>
        <title>child page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">
          <a>返回</a>
        </Link>
        <div>{props?.title}</div>

        <Image
          loader={myLoader}
          src={props.testImg}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <ul>
          {props.numberList.map((item, i) => {
            return <li key={i}>item{item}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://127.0.0.1:8080/some`);
  const data = await res.json();

  return {
    props: data, // will be passed to the page component as props
  };
}
export default Child;
