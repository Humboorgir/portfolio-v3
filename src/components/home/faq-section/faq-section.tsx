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
    <Container className="mb-32">
      <Text className="text-foreground/90 mb-4" variant="h2">
        Frequently asked questions
      </Text>
      <Accordion items={accordionItems} />
    </Container>
  );
};

export default FAQSection;
