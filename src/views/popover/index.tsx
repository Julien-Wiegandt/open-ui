import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Flex } from "@/components/flex";
import { Popover } from "@/components/popover";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Popovers = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isVisible4, setIsVisible4] = useState(false);

  const body = (
    <Flex px={1.5} py={1}>
      <Title level={5} style={{ whiteSpace: "nowrap" }}>
        Popover Content
      </Title>
      <Text size="14" style={{ whiteSpace: "nowrap" }}>
        This is the popover content
      </Text>
    </Flex>
  );
  return (
    <Flex gap={4}>
      <Title level={2}>Popover</Title>

      <Usage
        title="placement"
        orientation="vertical"
        components={
          <>
            <Popover
              color="primary"
              placement="top"
              content={body as any}
              visible={isVisible1}
              arrowcolor="blue"
              bgcolor="red"
            >
              <Button
                variant="contained"
                color="primary"
                label="contained"
                onClick={() => {
                  setIsVisible1(!isVisible1);
                }}
              />
            </Popover>
            <Popover
              color="default"
              placement="left"
              content={body as any}
              visible={isVisible2}
              gap={16}
            >
              <Chip
                variant="contained"
                label="left"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsVisible2(!isVisible2)}
              />
            </Popover>
            <Popover
              color="default"
              placement="right"
              content={body as any}
              visible={isVisible3}
            >
              <Chip
                variant="contained"
                label="right"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsVisible3(!isVisible3)}
              />
            </Popover>
            <Popover
              color="primary"
              placement="bottom"
              content={body as any}
              visible={isVisible4}
            >
              <Chip
                variant="contained"
                label="bottom"
                color="primary"
                style={{ cursor: "pointer" }}
                onClick={() => setIsVisible4(!isVisible4)}
              />
            </Popover>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Popover color="primary" label="contained" variant="contained" />`
          )
        }
      />
    </Flex>
  );
};
