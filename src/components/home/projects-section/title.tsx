import Container from "@/components/ui/container";
import Text from "@/components/ui/text";

import Ring from "@/components/svg/ring";

const Title = () => {
  return (
    <Container className="relative my-24">
      <Ring className="w-[70vw] md:w-[78vw] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]" />
      <Text
        className="relative bg-clip-text text-center text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h2">
        Projects I have built
        <br />
        in the past
      </Text>
    </Container>
  );
};

export default Title;
