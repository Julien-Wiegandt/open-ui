import { Flex } from "@/components/flex";
import { TextArea } from "../../components/textarea";

export const TextAreas = () => {
  return (
    <Flex gap={1}>
      <TextArea placeholder="Classic" />
      <TextArea placeholder="4 rows default" rows={4} />
      <TextArea placeholder="Errors" error="Invalid value provided" />
    </Flex>
  );
};
