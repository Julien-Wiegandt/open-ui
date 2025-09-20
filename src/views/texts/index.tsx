import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Usage } from "../components/usage";

export const Texts = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Text</Title>

      <Usage
        title="sizes"
        components={
          <>
            <Text size="10">size 10</Text>
            <Text size="12">size 12</Text>
            <Text size="14">size 14</Text>
            <Text>Default Text size 16</Text>
            <Text size="18">size 18</Text>
            <Text size="20">size 20</Text>
            <Text size="24">size 24</Text>
            <Text size="28">size 28</Text>
            <Text size="32">size 32</Text>
            <Text size="36">size 36</Text>
            <Text size="40">size 40</Text>
            <Text size="44">size 44</Text>
            <Text size="48">size 48</Text>
            <Text size="52">size 52</Text>
            <Text size="56">size 56</Text>
            <Text size="60">size 60</Text>
            <Text size="64">size 64</Text>
            <Text size="72">size 72</Text>
          </>
        }
        onCopy={() => navigator.clipboard.writeText(`<Text>Default Text</Text>`)}
        orientation="vertical"
      />
    </Flex>
  );
};
