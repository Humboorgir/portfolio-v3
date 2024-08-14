import Container from "@/components/ui/container";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";
import Post from "@/components/blog/post";

import BlogLayout from "@/layouts/blog-layout";
import SlideShow from "@/components/blog/slide-show";
import PageTitle from "@/components/blog/page-title";

import React, { useCallback, useEffect, useState } from "react";

const BlogPage = () => {
  // dummy data
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
        <PageTitle />

        <SlideShow currentPost={currentPost} setIsAnimating={setIsAnimating} />
      </Row>

      <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {posts.map((post, i) => {
          return <Post key={i} post={post} />;
        })}
      </div>
    </Container>
  );
};

BlogPage.getLayout = function getLayout(Page: React.ReactElement) {
  return <BlogLayout>{Page}</BlogLayout>;
};

export default BlogPage;
