import Text from "@/components/ui/text";
import { BsArrowLeft as ArrowLeft } from "react-icons/bs";
import Button from "@/components/ui/button";
import Container from "../ui/container";

const Navbar = () => {
  return (
    <Container className="flex items-center w-full px-8 py-4">
      <Button
        className="group no-underline transition-all flex items-center rounded-full text-foreground/70 hover:text-foreground/90 text-sm"
        href="/blog"
        variant="ghost"
      >
        <ArrowLeft className="w-4 h-4 text-foreground/70 transition-all duration-[250ms] mr-1 group-hover:text-foreground/90 group-hover:mr-2" />
        Back to Blog
      </Button>
    </Container>
  );
};

export default Navbar;
