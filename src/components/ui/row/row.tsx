import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React from "react";

const rowVariants = cva(`flex`, {
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

export type RowProps = React.HTMLProps<HTMLDivElement> & VariantProps<typeof rowVariants>;

/** Flexbox container, used for more readability */
const Row = React.forwardRef<HTMLDivElement, RowProps>(
  ({ children, items, justify, className, ...props }, ref) => {
    return (
      <div className={cn(rowVariants({ items, justify, className }))} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Row.displayName = "Row";

export default Row;
