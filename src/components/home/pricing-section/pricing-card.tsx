import Button from "@/components/ui/button";
import Column from "@/components/ui/column";
import Text from "@/components/ui/text";

import { FaCheckCircle as Check } from "react-icons/fa";

type Props = {
  plan: {
    name: string;
    price: string;
    description: string;
    perks: string[];
  };
  onMouseEnter: React.MouseEventHandler;
};

const PricingCard = ({ plan, onMouseEnter }: Props) => {
  return (
    <Column
      onMouseEnter={onMouseEnter}
      items="start"
      className="border border-ring py-5 px-8 rounded-3xl max-w-md text-left mb-4 md:mb-0 md:mr-4">
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
};

export default PricingCard;
