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
import CountUp from "react-countup";
import { FaNodeJs as NodejsIcon } from "react-icons/fa";
import { IoLogoDiscord as DiscordIcon } from "react-icons/io5";

import { FaReact as ReactIcon } from "react-icons/fa";
import Row from "@/components/ui/row";

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
        <Row className="items-stretch space-x-4">
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
                className="text-center relative p-6 w-[280px] rounded-md border-2 border-blue-300/10 backdrop-blur-sm"
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
