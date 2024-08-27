import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";

import { FaNodeJs as NodejsIcon, FaReact as ReactIcon } from "react-icons/fa";
import { IoLogoDiscord as DiscordIcon } from "react-icons/io5";
import Balancer from "react-wrap-balancer";

const ExperienceSection = () => {
  return (
    <>
      <Container className="relative pt-20 flex flex-col items-center">
        <div
          className="absolute top-0 left-0 h-[200px] w-[100%] max-w-[300px]
   bg-gradient-to-r from-primary/40 to-blue-200/30 blur-[100px]"
        />
        <span
          className="mb-6 flex items-center border-2 border-blue-500/10 px-4 py-1.5 rounded-full
        bg-blue-500/10 w-fit"
        >
          <div className="h-3.5 w-3.5 mb-0.5 rounded-full bg-blue-500 animate-pulse mr-2" />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500">
            Professions
          </span>
        </span>
        <Text className="text-center text-base lg:text-lg px-2" variant="p">
          Four years of web development
        </Text>
        <Text
          className="mb-6 text-foreground/80 text-center text-4xl lg:text-[54px] leading-tight"
          variant="h2"
        >
          My Expertises
        </Text>
      </Container>

      <Container className="pb-20">
        <Row className="items-stretch justify-center flex-wrap">
          {[
            {
              label: "Front-end Development",
              description:
                "Experienced with React, Svelte, Vue and almost all major frameworks. also experienced with popular React state managers like Redux and Zustand.",
              Icon: ReactIcon,
            },
            {
              label: "Back-end Development",
              description:
                "Experienced with Node.js, Express and Nest.js. Familiar with commonly used back end systems like JWT and session authentication.",
              Icon: NodejsIcon,
            },
            {
              label: "Discord bot Development",
              description:
                "Experienced with building all sorts of Discord bots. Including moderation, music, games, entertainment and fully customized Discord bots.",
              Icon: DiscordIcon,
            },
          ].map(({ label, description, Icon }) => {
            return (
              <Column
                className="md:mr-4 mb-6 text-center relative p-6 w-full max-w-[440px] md:w-[44%] md:max-w-[350px] rounded-md border-2 border-blue-300/10 backdrop-blur-sm"
                key={label}
              >
                <div
                  className="absolute top-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
            from-transparent via-blue-500 to-transparent"
                  aria-hidden="true"
                />
                <Column className="z-10 h-full">
                  {/* icon  */}
                  <div className="relative mt-2 p-2 mb-3 bg-gradient-to-br from-neutral-800 to-background rounded-md">
                    <div
                      className="absolute left-[53%] top-[53%] translate-x-[-50%] translate-y-[-50%]
              h-full w-full bg-gradient-to-b from-blue-600/60 to-blue-800 -z-10 rounded-md"
                    />
                    <Icon className="h-16 w-16 text-gradient-to-b from-red-500 to-blue-200" />
                  </div>
                  {/* title  */}
                  <Text
                    className="bg-clip-text text-3xl text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400
                    max-w-[240px]"
                    variant="h3"
                  >
                    {label}
                  </Text>
                  <Text
                    variant="lead"
                    className="text-[15px] max-w-[300px] pb-5"
                  >
                    {description}
                  </Text>

                  <Button
                    href="#projects"
                    useNextLink={false}
                    className="mt-auto w-[calc(100%-16px)] text-foreground/80 bg-transparent bg-gradient-to-br from-blue-800 to-blue-950"
                  >
                    See work samples
                  </Button>
                </Column>
              </Column>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;
