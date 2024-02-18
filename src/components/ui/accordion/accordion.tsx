import Text from "@/components/ui/text";

import { cn } from "@/lib/utils";
import { forwardRef, useState } from "react";
import { AnimatePresence, cubicBezier, m } from "framer-motion";

import { FaAngleDown as AngleDown } from "react-icons/fa6";

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

    return (
      <div className="max-w-xl" ref={ref} {...props}>
        {items.map((item, i) => {
          return (
            <div className={cn("mb-1", className)}>
              <button
                onClick={() => toggleOpen(i)}
                className="w-full hover:bg-accent/80 active:bg-secondary/90 active:transition-all
                 flex items-center justify-between p-2 rounded-md">
                <Text className="text-foreground/90 flex items-center" variant="h5">
                  {item.trigger}
                </Text>
                <AngleDown
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
                        duration: 0.45,
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
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
