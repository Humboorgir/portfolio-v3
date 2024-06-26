import Link from "./link";

import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { FaDiscord as Discord } from "react-icons/fa";
import { SiGithub as Github } from "react-icons/si";
import { FaTelegram as Telegram } from "react-icons/fa6";
import { FaYoutube as Youtube } from "react-icons/fa6";
import { MdOutlineWorkHistory as Work } from "react-icons/md";
import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

const Footer = () => {
  return (
    <div className="relative border-t-2 border-blue-400/10 bg-blue-400/5">
      <div
        className="absolute top-0 left-0 h-[200px] w-[50%]
          bg-gradient-to-r from-primary/40 to-blue-200/10 blur-[140px]"
        aria-hidden
      />
      <Container className="flex flex-col items-center justify-center px-8 w-full py-8">
        <Row className="self-start justify-center space-x-14 w-full mb-12 flex-wrap">
          <Column className="mr-8 items-start">
            <Row>
              <Work className="h-16 w-16 mr-1 mb-2" />{" "}
              <Text className="text-foreground/80" variant="h2">
                Iliya
              </Text>
            </Row>
            <Text className="mb-8 max-w-md" variant="lead">
              "I'm Iliya, Your average front-end developer. My job is to turn ideas into reality and help
              construst the bright future."
            </Text>
          </Column>
          <Column items="start">
            <Text className="font-bold text-foreground/90" variant="h4">
              Quick links
            </Text>
            {["Home", "About", "Pricing", "FAQ", "Contact"].map((item) => (
              <Button size="sm" className="!p-0 text-foreground/70 font-medium mb-0.5" variant="link">
                {item}
              </Button>
            ))}
          </Column>
          <Column items="start">
            <Text className="font-bold text-foreground/90" variant="h4">
              Quick links
            </Text>
            {["Home", "About", "Pricing", "FAQ", "Contact"].map((item) => (
              <Button size="sm" className="!p-0 text-foreground/70 font-medium mb-0.5" variant="link">
                {item}
              </Button>
            ))}
          </Column>
          <Column className="ml-8" items="start">
            <Text className="font-bold text-foreground/90" variant="h4">
              Repository
            </Text>
            {["Github repo", "Github issues", "Github PRs", "Github commit history", "My github"].map(
              (item) => (
                <Button size="sm" className="!p-0 text-foreground/70 font-medium mb-0.5" variant="link">
                  {item}
                </Button>
              )
            )}
          </Column>
        </Row>
        <Row className="mb-3">
          {[Github, Discord, Telegram, Youtube].map((Icon) => (
            <div className="group relative mr-3 cursor-pointer">
              <div
                className="opacity-0 group-hover:opacity-100 absolute top-0 left-0 right-0 bottom-0 bg-blue-500/40 blur-lg
            transition-all duration-[350ms]"
              />
              <Icon
                className="h-12 w-12 p-2 border border-neutral-400/40 rounded-full 
             group-hover:-translate-y-0.5 transition-all duration-[250ms]"
              />
            </div>
          ))}
        </Row>
        <Text className="max-w-xs text-center" variant="p">
          Copyright © Iliya portfolio 2024 - all rights reserved
        </Text>
      </Container>
    </div>
  );
};

export default Footer;
