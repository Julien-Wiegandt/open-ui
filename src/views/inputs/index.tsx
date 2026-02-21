import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Input } from "../../components/input";
import { Usage } from "../components/usage";

export const Inputs = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Input</Title>

      <Usage
        title="base"
        components={
          <>
            <Input placeholder="Classic input" />
            <Input label="With label" placeholder="Classic input" />
            <Input
              label="With label & required"
              placeholder="This field is required"
              required
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="With label" placeholder="Classic input" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="types"
        components={
          <>
            <Input type="text" placeholder="text" label="text" />
            <Input type="number" placeholder="number" label="number" />
            <Input type="password" placeholder="password" label="password" />
            <Input type="email" placeholder="email" label="email" />
            <Input type="url" placeholder="url" label="url" />
            <Input type="tel" placeholder="tel" label="tel" />
            <Input type="search" placeholder="search" label="search" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input type="password" placeholder="password" label="password" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="colors"
        components={
          <>
            <Input label="primary" placeholder="primary" color="primary" />
            <Input
              label="secondary"
              placeholder="secondary"
              color="secondary"
            />
            <Input label="default" placeholder="default" color="default" />
            <Input label="error" placeholder="error" color="error" />
            <Input label="custom" placeholder="custom" color="#22d348ff" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="primary" placeholder="primary" color="primary" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="states"
        components={
          <>
            <Input label="Disabled" placeholder="Cannot be edited" disabled />
            <Input label="Read Only" value="This is read only" readOnly />
            <Input
              label="With Error"
              placeholder="me@example.com"
              error="Invalid email address"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="Disabled" placeholder="Cannot be edited" disabled />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="dimensions"
        components={
          <>
            <Input label="Custom width" placeholder="300px width" w="300px" />
            <Input label="Custom height" placeholder="48px height" h="48px" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="Custom width" placeholder="300px width" w="300px" />`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
