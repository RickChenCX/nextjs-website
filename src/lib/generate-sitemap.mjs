import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "./src/pages/*.tsx",
    "./src/pages/**/*.tsx",
    "!./src/pages/_*.tsx",
    "!./src/pages/api",
    "!./src/pages/404.tsx",
  ]);
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("./src/pages", "")
              .replace("/index", "")
              .replace(".tsx", "")
              .replace(".ts", "");
            const route = path === "/index" ? "" : path;

            return `
              <url>
                  <loc>${`${process.env.DOMAIN + route}`}</loc>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  //   writeFileSync("public/sitemap.xml", formatted);
  return formatted;
}

export default generate;
