import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import type { Elevation } from "@/theme/types";
import { useTheme } from "styled-components";
import { Usage } from "../components/usage";

export const Flexs = () => {
  const theme = useTheme();

  const Item = ({ children }: { children?: React.ReactNode }) => (
    <Flex
      width="60px"
      height="60px"
      align="center"
      justify="center"
      style={{
        backgroundColor: theme.palette.primary.light,
        borderRadius: "8px",
        border: `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Text color="primary" weight="bold">
        {children}
      </Text>
    </Flex>
  );

  return (
    <Flex gap={4}>
      <Title level={2}>Flex</Title>

      <Usage
        title="direction"
        components={
          <Flex direction="column" gap={2} width="100%">
            <Text weight="medium">
              Row (default items behavior in horizontal usage)
            </Text>
            <Flex direction="row" gap={1}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Flex>
            <Text weight="medium" mt={2}>
              Column
            </Text>
            <Flex direction="column" gap={1}>
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Flex>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Flex direction="row" gap={1}>...</Flex>`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="justify"
        components={
          <Flex direction="column" gap={2} width="100%">
            <Text weight="medium">Start</Text>
            <Flex
              direction="row"
              justify="start"
              width="100%"
              style={{ border: "1px dashed #ccc" }}
            >
              <Item>1</Item>
              <Item>2</Item>
            </Flex>
            <Text weight="medium">Center</Text>
            <Flex
              direction="row"
              justify="center"
              width="100%"
              style={{ border: "1px dashed #ccc" }}
            >
              <Item>1</Item>
              <Item>2</Item>
            </Flex>
            <Text weight="medium">End</Text>
            <Flex
              direction="row"
              justify="end"
              width="100%"
              style={{ border: "1px dashed #ccc" }}
            >
              <Item>1</Item>
              <Item>2</Item>
            </Flex>
            <Text weight="medium">Between</Text>
            <Flex
              direction="row"
              justify="between"
              width="100%"
              style={{ border: "1px dashed #ccc" }}
            >
              <Item>1</Item>
              <Item>2</Item>
              <Item>3</Item>
            </Flex>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Flex justify="center" direction="row">...</Flex>`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="align"
        components={
          <Flex direction="row" gap={4} align="start">
            <Flex direction="column" gap={1}>
              <Text weight="medium">Start</Text>
              <Flex
                align="start"
                height="120px"
                width="80px"
                style={{ border: "1px dashed #ccc" }}
              >
                <Item>1</Item>
              </Flex>
            </Flex>
            <Flex direction="column" gap={1}>
              <Text weight="medium">Center</Text>
              <Flex
                align="center"
                height="120px"
                width="80px"
                style={{ border: "1px dashed #ccc" }}
              >
                <Item>1</Item>
              </Flex>
            </Flex>
            <Flex direction="column" gap={1}>
              <Text weight="medium">End</Text>
              <Flex
                align="end"
                height="120px"
                width="80px"
                style={{ border: "1px dashed #ccc" }}
              >
                <Item>1</Item>
              </Flex>
            </Flex>
            <Flex direction="column" gap={1}>
              <Text weight="medium">Stretch</Text>
              <Flex
                align="stretch"
                height="120px"
                width="80px"
                style={{ border: "1px dashed #ccc" }}
              >
                <Flex
                  style={{
                    backgroundColor: theme.palette.primary.light,
                    padding: "8px",
                  }}
                >
                  <Text size="12">Stretched</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Flex align="center">...</Flex>`)
        }
        orientation="vertical"
      />

      <Usage
        title="gap"
        components={
          <Flex direction="column" gap={2}>
            <Text weight="medium">Gap 1 (0.5rem)</Text>
            <Flex direction="row" gap={1}>
              <Item />
              <Item />
            </Flex>
            <Text weight="medium">Gap 4 (2rem)</Text>
            <Flex direction="row" gap={4}>
              <Item />
              <Item />
            </Flex>
          </Flex>
        }
        onCopy={() => navigator.clipboard.writeText(`<Flex gap={4}>...</Flex>`)}
        orientation="vertical"
      />

      <Usage
        title="elevations"
        components={
          <Flex direction="row" wrap="wrap" gap={3}>
            {[0, 1, 2, 3, 4, 6, 8].map((e) => (
              <Flex
                key={e}
                elevation={e as Elevation}
                width="80px"
                height="80px"
                align="center"
                justify="center"
                style={{ borderRadius: "8px", backgroundColor: "white" }}
              >
                <Text weight="bold">{e}</Text>
              </Flex>
            ))}
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Flex elevation={2}>...</Flex>`)
        }
        orientation="vertical"
      />
    </Flex>
  );
};
