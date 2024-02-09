import Project from "./project";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { LuComponent as Component } from "react-icons/lu";
import { LuCommand as Command } from "react-icons/lu";
import { RiRobot2Line as Robot } from "react-icons/ri";
import { SiGithub as Github } from "react-icons/si";

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
      image: "/flickerUI.png",
      repo: "https://github.com/Humboorgir/flicker-ui-website",
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
      image: "/sweetDashboard.png",
      repo: "https://github.com/Humboorgir/Sweet-dashboard",
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
      image: "/sweet.png",
      repo: "https://github.com/humboorgir/sweet",
    },
  ];
  return (
    <Container className="flex flex-col items-center">
      {projects.map((project, i) => {
        const isEven = (i + 1) % 2 == 0;
        return <Project project={project} isEven={isEven} />;
      })}

      <Row className="items-stretch w-full justify-end px-5 h-fit min-h-[1px]" items="start">
        <Column className="items-end mb-36">
          <Text className="text-foreground/90" variant="h3">
            More <span className="text-primary">Projects</span>
          </Text>
          <Text className="mb-3 text-right max-w-xl" variant="p">
            You thought that was it? During my years of programming, I have built a huge number of open
            source projects which you can view from my Github page
          </Text>
          <Row>
            <Button
              className="bg-neutral-800/80 hover:bg-neutral-800/60 grow w-[240px]"
              href="https://github.com/humboorgir"
              openInNewTab>
              Github page <Github className="mb-[3px] ml-2" />
            </Button>
          </Row>
        </Column>

        <Column className="left-0 top-0 ml-3">
          {/* icon */}
          <div className="bg-primary/40 rounded-full w-fit p-1.5">
            <Github className="text-[26.5px] text-white" />
          </div>
          {/* line  */}
          <div className="w-[3px] h-full bg-gradient-to-b from-primary/20 via-primary/80 to-transparent" />
        </Column>
      </Row>
    </Container>
  );
};

export default Projects;
