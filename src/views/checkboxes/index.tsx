import { Checkbox } from "@/components/checkbox";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Checkboxes = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <Flex direction="column" gap={4}>
      <Title level={2}>Checkbox</Title>

      <Usage
        title="colors"
        components={
          <>
            <Checkbox color="primary" label="Primary" />
            <Checkbox color="secondary" label="Secondary" />
            <Checkbox color="default" label="Default" />
            <Checkbox color="error" label="Error" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Checkbox color="primary" label="Primary" />`)
        }
      />

      <Usage
        title="sizes"
        components={
          <>
            <Checkbox color="primary" size="sm" label="Small" />
            <Checkbox color="primary" size="md" label="Medium" />
            <Checkbox color="primary" size="lg" label="Large" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" size="sm" label="Small" />`
          )
        }
      />

      <Usage
        title="radius"
        components={
          <>
            <Checkbox color="primary" label="None" radius="none" />
            <Checkbox color="primary" label="Small" radius="sm" />
            <Checkbox color="primary" label="Medium" radius="md" />
            <Checkbox color="primary" label="Large" radius="lg" />
            <Checkbox color="primary" label="Full" radius="full" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" label="None" radius="none" />`
          )
        }
      />

      <Usage
        title="label position"
        components={
          <>
            <Checkbox color="primary" label="Label on right" labelPosition="right" />
            <Checkbox color="primary" label="Label on left" labelPosition="left" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" label="Label on right" labelPosition="right" />`
          )
        }
      />

      <Usage
        title="controlled"
        components={
          <>
            <Checkbox
              color="primary"
              label={`Controlled (${checked1 ? "checked" : "unchecked"})`}
              checked={checked1}
              onChange={setChecked1}
            />
            <Checkbox
              color="primary"
              label={`Controlled (${checked2 ? "checked" : "unchecked"})`}
              checked={checked2}
              onChange={setChecked2}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" label="Controlled" checked={checked} onChange={setChecked} />`
          )
        }
      />

      <Usage
        title="uncontrolled"
        components={
          <>
            <Checkbox color="primary" label="Uncontrolled (default unchecked)" />
            <Checkbox
              color="primary"
              label="Uncontrolled (default checked)"
              defaultChecked
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" label="Uncontrolled" defaultChecked />`
          )
        }
      />

      <Usage
        title="disabled"
        components={
          <>
            <Checkbox color="primary" label="Disabled unchecked" disabled />
            <Checkbox color="primary" label="Disabled checked" disabled checked />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Checkbox color="primary" label="Disabled" disabled />`
          )
        }
      />

      <Usage
        title="without label"
        components={
          <>
            <Checkbox color="primary" />
            <Checkbox color="default" />
            <Checkbox color="error" />
          </>
        }
        onCopy={() => navigator.clipboard.writeText(`<Checkbox color="primary" />`)}
      />
    </Flex>
  );
};
