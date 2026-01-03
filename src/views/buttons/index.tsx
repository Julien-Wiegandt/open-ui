import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { useState } from "react";
import { Button } from "../../components/button";
import { Usage } from "../components/usage";

{
  /* <Usage title="" components={<></>} />; */
}

export const Buttons = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  return (
    <Flex direction="column" gap={4}>
      <Title level={2}>Button</Title>
      <Usage
        title="variants"
        components={
          <>
            <Button variant="contained" color="primary" label="contained" />
            <Button variant="outlined" color="primary" label="outlined" />
            <Button variant="text" color="primary" label="text" />
            <Button variant="soft" color="primary" label="soft" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button variant="contained" color="primary" label="contained" />`
          )
        }
      />
      <Usage
        title="colors"
        components={
          <>
            <Button variant="contained" color="primary" label="primary" />
            <Button variant="contained" color="secondary" label="secondary" />
            <Button variant="contained" color="default" label="default" />
            <Button variant="contained" color="error" label="error" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button variant="contained" color="primary" label="primary" />`
          )
        }
      />
      <Usage
        title="sizes"
        components={
          <>
            <Button variant="contained" color="primary" size="sm" label="small" />
            <Button variant="contained" color="primary" size="md" label="medium" />
            <Button variant="contained" color="primary" size="lg" label="large" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button variant="contained" color="primary" size="sm" label="small" />`
          )
        }
      />
      <Usage
        title="radius"
        components={
          <>
            <Button variant="contained" color="primary" label="none" radius="none" />
            <Button variant="contained" color="primary" label="sm" radius="sm" />
            <Button variant="contained" color="primary" label="md" radius="md" />
            <Button variant="contained" color="primary" label="lg" radius="lg" />
            <Button variant="contained" color="primary" label="full" radius="full" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button variant="contained" color="primary" label="none" radius="none" />`
          )
        }
      />

      <Usage
        title="icons"
        components={
          <>
            <Button
              variant="contained"
              color="primary"
              size="md"
              label="start icon"
              starticon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              }
            />
            <Button
              variant="contained"
              color="primary"
              size="md"
              label="end icon"
              endicon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              }
            />
            <Button
              variant="contained"
              color="primary"
              size="md"
              starticon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              }
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button
              variant="contained"
              color="primary"
              size="md"
              label="start icon"
              starticon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5v14" />
                </svg>
              }
            />`
          )
        }
      />
      <Usage
        title="loading"
        components={
          <>
            <Button
              variant="contained"
              color="primary"
              label="loading"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 5000));
              }}
            />
            <Button
              variant="contained"
              color="primary"
              label="loading"
              loading={loading}
              onClick={async () => {
                setLoading(true);
                await new Promise((resolve) => setTimeout(resolve, 5000));
                setLoading(false);
              }}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button
              variant="contained"
              color="primary"
              label="loading"
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 5000));
              }}
            />`
          )
        }
      />
      <Usage
        title="end click animation"
        components={
          <>
            <Button
              variant="contained"
              color="primary"
              label="loading"
              endanimation
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 5000));
              }}
            />
            {show && (
              <Button
                variant="contained"
                color="primary"
                label="process and hide"
                endanimation
                onClick={async () => {
                  await new Promise((resolve) => setTimeout(resolve, 5000));
                  setTimeout(() => {
                    setShow(false);
                  }, 1000);
                }}
              />
            )}
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button
              variant="contained"
              color="primary"
              label="loading"
              endanimation
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 5000));
              }}
            />`
          )
        }
      />
      <Usage
        title="animated icon"
        components={
          <Flex direction="row" wrap="wrap" gap={2}>
            <Button
              variant="contained"
              color="primary"
              label="Notifications"
              endicon="bell"
            />
            <Button variant="contained" color="primary" label="Like" endicon="heart" />
            <Button
              variant="contained"
              color="primary"
              label="Menu"
              endicon="hamburger"
            />
            <Button variant="contained" color="primary" label="Accept" endicon="check" />
            <Button variant="contained" color="primary" label="Sync" endicon="sync" />
            <Button
              variant="contained"
              color="primary"
              label="Sparkles"
              endicon="sparkles"
            />
            <Button variant="contained" color="primary" label="Dots" endicon="dots" />
            <Button variant="contained" color="primary" label="Send" endicon="send" />
            <Button variant="contained" color="primary" label="Copy" endicon="copy" />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Button variant="contained" color="primary" label="instant" endicon="bell" />`
          )
        }
      />
    </Flex>
  );
};
