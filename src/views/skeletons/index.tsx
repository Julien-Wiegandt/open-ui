import { Flex } from "@/components/flex";
import { Skeleton } from "@/components/skeleton";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Skeletons = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Skeleton</Title>

      <Usage
        title="usage"
        components={
          <>
            <Skeleton />
            <Skeleton width="28px" height="28px" />
            <Skeleton width="50px" height="50px" radius="50px" />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(`<Skeleton />`)}
      />
    </Flex>
  );
};
