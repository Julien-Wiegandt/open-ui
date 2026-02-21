import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { useState } from "react";
import { TextArea } from "../../components/textarea";
import { Usage } from "../components/usage";

export const TextAreas = () => {
  const [value, setValue] = useState("Controlled value");

  return (
    <Flex gap={4}>
      <Title level={2}>TextArea</Title>

      <Usage
        title="base"
        components={
          <>
            <TextArea placeholder="Write something..." />
            <TextArea label="With label" placeholder="Write something..." />
            <TextArea
              label="With label & required"
              placeholder="This field is required"
              required
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea label="With label" placeholder="Write something..." />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="colors"
        components={
          <>
            <TextArea
              label="Primary"
              placeholder="primary..."
              color="primary"
            />
            <TextArea
              label="Secondary"
              placeholder="secondary..."
              color="secondary"
            />
            <TextArea
              label="Default"
              placeholder="default..."
              color="default"
            />
            <TextArea label="Error" placeholder="error..." color="error" />
            <TextArea
              label="Custom"
              placeholder="custom..."
              color="#08d2bbff"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea label="Primary" placeholder="primary..." color="primary" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="rows"
        components={
          <>
            <TextArea label="2 rows" placeholder="2 rows" rows={2} />
            <TextArea label="4 rows" placeholder="4 rows (default)" rows={4} />
            <TextArea label="8 rows" placeholder="8 rows" rows={8} />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea rows={4} placeholder="4 rows (default)" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="error"
        components={
          <>
            <TextArea
              label="Comment"
              placeholder="Write something..."
              error="This field is invalid"
            />
            <TextArea
              placeholder="Without label"
              error="This field is invalid"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea label="Comment" placeholder="Write something..." error="This field is invalid" />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="disabled"
        components={
          <>
            <TextArea
              label="Disabled"
              placeholder="Cannot be edited"
              disabled
            />
            <TextArea
              label="Disabled with value"
              defaultValue="This value cannot be changed"
              disabled
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea label="Disabled" placeholder="Cannot be edited" disabled />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="controlled"
        components={
          <>
            <TextArea
              label={`Controlled (${value.length} chars)`}
              placeholder="Type here..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<TextArea label="Controlled" value={value} onChange={(e) => setValue(e.target.value)} />`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
