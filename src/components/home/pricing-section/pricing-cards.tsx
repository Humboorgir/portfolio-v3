import PricingCard from "./pricing-card";

import Row from "@/components/ui/row";

import { AnimatePresence, cubicBezier, m } from "framer-motion";
import { useState, useRef } from "react";

const PricingCards = () => {
  const [cardRect, setCardRect] = useState<null | DOMRect>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const containerRect = containerRef.current?.getBoundingClientRect();

  const handleCardHover = (e: any) => {
    setCardRect(e.target?.getBoundingClientRect());
  };

  const handleMouseLeave = (e: any) => {
    setCardRect(null);
  };

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
      perks: ["Delievered within a week", "Fully customizable", "Performant", "Decent price"],
      price: "Around 20",
    },
  ];

  return (
    <Row
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
      justify="center"
      className="flex-wrap relative">
      <AnimatePresence>
        {cardRect && containerRect && (
          <m.div
            key="highlightHoverPricing"
            initial={{
              x: cardRect?.left - containerRect?.left,
              y: cardRect?.top - containerRect?.top + 15,
              width: cardRect?.width,
              height: cardRect?.height,
              opacity: 0,
            }}
            animate={{
              x: cardRect?.left - containerRect?.left,
              y: cardRect?.top - containerRect?.top,
              width: cardRect?.width,
              height: cardRect?.height,
              opacity: 1,
            }}
            exit={{
              y: cardRect?.top - containerRect?.top - 15,
              opacity: 0,
            }}
            transition={{ duration: 0.35, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            className="absolute left-0 top-0 w-[440px] h-[360px] rounded-3xl
            bg-gradient-to-br from-blue-400/20 to-blue-400/10"
          />
        )}
      </AnimatePresence>
      {plans.map((plan, i) => {
        return <PricingCard onMouseEnter={handleCardHover} plan={plan} key={i} />;
      })}
    </Row>
  );
};

export default PricingCards;
