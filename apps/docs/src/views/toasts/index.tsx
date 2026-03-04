"use client";

import { Button, ExampleIcon, Flex, Title, Toast, ToastContext } from "@julien-wiegandt/open-ui";
import { Usage } from "../components/usage";

import { useContext } from "react";

export const Toasts = () => {
  const { addToast } = useContext(ToastContext);
  return (
    <Flex gap={4}>
      <Title level={2}>Toast</Title>

      <Usage
        title="usage"
        components={
          <>
            <Button
              color="primary"
              label="primary"
              variant="contained"
              onClick={() =>
                addToast({
                  title: "Account created successfully",
                  icon: <ExampleIcon />,
                  color: "primary",
                })
              }
            />
            <Button
              color="secondary"
              label="secondary"
              variant="contained"
              onClick={() =>
                addToast({
                  title: "Account created successfully",
                  icon: <ExampleIcon />,
                  color: "secondary",
                })
              }
            />
            <Button
              color="default"
              label="default"
              variant="contained"
              onClick={() =>
                addToast({
                  title: "Account successfully created",
                  icon: <ExampleIcon />,
                  color: "default",
                })
              }
            />
            <Button
              color="error"
              label="error"
              variant="contained"
              onClick={() =>
                addToast({
                  title:
                    "Le savais-tu ? Cliquer ne fait malheureusement pas perdre de calories.",
                  icon: <ExampleIcon />,
                  color: "error",
                })
              }
            />
            <Button
              color="#08d2bbff"
              label="custom"
              variant="contained"
              onClick={() =>
                addToast({
                  title: "No icon provided",
                })
              }
            />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Toast title="Account created successfully" />`,
          )
        }
      />
      <Usage
        title="colors"
        components={
          <>
            <Toast
              icon={<ExampleIcon />}
              title="Account created successfully"
              color="primary"
            />
            <Toast
              icon={<ExampleIcon />}
              title="Account created successfully"
              color="secondary"
            />
            <Toast
              icon={<ExampleIcon />}
              title="Account created successfully"
              color="default"
            />
            <Toast
              icon={<ExampleIcon />}
              title="Le savais-tu ? Cliquer ne fait malheureusement pas perdre de calories."
              color="error"
            />
            <Toast
              icon={<ExampleIcon />}
              title="Custom color"
              color="#08d2bbff"
            />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(``)}
      />
    </Flex>
  );
};
