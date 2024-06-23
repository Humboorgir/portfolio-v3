import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textarea";
import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";
import Tooltip from "@/components/ui/tooltip";

import { cubicBezier, m, useInView } from "framer-motion";

import { AiOutlineMail as Mail } from "react-icons/ai";
import { IoLogoDiscord as Discord } from "react-icons/io5";
import { FaTelegram as Telegram } from "react-icons/fa6";
import { FaTwitter as Twitter } from "react-icons/fa6";
import { RiQuestionAnswerLine as Project } from "react-icons/ri";
import { useRef } from "react";

const ContactSection = () => {
  const titleRef = useRef(null);
  const visible = useInView(titleRef);

  const MText = m(Text);
  const MInput = m(Input);
  const MTextArea = m(TextArea);
  const MButton = m(Button);

  const mEase = cubicBezier(0.22, 1, 0.36, 1);
  const mVariants = {
    hidden: { opacity: 0, y: 20 },
    shown: { opacity: 1, y: 0 },
  };

  return (
    <Container className="flex flex-col items-center w-full pb-24">
      <Text className="text-foreground/80 -mb-4" variant="h2">
        So what are you waiting for?
      </Text>
      <Column
        items="center"
        className="relative text-center !pt-12 p-7 md:p-10 z-10 bg-blue-400/5 rounded-xl backdrop-blur-sm 
        border-2 border-blue-400/10 mb-8 w-full">
        <div
          className="absolute top-0 left-0 h-[200px] w-[400px] max-w-[80vw]
          bg-gradient-to-r from-primary/40 to-blue-200/30 blur-[140px]"
          aria-hidden
        />

        <span
          className="mb-5 flex items-center justify-between border-2 border-blue-500/10 px-5 py-1.5 rounded-full
        bg-blue-500/10 w-fit">
          <div className="h-3.5 w-3.5 mb-0.5 rounded-full bg-blue-500 animate-pulse mr-3" />
          <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500">
            Contact
          </span>
        </span>

        <Text className="text-foreground/90 z-20" variant="h2">
          Let's build the future!
        </Text>
        <Text className="max-w-prose text-center mb-5" variant="p">
          Send me a message, make sure to include necessary details like your project and how I can
          contact you back
        </Text>
        <Input className="w-full max-w-[660px] mb-2.5" placeholder="Name" />
        <TextArea className="w-full max-w-[660px] mb-5" placeholder="Message" />
        <Button className="w-full max-w-[660px] bg-gradient-to-br from-blue-600 to-blue-800">
          Send project request <Mail className="ml-1" />
        </Button>
      </Column>

      <Text variant="h4" className="text-foreground/90 font-medium">
        Platforms you can contact me from
      </Text>
      <Row className="space-x-2 mb-10">
        <Tooltip
          items={[
            {
              name: "Telegram",
              description: "@Humboorgir",
              displayText: (
                <Button
                  size="default"
                  variant="ghost"
                  className="text-lg bg-transparent text-blue-200 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500/30 blur-lg" />
                  <Telegram className="text-2xl mr-1.5" /> Telegram
                </Button>
              ),
            },
            {
              name: "Discord",
              description: "Humboorgir",
              displayText: (
                <Button
                  size="default"
                  variant="ghost"
                  className="text-lg bg-transparent text-blue-200 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500/30 blur-lg" />
                  <Discord className="text-2xl mr-1.5" /> Discord
                </Button>
              ),
            },
            {
              name: "Twitter",
              description: "@Humboorgir",
              displayText: (
                <Button
                  size="default"
                  variant="ghost"
                  className="text-lg bg-transparent text-blue-200 relative">
                  <div className="absolute top-0 left-0 right-0 bottom-0 bg-blue-500/30 blur-lg" />
                  <Twitter className="text-2xl mr-1.5" /> Twitter
                </Button>
              ),
            },
          ]}
        />
      </Row>
    </Container>
  );
};

export default ContactSection;
