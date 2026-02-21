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
  const [isVisible5, setIsVisible5] = useState(false);
  const [isVisible6, setIsVisible6] = useState(false);
  const [isVisible7, setIsVisible7] = useState(false);
  const [isVisible8, setIsVisible8] = useState(false);

  // We wrap the content to avoid any type issues with JSX fragments in some environments
  const body = (
    <Flex px={1.5} py={1}>
      <Text weight="medium" size="14">
        Popover Content
      </Text>
      <Text size="12">This is the popover content</Text>
    </Flex>
  );

  return (
    <Flex gap={4}>
      <Title level={2}>Popover</Title>

      <Usage
        title="placement"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Popover
              color="default"
              placement="top"
              content={body}
              visible={isVisible1}
            >
              <Button
                variant="outlined"
                color="default"
                label="top"
                onClick={() => setIsVisible1(!isVisible1)}
              />
            </Popover>
            <Popover
              color="default"
              placement="bottom"
              content={body}
              visible={isVisible2}
            >
              <Button
                variant="outlined"
                color="default"
                label="bottom"
                onClick={() => setIsVisible2(!isVisible2)}
              />
            </Popover>
            <Popover
              color="default"
              placement="left"
              content={body}
              visible={isVisible3}
            >
              <Button
                variant="outlined"
                color="default"
                label="left"
                onClick={() => setIsVisible3(!isVisible3)}
              />
            </Popover>
            <Popover
              color="default"
              placement="right"
              content={body}
              visible={isVisible4}
            >
              <Button
                variant="outlined"
                color="default"
                label="right"
                onClick={() => setIsVisible4(!isVisible4)}
              />
            </Popover>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Popover placement="top" content={<div>Content</div>} visible={visible}>
  <Button label="Open" />
</Popover>`,
          )
        }
      />

      <Usage
        title="colors"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Popover
              color="primary"
              content={body}
              visible={isVisible5}
              placement="top"
            >
              <Chip
                variant="contained"
                label="primary"
                color="primary"
                onClick={() => setIsVisible5(!isVisible5)}
              />
            </Popover>
            <Popover
              color="secondary"
              content={body}
              visible={isVisible6}
              placement="top"
            >
              <Chip
                variant="contained"
                label="secondary"
                color="secondary"
                onClick={() => setIsVisible6(!isVisible6)}
              />
            </Popover>
            <Popover
              color="error"
              content={body}
              visible={isVisible7}
              placement="top"
            >
              <Chip
                variant="contained"
                label="error"
                color="error"
                onClick={() => setIsVisible7(!isVisible7)}
              />
            </Popover>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Popover color="primary" content={body} visible={visible}>...</Popover>`,
          )
        }
      />

      <Usage
        title="gap & radius"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Popover
              color="default"
              content={body}
              visible={isVisible8}
              gap={24}
              radius="full"
              placement="top"
            >
              <Button
                variant="contained"
                color="default"
                label="custom gap/radius"
                onClick={() => setIsVisible8(!isVisible8)}
              />
            </Popover>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Popover gap={24} radius="full" content={body} visible={visible}>...</Popover>`,
          )
        }
      />
    </Flex>
  );
};
