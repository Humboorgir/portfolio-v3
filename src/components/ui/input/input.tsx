import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, ...props }, ref) => {
    return (
      <div className={cn("relative h-10 w-full", className)}>
        <input
          type={type}
          className="absolute flex top-0 left-0 bottom-0 right-0 rounded-md bg-inherit px-3 py-2 text-sm
        ring-offset-inherit focus-visible:outline-none border border-white/30 text-foreground
         disabled:cursor-not-allowed disabled:opacity-50 focus:ring-offset-3 focus:border-3
         focus:border-primary transition-[border] placeholder:text-transparent peer"
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        <label
          className="absolute peer-placeholder-shown:top-[50%] text-foreground-light
          peer-placeholder-shown:left-[13px] peer-placeholder-shown:text-base
          peer-focus:!top-0 peer-focus:!left-[8px] peer-focus:!text-xs
           bg-inherit px-1 transition-all duration-200 pointer-events-none translate-y-[-50%]
        z-10 top-0 left-[8px] peer-focus:text-primary text-xs">
          {placeholder}
        </label>
      </div>
    );
  }
);
Input.displayName = "Input";

export default Input;
