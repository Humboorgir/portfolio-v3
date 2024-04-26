import Column from "@/components/ui/column";
import Text from "@/components/ui/text";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { PiDetectiveFill } from "react-icons/pi";

const Title = () => {
  return (
    <Column className="relative mb-16 p-5 px-10">
      <Text
        className="flex items-center relative bg-clip-text text-xl text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="lead">
        <PiDetectiveFill className="h-7 w-7 text-neutral-300 mr-2" /> Take a look at
      </Text>
      <Text
        className="relative bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h2">
        Projects I have built
        <br />
        in the past
      </Text>
      <div className="absolute left-0 right-0 top-0 bottom-0 bg-primary/20 blur-3xl" />
    </Column>
  );
};

export default Title;
