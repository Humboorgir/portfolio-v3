import { Post } from "@/types";

import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Button from "@/components/ui/button";

import SlideShow from "@/components/blog/slide-show";
import PageTitle from "@/components/blog/page-title";
import PostComponent from "@/components/blog/post";

import React from "react";
import fs from "fs";
import frontMatter from "front-matter";
import { estimateReadTime, slugify } from "@/lib/utils";

import { BsArrowLeft as ArrowLeft } from "react-icons/bs";

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <Container className="relative w-full mb-20 mt-5">
      <div
        className="-z-10 absolute top-0 left-0 h-[200px] w-[300px] max-w-[60vw]
       bg-gradient-to-r from-primary/80 to-primary/60 blur-[100px]"
      />

      <Button
        className="group w-fit no-underline transition-all flex items-center rounded-full text-foreground/70 hover:bg-white/10 hover:text-foreground/90 text-sm"
        href="/"
        variant="ghost"
      >
        <ArrowLeft className="w-4 h-4 text-foreground/70 transition-all duration-[250ms] mr-1 group-hover:text-foreground/90 group-hover:mr-2" />
        Back to Home
      </Button>

      <Row justify="between" items="stretch" className="flex-wrap gap-8">
        <PageTitle />

        <SlideShow posts={posts} />
      </Row>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {posts.map((post, i) => {
          return <PostComponent key={i} post={post} />;
        })}
      </div>
    </Container>
  );
};

export async function getStaticProps() {
  const postFiles = fs
    .readdirSync("./src/pages/blog")
    .filter((x) => x != "index.tsx");

  const posts = postFiles.map((file) => {
    type PostWithoutReadTime = Omit<Post, "readTime">;

    const source = fs.readFileSync(`./src/pages/blog/${file}`, "utf8");
    const { attributes: meta } = frontMatter<PostWithoutReadTime>(source);

    const readTime = estimateReadTime(source);
    const url = `/blog/${slugify(meta.title)}`;
    const thumbnail = `/blog/thumbnail/${slugify(meta.title)}.png`;

    return { ...meta, thumbnail, readTime, url };
  });

  return { props: { posts } };
}

export default BlogPage;
