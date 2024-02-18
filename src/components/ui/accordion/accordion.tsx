import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { AnimatePresence, cubicBezier, m } from "framer-motion";
import Button from "@/components/ui/button";
import Text from "@/components/ui/text";

import { FaAngleDown as AngleDown } from "react-icons/fa6";

export type AccordionProps = React.HTMLProps<HTMLDivElement>;

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    const [open, setOpen] = useState<number | null>(null);
    const MText = m(Text);

    function toggleOpen(i: number) {
      if (open == i) return setOpen(null);
      setOpen(i);
    }

    // dummy data
    const items = [
      {
        trigger: "How long would my project take?",
        content: `Depends on what your project is, a bot could take anywhere from 2 days to a few weeks.
    web apps are similar but usually take a bit more. a personal website could take about a
    week or two, whereas an interactive application could take around a month`,
      },
      {
        trigger: "How much is the price?",
        content: `Depends on what your project is, a bot could take anywhere from 2 days to a few weeks.
    websites are similar but usually take a bit more. a personal website could take about a
    week or two, whereas an interactive application could take around a month`,
      },
      {
        trigger: "Where can I contact you",
        content: `Depends on what your project is, a bot could take anywhere from 2 days to a few weeks.
    websites are similar but usually take a bit more. a personal website could take about a
    week or two, whereas an interactive application could take around a month`,
      },
    ];

    // TODO: turn this into a reusable component
    return (
      <div className="max-w-xl" ref={ref} {...props}>
        {items.map((item, i) => {
          return (
            <div className="mb-1">
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
                    initial={{ maxHeight: 0, opacity: 0 }}
                    animate={{ maxHeight: 100, opacity: 1 }}
                    exit={{ maxHeight: 0, opacity: 0 }}
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
