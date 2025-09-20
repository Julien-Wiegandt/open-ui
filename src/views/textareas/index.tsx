import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { TextArea } from "../../components/textarea";
import { Usage } from "../components/usage";

export const TextAreas = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>TextArea</Title>
      <Usage
        title="usage"
        components={
          <>
            <TextArea placeholder="Classic" />
            <TextArea placeholder="4 rows default" rows={4} />
            <TextArea placeholder="Errors" error="Invalid value provided" />
          </>
        }
        onCopy={() => navigator.clipboard.writeText(`<TextArea placeholder="Classic" />`)}
        orientation="vertical"
      />
    </Flex>
  );
};
