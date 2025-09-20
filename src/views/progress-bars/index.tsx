import { Flex } from "@/components/flex";
import { ProgressBar } from "@/components/progress-bar";

export const ProgressBars = () => {
  return (
    <Flex gap={1} width="200px">
      <ProgressBar value={0} color="primary" />
      <ProgressBar value={50} color="primary" />
      <ProgressBar value={100} color="primary" />
      <ProgressBar value={0} color="secondary" />
      <ProgressBar value={50} color="secondary" />
      <ProgressBar value={100} color="secondary" />
    </Flex>
  );
};
