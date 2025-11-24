import { Flex } from "@/components/flex";
import { Input } from "@/components/input";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const ColorPickers = () => {
  const [controlled, setControlled] = useState("#000000");
  return (
    <Flex gap={4}>
      <Title level={2}>ColorPicker</Title>

      <Usage
        title="simple"
        components={
          <>
            <Input
              type="color"
              color="primary"
              w="2rem"
              h="2rem"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Input
              type="color"
              color="primary"
              label="color"
              w="2rem"
              h="2rem"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
            <Input
              type="color"
              color="primary"
              label="color"
              error="Wrong color"
              w="2rem"
              h="2rem"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(`<Input
              type="color"
              color="primary"
              w="3rem"
              h="3rem"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />`)
        }
      />
      <Usage
        title="controlled"
        components={
          <>
            <Input
              type="color"
              color="primary"
              w="3rem"
              h="3rem"
              value={controlled}
              onChange={(e) => {
                setControlled(e.target.value);
              }}
            />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(`<Input
              type="color"
              color="primary"
              w="3rem"
              h="3rem"
              value={controlled}
              onChange={(e) => {
                setControlled(e.target.value);
              }}
            />`)
        }
      />
    </Flex>
  );
};
