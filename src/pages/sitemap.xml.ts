import React from "react";
import generate from "lib/generate-sitemap.mjs";

export async function getServerSideProps({ res }: any) {
  const data = await generate();
  res.setHeader("Content-Type", "text/xml");
  res.write(data);
  res.end();

  return {
    props: {},
  };
}
const SiteMap = () => null;
SiteMap.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};
export default SiteMap;
