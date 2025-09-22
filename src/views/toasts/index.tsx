import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { Toast } from "@/components/toast";
import { ToastContext } from "@/context/toast";
import { SuccessIcon } from "@/theme/constants";
import { useContext } from "react";
import { Usage } from "../components/usage";

export const Toasts = () => {
  const { addToast } = useContext(ToastContext);
  return (
    <Flex gap={4}>
      <Title level={2}>Toasts</Title>

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
                  startIcon: <SuccessIcon />,
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
                  title: "Account created",
                  startIcon: <SuccessIcon />,
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
                  startIcon: <SuccessIcon />,
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
                  startIcon: <SuccessIcon />,
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
              startIcon={<SuccessIcon />}
              title="Account created successfully"
              color="primary"
            />
            <Toast
              startIcon={<SuccessIcon />}
              title="Account created successfully"
              color="secondary"
            />
            <Toast
              startIcon={<SuccessIcon />}
              title="Account created successfully"
              color="default"
            />
            <Toast
              startIcon={<SuccessIcon />}
              title="Account created successfully"
              color="error"
            />
          </>
        }
        orientation="vertical"
        onCopy={() => navigator.clipboard.writeText(``)}
      />
    </Flex>
  );
};
