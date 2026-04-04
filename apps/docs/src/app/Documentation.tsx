"use client";

import {
  Button,
  Flex,
  OpenUIProvider,
  Text,
  THEME,
  Title,
  useResponsive,
} from "@julien-wiegandt/open-ui";
import { LLMDocCopyButton } from "../components/llm-doc-copy-button";
import { useState } from "react";

// Importing views (moved from src/views)
import { Buttons } from "../views/buttons";
import { Checkboxes } from "../views/checkboxes";
import { Chips } from "../views/chips";
import { ColorPickers } from "../views/color-picker";
import { Dividers } from "../views/dividers";
import { Dropdowns } from "../views/dropdowns";
import { Flexs } from "../views/flexs";
import { Icons } from "../views/icons";
import { Images } from "../views/images";
import { Inputs } from "../views/inputs";
import { Modals } from "../views/modals";
import { Popovers } from "../views/popover";
import { ProgressBars } from "../views/progress-bars";
import { Selects } from "../views/selects";
import { Skeletons } from "../views/skeletons";
import { Switchs } from "../views/switchs";
import { TextAreas } from "../views/textareas";
import { Texts } from "../views/texts";
import { ThemeBuilder } from "../views/theme/builder";
import { Titles } from "../views/titles";
import { Toasts } from "../views/toasts";
import { Tooltips } from "../views/tooltips";

export default function Documentations() {
  const [activeView, setActiveView] = useState("button");
  const { isMobile, isTablet } = useResponsive();
  const isMobileOrTablet = isMobile || isTablet;

  const renderView = () => {
    switch (activeView) {
      case "theme-builder":
        return <ThemeBuilder />;
      case "color-picker":
        return <ColorPickers />;
      case "checkbox":
        return <Checkboxes />;
      case "title":
        return <Titles />;
      case "text":
        return <Texts />;
      case "button":
        return <Buttons />;
      case "divider":
        return <Dividers />;
      case "icons":
        return <Icons />;
      case "image":
        return <Images />;
      case "input":
        return <Inputs />;
      case "modal":
        return <Modals />;
      case "textarea":
        return <TextAreas />;
      case "flex":
        return <Flexs />;
      case "chip":
        return <Chips />;
      case "progress-bar":
        return <ProgressBars />;
      case "popover":
        return <Popovers />;
      case "select":
        return <Selects />;
      case "switch":
        return <Switchs />;
      case "toast":
        return <Toasts />;
      case "tooltip":
        return <Tooltips />;
      case "dropdown":
        return <Dropdowns />;
      case "skeleton":
        return <Skeletons />;
      default:
        return <Buttons />;
    }
  };

  const navItems = [
    { label: "Theme", type: "header" },
    { id: "theme-builder", label: "Builder" },
    { label: "Components", type: "header" },
    { id: "button", label: "Button" },
    { id: "checkbox", label: "Checkbox" },
    { id: "chip", label: "Chip" },
    { id: "color-picker", label: "ColorPicker" },
    { id: "divider", label: "Divider" },
    { id: "dropdown", label: "Dropdown" },
    { id: "flex", label: "Flex" },
    { id: "icons", label: "Icons" },
    { id: "image", label: "Image" },
    { id: "input", label: "Input" },
    { id: "modal", label: "Modal" },
    { id: "popover", label: "Popover" },
    { id: "progress-bar", label: "ProgressBar" },
    { id: "select", label: "Select" },
    { id: "skeleton", label: "Skeleton" },
    { id: "switch", label: "Switch" },
    { id: "text", label: "Text" },
    { id: "textarea", label: "TextArea" },
    { id: "title", label: "Title" },
    { id: "tooltip", label: "Tooltip" },
    { id: "toast", label: "Toast" },
  ];

  return (
    <OpenUIProvider
      themes={[THEME]}
      settings={{
        toasts: {
          durationInSeconds: 10,
          maxToastDisplay: 5,
          closable: false,
          placement: "top-right",
        },
        autoContrast: true,
      }}
    >
      <Flex
        width="100vw"
        bgcolor="background"
        color="foreground"
        style={{ position: "relative", minHeight: "100vh" }}
      >
        <Flex
          direction="row"
          align="center"
          gap={1.5}
          width="100%"
          p={2}
          style={{
            position: "fixed",
            boxSizing: "border-box",
            backdropFilter: "blur(10px)",
            zIndex: 10,
            background: "var(--oui-surface)",
            borderBottom: "1px solid var(--oui-border)",
          }}
        >
          <img src="/open-ui.png" alt="open-ui" height="36px" />
          <Title level={3} color="foreground">
            open-ui
          </Title>
          <Flex direction="row" justify="end" width="100%" pr={2}>
            <LLMDocCopyButton component={activeView} />
          </Flex>
        </Flex>

        <Flex
          direction={isMobileOrTablet ? "column" : "row"}
          width="100%"
          mt="68px"
        >
          {/* Sidebar */}
          <Flex
            p={2}
            width="180px"
            bgcolor="surface"
            style={{
              borderRight: "1px solid var(--oui-border)",
              minHeight: "calc(100vh - 68px)",
              position: isMobileOrTablet ? "relative" : "fixed",
              left: 0,
              top: 68,
              zIndex: 5,
            }}
          >
            {navItems.map((item) =>
              item.type === "header" ? (
                <Text
                  key={item.label}
                  size="15"
                  mt={item.label === "Components" ? 1 : 0}
                  mb={1}
                  color="foreground"
                  weight="bold"
                >
                  {item.label}
                </Text>
              ) : (
                <Button
                  key={item.id}
                  label={item.label}
                  variant="text"
                  align="left"
                  color={activeView === item.id ? "primary" : "default"}
                  onClick={() => setActiveView(item.id)}
                  style={{
                    justifyContent: "flex-start",
                  }}
                />
              ),
            )}
          </Flex>

          {/* Main Content */}
          <Flex
            pl={isMobileOrTablet ? 2 : "200px"}
            pr={isMobileOrTablet ? 2 : 5}
            py={2}
            width="100%"
            style={{
              minHeight: "calc(100vh - 68px)",
              boxSizing: "border-box",
            }}
          >
            {renderView()}
          </Flex>
        </Flex>
      </Flex>
    </OpenUIProvider>
  );
}
