import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import type { Elevation } from "@/theme/types";
import { Usage } from "../components/usage";

export const Flexs = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Flex</Title>
      <Usage
        title="elevations"
        components={
          <>
            {Array.from({ length: 6 }).map((_, i) => {
              const elevationMap: Elevation[] = [0, 1, 2, 3, 4, 6, 8];
              return (
                <Flex
                  elevation={elevationMap[i]}
                  width="100px"
                  height="100px"
                  align="center"
                  justify="center"
                >
                  <Text>{elevationMap[i]}</Text>
                </Flex>
              );
            })}
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Flex
                  width="100px"
                  height="100px"
                  align="center"
                  justify="center"
                >
                  <Text>0</Text>
                </Flex>`)
        }
      />
    </Flex>
  );
};
