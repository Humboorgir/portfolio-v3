import Container from "@/components/ui/container";
import Column from "@/components/ui/column";
import Text from "@/components/ui/text";
import Row from "@/components/ui/row";

import { FaCheckCircle as Check } from "react-icons/fa";
import Button from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Website",
      description:
        "Usually built with Next.js and Tailwindcss though you can suggest your own tech stack.",
      perks: ["Delievered within 2 weeks", "Nicely designed", "Beautifully animated", "Decent price"],
      price: "Around 80",
    },
    {
      name: "Bot",
      description: "A Discord or Telegram bot. The price heavily depends on the bot's functionality.",
      perks: ["Delievered within 2 weeks", "Nicely designed", "Beautifully animated", "Decent price"],
      price: "Around 20",
    },
  ];
  return (
    <Container className="flex flex-col items-center mb-24">
      <Text className="text-foreground/90" variant="h2">
        Available services
      </Text>
      <Text className="max-w-xl text-center mb-4" variant="p">
        Prices might change over time. Payments are only accepted in crypto. Possible to pay after the
        project is done.
      </Text>
      <Row className="flex-wrap">
        {plans.map((plan, i) => {
          return (
            <Column
              items="start"
              className="border border-ring py-5 px-8 rounded-3xl max-w-md text-left mb-4 md:mb-0 md:mr-4"
              key={i}>
              <Text className="mb-0" variant="h3">
                {plan.name}
              </Text>
              <Text className="mb-3 text-xl md:text-2xl text-foreground/80" variant="h3">
                {plan.price}$
              </Text>
              <Text className="mb-3" variant="p">
                {plan.description}
              </Text>
              {plan.perks.map((perk, i) => {
                return (
                  <Text className="flex items-center text-foreground/60 mb-1 ml-1" variant="lead">
                    <Check className="mr-1.5" />
                    {perk}
                  </Text>
                );
              })}
              <Button className="mt-2 w-full rounded-[20px]" variant="secondary">
                Contact
              </Button>
            </Column>
          );
        })}
      </Row>
    </Container>
  );
};

export default PricingSection;
