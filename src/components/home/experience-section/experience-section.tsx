import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { VscCode as Code } from "react-icons/vsc";
import { VscServerProcess as Frontend } from "react-icons/vsc";
import { GiAlarmClock as Clock } from "react-icons/gi";
import { PiStackLight as Stack } from "react-icons/pi";

import Image from "next/image";

const ExperienceSection = () => {
  const items = [
    {
      name: "Front-end Development",
      description:
        "Experienced with most major javascript frameworks, such as React, Svelte, Vue and meta frameworks like Next",
      image: "/laptop.svg",
    },
    {
      name: "Back-end Development",
      description: "Experienced with frameworks like Express and building Real-time apps with SocketIO",
      image: "/process.svg",
    },
    {
      name: "Always On Time",
      description:
        "Being Punctual is a very important value to me therefore I always try to keep things on time",
      image: "/clock.svg",
    },
    {
      name: "Experienced with it",
      description:
        "I've been doing web development since early 2020 and consider myself to be quite good at my job",
      image: "/expert.svg",
    },
  ];
  return (
    <>
      <Container className="mb-44 relative w-full border-l border-l-ring sm:px-0 px-0">
        <div className="pl-6">
          <Text className="flex items-center mb-3 text-foreground/50 lg:text-[17px]" variant="p">
            <Stack className="mr-1 text-lg" /> Programming since 2020
          </Text>
          <Text className="mb-10 text-foreground/90 lg:text-3xl max-w-sm font-medium" variant="h3">
            4 Years of experience, including both Backend and Frontend development
          </Text>
        </div>

        <Row className="grid place-items-center grid-cols-2">
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] border-t border-t-ring p-4
              md:flex-row bg-black/40 z-10">
            <div className="absolute left-5 -top-4 rounded-full p-1.5 border border-foreground/50 bg-background">
              <Frontend className="h-[26px] w-[26px]" />
            </div>
            <Column className="grow pt-4" items="start">
              <Text variant="h4">Front-end development</Text>
              <Text variant="p">
                Experienced with most major javascript frameworks, such as React, Svelte, Vue and meta
                frameworks like Next
              </Text>
            </Column>
            <Image
              className="self-center md:self-start h-full mt-6 md:mt-2"
              width={230}
              height={120}
              src="/laptop.svg"
              alt="Frontend development"
            />
          </Column>
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] border-t border-l border-ring p-4
              md:flex-row bg-black/40 z-10">
            <div
              className="absolute left-5 -top-4 rounded-full p-2 border border-foreground/50 bg-background
            ">
              <Code className="h-6 w-6" />
            </div>
            <Column className="grow pt-4" items="start">
              <Text variant="h4">Back-end development</Text>
              <Text variant="p">
                Experienced with frameworks like Express and Nest and building Real-time apps with
                SocketIO
              </Text>
            </Column>
            <Image
              className="self-center md:self-start h-full mt-6 md:mt-2"
              width={230}
              height={120}
              src="/process.svg"
              alt="Backend development"
            />
          </Column>

          {/* 3  */}
          <Column
            items="start"
            justify="between"
            className="relative min-h-[200px] md:h-[1px] min-w-[1px] border-t border-t-ring rounded-md p-4
              md:flex-row bg-black/40 z-10 col-span-2 w-full">
            <div
              className="absolute left-5 -top-4 rounded-full p-2 border border-foreground/50 bg-background
            ">
              <Code className="h-6 w-6" />
            </div>
            <Column className="grow pt-4" items="start">
              <Text className="lg:text-3xl font-medium" variant="h3">
                High quality code
              </Text>
              <Text className="max-w-2xl" variant="p">
                Familiar with the proper ways of writing code. The code returned will be clean and
                readable; Decent speed and bundle size will all be considered along the way.
              </Text>
            </Column>
            <Image
              className="self-center md:self-start mt-6 md:mt-2"
              width={300}
              height={220}
              src="/code.svg"
              alt="High quality code"
            />
          </Column>
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;
