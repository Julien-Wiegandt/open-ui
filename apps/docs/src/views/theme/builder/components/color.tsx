"use client";

import { ExampleIcon, Flex, useToast } from "@julien-wiegandt/open-ui";

interface ColorProps {
  color: string;
}

export const Color = ({ color }: ColorProps) => {
  const { addToast } = useToast();
  return (
    <Flex
      width="40px"
      height="40px"
      onClick={() => {
        navigator.clipboard.writeText(color);
        addToast({
          title: "Color copied to clipboard",
          color: "primary",
          icon: <ExampleIcon />,
        });
      }}
      hoverstyle={{
        outline: "2px solid #000000",
      }}
      style={{
        backgroundColor: color,
        cursor: "pointer",
      }}
    />
  );
};
