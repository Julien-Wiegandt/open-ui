import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Input } from "../../components/input";
import { Usage } from "../components/usage";

export const Inputs = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Input</Title>
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

            {/* Should be other components */}
            {/* <Input type="date" placeholder="date" label="date" />
            <Input type="time" placeholder="time" label="time" />
            <Input
              type="datetime-local"
              placeholder="datetime-local"
              label="datetime-local"
            />
            <Input type="month" placeholder="month" label="month" />
            <Input type="week" placeholder="week" label="week" /> */}

            {/* Should have custon styled components */}
            {/* <Input type="color" placeholder="color" label="color" />
            <Input type="file" placeholder="file" label="file" />
            <Input type="checkbox" placeholder="checkbox" label="checkbox" />
            <Input type="radio" placeholder="radio" label="radio" />
            <Input type="range" placeholder="range" label="range" />
            <Input type="submit" placeholder="submit" label="submit" />
            <Input type="reset" placeholder="reset" label="reset" />
            <Input type="image" placeholder="image" label="image" />
            <Input type="hidden" placeholder="hidden" label="hidden" />
            <Input type="button" placeholder="button" label="button" /> */}
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input type="text" placeholder="text" label="text" />`
          )
        }
        orientation="vertical"
      />
      <Usage
        title="colors"
        components={
          <>
            <Input label="primary" placeholder="primary" color="primary" />
            <Input label="secondary" placeholder="secondary" color="secondary" />
            <Input label="default" placeholder="default" color="default" />
            <Input label="error" placeholder="error" color="error" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="primary" placeholder="primary" color="primary" />`
          )
        }
        orientation="vertical"
      />
      <Usage
        title="required"
        components={
          <>
            <Input label="required" placeholder="required" required />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="required" placeholder="required" required />`
          )
        }
      />
      <Usage
        title="error"
        components={
          <>
            <Input label="Email" placeholder="me@example.com" error="Wrong email" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Input label="Email" placeholder="me@example.com" error="Wrong email" />`
          )
        }
      />
    </Flex>
  );
};
