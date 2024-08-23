import nextMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

import frontMatter from "front-matter";
import { createLoader } from "simple-functional-loader";

import * as path from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

/** @type {import('rehype-pretty-code').Options} */
const options = {};
const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, options], rehypeSlug],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  webpack(config, options) {
    function mdxLoader() {
      return [
        createLoader(function (source) {
          let { attributes: meta, body } = frontMatter(source);

          const headings = getHeadings(source);
          function getHeadings(source) {
            const headingLines = source.split("\n").filter((line) => {
              return line.match(/^##\s/);
            });
            return headingLines.map((raw) => {
              if (!raw) return;
              const text = raw.replace("## ", "").replace("##", "");
              return text;
            });
          }

          // didnt know what to call it lol
          const slugize = (txt) => {
            if (!txt) return;
            return txt.replaceAll(" ", "-").replaceAll(":", "").toLowerCase();
          };

          const tableOfContent = headings.map((heading) => {
            return { title: heading, href: `#${slugize(heading)}` };
          });

          let codeTop = `import BlogLayout from "@/layouts/blog-layout";`;

          let codeBottom = `export default function Page({ children }) {
            const tableOfContent = ${JSON.stringify(tableOfContent)}
            return (
              <BlogLayout tableOfContent={tableOfContent} meta={${JSON.stringify(
                meta
              )}}>
                {children}
              </BlogLayout>
            );
          }`;

          return [codeTop, body, codeBottom].join("\n\n");
        }),
      ];
    }

    config.module.rules.push({
      test: /\.mdx$/,
      include: [path.join(__dirname, "src/pages/blog/")],
      use: mdxLoader(),
    });

    return config;
  },
};

export default withMDX(nextConfig);
