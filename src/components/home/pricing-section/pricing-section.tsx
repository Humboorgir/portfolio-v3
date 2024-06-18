import PricingCards from "./pricing-cards";

import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

const PricingSection = () => {
  return (
    <Container className="relative flex flex-col items-center mb-44">
      <div
        className="absolute top-0 left-0 h-[200px] w-[400px]
   bg-gradient-to-r from-primary/40 to-blue-200/30 blur-[140px]"
      />
      <span
        className="mb-3 flex items-center justify-between border-2 border-blue-500/10 px-4 py-1.5 rounded-full
        bg-blue-500/10 w-fit">
        <div className="h-3.5 w-3.5 mb-0.5 rounded-full bg-blue-500 animate-pulse mr-3" />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500">
          Pricing
        </span>
      </span>
      <Text className="text-foreground/90" variant="h2">
        Available services
      </Text>
      <Text className="max-w-xl text-center mb-8" variant="p">
        Prices might change over time. Payments are only accepted in crypto. Possible to pay after the
        project is done.
      </Text>
      <PricingCards />
    </Container>
  );
};

export default PricingSection;
