import PricingCards from "./pricing-cards";

import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

const PricingSection = () => {
  return (
    <Container className="flex flex-col items-center mb-24">
      <Text className="text-foreground/90" variant="h2">
        Available services
      </Text>
      <Text className="max-w-xl text-center mb-4" variant="p">
        Prices might change over time. Payments are only accepted in crypto. Possible to pay after the
        project is done.
      </Text>
      <PricingCards />
    </Container>
  );
};

export default PricingSection;
