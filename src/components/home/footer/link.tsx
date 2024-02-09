import Button from "@/components/ui/button";

import { FiExternalLink as LinkIcon } from "react-icons/fi";

type Props = {
  children: React.ReactNode;
  href: string;
};

const Link = ({ href, children }: Props) => {
  return (
    <Button className="p-0" href={href} variant="link">
      {children} <LinkIcon className="mb-0.5 ml-1" />
    </Button>
  );
};

export default Link;
