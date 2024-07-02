import { MdOutlineWorkHistory as Work } from "react-icons/md";
import Text from "@/components/ui/text";
import { BiX } from "react-icons/bi";
import { AnimatePresence, Cycle, cubicBezier, m } from "framer-motion";
import Row from "@/components/ui/row";
import Button from "@/components/ui/button";

type Props = {
  isOpen: boolean;
  toggleOpen: Cycle;
  links: {
    name: string;
    href: string;
  }[];
};
const NavbarDrawer = ({ isOpen, toggleOpen, links }: Props) => {
  const MButton = m(Button);
  const MRow = m(Row);
  return (
    <AnimatePresence>
      {isOpen && (
        // backdrop
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          onClick={() => toggleOpen()}
          className="bg-black/60 fixed z-50 w-screen h-screen backdrop-blur-md">
          {/* drawer  */}
          <m.ul
            onClick={(e) => e.stopPropagation()}
            initial={{
              x: "-100%",
            }}
            animate={{
              x: "0",
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              ease: cubicBezier(0.16, 1, 0.3, 1),
              duration: 0.6,
              delay: 0.08,
            }}
            className="fixed overflow-y-auto z-50 w-[320px] px-6 py-5 h-screen m-0 bg-background
             !opacity-100 text-foreground-light border-r border-r-foreground-muted/30">
            <div className="fixed top-0 left0 h-[200px] w-[200px] bg-gradient-to-r from-primary/80 to-accent/60 blur-[120px]" />
            <Row className="mb-4 justify-between">
              <MRow
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  ease: cubicBezier(0.16, 1, 0.3, 1),
                  duration: 0.5,
                  delay: 0.4,
                }}>
                <Work className="text-3xl mr-1" />
                <Text
                  className="font-bold bg-gradient-to-br from-neutral-100 to-neutral-300 bg-clip-text text-transparent"
                  variant="h5">
                  Portfolio
                </Text>
              </MRow>

              <Button variant="ghost" className="p-0.5" onClick={() => toggleOpen()}>
                <BiX className="h-8 w-8 text-white" />
              </Button>
            </Row>
            {links.map((link, i) => {
              i += 8;
              return (
                <MButton
                  key={i}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    ease: cubicBezier(0.16, 1, 0.3, 1),
                    duration: 0.5,
                    delay: i / 16,
                  }}
                  variant="ghost"
                  href={link.href}
                  onClick={() => toggleOpen()}
                  className="pl-6 w-full py-3 rounded-none hover:bg-blue-100/10 justify-start text-foreground/90 text-lg
                  uppercase border-b-2 border-foreground/20">
                  {link.name}
                </MButton>
              );
            })}
          </m.ul>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarDrawer;
