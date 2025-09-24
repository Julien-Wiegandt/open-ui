import { Flex } from "@/components/flex";
import CheckIcon from "@/components/icons/check";
import { Title } from "@/components/title";
import { useState } from "react";
import { Usage } from "../components/usage";

export const Icons = () => {
  const [checkIcon, setCheckIcon] = useState(true);

  return (
    <Flex gap={4}>
      <Title level={2}>Icon</Title>

      <Usage
        title="static"
        components={
          <>
            <CheckIcon isVisible={true} />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(`<CheckIcon isVisible={true} />`)}
      />
      <Usage
        title="animated"
        components={
          <>
            <CheckIcon
              isVisible={checkIcon}
              animated
              onClick={() => {
                setCheckIcon(false);
                setTimeout(() => {
                  setCheckIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />
          </>
        }
        orientation="vertical"
        onCopy={() =>
          navigator.clipboard.writeText(`<CheckIcon
              isVisible={checkIcon}
              animated
              onClick={() => {
                setCheckIcon(false);
                setTimeout(() => {
                  setCheckIcon(true);
                }, 50);
              }}
              style={{
                cursor: "pointer",
              }}
            />`)
        }
      />
    </Flex>
  );
};
