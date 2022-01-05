import useSWR from "swr";
import Head from "next/head";
import Link from "next/link";
import Image, { ImageProps } from "next/image";

interface MysqlDemoData {
  title: string;
  description: string;
  imgUrl: string;
  createTime?: string;
  updateTime?: string;
}
const myLoader = ({ src, width, quality }: ImageProps) => {
  return `https://flexi-boss-static-dev.reinventventures.com/${src}`;
};
const fetcher = async (url: string): Promise<MysqlDemoData[]> => {
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
export default function MysqlDemo() {
  const { data, error } = useSWR(() => `/api/selectContent`, fetcher);
  if (error) return <div>{error.message}</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      <Head>
        <title>mysql demo</title>
        <meta name="description" content="this is a  mysql demo page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/">
          <a>
            <button>返回</button>
          </a>
        </Link>
        <div>从mysql数据库获取的数据渲染</div>
        <ul>
          {data.map((item, i) => {
            return (
              <li key={i} style={{borderBottom: "1px solid #eee"}}>
                <div>
                  <p>{item.title}</p>

                  <Image
                    loader={myLoader}
                    src={item.imgUrl}
                    alt="Picture of the author"
                    width={50}
                    height={50}
                  />
                </div>
                <textarea name="" id="" cols={30} rows={5}>
                  {item.description}
                </textarea>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
