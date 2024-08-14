import Text from "@/components/ui/text";

import Image from "next/image";

import { MdOutlineDateRange as Date } from "react-icons/md";

const PageTitle = () => {
  return (
    <div className="relative w-[280px] md:w-[320px] pt-[100px] h-[200px] overflow-hidden max-w-[85vw]">
      <div
        className="absolute w-1/2 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground/30 rounded-[60%]
    blur-[40px]"
      ></div>
      <Image
        fill
        className="-z-10 blur-[3.5px]
   [mask-image:linear-gradient(to_right,transparent,#ffffff9a_50%,transparent)]"
        alt="Ribbon"
        src="/Ribbon.svg"
      />
      <Text className="text-4xl" variant="h2">
        All posts
      </Text>
      <Text className="md:text-lg flex items-center" variant="lead">
        <Date className="h-5 w-5 mr-1.5" /> December 22
      </Text>
    </div>
  );
};

export default PageTitle;
