import Accordion from "@/components/ui/accordion";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

const FAQSection = () => {
  return (
    <Container className="mb-32">
      <Text className="text-foreground/90 mb-4" variant="h2">
        Frequently asked questions
      </Text>
      <Accordion>test</Accordion>
    </Container>
  );
};

export default FAQSection;
