"use client";

import { Button, Flex, LLM_DOCS, useToast } from "@julien-wiegandt/open-ui";
import { useTheme } from "styled-components";

export const LLMDocCopyButton = ({ component }: { component: string }) => {
  const theme = useTheme();
  const { addToast } = useToast();

  const handleCopy = () => {
    const doc = LLM_DOCS[component];
    if (doc) {
      navigator.clipboard.writeText(doc);
      addToast({
        title: "LLM Documentation copied!",
        color: "primary",
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        ),
      });
    }
  };

  if (!LLM_DOCS[component]) return null;

  return (
    <Button
      variant="outlined"
      color="primary"
      size="sm"
      onClick={handleCopy}
      label="Copy LLM Doc"
      starticon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      }
    />
  );
};
