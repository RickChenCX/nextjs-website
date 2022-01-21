import React from "react";

export async function getServerSideProps({ res }: any) {
  res.setHeader("Content-Type", "text/plain");
  res.write(
    `User-agent: *\nSitemap:${
      process.env["DOMAIN_" + process.env.APP_ENV]
    }/sitemap.xml`
  );
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
