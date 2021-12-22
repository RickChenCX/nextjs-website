import useSWR from "swr";
import Head from "next/head";
import Link from 'next/link'

const fetcher = async (url: string) => {
  const res = await fetch(url);
  const data = await res.json();

  if (res.status !== 200) {
    throw new Error(data.message);
  }
  return data;
};
/**
 * nextjs 使用api路由例子
 * @returns 
 */
export default function SayHello() {
  const { data, error } = useSWR(() => `/api/hello`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Head>
        <title>say hello page</title>
        <meta name="description" content="this is a say hello page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Link href="/">
          <a>返回</a>
        </Link>
          Now, welcome {data.name}
          </main>
    </div>
  );
}
