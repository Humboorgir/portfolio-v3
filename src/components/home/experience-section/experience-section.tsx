import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { FaReact as React } from "react-icons/fa";
import { VscServerProcess as Process } from "react-icons/vsc";
import { GiAlarmClock as Clock } from "react-icons/gi";

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
      <Container>
        <Text
          className="relative mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
          variant="h2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/80">
            4 Years
          </span>{" "}
          of experience
          <div className="absolute flex bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1 w-full mt-1" />
        </Text>
      </Container>

      <Container className="mb-44">
        <Row className="flex-wrap justify-center">
          {items.map((item) => {
            return (
              <Column
                items="start"
                justify="between"
                className="min-h-[200px] md:h-[1px] min-w-[1px] border border-ring rounded-md max-w-xl p-4 mb-4 mr-4
              md:flex-row">
                <Column className="grow" items="start">
                  <div className="rounded-full p-1 bg-white/80 mb-2">
                    <React className="text-2xl text-black" />
                  </div>
                  <Text variant="h4">{item.name}</Text>
                  <Text variant="p">{item.description}</Text>
                </Column>
                <Image
                  className="self-center md:self-start h-full mt-6 md:mt-2"
                  width={230}
                  height={120}
                  src={item.image}
                  alt={item.name}
                />
              </Column>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default ExperienceSection;
