import Accordion from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

const FAQSection = () => {
  const accordionItems = [
    {
      trigger: "Where can I contact you?",
      content: `Telegram and Discord. I'm more active on Discord and its more
       likely for you to get a reponse there so it would be nice if you could contact me from there.`,
    },
    {
      trigger: "How long will the project take?",
      content: `Depends on what your project is, a bot could take anywhere from 2 days to a few weeks.
  Web apps are similar but they usually take a bit more. A personal website could take about a
  week or two, whereas an interactive application could take around a month.`,
    },
    {
      trigger: "What Tech Stack do you use?",
      content: `Can work with most major frameworks and technologies, but I usually use 
      Next.js (or React) for the Front-End, Tailwindcss for the UI, and Framer-motion for
       fancy animations. Might also use a Backend framework if necessary.`,
    },
    {
      trigger: "How is the payment process done?",
      content: `Payment is only accepted with crypto for private reasons. It has been made possible to 
      pay after the project is done to ensure nobody gets scammed. It only takes a few minutes to setup a
      crypto wallet (if you don't already have one) and I will personally be here for you if you need
      help with anything.`,
    },
  ];

  return (
    <Container className="relative mb-32 w-full max-w-screen-md">
      <div
        className="absolute top-0 left-0 h-[200px] w-[400px]  max-w-[80vw]
          bg-gradient-to-r from-primary/40 to-blue-200/30 blur-[140px]"
      />
      <span
        className="mb-5 flex items-center justify-between border-2 border-blue-500/10 px-5 py-1.5 rounded-full
        bg-blue-500/10 w-fit">
        <div className="h-3.5 w-3.5 mb-0.5 rounded-full bg-blue-500 animate-pulse mr-3" />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500">
          FAQ
        </span>
      </span>
      <Text className="relative text-foreground/90 mb-3" variant="h2">
        Frequently asked questions
      </Text>
      <Text className="text-lg text-foreground/80 mb-8" variant="p">
        Don't see your question here? Send me a private message on the listed socials
      </Text>
      <Accordion className="z-10" items={accordionItems} />
    </Container>
  );
};

export default FAQSection;
