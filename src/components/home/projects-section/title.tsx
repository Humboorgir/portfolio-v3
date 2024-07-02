import Column from "@/components/ui/column";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";
import Balancer from "react-wrap-balancer";

const Title = () => {
  return (
    <Container id="projects" className="relative w-full py-10 mt-16 mb-6">
      <div
        className="absolute top-[24px] md:top-[12px] left-6 w-[80%] sm:w-[50%] h-[2px] bg-gradient-to-r 
            from-blue-400 to-transparent blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="absolute top-[50%] translate-y-[-50%] left-6 w-[50%] h-8 bg-gradient-to-r 
            from-blue-400 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <span
        className="mb-6 flex items-center border-2 border-blue-500/10 px-3 py-1 rounded-full w-fit
            bg-blue-500/10">
        <div className="h-3.5 w-3.5 rounded-full animate-pulse bg-blue-500 mr-1.5" />
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-600">
          Work samples
        </span>
      </span>
      <Text
        className="max-w-md relative text-4xl leading-tight w-fit bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-300"
        variant="h2">
        <Balancer>Projects I have built previously</Balancer>
      </Text>
    </Container>
  );
};

export default Title;
