import HomeLayout from "@/layouts/home-layout";
import HeroSection from "@/components/home/hero-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";
import PricingSection from "@/components/home/pricing-section";
import FAQSection from "@/components/home/faq-section";
import ContactSection from "@/components/home/contact-section";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import CountUp from "react-countup";
import { FaNodeJs as NodejsIcon } from "react-icons/fa";
import { IoLogoDiscord as DiscordIcon } from "react-icons/io5";
import { IoMdInformationCircle as InfoIcon } from "react-icons/io";
import { FaReact as ReactIcon } from "react-icons/fa";
import {
  SiTailwindcss as TailwindcssIcon,
  SiFramer as FramerMotionIcon,
  SiTypescript as TypescriptIcon,
} from "react-icons/si";
import { cubicBezier, m } from "framer-motion";
import Image from "next/image";

const Home = () => {
  return (
    <div className="relative antialiased">
      {/* background grid  */}
      <svg className="absolute top-0 left-0 bottom-0 right-0 opacity-20" width="100%" height="100%">
        <pattern id="smallGrid" width="25" height="25" patternUnits="userSpaceOnUse">
          <circle cx="10" cy="10" r="1" fill="#FFFFFF" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#smallGrid)" />
      </svg>

      <div
        className="absolute top-0 left-[50%] translate-x-[-50%] h-[200px] w-[600px]
       bg-gradient-to-r from-primary/80 to-accent/60 blur-[140px]"
      />
      <HeroSection />

      <div className="relative py-20 bg-primary/10 backdrop-blur-[1px]">
        <div className="absolute -z-10 right-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-blue-900/20 blur-3xl rounded-full" />
        <div className="absolute -z-10 left-0 top-[50%] translate-y-[-50%] w-[50%] h-full bg-primary/20 blur-3xl rounded-full" />
        <Container className="flex items-center w-full">
          <Column items="start">
            <span
              className="mb-6 flex items-center border-2 border-green-500/20 px-3 py-1 rounded-full w-fit
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
              During all these years I've learned a lot and have made countless amounts of projects. In
              my early days of programming, I started off by back end development however, It's been 1.5
              years since I've been primarily learning and working on front end development (alongside
              with back end development) and have managed to learn CSS and most major frontend frameworks
              to a very high degree and as mentioned earlier, I'm very passionate towards my work and
              always open to gain new skills.
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

      <Container className="relative py-20 flex flex-col items-center">
        <div
          className="absolute top-0 left-0 h-[200px] w-[400px]
       bg-gradient-to-r from-primary/50 to-blue-200/30 blur-[140px]"
        />
        <span
          className="mb-4 flex items-center border-2 border-foreground-muted/20 px-4 py-1.5 rounded-full
      bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600 w-fit">
          <div className="h-3.5 w-3.5 mb-0.5 rounded-full bg-blue-500 animate-pulse mr-2" />
          Professions
        </span>
        <Text variant="lead">Doing Full-stack web development since 2020</Text>
        <Text className="mb-4 text-foreground/80" variant="h2">
          Fields I'm experienced at
        </Text>
        <Row className="items-stretch justify-center flex-wrap">
          {[
            {
              label: "Front-end Development",
              description:
                "Experienced with React, Svelte, Vue and almost all major frameworks. also with popular React state managers like Redux and Zustand.",
              Icon: ReactIcon,
            },
            {
              label: "Back-end Development",
              description:
                "Experienced with Node.js, Express and Nest.js. Familiar with commonly used back end systems like JWT refresh tokens",
              Icon: NodejsIcon,
            },
            {
              label: "Discord bot Development",
              description:
                "Experienced with building all sorts of discord bots. Including moderation, music and entertainment.",
              Icon: DiscordIcon,
            },
          ].map(({ label, description, Icon }) => {
            return (
              <Column
                className="mr-4 mb-4 text-center relative p-6 w-[280px] rounded-md border-2 border-blue-300/10 backdrop-blur-sm"
                key={label}>
                <div
                  className="absolute top-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
                from-transparent via-blue-500 to-transparent"
                  aria-hidden="true"
                />
                <Column className="z-10">
                  <div className="relative mt-2 p-2 mb-3 bg-gradient-to-br from-neutral-800 to-background rounded-md">
                    <div
                      className="absolute left-[53%] top-[53%] translate-x-[-50%] translate-y-[-50%]
                  h-full w-full bg-gradient-to-b from-blue-600/60 to-blue-800 -z-10 rounded-md"
                    />
                    <Icon className="h-16 w-16 text-gradient-to-b from-red-500 to-blue-200" />
                  </div>
                  <Text
                    className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400"
                    variant="h3">
                    {label}
                  </Text>
                  <Text variant="lead" className="text-[15px]">
                    {description}
                  </Text>
                </Column>
              </Column>
            );
          })}
        </Row>
      </Container>

      <ExperienceSection />

      <ProjectsSection />

      <PricingSection />

      <FAQSection />

      <ContactSection />
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
