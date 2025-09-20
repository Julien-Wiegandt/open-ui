import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Toast } from "@/components/toast";
import { SuccessIcon } from "@/theme/constants";
import { Usage } from "../components/usage";

export const Toasts = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Toasts</Title>

      <Usage
        title="usage"
        components={
          <>
            <Toast title="Account created successfully" />
            <Toast startIcon={<SuccessIcon />} title="Account created successfully" />
            <Toast endIcon={<SuccessIcon />} title="Account created successfully" />
          </>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(`<Toast title="Account created successfully" />`)
        }
      />
    </Flex>
  );
};
