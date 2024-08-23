import Navbar from "@/components/blog/navbar";
import Footer from "@/components/home/footer";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { formatDate } from "@/lib/utils";

import { FaExternalLinkAlt as LinkIcon } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
  tableOfContent: {
    title: string;
    href: string;
  }[];
  meta: {
    title: string;
    category: string;
    postedOn: string;
  };
};

// Note: BlogLayout is only used in mdx pages (not the landing page)
// I figured they had different requirements and it would be better not to use the same Layout component for both of them.
// the landing page doesn't have a layout component since its only a single page therefore, everything needed is directly written in it.
const BlogLayout = ({ children, tableOfContent, meta }: Props) => {
  const postedOn = formatDate(meta.postedOn);
  console.log(tableOfContent);

  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar />

      <Container className="flex flex-row mb-20 mt-10 w-full">
        <div className="grow flex flex-col">
          <div className="-mb-2.5 mt-0.5 text-foreground-muted flex flex-wrap items-center">
            <div className="mb-2.5 shrink-0 rounded-full bg-blue-500/20 py-1 px-3 text-sm mr-2 text-blue-400">
              {meta.category}
            </div>
            <span className="mb-2.5">{postedOn}</span>
          </div>
          <Text
            className="max-w-4xl text-3xl sm:text-4xl md:text-5xl mb-5 mt-4"
            variant="h1"
          >
            {meta.title}
          </Text>
          <div className="flex my-0.5 text-foreground-muted items-center mb-10">
            <span className="text-foreground/90 mr-2 flex items-center">
              {/* all articles are posted by me so im just gonna hard code this
          I know its not neccessary to put this here but it kinda looks nice */}
              <div className="h-4 w-4 bg-white/70 rounded-full mr-1.5" /> Posted
              by Iliya
            </span>
            | <span className="ml-2">5 min read</span>
          </div>
          <div className="prose prose-sky w-[1px] min-w-full max-w-none md:prose-lg dark:prose-invert">
            {children}
          </div>
        </div>
        <div className="flex w-[320px] flex-col py-4 ml-6 pl-6 border-white/20 border-l">
          <Text
            className="text-foreground/90 md:text-base mb-3 uppercase"
            variant="h3"
          >
            Table of content
          </Text>
          {tableOfContent.map((x, i) => {
            return (
              <a
                className="py-1 text-sm text-foreground/70 overflow-hidden text-nowrap text-ellipsis
                  hover:text-blue-400 hover:pl-1 transition-all duration-300"
                href={x.href}
              >
                {x.title}
              </a>
            );
          })}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogLayout;
