import { Flex } from "@/components/flex";
import { ProgressBar } from "@/components/progress-bar";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const ProgressBars = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Progressbar</Title>
      <Usage
        title="primary"
        components={
          <>
            <ProgressBar value={0} color="primary" w="200px" />
            <ProgressBar value={50} color="primary" w="200px" />
            <ProgressBar value={100} color="primary" w="200px" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={0} color="primary" w="200px" />`
          )
        }
        orientation="vertical"
      />

      <Usage
        title="default"
        components={
          <>
            <ProgressBar value={0} color="default" w="200px" />
            <ProgressBar value={50} color="default" w="200px" />
            <ProgressBar value={100} color="default" w="200px" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={0} color="default" w="200px" />`
          )
        }
        orientation="vertical"
      />
      <Usage
        title="error"
        components={
          <>
            <ProgressBar value={0} color="error" w="200px" />
            <ProgressBar value={50} color="error" w="200px" />
            <ProgressBar value={100} color="error" w="200px" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<ProgressBar value={0} color="error" w="200px" />`
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
