import { Divider } from "@/components/divider";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Dividers = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Divider</Title>

      <Usage
        title="types"
        components={
          <>
            <Divider type="solid" />
            <Divider type="dashed" />
            <Divider type="dotted" />
            <Divider type="double" />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(`<Divider type="solid" />`)}
      />

      <Usage
        title="sizes"
        components={
          <>
            <Divider size="sm" />
            <Divider size="md" />
            <Divider size="lg" />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(`<Divider size="sm" />`)}
      />

      <Usage
        title="orientations"
        components={
          <>
            <Divider orientation={"vertical"} style={{ height: "100px" }} />
            <Divider />
          </>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Divider orientation={"vertical"} style={{ height: "100px" }} />`
          )
        }
      />
    </Flex>
  );
};
