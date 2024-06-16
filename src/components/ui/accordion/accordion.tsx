import Text from "@/components/ui/text";

import { cn } from "@/lib/utils";
import { forwardRef, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, m } from "framer-motion";

import { FaAngleDown as AngleDownIcon } from "react-icons/fa6";
import { AiOutlineQuestionCircle as QuestionMarkIcon } from "react-icons/ai";
import HoverHighlight from "./hover-highlight";

export type AccordionProps = React.HTMLProps<HTMLDivElement> & {
  items: {
    trigger: string;
    content: string;
  }[];
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, items, ...props }, ref) => {
    const [open, setOpen] = useState<number | null>(null);
    const MText = m(Text);

    function toggleOpen(i: number) {
      if (open == i) return setOpen(null);
      setOpen(i);
    }

    const containerRef = useRef<HTMLDivElement>(null);
    const containerRect = containerRef.current?.getBoundingClientRect();

    const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

    function updateButtonRect(e: any) {
      setButtonRect(e.target.getBoundingClientRect());
    }

    function resetButtonRect() {
      setButtonRect(null);
    }

    return (
      // TODO: handle refs properly
      <div className="relative" onMouseLeave={resetButtonRect} ref={containerRef} {...props}>
        <HoverHighlight buttonRect={buttonRect} containerRect={containerRect} />
        <div className="relative divide-y divide-blue-200/15 z-10">
          {items.map((item, i) => {
            return (
              <div onMouseOver={updateButtonRect}>
                <button
                  onClick={() => toggleOpen(i)}
                  className="w-full active:bg-blue-200/15 active:transition-all z-10
                 flex items-center justify-between py-2 -ml-3 px-3 rounded-sm">
                  <Text className="text-foreground/90 flex items-center font-medium" variant="h5">
                    <QuestionMarkIcon className="w-5 h-5 -mt-1 mr-2" />
                    {item.trigger}
                  </Text>
                  <AngleDownIcon
                    className={cn(
                      "text-lg mr-1 transition-all duration-300",
                      open == i && "rotate-180 ease-out"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {open == i && (
                    <MText
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: cubicBezier(0.22, 1, 0.36, 1),
                        opacity: {
                          duration: 0.3,
                        },
                      }}
                      className="m-0 p-0 font-[0] overflow-hidden flex items-stretch"
                      variant="p">
                      <div className="grow p-2">{item.content}</div>
                    </MText>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
