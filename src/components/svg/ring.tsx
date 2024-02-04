import { cn } from "@/lib/utils";

type Props = {
  className: string;
};

const Ring = ({ className }: Props) => {
  return (
    <svg
      className={cn("max-w-[95vw] min-w-80", className)}
      width="623"
      height="302"
      viewBox="0 0 623 302"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_f_1_5)">
        <path
          d="M575.388 154.834C575.201 167.669 568.693 180.468 555.68 192.709C542.646 204.969 523.513 216.226 499.364 225.71C451.099 244.665 384.154 256.011 310.047 254.934C235.94 253.856 169.354 240.568 121.661 220.218C97.797 210.035 78.9998 198.227 66.3277 185.593C53.6762 172.979 47.5428 159.996 47.7294 147.161C47.9161 134.326 54.4243 121.527 67.4372 109.286C80.4714 97.0258 99.604 85.7694 123.753 76.285C172.018 57.3297 238.963 45.9835 313.07 47.0611C387.177 48.1387 453.763 61.4266 501.456 81.7772C525.32 91.9597 544.117 103.768 556.789 116.402C569.441 129.016 575.574 141.999 575.388 154.834Z"
          stroke="url(#paint0_linear_1_5)"
          stroke-width="14"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_5"
          x="0.72525"
          y="-0.00939941"
          width="621.667"
          height="302.014"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="12" result="effect1_foregroundBlur_1_5" />
        </filter>
        <linearGradient
          id="paint0_linear_1_5"
          x1="313.172"
          y1="40.0618"
          x2="309.945"
          y2="261.933"
          gradientUnits="userSpaceOnUse">
          <stop stop-color="#0063CC" />
          <stop offset="1" stop-color="#0063CC" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Ring;
