import Column from "@/components/ui/column";
import Text from "@/components/ui/text";
import Image from "next/image";

const Title = () => {
  return (
    <Column
      items="start"
      className="relative p-6 md:p-14 md:!pt-44 max-w-[50vw] mr-auto
    border-left-2 border-top-2 border-ring">
      <div className="bg-white/10 absolute left-0 right-0 top-0 -bottom-full rounded-full blur-3xl z-10" />
      <div
        className="absolute top-0 left-0 right-0 -bottom-full z-10 inset-0 pointer-events-none flex items-center justify-center
 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />
      <div className="absolute left-0 right-0 top-0 -bottom-full bg-grid-[#ffffff25]" />

      <Text
        className="relative bg-clip-text text-left text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h2">
        Projects I have built
        <br />
        in the past
      </Text>
    </Column>
  );
};

export default Title;
