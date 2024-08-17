import type { MDXComponents } from "mdx/types";

import Text from "@/components/ui/text";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    pre: ({ children, ...props }) => (
      <pre className="p-3 rounded-md" {...(props as any)}>
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
