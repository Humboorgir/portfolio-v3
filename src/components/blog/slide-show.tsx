import type { Post } from "@/types";

import Text from "@/components/ui/text";

import { AnimatePresence, m } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import { formatDateRelatively } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type SlideShowProps = {
  posts: Post[];
};

const SlideShow = ({ posts }: SlideShowProps) => {
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
    <Link
      href={currentPost.url}
      className="text-transparent max-w-[620px] h-[220px] min-w-[200px] sm:min-w-[360px] grow relative flex overflow-hidden"
    >
      .
      <AnimatePresence
        onExitComplete={() => {
          setIsAnimating(false);
        }}
      >
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
          className="right-0 top-0 grid grid-cols-[1fr] absolute w-full border-neutral-700 border rounded-md
    bg-gradient-to-b from-transparent to-80% to-black h-full max-h-[220px] hover:bg-white/10 active:bg-white/20"
          key={currentPost.title}
        >
          <Image
            className="w-full object-cover h-full max-h-[220px] row-start-1 col-start-1 rounded-md
            [mask-image:linear-gradient(to_top,transparent_20%,black)]"
            height={320}
            width={320}
            src={currentPost.thumbnail}
            alt={currentPost.title}
          />
          <div className="flex flex-col items-end justify-end row-start-1 col-start-1 p-3 rounded-md">
            <Text
              className="mr-auto text-foreground/90 font-bold text-xl md:text-xl"
              variant="h5"
            >
              {currentPost.title.split(" ").map((word, index) => (
                <m.span
                  key={currentPost.title + index}
                  initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.4,
                  }}
                  className="mr-1 inline-block"
                >
                  {word}
                </m.span>
              ))}
            </Text>
            <div className="flex mt-1 justify-between items-center w-full">
              <Text className="md:text-sm" variant="lead">
                ~{currentPost.readTime} min read
              </Text>
              <Text className="md:text-sm" variant="lead">
                {formatDateRelatively(currentPost.postedOn)}
              </Text>
            </div>
          </div>
        </m.div>
      </AnimatePresence>
    </Link>
  );
};

export default SlideShow;
