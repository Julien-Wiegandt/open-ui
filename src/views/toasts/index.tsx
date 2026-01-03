import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { Toast } from "@/components/toast";
import { ToastContext } from "@/context/toast";
import { ExampleIcon } from "@/theme/constants";
import { useContext } from "react";
import { Usage } from "../components/usage";

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
                  title: "Bonjour !",
                  icon: <ExampleIcon />,
                  color: "error",
                })
              }
            />
          </>
        }
        orientation="horizontal"
        onCopy={() =>
          navigator.clipboard.writeText(`<Toast title="Account created successfully" />`)
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
              title="Account created successfully"
              color="error"
            />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(``)}
      />
      <Usage
        title="custom"
        components={
          <>
            <Toast>
              <Text>Account created successfully</Text>
            </Toast>
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(``)}
      />
    </Flex>
  );
};
