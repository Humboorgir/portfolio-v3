import HomeLayout from "@/layouts/home-layout";
import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";

import Ring from "@/components/svg/ring";

import { FaReact as React } from "react-icons/fa";
import { VscServerProcess as Process } from "react-icons/vsc";
import { GiAlarmClock as Clock } from "react-icons/gi";
import { LuComponent as Component } from "react-icons/lu";
import { LuCommand as Command } from "react-icons/lu";
import { RiRobot2Line as Robot } from "react-icons/ri";

import Image from "next/image";

const Home = () => {
  return (
    // TODO: organize the code here
    <div className="antialiased">
      <Column className="text-center bg-grid-white/[0.15] relative left-0 right-0 top-0 bottom-0 py-36 mb-14 px-6">
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center
         dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <Text
          className="z-10 py-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500"
          variant="h1">
          Turning ideas into reality
        </Text>
        <Text className="z-10 text-[19px] max-w-screen-md mb-4" variant="lead">
          Every great project starts with an idea. Whether it's a startup, a small business, or a
          personal project and I'm here to bring those ideas to life
        </Text>
        <Row className="z-10 space-x-3 flex-wrap w-full md:w-fit">
          <Button className="md:w-64 grow md:grow-0" size="lg">
            About me
          </Button>
          <Button className="md:w-64 grow md:grow-0" size="lg" variant="outline">
            Contact
          </Button>
        </Row>
      </Column>

      <Container>
        <Text
          className="relative mb-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500"
          variant="h2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/80">
            4 Years
          </span>{" "}
          of experience
          <div className="absolute flex bg-gradient-to-r from-transparent via-sky-500 to-transparent h-1 w-full mt-1" />
        </Text>
      </Container>

      <Container className="mb-44">
        <Row className="flex-wrap">
          <Row
            items="start"
            className="h-[200px] border border-ring rounded-md flex max-w-xl p-4 mb-4 mr-4">
            <Column items="start">
              <div className="rounded-full p-1 bg-white/80 mb-2">
                <React className="text-2xl text-black" />
              </div>
              <Text variant="h4">Front-end Development</Text>
              <Text variant="p">
                Experienced with most major javascript frameworks, such as React, Svelte, Vue and meta
                frameworks like Next
              </Text>
            </Column>
            <Image className="h-full mt-2" width={230} height={120} src="/laptop.svg" alt="laptop" />
          </Row>
          <Row
            items="start"
            className="min-h-[1px] h-[200px] border border-ring rounded-md flex max-w-xl mb-4 p-4">
            <Column items="start">
              <div className="rounded-full p-1 bg-white/80 mb-2">
                <Process className="text-2xl text-black" />
              </div>
              <Text variant="h4">Back-end Development</Text>
              <Text variant="p">
                Experienced with frameworks like Express and building Real-time apps with SocketIO
              </Text>
            </Column>
            <Image className="h-full mt-2" width={230} height={120} src="/process.svg" alt="laptop" />
          </Row>
          <Row
            items="start"
            className="min-h-[1px] h-[200px] border border-ring rounded-md flex max-w-xl p-4 mr-4">
            <Column items="start">
              <div className="rounded-full p-1 bg-white/80 mb-2">
                <Clock className="text-2xl text-black" />
              </div>
              <Text variant="h4">Always On Time</Text>
              <Text variant="p">
                Being Punctual is a very important value to me therefore I always try to keep things on
                time
              </Text>
            </Column>
            <Image className="h-full mt-2" width={230} height={120} src="/clock.svg" alt="laptop" />
          </Row>
          <Row
            items="start"
            className="min-h-[1px] h-[200px] border border-ring rounded-md flex max-w-xl p-4">
            <Column items="start">
              <div className="rounded-full p-1 bg-white/80 mb-2">
                <Process className="text-2xl text-black" />
              </div>
              <Text variant="h4">Experienced with it</Text>
              <Text variant="p">
                I've been doing web development since early 2020 and consider myself to be quite good at
                my job
              </Text>
            </Column>
            <Image className="h-full mt-2" width={230} height={120} src="/expert.svg" alt="laptop" />
          </Row>
        </Row>
      </Container>

      {/* Projects section  */}
      <Container className="relative my-24">
        <Ring className="w-[70vw] md:w-[78vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
        <Text
          className="relative bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500"
          variant="h2">
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary to-primary/80">
            Projects
          </span>{" "}
          I have built
          <br />
          in the past
        </Text>
      </Container>

      {/* projects  */}
      <Container>
        <Column className="space-y-12">
          <Row className="relative p-5 pl-14 min-h-[1px]" items="start">
            {/* logo and line  */}
            <div className="mt-5 h-full absolute left-0 top-0">
              <div className="bg-primary/40 border border-primary/80 rounded-full p-1">
                <Component className="text-3xl text-white" />
              </div>
              <svg
                viewBox={`0 0 3 100%`}
                width="3"
                height="100%"
                className="absolute left-[50%] translate-x-[-50%]">
                <path
                  d={`M 1 0V -36 l 3 24 V 300 l -18 24V 300`}
                  fill="hsl(var(--primary))"
                  className="w-1"
                  fillOpacity="0.5"></path>
              </svg>
            </div>
            <Column className="mr-4" items="start">
              <Text className="text-foreground/90" variant="h3">
                FlickerUI
              </Text>
              <Text variant="p">
                Collection of premade, animated React components built with Tailwindcss and
                Framer-motion. Comes with a CLI used to add components to your project. Also a nice
                looking documentation website.
              </Text>
            </Column>
            <Image
              className="h-full w-[50%] rounded-lg"
              src="/flickerUI.png"
              alt="FlickerUI"
              width={900}
              height={800}
            />
          </Row>

          <Row className="p-5" items="start">
            <Image
              className="h-full w-[50%] rounded-lg"
              src="/flickerUI.png"
              alt="FlickerUI"
              width={900}
              height={800}
            />
            <Column className="ml-4" items="start">
              <Text className="text-foreground/90" variant="h3">
                Sweet's Dashboard
              </Text>
              <Text variant="p">
                Sweet is my verified Discord bot with hundreds of active servers. This is its web
                dashboard built with NextJS, NextAuth, Redux, Tailwindcss and Framer-motion. Has anything
                you would expect in a web application: State management, Data fetching, etc
              </Text>
            </Column>
          </Row>

          <Row className="p-5" items="start">
            <Column className="mr-4" items="start">
              <Text className="text-foreground/90" variant="h3">
                Sweet
              </Text>
              <Text variant="p">
                AI-Powered, Verified Discord Moderation bot. Detects commands based on user's natural
                language input and responds accordingly. Built with NodeJS, Tensorflow and Python.
              </Text>
            </Column>
            <Image
              className="h-full w-[50%] rounded-lg"
              src="/flickerUI.png"
              alt="FlickerUI"
              width={900}
              height={800}
            />
          </Row>
        </Column>
      </Container>
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
