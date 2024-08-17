import Navbar from "@/components/blog/navbar";
import Footer from "@/components/home/footer";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

import { FaRegClock as Clock } from "react-icons/fa6";

type Props = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: Props) => {
  return (
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <Navbar />

      {/* TODO: make these dynamic  */}
      <Container className="mb-20 mt-10 w-full">
        <Text className="-mb-2.5 flex flex-wrap items-center" variant="lead">
          <div className="mb-2.5 shrink-0 rounded-full bg-gradient-to-b from-blue-500/20 to-blue-500/30 py-1 px-3 text-sm mr-2 text-blue-400">
            Front-end Development
          </div>
          <span className="mb-2.5">Wednesday, July 31st 2024</span>
        </Text>
        <Text
          className="max-w-4xl text-3xl sm:text-4xl md:text-5xl mb-5 mt-4"
          variant="h1"
        >
          Creating Truely Reusable React Components: A Comprehensive Guide
        </Text>
        <Text className="flex items-center mb-10" variant="lead">
          <span className="text-foreground/90 mr-2 flex items-center">
            <div className="h-4 w-4 bg-white/70 rounded-full mr-1.5" /> Posted
            by Iliya
          </span>
          | <span className="ml-2">5 min read</span>
        </Text>
        <div className="prose prose-sky max-w-none md:prose-xl dark:prose-invert">
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default BlogLayout;
