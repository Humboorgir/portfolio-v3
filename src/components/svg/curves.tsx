import React from "react";

const Curves = ({ className }: { className?: string }) => {
  return (
    <svg
      width="1220"
      height="1687"
      viewBox="0 0 1220 1687"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 1686.5L2 1607C2 1589.33 16.3269 1575 34 1575L1186 1575C1203.67 1575 1218 1560.67 1218 1543L1218 795.001C1218 777.327 1203.67 763.001 1186 763.001L34.021 763.001C16.3397 763.001 2.00945 748.661 2.02104 730.98L2.50015 -0.000122048"
        stroke="hsl(var(--ring))"
        strokeWidth="3"></path>
    </svg>
  );
};

export default Curves;
