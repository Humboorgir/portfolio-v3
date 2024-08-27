import Button from "@/components/ui/button";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import { FaExternalLinkAlt as Link } from "react-icons/fa";

const BlogSection = () => {
  return (
    <Container className="w-full flex flex-col items-center pb-24">
      <div
        className="relative bg-blue-400/5 rounded-xl backdrop-blur-sm 
        border-2 border-blue-400/10 p-5 max-w-3xl"
      >
        <div
          className="absolute top-0 left-0 h-[70px] w-[40%] max-w-[80vw]
          bg-gradient-to-r from-primary/40 to-blue-200/30 blur-[60px]"
          aria-hidden
        />

        <Text variant="h3" className="md:text-4xl mb-3">
          Check out my blog!
        </Text>
        <Text variant="p" className="mb-5">
          Where I post a wide range of programming-related articles, ranging
          from tutorials, coding best practices, about my past experiences and
          even my thoughts on certain topics.
        </Text>
        <Button
          className="relative min-w-44 text-blue-200/90 bg-transparent hover:bg-white/5"
          variant="ghost"
          href="/blog"
        >
          <div className="-z-10 absolute top-0 left-0 right-0 bottom-0 bg-blue-500/30 blur-lg" />
          Visit my blog
          <Link className="w-3 h-3 ml-1.5" />
        </Button>
      </div>
    </Container>
  );
};

export default BlogSection;
