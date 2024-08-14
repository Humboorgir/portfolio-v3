import type { Post } from "@/lib/types";

import Text from "@/components/ui/text";
import { AnimatePresence, m } from "framer-motion";

type SlideShowProps = {
  setIsAnimating: React.Dispatch<React.SetStateAction<boolean>>;
  currentPost: Post;
};

const SlideShow = ({ currentPost, setIsAnimating }: SlideShowProps) => {
  return (
    <div className="text-transparent max-w-[620px] min-h-[220px] min-w-[200px] sm:min-w-[360px] grow relative flex overflow-hidden">
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
          className="right-0 top-0 absolute w-full flex flex-col items-end border-neutral-700 border rounded-md p-3
    bg-gradient-to-b from-white/30 to-90% to-black h-full"
          key={currentPost.title}
        >
          <Text
            className="mt-auto mr-auto text-foreground/90 font-bold text-xl md:text-xl"
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
              ~{currentPost.readTime} read
            </Text>
            <Text className="md:text-sm" variant="lead">
              {currentPost.published}
            </Text>
          </div>
        </m.div>
      </AnimatePresence>
    </div>
  );
};

export default SlideShow;
