import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Input from "@/components/ui/input";
import TextArea from "@/components/ui/textarea";
import Column from "@/components/ui/column";
import Button from "@/components/ui/button";
import Row from "@/components/ui/row";
import Tooltip from "@/components/ui/tooltip";

import { cubicBezier, m } from "framer-motion";

import { AiOutlineMail as Mail } from "react-icons/ai";
import { IoLogoDiscord as Discord } from "react-icons/io5";
import { FaTelegram as Telegram } from "react-icons/fa6";
import { FaTwitter as Twitter } from "react-icons/fa6";
import { RiQuestionAnswerLine as Project } from "react-icons/ri";

const ContactSection = () => {
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
    <Container className="flex flex-col items-center">
      <Column items="center" className="text-center p-10 z-10 mb-4">
        <Row className="text-blue-500 !text-lg !flex !items-center space-x-1">
          <Project className="text-lg mr-1.5 mb-0.5" />
          {"So what are you waiting for?".split(" ").map((text, i) => {
            return (
              <m.span
                initial="hidden"
                whileInView="shown"
                variants={mVariants}
                transition={{ delay: (i + 1) / 14, ease: mEase, duration: 0.5 }}>
                {text}
              </m.span>
            );
          })}
        </Row>

        <MText
          initial="hidden"
          whileInView="shown"
          variants={mVariants}
          transition={{ delay: 0.9, ease: mEase, duration: 1 }}
          className="text-foreground/90 z-20 !text-4xl md:!text-6xl"
          variant="h2">
          Let's build the future!
        </MText>
        <MText
          initial="hidden"
          whileInView="shown"
          variants={mVariants}
          transition={{ delay: 1.18, ease: mEase, duration: 0.7 }}
          className="max-w-xl mb-5"
          variant="p">
          Send me a message, make sure to include necessary details like your project and how I can
          contact you back
        </MText>
        <MInput
          initial="hidden"
          whileInView="shown"
          variants={mVariants}
          transition={{ delay: 1.24, ease: mEase, duration: 0.7 }}
          className="w-full mb-2.5 self-start"
          placeholder="Name"
        />
        <MTextArea
          initial="hidden"
          whileInView="shown"
          variants={mVariants}
          transition={{ delay: 1.35, ease: mEase, duration: 0.7 }}
          className="w-full mb-3"
          placeholder="Message"
        />
        <MButton
          className="w-full bg-gradient-to-br from-blue-600 to-blue-800"
          initial="hidden"
          whileInView="shown"
          variants={mVariants}
          transition={{ delay: 1.4, ease: mEase, duration: 0.7 }}>
          Send project request <Mail className="ml-1" />
        </MButton>
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
  );
};

export default ContactSection;
