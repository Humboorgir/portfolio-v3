import Project from "./project";

import Container from "@/components/ui/container";

import { LuComponent as Component } from "react-icons/lu";
import { LuCommand as Command } from "react-icons/lu";
import { RiRobot2Line as Robot } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      name: (
        <>
          <span className="text-primary">FlickerUI</span> Components
        </>
      ),
      description:
        "Collection of premade, animated React components built with Tailwindcss and Framer-motion. Comes with a CLI used to add components to your project. Also a nice looking documentation website.",
      icon: Component,
    },
    {
      name: (
        <>
          Sweet's <span className="text-primary">Dashboard</span>
        </>
      ),
      description:
        "Sweet is my verified Discord bot with hundreds of active servers. This is its web dashboard built with NextJS, NextAuth, Redux, Tailwindcss and Framer-motion. Has anything you would expect in a web application: State management, Data fetching, etc",
      icon: Command,
    },
    {
      name: (
        <>
          <span className="text-primary">Sweet</span> bot
        </>
      ),
      description:
        "AI-Powered, Verified Discord Moderation bot. Detects commands based on user's natural language input and responds accordingly. Built with NodeJS, Tensorflow and Python.",
      icon: Robot,
    },
  ];
  return (
    <Container className="flex flex-col items-center">
      {projects.map((project, i) => {
        const isEven = (i + 1) % 2 == 0;
        return <Project project={project} isEven={isEven} />;
      })}
    </Container>
  );
};

export default Projects;
