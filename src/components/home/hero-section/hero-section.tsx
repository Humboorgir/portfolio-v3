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
import Balancer from "react-wrap-balancer";
const HeroSection = () => {
  return (
    <Column id="hero" className="min-w-[1px] relative z-10 text-center pt-[8.5rem] pb-36 mb-14">
      <Text
        className="flex items-center border-2 border-foreground-muted/20 px-4 py-2 rounded-full mb-2
        bg-clip-text text-transparent bg-gradient-to-b from-blue-300 to-blue-500"
        variant="lead">
        <Exclamation className="h-3.5 w-3.5 mb-0.5 text-blue-300 mr-2" /> 4 Years of programming
      </Text>
      {/* title  */}
      <Text
        className="!text-[max(50px,min(12vw,58px))] lg:!text-[max(48px,min(13vw,74px))]
         text-center z-10 leading-none py-2 bg-clip-text sm:max-md:px-14 px-6
         text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400"
        variant="h1">
        <Balancer>Turning ideas into reality</Balancer>
      </Text>

      <Text
        className="z-10 max-w-sm md:max-w-screen-md mb-5 px-6
       !text-[max(15px,min(2vw,20px))]"
        variant="lead">
        Every great project starts with an idea. Whether it's a startup, a small business, or a personal
        project and I'm here to bring those ideas to life
      </Text>

      {/* button group */}
      <Column
        className="max-w-md px-[calc(7%+24px)] md:max-w-none md:flex-row items-stretch md:items-center z-10 mb-16
      space-y-3 space-x-0 md:space-x-3 md:space-y-0 flex-wrap w-full md:w-fit">
        <Button
          className="md:w-64 md:grow-0 rounded-3xl bg-foreground/80
        hover:bg-neutral-500 text-background md:px-4 md:py-3 md:text-xl"
          href="#about"
          useNextLink={false}>
          About me
        </Button>
        <Button
          className="md:w-64 md:grow-0 rounded-3xl [box-shadow:var(--shadow-border)] md:px-4 md:py-3 md:text-xl"
          variant="outline"
          href="#contact"
          useNextLink={false}>
          Contact
        </Button>
      </Column>

      <Column>
        <Text className="text-sm sm:text-base mb-1.5" variant="p">
          Experienced with most major frameworks
        </Text>

        <Row
          className="max-w-[280px] sm:max-w-sm w-full overflow-hidden relative
         [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          {/* returns this twice, basically */}
          {[0, 0].map(() => (
            <Row key={Math.random()} className="space-x-3 mr-3 mt-2 animate-scroll">
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
