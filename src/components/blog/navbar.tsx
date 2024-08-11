import Text from "@/components/ui/text";
import { BsArrowLeft as ArrowLeft } from "react-icons/bs";
import Button from "@/components/ui/button";
import Container from "../ui/container";

const Navbar = () => {
  return (
    <Container className="flex items-center w-full px-8 py-4">
      <Button
        className="group flex items-center rounded-full bg-gradient-to-br from-foreground/90 to-foreground text-background text-sm"
        variant="ghost">
        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
      </Button>
    </Container>
  );
};

export default Navbar;
