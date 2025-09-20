import { Flex } from "@/components/flex";
import { Title } from "@/components/title";

export const Titles = () => {
  return (
    <Flex gap={1}>
      <Title level={1}>Title 1</Title>
      <Title level={2}>Title 2</Title>
      <Title level={3}>Title 3</Title>
      <Title level={4}>Title 4</Title>
      <Title level={5}>Title 5</Title>
      <Title level={6}>Title 6</Title>
    </Flex>
  );
};
