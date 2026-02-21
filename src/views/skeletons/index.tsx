import { Flex } from "@/components/flex";
import { Skeleton } from "@/components/skeleton";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Skeletons = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Skeleton</Title>

      <Usage
        title="base"
        components={
          <>
            <Skeleton />
            <Skeleton width="100px" height="12px" />
            <Skeleton width="150px" height="12px" />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(`<Skeleton />`)}
      />

      <Usage
        title="colors"
        components={
          <>
            <Skeleton />
            <Skeleton color="primary" />
            <Skeleton color="secondary" />
            <Skeleton color="default" />
            <Skeleton color="error" />
            <Skeleton color="#08d2bbff" />
          </>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(`<Skeleton color="primary" />`)
        }
      />

      <Usage
        title="shapes"
        components={
          <Flex direction="row" gap={2} align="center">
            {/* Rectangle (default) */}
            <Skeleton width="120px" height="16px" />
            {/* Square */}
            <Skeleton width="60px" height="60px" />
            {/* Rounded */}
            <Skeleton width="120px" height="16px" radius="8px" />
            {/* Circle */}
            <Skeleton width="56px" height="56px" radius="50%" />
          </Flex>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Skeleton width="56px" height="56px" radius="50%" />`,
          )
        }
      />

      <Usage
        title="card example"
        components={
          <Flex direction="row" gap={2} align="start">
            <Skeleton width="48px" height="48px" radius="50%" />
            <Flex direction="column" gap={1}>
              <Skeleton width="120px" height="14px" radius="4px" />
              <Skeleton width="200px" height="12px" radius="4px" />
              <Skeleton width="160px" height="12px" radius="4px" />
            </Flex>
          </Flex>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Skeleton width="48px" height="48px" radius="50%" />`,
          )
        }
      />
    </Flex>
  );
};
