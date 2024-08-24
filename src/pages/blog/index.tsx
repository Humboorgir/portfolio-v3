import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Post from "@/components/blog/post";
import Button from "@/components/ui/button";

import SlideShow from "@/components/blog/slide-show";
import PageTitle from "@/components/blog/page-title";

import React from "react";

import { BsArrowLeft as ArrowLeft } from "react-icons/bs";

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
          return <Post key={i} post={post} />;
        })}
      </div>
    </Container>
  );
};

export default BlogPage;
