import Button from "@/components/ui/button";
import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Text from "@/components/ui/text";

import { LuMessagesSquare as MessageIcon } from "react-icons/lu";
import { FaCheckCircle as CheckIcon } from "react-icons/fa";

type Props = {
  plan: {
    name: string;
    price: string;
    description: string;
    perks: string[];
  };
};

const PricingCard = ({ plan }: Props) => {
  return (
    <Column
      items="start"
      className="relative border-2 border-blue-300/10 backdrop-blur-sm pt-5 pb-8 px-8 rounded-md max-w-md text-left mb-4 md:mb-0 md:mr-4">
      <div
        className="absolute top-0 left-[50%] translate-x-[-50%] w-[50%] h-[2px] bg-gradient-to-r 
            from-transparent via-blue-500 to-transparent"
        aria-hidden="true"
      />
      <Text className="mb-2 md:text-2xl text-foreground/80" variant="h3">
        {plan.name}
      </Text>

      <Row>
        <Text className="mb-3 mr-2 text-2xl md:text-[40px] text-foreground/90" variant="h3">
          {plan.price}$
        </Text>
        <Text variant="lead"> / project </Text>
      </Row>

      <Text className="mb-3" variant="p">
        {plan.description}
      </Text>
      {plan.perks.map((perk, i) => {
        return (
          <Text className="flex items-center text-foreground/80 mb-1 ml-1" variant="p">
            <CheckIcon className="mr-1.5" />
            {perk}
          </Text>
        );
      })}
      <Button className="mt-3 w-[calc(100%-16px)] text-foreground/90 bg-transparent bg-gradient-to-br from-blue-800 to-blue-950">
        Contact <MessageIcon className="w-4.5 h-4.5 ml-2" />
      </Button>
    </Column>
  );
};

export default PricingCard;
