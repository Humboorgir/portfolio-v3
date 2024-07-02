import React from "react";

import { cn } from "@/lib/utils";

export type ContainerProps = React.HTMLProps<HTMLDivElement>;

/** Flexbox container, used for more readability */
const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div className={cn("w-fit mx-auto max-w-screen-xl px-4 sm:px-8", className)} ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";

export default Container;
