import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";
import BlogLayout from "@/layouts/blog-layout";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { MdOutlineDateRange as Date } from "react-icons/md";
import { AnimatePresence, m } from "framer-motion";

const BlogPage = () => {
  const posts = [
    {
      title: "Authentication in Next.js: A Comprehensive Guide",
      published: "4 months ago",
      readTime: "15 min",
    },
    {
      title: "How I Built FlickerUI: The Successor to ShadcnUI",
      published: "1 year ago",
      readTime: "12 min",
    },
    {
      title: "Hello There Mate, How Was Your Week?",
      published: "2 weeks ago",
      readTime: "3 min",
    },
    {
      title: "React.js QuickStart: The Ultimate Guide",
      published: "3 months ago",
      readTime: "8 min",
    },
  ];

  const [currentPost, setCurrentPost] = useState(posts[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const thePost = posts.find((post) => post.title == currentPost.title);
    const post = posts[posts.indexOf(thePost!) + 1] || posts[0];
    setCurrentPost(post);
    setIsAnimating(true);
  }, [currentPost, posts]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, 3000);
  }, [isAnimating, startAnimation]);

  return (
    <Container className="w-full mb-20">
      <Row justify="between" items="stretch" className="flex-wrap gap-8">
        <div className="relative w-[280px] md:w-[320px] pt-[100px] h-[200px] overflow-hidden max-w-[85vw]">
          <div
            className="absolute w-1/2 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground/30 rounded-[60%]
          blur-[40px]"></div>
          <Image
            fill
            className="-z-10 blur-[3.5px]
         [mask-image:linear-gradient(to_right,transparent,#ffffff9a_50%,transparent)]"
            alt="Ribbon"
            src="/Ribbon.svg"
          />
          <Text className="text-4xl" variant="h2">
            All posts
          </Text>
          <Text className="md:text-lg flex items-center" variant="lead">
            <Date className="h-5 w-5 mr-1.5" /> December 22
          </Text>
        </div>

        <div className="text-transparent max-w-[620px] min-h-[220px] min-w-[200px] sm:min-w-[360px] grow relative flex overflow-hidden">
          .
          <AnimatePresence
            onExitComplete={() => {
              setIsAnimating(false);
            }}>
            <m.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
              }}
              exit={{
                opacity: 0,
                y: -40,
                x: 40,
                filter: "blur(8px)",
                scale: 1.5,
                position: "absolute",
              }}
              className="right-0 top-0 absolute w-full flex flex-col items-end border-neutral-700 border rounded-md p-3
          bg-gradient-to-b from-white/30 to-90% to-black h-full"
              key={currentPost.title}>
              <Text
                className="mt-auto mr-auto text-foreground/90 font-bold text-xl md:text-xl"
                variant="h5">
                {currentPost.title.split(" ").map((word, index) => (
                  <m.span
                    key={currentPost.title + index}
                    initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.4,
                    }}
                    className="mr-1 inline-block">
                    {word}
                  </m.span>
                ))}
              </Text>
              <div className="flex mt-1 justify-between items-center w-full">
                <Text className="md:text-sm" variant="lead">
                  ~{currentPost.readTime} read
                </Text>
                <Text className="md:text-sm" variant="lead">
                  {currentPost.published}
                </Text>
              </div>
            </m.div>
          </AnimatePresence>
        </div>
      </Row>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {posts.map((post, i) => {
          return (
            <div
              key={i}
              className="flex flex-col items-end border-neutral-700 border w-full rounded-md p-3
          bg-gradient-to-b from-white/30 to-90% to-black min-h-[170px]">
              <Text
                className="mt-auto mr-auto text-foreground/90 font-bold max-w-[280px] text-base md:text-base"
                variant="h5">
                {post.title}
              </Text>
              <div className="flex justify-between items-center w-full">
                <Text className="md:text-sm" variant="lead">
                  ~{post.readTime} read
                </Text>
                <Text className="md:text-sm" variant="lead">
                  {post.published}
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

BlogPage.getLayout = function getLayout(Page: React.ReactElement) {
  return <BlogLayout>{Page}</BlogLayout>;
};

export default BlogPage;
