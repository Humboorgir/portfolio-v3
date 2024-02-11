import React, { useState, useEffect } from "react";

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

interface Props {
  duration?: number;
  rippleColor?: string;
  children?: React.ReactNode;
}

const Ripple = ({ duration = 600, rippleColor = "#ffffff71", children }: Props) => {
  interface Ripple {
    y: number;
    x: number;
    size: number;
  }

  const [rippleArray, setRippleArray] = useState<Ripple[]>([]);

  useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
    setRippleArray([]);
  });

  const addRipple = (event: any) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const scrollX = window.pageXOffset;
    const scrollY = window.pageYOffset;
    const size =
      rippleContainer.width > rippleContainer.height ? rippleContainer.width : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - scrollX - size / 2;
    const y = event.pageY - rippleContainer.y - scrollY - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div className="absolute bottom-0 left-0 right-0 top-0" onClick={addRipple}>
      {children}
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className="absolute scale-0 animate-ripple rounded-full opacity-75"
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
                backgroundColor: rippleColor,
              }}
            />
          );
        })}
    </div>
  );
};

export default Ripple;
