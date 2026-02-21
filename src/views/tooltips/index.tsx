import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Tooltip } from "@/components/tooltip";
import { Usage } from "../components/usage";

export const Tooltips = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Tooltip</Title>

      <Usage
        title="base"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2}>
            <Tooltip label="Default tooltip">
              <Button label="Hover me" variant="outlined" color="default" />
            </Tooltip>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Tooltip label="Tooltip text">\n  <Button label="Hover me" />\n</Tooltip>`,
          )
        }
      />

      <Usage
        title="variants"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Tooltip label="Contained variant" variant="contained">
              <Button label="Contained" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Outlined variant" variant="outlined">
              <Button label="Outlined" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Soft variant" variant="soft">
              <Button label="Soft" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Text variant" variant="text">
              <Button label="Text" variant="outlined" color="default" />
            </Tooltip>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Tooltip variant="soft" label="...">...</Tooltip>`,
          )
        }
      />

      <Usage
        title="placements"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Tooltip label="Top tooltip" placement="top">
              <Button label="Top" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Bottom tooltip" placement="bottom">
              <Button label="Bottom" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Left tooltip" placement="left">
              <Button label="Left" variant="outlined" color="default" />
            </Tooltip>
            <Tooltip label="Right tooltip" placement="right">
              <Button label="Right" variant="outlined" color="default" />
            </Tooltip>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Tooltip placement="right" label="...">...</Tooltip>`,
          )
        }
      />

      <Usage
        title="colors"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Tooltip label="Primary color" color="primary">
              <Chip label="Primary" variant="soft" color="primary" />
            </Tooltip>
            <Tooltip label="Secondary color" color="secondary">
              <Chip label="Secondary" variant="soft" color="secondary" />
            </Tooltip>
            <Tooltip label="Error color" color="error">
              <Chip label="Error" variant="soft" color="error" />
            </Tooltip>
            <Tooltip label="Custom color" color="#8a2be2">
              <Chip label="Custom" variant="soft" color="default" />
            </Tooltip>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Tooltip color="secondary" label="...">...</Tooltip>`,
          )
        }
      />

      <Usage
        title="advanced content"
        orientation="horizontal"
        components={
          <Tooltip
            color="default"
            bgcolor="white"
            label={
              <Flex p={0.5} gap={0.5}>
                <Title level={6} style={{ margin: 0 }}>
                  Custom Tooltip
                </Title>
                <div style={{ color: "#666", fontSize: "11px" }}>
                  You can pass <b>JSX</b> as a label!
                </div>
              </Flex>
            }
          >
            <Button label="Rich Tooltip" variant="contained" color="default" />
          </Tooltip>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Tooltip label={<Flex>...</Flex>}>...</Tooltip>`,
          )
        }
      />
    </Flex>
  );
};
