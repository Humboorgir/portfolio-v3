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
import { useRef, useState } from "react";
import { toast } from "sonner";

const ContactSection = () => {
  const titleRef = useRef(null);
  const visible = useInView(titleRef);
  const [loading, setLoading] = useState(false);

  const MText = m(Text);
  const MInput = m(Input);
  const MTextArea = m(TextArea);
  const MButton = m(Button);

  const mEase = cubicBezier(0.22, 1, 0.36, 1);
  const mVariants = {
    hidden: { opacity: 0, y: 20 },
    shown: { opacity: 1, y: 0 },
  };

  const SuccessIcon = (
    <svg
      className="text-green-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      height="20"
      width="20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
        clipRule="evenodd"
      />
    </svg>
  );
  const ErrorIcon = (
    <svg
      className="text-red-400"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      height="20"
      width="20">
      <path
        fillRule="evenodd"
        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
        clipRule="evenodd"
      />
    </svg>
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const message = form.message.value;
    const sender = form.sender.value;

    setLoading(true);
    // TODO: properly test the api (look for potential bugs)
    let response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ sender, message }),
    });

    if (!response.ok) {
      setLoading(false);
      return toast.custom(() => (
        <div className="relative flex flex-col items-center bg-black rounded-md py-3 px-5 overflow-hidden border-2 border-neutral-800">
          <div
            className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
            from-transparent via-red-500 to-transparent"
            aria-hidden="true"
          />
          <Text className="flex font-bold items-center text-red-200" variant="h4">
            {ErrorIcon} <span className="ml-2">Error!</span>
          </Text>
          <Text className="text-red-100" variant="p">
            Failed to deliver your message.
          </Text>
        </div>
      ));
    }

    toast.custom(() => (
      <div className="relative flex flex-col items-center bg-black rounded-md py-3 px-5 overflow-hidden border-2 border-neutral-800">
        <div
          className="absolute bottom-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
            from-transparent via-green-500 to-transparent"
          aria-hidden="true"
        />
        <Text className="flex font-bold items-center text-green-200" variant="h4">
          {SuccessIcon} <span className="ml-2">Success!</span>
        </Text>
        <Text className="text-green-100" variant="p">
          Your message has been delivered.
        </Text>
      </div>
    ));

    setLoading(false);
    form.reset();
  }

  return (
    <Container id="contact" className="flex flex-col items-center w-full pb-24">
      <Text className="text-foreground/80 -mb-4" variant="h2">
        So what are you waiting for?
      </Text>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center relative text-center !pt-12 p-7 md:p-10 z-10 bg-blue-400/5 rounded-xl backdrop-blur-sm 
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
        <Input
          required
          disabled={loading}
          name="sender"
          className="w-full max-w-[660px] mb-2.5"
          placeholder="Name"
        />
        <TextArea
          required
          disabled={loading}
          name="message"
          className="w-full max-w-[660px] mb-5"
          placeholder="Message"
        />
        <Button
          disabled={loading}
          type="submit"
          className="w-full max-w-[660px] bg-gradient-to-br from-blue-600 to-blue-800">
          Send project request <Mail className="ml-1" />
        </Button>
      </form>

      <Text variant="h4" className="text-foreground/90 font-medium">
        Platforms you can contact me from
      </Text>

      <Row className="space-x-2 mb-10 flex-wrap justify-center">
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
