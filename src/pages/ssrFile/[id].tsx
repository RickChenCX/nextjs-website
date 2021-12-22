import Head from "next/head";
import { NextPageContext } from "next/types/index";
import Link from 'next/link'

interface SsrFileProps {
  title: string
  desc: string
  index: number
}
export default function SsrFile(props: SsrFileProps) {
  return (
    <div>
      <Head>
        <title>ssr page</title>
        <meta name="description" content="ssr page of next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Link href="/">
          <a>返回</a>
        </Link>
        this is Server-Side-Render page
        <ul>
          <li>{props.title}</li>
          <li>{props.desc}</li>
          <li>{props.index}</li>
        </ul>
      </main>
    </div>
  );
}
export async function getServerSideProps(context: NextPageContext):Promise<{
  props: SsrFileProps;
}> {
  const res = await fetch(`http://127.0.0.1:8080/dynamic?id=${context.query.id}`)
  const data = await res.json()
  return {
    props: data, // will be passed to the page component as props
  };
}
