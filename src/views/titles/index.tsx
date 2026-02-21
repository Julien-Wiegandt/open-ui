import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Titles = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Title</Title>

      <Usage
        title="levels"
        components={
          <>
            <Title level={1}>Title level 1</Title>
            <Title level={2}>Title level 2</Title>
            <Title level={3}>Title level 3</Title>
            <Title level={4}>Title level 4</Title>
            <Title level={5}>Title level 5</Title>
            <Title level={6}>Title level 6</Title>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Title level={1}>Title 1</Title>`)
        }
        orientation="vertical"
      />

      <Usage
        title="colors"
        components={
          <>
            <Title level={3} color="primary">
              Primary
            </Title>
            <Title level={3} color="secondary">
              Secondary
            </Title>
            <Title level={3} color="default">
              Default
            </Title>
            <Title level={3} color="error">
              Error
            </Title>
            <Title level={3} color="#08d2bbff">
              Custom color
            </Title>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Title level={3} color="primary">Primary</Title>`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="weights"
        components={
          <>
            <Title level={3} weight="regular">
              Regular weight
            </Title>
            <Title level={3} weight="medium">
              Medium weight
            </Title>
            <Title level={3} weight="semibold">
              Semibold weight
            </Title>
            <Title level={3} weight="bold">
              Bold weight
            </Title>
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Title level={3} weight="bold">Bold weight</Title>`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
