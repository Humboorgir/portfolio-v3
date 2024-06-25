import { FaBars } from "react-icons/fa";
import { Cycle } from "framer-motion";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  className: string;
  toggleOpen: Cycle;
}

const HamburgerMenu = ({ toggleOpen, className }: Props) => {
  return (
    <div className={cn("relative w-fit", className)}>
      <Button variant="ghost" onClick={() => toggleOpen()}>
        <FaBars className="cursor-pointer text-4xl" />
      </Button>
    </div>
  );
};

export default HamburgerMenu;
