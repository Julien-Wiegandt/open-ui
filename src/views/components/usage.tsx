import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";

export const Usage = (props: {
  title: string;
  components: React.ReactNode;
  orientation?: "vertical" | "horizontal";
  onCopy?: () => void;
}) => {
  return (
    <Flex gap={1}>
      <Title level={5}>{props.title}</Title>
      <Flex
        direction={props.orientation === "vertical" ? "column" : "row"}
        elevation={2}
        p={4}
        align={props.orientation === "vertical" ? "start" : "center"}
        justify={props.orientation === "vertical" ? "center" : "start"}
        gap={2}
        style={{
          position: "relative",
        }}
      >
        {props.onCopy && (
          <Button
            color="default"
            variant="text"
            size="sm"
            onClick={props.onCopy}
            startIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3D3D3D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            }
            style={{
              position: "absolute",
              top: "0px",
              right: "0px",
            }}
          />
        )}
        {props.components}
      </Flex>
    </Flex>
  );
};
