import React from "react";

export async function getServerSideProps({ res }: any) {
  const env = await fetch("http://127.0.0.1:3000/api/envConfig", {
    method: "GET",
  });
  const data = await env.json();

  res.setHeader("Content-Type", "text/plain");
  res.write(`User-agent: *\nSitemap:${data["DOMAIN"]}/sitemap.xml`);
  res.end();

  return {
    props: {},
  };
}
const Robots = () => null;
Robots.getLayout = function getLayout(page: React.ReactNode) {
  return page;
};
export default Robots;
