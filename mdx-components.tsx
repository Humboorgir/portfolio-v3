import type { MDXComponents } from "mdx/types";

import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["400"] });

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children, ...props }) => (
      <pre
        className={
          `p-3 rounded-md overflow-x-auto text-sm sm:text-base ` +
          robotoMono.className
        }
        {...(props as any)}
      >
        {children}
      </pre>
    ),
    img: ({ children, ...props }) => (
      <img className="my-5 rounded-md" {...(props as any)}>
        {children}
      </img>
    ),
    ...components,
  };
}
