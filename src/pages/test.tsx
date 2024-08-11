import Button from "@/components/button";
import React from "react";

const Page = () => {
  const buttonRef = React.useRef(null);

  return <Button ref={buttonRef}>Default button</Button>;
};

export default Page;
