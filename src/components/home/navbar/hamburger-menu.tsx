import { FaBars } from "react-icons/fa";
import Ripple from "@/components/ui/button/ripple";
import { useState } from "react";
import { AnimatePresence, cubicBezier, m } from "framer-motion";
import Button from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FiExternalLink as LinkIcon } from "react-icons/fi";

interface Link {
  name: string;
  href: string;
}

interface Props {
  links: Link[];
  className: string;
}

const HamburgerMenu = ({ links, className }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const MButton = m(Button);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    // TODO: rework hamburger menu
    // I'd much rather have a shadcnui-style mobile navbar here
    <div className={cn("relative w-fit", className)}>
      <Button variant="ghost" onClick={toggleOpen}>
        <FaBars className="cursor-pointer text-4xl" />
      </Button>
      <AnimatePresence>
        {isOpen && (
          <m.ul
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.7,
            }}
            transition={{
              ease: cubicBezier(0.16, 1, 0.3, 1),
              duration: 0.3,
              delay: 0.1,
            }}
            className="absolute right-0 top-full mt-2 bg-[#0B1329] text-white rounded-md origin-top-right
            border border-blue-200/30 overflow-hidden divide-y divide-blue-200/40">
            {links.map((link, i) => {
              i += 2;
              return (
                <MButton
                  initial={{
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                    duration: 0.3,
                    delay: i / 20,
                  }}
                  variant="ghost"
                  className="w-full px-8 py-3 rounded-none first-of-type:rounded-t-md last-of-type:rounded-b-md
                  hover:bg-blue-100/10">
                  {link.name} <LinkIcon className="w-3.5 h-3.5 ml-2" />
                </MButton>
              );
            })}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HamburgerMenu;
