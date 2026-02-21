import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Texts = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Text</Title>

      <Usage
        title="sizes"
        components={
          <>
            <Text size="10">size 10</Text>
            <Text size="12">size 12</Text>
            <Text size="14">size 14</Text>
            <Text>Default (size 16)</Text>
            <Text size="18">size 18</Text>
            <Text size="20">size 20</Text>
            <Text size="24">size 24</Text>
            <Text size="28">size 28</Text>
            <Text size="32">size 32</Text>
            <Text size="36">size 36</Text>
            <Text size="40">size 40</Text>
            <Text size="48">size 48</Text>
            <Text size="56">size 56</Text>
            <Text size="64">size 64</Text>
            <Text size="72">size 72</Text>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Text>Default Text</Text>`)
        }
        orientation="vertical"
      />

      <Usage
        title="colors"
        components={
          <>
            <Text color="primary">Primary</Text>
            <Text color="secondary">Secondary</Text>
            <Text color="default">Default</Text>
            <Text color="error">Error</Text>
            <Text color="#08d2bbff">Custom color</Text>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Text color="primary">Primary</Text>`)
        }
        orientation="vertical"
      />

      <Usage
        title="weights"
        components={
          <>
            <Text weight="regular">Regular weight</Text>
            <Text weight="medium">Medium weight</Text>
            <Text weight="semibold">Semibold weight</Text>
            <Text weight="bold">Bold weight</Text>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Text weight="bold">Bold weight</Text>`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="alignment"
        components={
          <Flex direction="column" width="300px" gap={1}>
            <Text align="left">Left aligned text</Text>
            <Text align="center">Centered text</Text>
            <Text align="right">Right aligned text</Text>
            <Text align="justify">
              Justified text with enough content to actually wrap and be
              justified across multiple lines in a container.
            </Text>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Text align="center">Centered text</Text>`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
