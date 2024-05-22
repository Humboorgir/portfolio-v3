import PricingCard from "./pricing-card";

import Row from "@/components/ui/row";

const PricingCards = () => {
  const plans = [
    {
      name: "Website",
      description:
        "Usually built with Next.js and Tailwindcss though you can suggest your own tech stack.",
      perks: ["Delievered within 2 weeks", "Beautifully designed", "Nicely animated", "Decent price"],
      price: "80",
    },
    {
      name: "Bot",
      description: "A Discord or Telegram bot. The price heavily depends on the bot's functionality.",
      perks: ["Delievered within a week", "Fully customizable", "Performant", "Decent price"],
      price: "20",
    },
  ];

  return (
    <Row justify="center" className="flex-wrap relative">
      {plans.map((plan, i) => {
        return <PricingCard plan={plan} key={i} />;
      })}
    </Row>
  );
};

export default PricingCards;
