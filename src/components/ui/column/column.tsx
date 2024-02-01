import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const columnVariants = cva(`flex flex-col`, {
  variants: {
    /** Specifies the align-items property, set to 'center' by default */
    items: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    /** Specifies the justify-content property, set to 'start' by default */
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      stretch: "justify-stretch",
      between: "justify-between",
      around: "justify-around",
      normal: "justify-normal",
      evenly: "justify-evenly",
    },
  },
  defaultVariants: {
    items: "center",
    justify: "start",
  },
});

export type ColumnProps = React.HTMLProps<HTMLDivElement> & VariantProps<typeof columnVariants>;

/** Flexbox container, used for more readability */
const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  ({ children, items, justify, className, ...props }, ref) => {
    return (
      <div className={cn(columnVariants({ items, justify, className }))} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Column.displayName = "Column";

export default Column;
