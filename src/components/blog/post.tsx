import type { Post } from "@/types";

import Text from "@/components/ui/text";

import { formatDateRelatively } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

type PostProps = {
  post: Post;
};

const Post = ({ post }: PostProps) => {
  return (
    <Link
      href={post.url}
      className="group overflow-hidden transition-all duration-300 hover:-translate-y-2 
      relative flex flex-col items-end border-neutral-700 border w-full rounded-md p-3
       min-h-[200px] hover:bg-white/10 active:bg-white/20"
    >
      <div className="absolute -left-[140px] top-0 h-full w-[80px] rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-[600ms] group-hover:left-[calc(100%+60px)]" />
      <Image
        className="-z-10 rounded-md object-cover [mask-image:linear-gradient(to_top,transparent_30%,black)]"
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
          {formatDateRelatively(post.postedOn)}
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
