import * as React from "react";

import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLTextAreaElement>;

// TODO: fix the ref problem (that also exists in input)
// refer to the input component for more info
const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  ({ className, placeholder, disabled, name, required, maxLength = 140, ...props }, ref) => {
    return (
      // @ts-ignore
      <div className={cn("relative min-h-[120px] max-w-[670px] w-full", className)} ref={ref} {...props}>
        <textarea
          className="absolute flex top-0 left-0 bottom-0 right-0 rounded-md px-3 py-3 bg-transparent
        focus-visible:outline-none border disabled:cursor-not-allowed 
        disabled:opacity-50 border-3 border-ring transition-[border] text-foreground
         placeholder:text-transparent peer resize-none focus:border-blue-500"
          maxLength={maxLength}
          name={name}
          required={required}
          placeholder={placeholder}
          disabled={disabled}
        />
        <label
          className="absolute peer-placeholder-shown:top-2 peer-focus:!text-blue-500
          peer-placeholder-shown:left-2 peer-placeholder-shown:text-base
          peer-focus:!-top-1.5 peer-focus:!left-[8px] peer-focus:!text-xs 
           bg-[#0E1820] px-1 transition-all duration-200 pointer-events-none
        z-10 -top-1.5 left-[8px] text-foreground-light peer-disabled:opacity-50 text-xs">
          {placeholder}
        </label>
      </div>
    );
  }
);

export default TextArea;
