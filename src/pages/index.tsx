import HomeLayout from "@/layouts/home-layout";
import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";
import Button from "@/components/ui/button";

import { FaReact as React } from "react-icons/fa";
import { VscServerProcess as Process } from "react-icons/vsc";
import { GiAlarmClock as Clock } from "react-icons/gi";

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

      <Container>
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
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
