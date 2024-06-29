import Column from "@/components/ui/column";
import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

const Title = () => {
  return (
    <Container id="projects" className="relative w-full py-10 mt-16 mb-6">
      <div
        className="absolute top-[8px] left-6 w-[50%] h-[2px] bg-gradient-to-r 
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
        className="relative w-fit bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h2">
        <div className="mb-1.5">Projects I have built</div>
        <div>in the past</div>
      </Text>
    </Container>
    // <Column className="relative mb-16 p-5 px-10">
    //   <Text
    //     className="flex items-center relative bg-clip-text text-xl text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400"
    //     variant="lead">
    //     <PiDetectiveFill className="h-7 w-7 text-neutral-300 mr-2" /> Take a look at
    //   </Text>
    //   <Text
    //     className="relative bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-100 to-neutral-400"
    //     variant="h2">
    //     Projects I have built
    //     <br />
    //     in the past
    //   </Text>
    //   <div className="absolute left-0 right-0 top-0 bottom-0 bg-primary/20 blur-3xl" />
    // </Column>
  );
};

export default Title;
