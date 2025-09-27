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
              label="instant"
              size="sm"
              endClickAnimation
            />
            <Button
              variant="outlined"
              color="primary"
              label="instant"
              endClickAnimation
            />
            <Button
              variant="text"
              color="primary"
              label="instant"
              size="lg"
              endClickAnimation
            />
            <Button
              variant="contained"
              color="primary"
              label="loading"
              endClickAnimation
              onClick={async () => {
                await new Promise((resolve) => setTimeout(resolve, 5000));
              }}
            />
            {show && (
              <Button
                variant="contained"
                color="primary"
                label="process and hide"
                endClickAnimation
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
              label="instant"
              endClickAnimation
            />`
          )
        }
      />
    </Flex>
  );
};
