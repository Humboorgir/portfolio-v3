import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

// TODO: try implementing this without a relative container
// (like with ::before or something)
// the current implementation messed up the refs
// if I return the ref of the container, it cant be used
// to get the input's value
// and if I reutrn the ref of the input, it wont be animated
// properly
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <div className={cn("relative h-10 w-full", className)} ref={ref} {...props}>
        <input
          type={type}
          className="absolute flex top-0 left-0 bottom-0 right-0 rounded-md bg-transparent px-3 py-2 text-sm
        ring-offset-background focus-visible:outline-none border border-ring text-foreground
         disabled:cursor-not-allowed disabled:opacity-50 focus:ring-offset-3 focus:border-3
         focus:border-blue-500 transition-[border] placeholder:text-transparent peer"
          placeholder={placeholder}
        />
        <label
          className="absolute peer-placeholder-shown:top-[50%] text-foreground-light
          peer-placeholder-shown:left-[13px] peer-placeholder-shown:text-base
          peer-focus:!top-0 peer-focus:!left-[8px] peer-focus:!text-xs
          bg-[#0F1A23] px-1 transition-all duration-200 pointer-events-none translate-y-[-50%]
        z-10 top-0 left-[8px] peer-focus:text-blue-500 text-xs">
          {placeholder}
        </label>
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
