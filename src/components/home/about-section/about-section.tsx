import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import CountUp from "react-countup";

import { IoMdInformationCircle as InfoIcon } from "react-icons/io";
import { FaReact as ReactIcon } from "react-icons/fa";
import {
  SiTailwindcss as TailwindcssIcon,
  SiFramer as FramerMotionIcon,
  SiTypescript as TypescriptIcon,
} from "react-icons/si";
import { cubicBezier, m } from "framer-motion";
import Balancer from "react-wrap-balancer";

const AboutSection = () => {
  return (
    <div
      id="about"
      className="relative py-20 bg-primary/10 backdrop-blur-[1px]"
    >
      <div className="absolute -z-10 right-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-blue-900/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 left-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-primary/20 blur-3xl rounded-full" />
      <Container className="flex flex-col lg:flex-row items-center w-full">
        <Column items="start">
          {/* TODO: create a reusable component for this */}
          <span
            className="mb-3 md:mb-6 flex items-center border-2 border-green-500/10 px-3 py-1 rounded-full w-fit
            bg-green-500/10"
          >
            <InfoIcon className="h-5 w-5 text-green-500 mr-1.5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600">
              About me
            </span>
          </span>
          <Text
            className="mb-4 xs:text-4xl text-foreground/90 md:mx-0"
            variant="h2"
          >
            Hi there! I'm Iliya
          </Text>
          <Text
            className="max-w-md md:max-w-prose text-[15px] md:text-base mb-4 text-left"
            variant="p"
          >
            Greetings! I'm Iliya, a self-taught, full-stack web developer with a
            deep passion for programming. My journey with computers began at a
            really young age, and my enthusiasm has only grown over the years,
            I've been programming since early 2020 and throughout this time,
            I've learned a great deal and completed numerous projects that
            challenge and inspire me. In my early programming days, I started
            off with back-end development, and entered the world of front-end
            development shortly after. I've since transitioned to full-stack
            development which has allowed me to gain a versatile skill set. I've
            acquired a strong proficiency in web development and most major
            front-end frameworks, and as previously mentioned, I'm truly
            passionate about my work and always eager to learn new skills and
            explore innovative technologies.
          </Text>
          <Row className="grid-areas-layout grid gap-x-10 place-items-center mx-auto md:mx-0 md:w-auto">
            {[
              { area: "one", label: "Yearly contributions", amount: 1036 },
              { area: "two", label: "Github projects", amount: 31 },
              { area: "three", label: "Years of experience", amount: 4 },
            ].map(({ area, label, amount }, i) => {
              return (
                <Column style={{ gridArea: area }} key={i}>
                  <Text variant="h2">
                    <CountUp
                      start={0}
                      end={amount}
                      enableScrollSpy
                      duration={2}
                      suffix="+"
                    />
                  </Text>
                  <Text className="text-center" variant="p">
                    {label}
                  </Text>
                </Column>
              );
            })}
          </Row>
        </Column>

        <m.div
          whileInView={{
            gap: "60px",
            rotate: "12deg",
          }}
          transition={{
            duration: 2,
            ease: cubicBezier(0.16, 1, 0.3, 1),
          }}
          className="gap-4 h-fit w-fit mt-20 lg:mt-0 lg:ml-20 grid grid-cols-2 grid-rows-2 justify-center items-center"
        >
          <div className="p-3 md:p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <ReactIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
          </div>
          <div className="p-3 md:p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <TailwindcssIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-600" />
          </div>
          <div className="p-3 md:p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <TypescriptIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-400" />
          </div>
          <div className="p-3 md:p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <FramerMotionIcon className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500" />
          </div>
        </m.div>
      </Container>
    </div>
  );
};

export default AboutSection;
