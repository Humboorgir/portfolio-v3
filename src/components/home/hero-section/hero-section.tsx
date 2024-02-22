import Column from "@/components/ui/column";
import Row from "@/components/ui/row";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";

const HeroSection = () => {
  return (
    <Column className="text-center bg-grid-white/[0.15] relative left-0 right-0 top-0 bottom-0 py-36 mb-14 px-6">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center
     dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
      />

      <Text
        className="z-10 py-2 bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400"
        variant="h1">
        Turning ideas into reality
      </Text>
      <Text className="z-10 text-lg md:text-[19px] max-w-screen-md mb-5" variant="lead">
        Every great project starts with an idea. Whether it's a startup, a small business, or a personal
        project and I'm here to bring those ideas to life
      </Text>

      {/* button group */}
      <Column
        className="md:flex-row items-stretch md:items-center z-10 px-6 sm:px-10
      space-y-3 space-x-0 md:space-x-3 md:space-y-0 flex-wrap w-full md:w-fit">
        <Button
          className="md:w-64 md:grow-0 rounded-3xl bg-foreground/80
        hover:bg-neutral-500 text-background"
          size="lg">
          About me
        </Button>
        <Button className="md:w-64 md:grow-0 rounded-3xl" size="lg" variant="outline">
          Contact
        </Button>
      </Column>
    </Column>
  );
};

export default HeroSection;
