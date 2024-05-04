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

const AboutSection = () => {
  return (
    <div className="relative py-20 bg-primary/10 backdrop-blur-[1px]">
      <div className="absolute -z-10 right-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-blue-900/20 blur-3xl rounded-full" />
      <div className="absolute -z-10 left-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-primary/20 blur-3xl rounded-full" />
      <Container className="flex items-center w-full">
        <Column items="start">
          {/* TODO: create a reusable component for this */}
          <span
            className="mb-6 flex items-center border-2 border-green-500/10 px-3 py-1 rounded-full w-fit
            bg-green-500/10">
            <InfoIcon className="h-5 w-5 text-green-500 mr-1.5" />
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-green-400 to-green-600">
              About me
            </span>
          </span>
          <Text className="mb-4 text-foreground/90" variant="h2">
            Hi there! I'm Iliya
          </Text>
          <Text className="max-w-prose mb-4" variant="p">
            Hey there! I'm Iliya, a 15 year old high school student and full stack web developer from
            Iran. I've been programming since early 2020 or in other words, since I had just turned 12!
            I've been using computers since the age of 5 and have always shown a huge passion for them.
            During all these years I've learned a lot and have made countless amounts of projects. In my
            early days of programming, I started off by back end development however, It's been 1.5 years
            since I've been primarily learning and working on front end development (alongside with back
            end development) and have managed to learn CSS and most major frontend frameworks to a very
            high degree and as mentioned earlier, I'm very passionate towards my work and always open to
            gain new skills.
          </Text>
          <Row className="space-x-10">
            {[
              { label: "Discord members", amount: 1526 },
              { label: "Open source projects", amount: 116 },
              { label: "Satisfied clients", amount: 96 },
            ].map(({ label, amount }) => {
              return (
                <Column key={amount}>
                  <Text variant="h2">
                    <CountUp start={0} end={amount} enableScrollSpy duration={2} suffix="+" />
                  </Text>
                  <Text variant="p">{label}</Text>
                </Column>
              );
            })}
          </Row>
        </Column>

        <m.div
          whileInView={{
            gap: "80px",
            rotate: "12deg",
          }}
          transition={{
            duration: 2,
            ease: cubicBezier(0.16, 1, 0.3, 1),
          }}
          className="gap-4 h-fit w-fit ml-20 grid grid-cols-2 grid-rows-2">
          <div className="p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <ReactIcon className="w-16 h-16 text-blue-500" />
          </div>
          <div className="p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <TailwindcssIcon className="w-16 h-16 text-blue-600" />
          </div>
          <div className="p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <TypescriptIcon className="w-16 h-16 text-blue-400" />
          </div>
          <div className="p-5 bg-gradient-to-b from-blue-950 to-transparent w-fit h-fit rounded-full">
            <FramerMotionIcon className="w-16 h-16 text-blue-500" />
          </div>
        </m.div>
      </Container>
    </div>
  );
};

export default AboutSection;
