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
import Title from "./title";

const ProjectsSection = () => {
  const projects = [
    {
      name: "FlickerUI Components",
      description:
        "Collection of premade, animated React components built with Tailwindcss and Framer-motion. Comes with a CLI used to add components to your project. Also a nice looking documentation website.",
      icon: Component,
      image: "/flickerUI.png",
      repo: "https://github.com/Humboorgir/flicker-ui-website",
    },
    {
      name: "Sweet's Dashboard",
      description:
        "Sweet is my verified Discord bot with hundreds of active servers. This is its web dashboard built with NextJS, NextAuth, Redux, Tailwindcss and Framer-motion. Has anything you would expect in a web application: State management, Data fetching, etc",
      icon: Command,
      image: "/sweetDashboard.png",
      repo: "https://github.com/Humboorgir/Sweet-dashboard",
    },
    {
      name: "Sweet bot",
      description:
        "AI-Powered, Verified Discord Moderation bot. Detects commands based on user's natural language input and responds accordingly. Built with NodeJS, Tensorflow and Python.",
      icon: Robot,
      image: "/sweet.png",
      repo: "https://github.com/humboorgir/sweet",
    },
  ];
  return (
    <>
      <Title />
      <Container className="flex flex-col items-center mb-36">
        {/* projects  */}
        {projects.map((project, i) => {
          const isEven = (i + 1) % 2 == 0;
          return <Project key={project.repo} project={project} isEven={isEven} />;
        })}

        <Row className="relative items-stretch w-full justify-end px-5 h-fit min-h-[1.5px]">
          <div
            className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-l
            from-blue-400/30 to-transparent blur-[100px]"
            aria-hidden="true"
          />
          <Column className="z-10 items-end mb-36">
            <Text className="text-foreground/90" variant="h3">
              More Projects
            </Text>
            <Text className="mb-3 text-right max-w-xl" variant="p">
              There's more to discover! If you're interested, feel free to explore my Github account,
              where you can find a number of projects I've worked on.
            </Text>
            <Row>
              <Button
                className="relative w-[200px] rounded-xl border border-foreground/10 backdrop-blur-sm"
                href="https://github.com/humboorgir"
                variant="ghost"
                openInNewTab>
                <div
                  className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
            from-transparent via-blue-500 to-transparent"
                  aria-hidden="true"
                />
                Github page <Github className="mb-[3px] ml-2" />
              </Button>
            </Row>
          </Column>

          <Column className="relative mt-3.5 ml-7">
            {/* icon */}
            <div className="bg-blue-400 blur-[1px] w-4 h-4 rounded-full mb-1.5" />
            <div className="absolute right-0 top-0 bg-blue-400 blur-md w-[20px] h-[20px] rounded-full mb-1.5" />
            {/* line  */}
            <div
              className="w-[2px] h-full bg-gradient-to-b
            from-transparent via-20% via-blue-400 to-100% to-transparent blur-[1px]"
              aria-hidden="true"
            />
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default ProjectsSection;
