import HomeLayout from "@/layouts/home-layout";
import HeroSection from "@/components/home/hero-section";
import ExperienceSection from "@/components/home/experience-section";
import ProjectsSection from "@/components/home/projects-section";

import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";
import Column from "@/components/ui/column";
import Button from "@/components/ui/button";

import Tooltip from "@/components/ui/tooltip";
import Row from "@/components/ui/row";

import { AiOutlineMail as Mail } from "react-icons/ai";
import { IoLogoDiscord as Discord } from "react-icons/io5";
import { FaTelegram as Telegram } from "react-icons/fa6";
import { FaTwitter as Twitter } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="antialiased">
      <HeroSection />

      <ExperienceSection />

      <ProjectsSection />

      <Container className="flex flex-col items-center">
        <Column className="p-10 z-10 bg-background rounded-[33px] mb-4">
          <Text className="text-center text-foreground/80 z-20" variant="h2">
            Want to work together?
          </Text>
          <Text className="max-w-xl text-center mb-3" variant="p">
            Send me a message, make sure to include necessary details like your project and how I can contact you back
          </Text>
          <Input className="max-w-[200px] w-full mb-2 self-start" placeholder="Name" />
          <Textarea className="w-full mb-3" placeholder="Message" />
          <Button className="w-full bg-gradient-to-br from-blue-600 to-blue-800">
            Send project request <Mail className="ml-1" />
          </Button>
        </Column>

        <Text variant="h4" className="text-foreground/80">
          Platforms you can contact me from
        </Text>
        <Row className="space-x-2 mb-10">
          <Tooltip
            items={[
              {
                name: "Telegram",
                description: "@Humboorgir",
                displayText: (
                  <Button size="sm" variant="secondary" className="text-lg text-foreground/80">
                    <Telegram className="text-2xl mr-1.5" /> Telegram
                  </Button>
                ),
              },
              {
                name: "Discord",
                description: "Humboorgir",
                displayText: (
                  <Button size="sm" variant="secondary" className="text-lg text-foreground/80">
                    <Discord className="text-2xl mr-1.5" /> Discord
                  </Button>
                ),
              },
              {
                name: "Twitter",
                description: "@Humboorgir",
                displayText: (
                  <Button size="sm" variant="secondary" className="text-lg text-foreground/80">
                    <Twitter className="text-2xl mr-1.5" /> Twitter
                  </Button>
                ),
              },
            ]}
          />
        </Row>
      </Container>
    </div>
  );
};

Home.getLayout = function getLayout(Page: React.ReactElement) {
  return <HomeLayout>{Page}</HomeLayout>;
};

export default Home;
