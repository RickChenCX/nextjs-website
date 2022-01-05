import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";

/**
 * nextjs 使用中间件验证跳转例子
 * @returns
 */
export default function UnAuth() {
  return (
    <div>
      <Head>
        <title>Unauthorized Page</title>
        <meta name="description" content="this is a unauthorized page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">
          <a>返回</a>
        </Link>
        the page is Unauthorized
      </main>
    </div>
  );
}
