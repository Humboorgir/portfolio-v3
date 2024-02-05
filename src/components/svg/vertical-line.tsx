import { cn } from "@/lib/utils";

type Props = {
  className?: string;
};

const Line = ({ className }: Props) => {
  return (
    <svg
      width="3"
      height="100%"
      viewBox="0 0 2 100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("mx-auto", className)}>
      <line x1="1" y1="100%" x2="1" stroke="url(#paint0_linear_3_9)" strokeWidth="3" />
      <defs>
        <linearGradient
          id="paint0_linear_3_9"
          x1="3"
          y1="19"
          x2="3"
          y2="351"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#0063CC" stopOpacity="0.3" />
          <stop offset="0.500419" stopColor="#0063CC" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Line;
