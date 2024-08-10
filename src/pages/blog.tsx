import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <Container className="w-full py-20">
      <div className="relative w-[320px] pt-[100px] h-[200px]">
        <Image
          fill
          className="-z-10 blur-[3.5px] 
         [mask-image:linear-gradient(to_right,transparent,white_50%,white_60%,transparent)]"
          alt="Ribbon"
          src="/Ribbon.svg"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-primary/30 blur-[50px]" />
        <Text variant="h2">All posts</Text>
        <Text className="md:text-lg" variant="lead">
          December 22
        </Text>
      </div>

      <div className="grid mt-12 grid-cols-2 gap-8 w-fit">
        {[
          {
            title: "Authentication in Next.js: A Comprehensive Guide",
            published: "4 Months ago",
            readTime: "15 min",
          },
          {
            title: "Authentication in Next.js: A Comprehensive Guide",
            published: "4 Months ago",
            readTime: "15 min",
          },
          {
            title: "Authentication in Next.js: A Comprehensive Guide",
            published: "4 Months ago",
            readTime: "15 min",
          },
          {
            title: "Authentication in Next.js: A Comprehensive Guide",
            published: "4 Months ago",
            readTime: "15 min",
          },
        ].map((post) => {
          return (
            <div
              className="flex flex-col items-end border-neutral-700 border w-fit rounded-md p-3
          bg-gradient-to-b from-white/30 to-90% to-black min-h-[170px]">
              <Text
                className="mt-auto text-foreground/90 font-bold max-w-[280px] md:text-base"
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

export default Blog;
