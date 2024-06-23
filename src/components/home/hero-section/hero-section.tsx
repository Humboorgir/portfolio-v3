import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";

import CountUp from "react-countup";
import React from "react";
import { FaReact as ReactIcon } from "react-icons/fa";
import {
  SiTypescript as Typescript,
  SiNextdotjs as Next,
  SiSvelte as Svelte,
  SiFramer as FramerMotion,
  SiBootstrap as Bootstrap,
  SiMui as Mui,
  SiNodedotjs as NodeJS,
  SiBun as Bun,
  SiExpress as Express,
  SiSocketdotio as SocketIO,
  SiMongodb as MongoDB,
  SiPostgresql as PostgreSQL,
  SiPrisma as Prisma,
} from "react-icons/si";
import { FaVuejs as Vue } from "react-icons/fa6";
import { SiTailwindcss as Tailwindcss } from "react-icons/si";
import { FaExclamationTriangle as Exclamation } from "react-icons/fa";
const HeroSection = () => {
  return (
    <Column className="relative z-10 text-center pt-[8.5rem] pb-36 mb-14 px-6">
      <Text
        className="flex items-center border-2 border-foreground-muted/20 px-4 py-2 rounded-full mb-2
        bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500"
        variant="lead">
        <Exclamation className="h-3.5 w-3.5 mb-0.5 text-blue-300 mr-2" /> 4 Years of programming
      </Text>
      {/* title  */}
      <Text
        className="flex flex-wrap justify-center text-center z-10 text-[42px] leading-none py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h1">
        Turning{" "}
        <span
          style={{
            textShadow: "-1px -1px 0 #3b82f6, 1px -1px 0 #3b82f6, -1px 1px 0 #3b82f6, 1px 1px 0 #3b82f6",
          }}
          className="mx-3 md:mx-3.5 text-blue-950 bg-transparent">
          ideas
        </span>
        into{" "}
        <span className="ml-3 md:ml-3.5 relative">
          <div className="absolute left-0 right-0 top-0 bottom-0 bg-blue-500/30 blur-3xl -z-10" />
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400">
            reality
          </span>
        </span>
      </Text>

      <Text className="z-10 text-base md:text-lg md:text-[19px] max-w-screen-md mb-5" variant="lead">
        Every great project starts with an idea. Whether it's a startup, a small business, or a personal
        project and I'm here to bring those ideas to life
      </Text>

      {/* button group */}
      <Column
        className="md:flex-row items-stretch md:items-center z-10 px-6 sm:px-10 mb-10
      space-y-3 space-x-0 md:space-x-3 md:space-y-0 flex-wrap w-full md:w-fit">
        <Button
          className="md:w-64 md:grow-0 rounded-3xl bg-foreground/80
        hover:bg-neutral-500 text-background"
          size="lg">
          About me
        </Button>
        <Button
          className="md:w-64 md:grow-0 rounded-3xl [box-shadow:var(--shadow-border)]"
          size="lg"
          variant="outline">
          Contact
        </Button>
      </Column>
      <Column
        className="max-w-sm items-start relative overflow-hidden pb-2.5
        [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        <Text className="self-center mb-1.5" variant="p">
          Experienced with most major frameworks
        </Text>

        <Row>
          {/* return this twice, basically */}
          {[0, 0].map(() => (
            <Row key={Math.random()} className="space-x-3 mt-2 mr-3 animate-scroll">
              {[
                Typescript,
                ReactIcon,
                Next,
                Svelte,
                Vue,
                Tailwindcss,
                Mui,
                Bootstrap,
                FramerMotion,
                NodeJS,
                Bun,
                Express,
                SocketIO,
                MongoDB,
                PostgreSQL,
                Prisma,
              ].map((Icon, i) => {
                return <Icon key={i} className="w-9 h-9 rounded-md" />;
              })}
            </Row>
          ))}
        </Row>
      </Column>
    </Column>
  );
};

export default HeroSection;
