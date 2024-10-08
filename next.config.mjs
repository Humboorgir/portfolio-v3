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
  webpack(config) {
    // TODO: break these down into multiple files
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

          // replaces [TOC] with TOC component
          function implementTOC(source) {
            return source
              .split("\n")
              .map((line) => {
                const isWriterAskingForTOCToBePlacedHere =
                  line.includes("[TOC]");

                if (!isWriterAskingForTOCToBePlacedHere) return line;
                return line.replace(
                  "[TOC]",
                  `\n
                     <TableOfContent tableOfContent={${JSON.stringify(
                       tableOfContent
                     )}}/>
                    \n`
                );
              })
              .join("\n");
          }

          // note: I tried to import this from lib/utils but for some reason it resulted in an error no matter what I did
          // decided its not worth the headache so ill just copy paste this
          function slugify(string) {
            string = string.trim();
            string = string.toLowerCase();

            var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;";
            var to = "aaaaeeeeiiiioooouuuunc------";
            for (var i = 0, l = from.length; i < l; i++) {
              string = string.replace(
                new RegExp(from.charAt(i), "g"),
                to.charAt(i)
              );
            }

            string = string
              .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
              .replace(/\s+/g, "-") // collapse whitespace and replace by -
              .replace(/-+/g, "-"); // collapse dashes

            return string;
          }

          const tableOfContent = headings.map((heading) => {
            return { title: heading, href: `#${slugify(heading)}` };
          });

          let codeTop = `import BlogLayout from "@/layouts/blog-layout";\nimport TableOfContent from "@/components/blog/table-of-content";`;

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

          const finalCode = [codeTop, body, codeBottom].join("\n\n");

          const finalCodeWithTOC = implementTOC(finalCode);
          return finalCodeWithTOC;
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
