import type { Post } from "@/types";

import Text from "@/components/ui/text";
import Link from "next/link";
import Image from "next/image";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <Link
      href={post.url}
      className="relative flex flex-col items-end border-neutral-700 border w-full rounded-md p-3
      bg-gradient-to-b from-black/10 to-70% to-black min-h-[200px]"
    >
      <Image
        className="-z-10 rounded-md object-cover"
        fill
        alt={post.title}
        src={post.thumbnail}
      />
      <Text
        className="mt-auto mr-auto text-foreground/90 font-bold max-w-[280px] text-base md:text-base"
        variant="h5"
      >
        {post.title}
      </Text>
      <div className="flex items-center pl-1 w-full">
        <Text className="md:text-sm" variant="lead">
          {post.postedOn}
        </Text>
        <div className="h-1 w-1 rounded-full bg-white/70 mx-2" />
        <Text className="md:text-sm flex items-center" variant="lead">
          {post.readTime} min read
        </Text>
      </div>
    </Link>
  );
};

export default Post;
