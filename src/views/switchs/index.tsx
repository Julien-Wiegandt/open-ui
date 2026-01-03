import { Flex } from "@/components/flex";
import { Switch } from "@/components/switch";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Switchs = () => {
  const [on, setOn] = useState(false);
  const [primary, setPrimary] = useState(true);
  const [secondary, setSecondary] = useState(true);
  const [defaultColor, setDefaultColor] = useState(true);
  const [error, setError] = useState(true);

  return (
    <Flex gap={4}>
      <Title level={2}>Switch</Title>

      <Usage
        title="simple"
        components={
          <>
            <Switch />
          </>
        }
        orientation="horizontal"
        onCopy={() => navigator.clipboard.writeText(`<Switch />`)}
      />
      <Usage
        title="color"
        components={
          <>
            <Switch
              color="primary"
              value={primary}
              onChange={(isOn) => setPrimary(isOn)}
            />

            <Switch
              color="secondary"
              value={secondary}
              onChange={(isOn) => setSecondary(isOn)}
            />

            <Switch
              color="default"
              value={defaultColor}
              onChange={(isOn) => setDefaultColor(isOn)}
            />
            <Switch color="error" value={error} onChange={(isOn) => setError(isOn)} />
          </>
        }
        orientation="horizontal"
        onCopy={() => navigator.clipboard.writeText(`<Switch color="primary" />>`)}
      />
      <Usage
        title="controlled"
        components={
          <>
            <Switch value={on} onChange={(isOn) => setOn(isOn)} />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Switch value={on} onChange={(isOn) => setOn(isOn)} />`
          )
        }
      />
    </Flex>
  );
};
