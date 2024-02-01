import React from "react";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "text-foreground text-4xl lg:text-5xl tracking-tight font-black my-2",
      h2: "text-foreground text-3xl font-bold my-2",
      h3: "text-foreground text-2xl font-bold my-1.5",
      h4: "text-foreground text-xl my-1.5",
      h5: "text-foreground text-lg my-1",
      p: "text-foreground-light text-base my-0.5",
      lead: "text-foreground-muted text-base my-0.5",
    },
  },
});

type Typography = Extract<keyof JSX.IntrinsicElements, "p" | "h1" | "h2" | "h3" | "h4" | "h5">;

export type TypographyProps = React.HTMLProps<Typography> & VariantProps<typeof typographyVariants>;

/** Includes a set of styled h1, h2, ..., h5 and p elements made for reusability */
const Typography = React.forwardRef<Typography, TypographyProps>(
  ({ children, className, variant, ...props }, ref) => {
    if (!variant) throw new Error("[Typography] Variant is required");
    const ElementType = variant == "lead" ? "p" : variant;
    return (
      // @ts-ignore
      <ElementType
        className={cn(typographyVariants({ variant, className }))}
        {...(ref ? { ref } : {})}
        {...props}>
        {children}
      </ElementType>
    );
  }
);

Typography.displayName = "Typography";

export default Typography;
