import { Flex } from "@/components/flex";
import { Title } from "@/components/title";

export const Usage = (props: {
  title: string;
  components: React.ReactNode;
  orientation?: "vertical" | "horizontal";
}) => {
  return (
    <Flex gap={2}>
      <Title level={5}>{props.title}</Title>
      <Flex
        direction={props.orientation === "vertical" ? "column" : "row"}
        elevation={1}
        p={4}
        align="center"
        justify="center"
        gap={2}
      >
        {props.components}
      </Flex>
    </Flex>
  );
};
