import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const HorizontalLine = ({ className }: Props) => {
  return (
    <svg
      width="calc(100% - 16px)"
      height="4"
      viewBox="0 0 calc(100% - 16px) 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto", className)}>
      <line
        y1="1.04999"
        x2="calc(100% - 16px)"
        y2="1.04999"
        stroke="hsl(var(--primary))"
        strokeOpacity="0.7"
        strokeWidth="3"
      />
    </svg>
  );
};

export default HorizontalLine;
