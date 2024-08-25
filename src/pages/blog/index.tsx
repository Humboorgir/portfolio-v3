import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import PostComponent from "@/components/blog/post";
import Button from "@/components/ui/button";

import SlideShow from "@/components/blog/slide-show";
import PageTitle from "@/components/blog/page-title";

import React from "react";
import fs from "fs";
import path from "path";
import frontMatter from "front-matter";

import { BsArrowLeft as ArrowLeft } from "react-icons/bs";
import { Post } from "@/types";
import {
  estimateReadTime,
  formatDate,
  formatDateRelatively,
} from "@/lib/utils";

const BlogPage = ({ posts }: { posts: Post[] }) => {
  return (
    <Container className="w-full mb-20 mt-5">
      <Button
        className="group no-underline w-fit flex items-center rounded-full bg-gradient-to-br
        from-foreground/90 to-foreground text-background text-sm"
        href="/"
        variant="ghost"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
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
    const postedOn = formatDateRelatively(meta.postedOn);

    return { ...meta, postedOn, readTime };
  });

  return { props: { posts } };
}

export default BlogPage;
