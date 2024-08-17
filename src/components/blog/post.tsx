import type { Post } from "@/lib/types";

import Text from "@/components/ui/text";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <div
      className="flex flex-col items-end border-neutral-700 border w-full rounded-md p-3
      bg-gradient-to-b from-white/30 to-90% to-black min-h-[170px]"
    >
      <Text
        className="mt-auto mr-auto text-foreground/90 font-bold max-w-[280px] text-base md:text-base"
        variant="h5"
      >
        {post.title}
      </Text>
      <div className="flex justify-between items-center w-full">
        <Text className="md:text-sm flex items-center" variant="lead">
          ~{post.readTime} read
        </Text>
        <Text className="md:text-sm" variant="lead">
          {post.published}
        </Text>
      </div>
    </div>
  );
};

export default Post;
