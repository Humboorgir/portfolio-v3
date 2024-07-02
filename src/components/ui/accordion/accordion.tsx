import Text from "@/components/ui/text";

import { cn } from "@/lib/utils";
import { forwardRef, useMemo, useRef, useState } from "react";
import { AnimatePresence, cubicBezier, m } from "framer-motion";

import { FaAngleDown as AngleDownIcon } from "react-icons/fa6";
import { AiOutlineQuestionCircle as QuestionMarkIcon } from "react-icons/ai";
import HoverHighlight from "./hover-highlight";
import Row from "../row";

export type AccordionProps = React.HTMLProps<HTMLDivElement> & {
  items: {
    trigger: string;
    content: string;
  }[];
};

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, items, ...props }, ref) => {
    const [open, setOpen] = useState<number | null>(null);
    const listContainerRef = useRef<HTMLDivElement>(null);
    const MText = m(Text);

    function toggleOrSetOpen(i: number) {
      if (open == i) return setOpen(null);
      setOpen(i);
    }

    const containerRef = useRef<HTMLDivElement>(null);
    const containerRect = containerRef.current?.getBoundingClientRect();

    const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

    function updateButtonRect(rect: any) {
      setButtonRect(rect);
    }

    function resetButtonRect() {
      setButtonRect(null);
    }

    const TextField = ({ item }: { item: (typeof items)[number] }) => {
      return (
        <MText
          key={open}
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
          className="text-left m-0 p-0 font-[0] overflow-hidden flex items-stretch pointer-events-none"
          variant="p">
          <div className="grow p-2">{item.content}</div>
        </MText>
      );
    };

    const MemoizedTextField = useMemo(() => TextField, []);

    return (
      // TODO: handle refs properly
      // TODO 2: refactor / clean up the code here
      <div className="relative" onMouseLeave={resetButtonRect} ref={containerRef} {...props}>
        <HoverHighlight buttonRect={buttonRect} containerRect={containerRect} />
        <div ref={listContainerRef} className="relative divide-y divide-blue-200/15 z-10">
          {items.map((item, i) => {
            return (
              <>
                <button
                  onMouseOver={(e) => updateButtonRect(e.currentTarget.getBoundingClientRect())}
                  onClick={(e) => {
                    const node = e.target as HTMLElement;
                    toggleOrSetOpen(i);

                    const cachedTop = buttonRect?.top;

                    setTimeout(() => {
                      updateButtonRect((prevRect: DOMRect) => {
                        // this is kinda hard to explain but I'll try my best
                        // prev: the buttonRect already set by the user hovering on an element
                        // cachedTop: the buttonRect set by the user when they triggered the button
                        // note that prev is realtime, cachedTop is not
                        // if cachedTop = prev.top then it means the user hasn't moved their mouse
                        // since clicking the button and therefore, we'll set buttonRect to the clicked
                        // button's rect, note that normally this would make no difference, however in case
                        // the whole screen moves up/down it would move HoverHighlight alongside with it
                        // and therefore prevents many bugs.
                        // if realTimeTop > target.top then it means the user has moved their mouse
                        // down since clicking the button and therefore HoverHighlight should go
                        // 1 level down
                        const realtimeTop = prevRect?.top;
                        if (realtimeTop == cachedTop) return node.getBoundingClientRect();
                        const index = open ?? i;
                        const nodeList = listContainerRef.current?.children;
                        // @ts-ignore
                        const filteredNodes = Array.from(nodeList).filter((node) => {
                          return node.nodeName == "BUTTON";
                        });

                        const target = filteredNodes[index].getBoundingClientRect();

                        if (realtimeTop > target?.top) {
                          return filteredNodes[index + 1].getBoundingClientRect();
                        }

                        return prevRect;
                      });
                    }, 300);
                  }}
                  className="w-full active:bg-blue-200/15 active:transition-all z-10
                 flex flex-col py-2 -ml-3 px-3 rounded-sm">
                  <Row items="start" justify="between" className="w-full pointer-events-none">
                    <Text className="text-foreground/90 flex text-left font-medium" variant="h5">
                      <div
                        className="bg-foreground/80 mt-1.5 mr-2 text-base font-bold text-background
                     rounded-full h-5 w-5 flex items-center justify-center shrink-0">
                        ?
                      </div>
                      {item.trigger}
                    </Text>
                    <AngleDownIcon
                      className={cn(
                        "text-lg mr-1 mt-3 transition-all duration-300 pointer-events-none",
                        open == i && "rotate-180 ease-out"
                      )}
                    />
                  </Row>
                </button>
                <AnimatePresence>{open == i && <MemoizedTextField item={item} />}</AnimatePresence>
              </>
            );
          })}
        </div>
      </div>
    );
  }
);

Accordion.displayName = "Accordion";

export default Accordion;
