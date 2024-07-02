import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  // sm:text-5xl md:text-6xl lg:text-7xl
  variants: {
    variant: {
      h1: "text-foreground text-4xl  tracking-tight font-bold my-2",
      h2: "text-foreground text-3xl sm:text-4xl md:text-5xl font-bold my-2",
      h3: "text-foreground text-2xl md:text-3xl font-bold my-1.5",
      h4: "text-foreground text-xl my-1.5",
      h5: "text-foreground text-lg my-1.5",
      p: "text-foreground-light text-base my-0.5",
      lead: "text-foreground-muted text-base my-0.5",
    },
  },
});

type Text = Extract<keyof JSX.IntrinsicElements, "p" | "h1" | "h2" | "h3" | "h4" | "h5">;

export type TextProps = React.HTMLProps<Text> & VariantProps<typeof textVariants>;

/** Includes a set of styled h1, h2, ..., h5 and p elements made for reusability */
const Text = React.forwardRef<Text, TextProps>(({ children, className, variant, ...props }, ref) => {
  if (!variant) throw new Error("[Text] Variant is required");
  const ElementType = variant == "lead" ? "p" : variant;
  return (
    // @ts-ignore
    <ElementType
      className={cn(textVariants({ variant, className }))}
      {...(ref ? { ref } : {})}
      {...props}>
      {children}
    </ElementType>
  );
});

Text.displayName = "Text";

export default Text;
