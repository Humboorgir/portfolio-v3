import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Tooltip = ({
  items,
}: {
  items: {
    name: string;
    description: string;
    displayText: React.ReactElement;
    displayTextClassName?: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <>
      {items.map((item, id) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(id)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === id && (
              <m.div
                initial={{ opacity: 0, y: 20, x: -10, rotate: "-20deg", scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 120,
                    damping: 8,
                    duration: 0.05,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6, transition: { duration: 0.1 } }}
                className="absolute bottom-full left-0 right-0 mx-auto w-fit flex text-xs
                  flex-col items-center justify-center rounded-md bg-background z-50 shadow-xl 
                  px-5 py-3 whitespace-nowrap">
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px" />
                <div className="font-bold text-foreground relative z-30 text-lg">{item.name}</div>
                <div className="text-foreground-light text-sm">{item.description}</div>
              </m.div>
            )}
          </AnimatePresence>
          <div
            className={cn(
              "object-cover !m-0 !p-0 object-top rounded-md h-14 group-hover:scale-105 group-hover:z-30 transition duration-300",
              item.displayTextClassName
            )}>
            {item.displayText}
          </div>
        </div>
      ))}
    </>
  );
};

export default Tooltip;
