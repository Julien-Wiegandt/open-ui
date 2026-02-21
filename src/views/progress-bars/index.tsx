import { Flex } from "@/components/flex";
import { ProgressBar } from "@/components/progress-bar";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const ProgressBars = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>ProgressBar</Title>

      <Usage
        title="base"
        components={
          <Flex direction="column" gap={2} width="300px">
            <ProgressBar value={25} color="primary" />
            <ProgressBar value={50} color="primary" />
            <ProgressBar value={75} color="primary" />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={50} color="primary" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="colors"
        components={
          <Flex direction="column" gap={2} width="300px">
            <ProgressBar value={60} color="primary" />
            <ProgressBar value={60} color="secondary" />
            <ProgressBar value={60} color="default" />
            <ProgressBar value={60} color="error" />
            <ProgressBar value={60} color="#22d348ff" />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={60} color="secondary" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="sizes"
        components={
          <Flex direction="column" gap={2} width="100%">
            <ProgressBar value={40} color="primary" h="4px" w="100px" />
            <ProgressBar value={40} color="primary" h="8px" w="200px" />
            <ProgressBar value={40} color="primary" h="16px" w="300px" />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={40} color="primary" h="16px" w="300px" />`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
