"use client";

import {
  Button,
  Checkbox,
  Chip,
  Divider,
  Flex,
  Input,
  ProgressBar,
  Select,
  Skeleton,
  ThemeContext,
  Title,
  createTheme,
} from "@julien-wiegandt/open-ui";
import { Color } from "./components/color";

import { useContext, useState } from "react";

import type { Radius } from "@julien-wiegandt/open-ui";

import { EM, FONTS, KEYPOP } from "./constants";

const THEMES = [
  { key: "keypop", theme: KEYPOP },
  { key: "em", theme: EM },
];

export const ThemeBuilder = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("keypop");

  const updateTheme = (overrides: any) => {
    const isModeChange = "mode" in overrides;
    const newTheme = createTheme({
      radius: theme.radius,
      primary: theme.palette.primary,
      secondary: theme.palette.secondary,
      default: theme.palette.default,
      error: theme.palette.error,
      titleFontFamily: theme.title.fontFamily,
      textFontFamily: theme.text.fontFamily,
      mode: theme.mode,
      semantic: isModeChange ? undefined : theme.semantic,
      ...overrides,
    });
    setTheme({ theme: newTheme });
  };

  return (
    <Flex
      gap={4}
      direction="row"
      bgcolor="background"
      color="foreground"
      p={3}
      style={{ minHeight: "100vh" }}
    >
      <Flex
        elevation={1}
        gap={4}
        p={3}
        width="320px"
        bgcolor="surface"
        style={{
          position: "fixed",
          right: 24,
          overflowY: "auto",
          height: "90vh",
        }}
      >
        <Flex direction="row" justify="between" align="center">
          <Title level={2}>Theme Builder</Title>
          <Chip label={theme.mode ?? "light"} color="primary" variant="soft" />
        </Flex>

        <Select
          label="Themes"
          options={THEMES.map((theme) => ({
            label: theme.key,
            key: theme.key,
          }))}
          value={{ label: selectedTheme, key: selectedTheme }}
          onChange={(value) => {
            const t = THEMES.find((t) => t.key === value.key);
            if (t) {
              setTheme({ theme: t.theme });
              setSelectedTheme(t.key);
            }
          }}
        />

        <Select
          label="Mode"
          options={[
            { label: "Light", key: "light" },
            { label: "Dark", key: "dark" },
          ]}
          value={{
            label: theme.mode === "dark" ? "Dark" : "Light",
            key: theme.mode ?? "light",
          }}
          onChange={(value) => updateTheme({ mode: value.key })}
        />

        <Select
          label="Radius"
          options={[
            { label: "none", key: "none" },
            { label: "sm", key: "sm" },
            { label: "md", key: "md" },
            { label: "lg", key: "lg" },
            { label: "full", key: "full" },
          ]}
          value={{ label: theme.radius, key: theme.radius }}
          onChange={(value) => updateTheme({ radius: value.key as Radius })}
        />
        <Select
          label="Title Font Family"
          options={FONTS}
          value={{ label: theme.title.fontFamily, key: theme.title.fontFamily }}
          onChange={(value) => updateTheme({ titleFontFamily: value.key })}
        />
        <Select
          label="Text Font Family"
          options={FONTS}
          value={{ label: theme.text.fontFamily, key: theme.text.fontFamily }}
          onChange={(value) => updateTheme({ textFontFamily: value.key })}
        />

        <Divider />
        <Title level={4}>Palette</Title>
        <Flex direction="row" wrap="wrap" gap={2} justify="between">
          <Input
            type="color"
            label="Primary"
            w="3.5rem"
            h="3rem"
            value={theme.palette.primary.main}
            onChange={(e) => updateTheme({ primary: e.target.value })}
          />
          <Input
            type="color"
            label="Secondary"
            w="3.5rem"
            h="3rem"
            value={theme.palette.secondary.main}
            onChange={(e) => updateTheme({ secondary: e.target.value })}
          />
          <Input
            type="color"
            label="Default"
            w="3.5rem"
            h="3rem"
            value={theme.palette.default.main}
            onChange={(e) => updateTheme({ default: e.target.value })}
          />
          <Input
            type="color"
            label="Error"
            w="3.5rem"
            h="3rem"
            value={theme.palette.error.main}
            onChange={(e) => updateTheme({ error: e.target.value })}
          />
        </Flex>

        <Divider />
        <Title level={4}>Semantic</Title>
        <Flex direction="row" wrap="wrap" gap={2} justify="between">
          <Input
            type="color"
            label="BG"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.background}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, background: e.target.value },
              })
            }
          />
          <Input
            type="color"
            label="FG"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.foreground}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, foreground: e.target.value },
              })
            }
          />
          <Input
            type="color"
            label="Surface"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.surface}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, surface: e.target.value },
              })
            }
          />
          <Input
            type="color"
            label="Muted"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.muted}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, muted: e.target.value },
              })
            }
          />
          <Input
            type="color"
            label="Border"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.border}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, border: e.target.value },
              })
            }
          />
          <Input
            type="color"
            label="Shadow"
            w="3.5rem"
            h="3rem"
            value={theme.semantic.shadow}
            onChange={(e) =>
              updateTheme({
                semantic: { ...theme.semantic, shadow: e.target.value },
              })
            }
          />
        </Flex>
      </Flex>
      <Flex gap={2}>
        <Flex direction="row" gap={4} align="start">
          <Flex gap={2}>
            <Title level={4}>Color Palette</Title>
            <Divider color="gray" />
            <Flex direction="row" gap={3}>
              <Flex direction="column" gap={1}>
                {Object.values(theme.palette.primary).map((c) => (
                  <Color key={c} color={c} />
                ))}
              </Flex>
              <Flex direction="column" gap={1}>
                {Object.values(theme.palette.secondary).map((c) => (
                  <Color key={c} color={c} />
                ))}
              </Flex>
              <Flex direction="column" gap={1}>
                {Object.values(theme.palette.default).map((c) => (
                  <Color key={c} color={c} />
                ))}
              </Flex>
              <Flex direction="column" gap={1}>
                {Object.values(theme.palette.error).map((c) => (
                  <Color key={c} color={c} />
                ))}
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={2}>
            <Title level={4}>Semantic Palette</Title>
            <Divider color="gray" />
            <Flex direction="column" gap={1}>
              {Object.entries(theme.semantic).map(([key, value]) => (
                <Flex key={key} direction="row" gap={2} align="center">
                  <Color color={value} />
                  <Title level={6} style={{ margin: 0, fontSize: "12px" }}>
                    {key}
                  </Title>
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <Title level={4} mt={2}>
          Button
        </Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={2}>
            <Button variant="contained" color="primary" label="contained" />
            <Button variant="outlined" color="primary" label="outlined" />
            <Button variant="text" color="primary" label="text" />
            <Button variant="soft" color="primary" label="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Button variant="contained" color="secondary" label="contained" />
            <Button variant="outlined" color="secondary" label="outlined" />
            <Button variant="text" color="secondary" label="text" />
            <Button variant="soft" color="secondary" label="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Button variant="contained" color="default" label="contained" />
            <Button variant="outlined" color="default" label="outlined" />
            <Button variant="text" color="default" label="text" />
            <Button variant="soft" color="default" label="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Button variant="contained" color="error" label="contained" />
            <Button variant="outlined" color="error" label="outlined" />
            <Button variant="text" color="error" label="text" />
            <Button variant="soft" color="error" label="soft" />
          </Flex>
        </Flex>
        <Title level={4} mt={2}>
          Checkbox
        </Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={2}>
            <Checkbox color="primary" label="primary" />
            <Checkbox color="primary" label="primary" disabled />
          </Flex>
          <Flex direction="column" gap={2}>
            <Checkbox color="secondary" label="secondary" />
            <Checkbox color="secondary" label="secondary" disabled />
          </Flex>
          <Flex direction="column" gap={2}>
            <Checkbox color="default" label="default" />
            <Checkbox color="default" label="default" disabled />
          </Flex>
          <Flex direction="column" gap={2}>
            <Checkbox color="error" label="error" />
            <Checkbox color="error" label="error" disabled />
          </Flex>
        </Flex>
        <Title level={4} mt={2}>
          Chip
        </Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={2}>
            <Chip color="primary" label="contained" variant="contained" />
            <Chip color="primary" label="outlined" variant="outlined" />
            <Chip color="primary" label="text" variant="text" />
            <Chip color="primary" label="soft" variant="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Chip color="secondary" label="contained" variant="contained" />
            <Chip color="secondary" label="outlined" variant="outlined" />
            <Chip color="secondary" label="text" variant="text" />
            <Chip color="secondary" label="soft" variant="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Chip color="default" label="contained" variant="contained" />
            <Chip color="default" label="outlined" variant="outlined" />
            <Chip color="default" label="text" variant="text" />
            <Chip color="default" label="soft" variant="soft" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Chip color="error" label="contained" variant="contained" />
            <Chip color="error" label="outlined" variant="outlined" />
            <Chip color="error" label="text" variant="text" />
            <Chip color="error" label="soft" variant="soft" />
          </Flex>
        </Flex>

        <Title level={4}>ProgressBar</Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={2}>
            <ProgressBar value={0} color="primary" w="200px" />
            <ProgressBar value={50} color="primary" w="200px" />
            <ProgressBar value={100} color="primary" w="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <ProgressBar value={0} color="secondary" w="200px" />
            <ProgressBar value={50} color="secondary" w="200px" />
            <ProgressBar value={100} color="secondary" w="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <ProgressBar value={0} color="default" w="200px" />
            <ProgressBar value={50} color="default" w="200px" />
            <ProgressBar value={100} color="default" w="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <ProgressBar value={0} color="error" w="200px" />
            <ProgressBar value={50} color="error" w="200px" />
            <ProgressBar value={100} color="error" w="200px" />
          </Flex>
        </Flex>
        <Title level={4}>Skeleton</Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={2}>
            <Skeleton color={theme.palette.primary.dark} width="200px" />
            <Skeleton color={theme.palette.primary.main} width="200px" />
            <Skeleton color={theme.palette.primary.light} width="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Skeleton color={theme.palette.secondary.dark} width="200px" />
            <Skeleton color={theme.palette.secondary.main} width="200px" />
            <Skeleton color={theme.palette.secondary.light} width="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Skeleton color={theme.palette.default.dark} width="200px" />
            <Skeleton color={theme.palette.default.main} width="200px" />
            <Skeleton color={theme.palette.default.light} width="200px" />
          </Flex>
          <Flex direction="column" gap={2}>
            <Skeleton color={theme.palette.error.dark} width="200px" />
            <Skeleton color={theme.palette.error.main} width="200px" />
            <Skeleton color={theme.palette.error.light} width="200px" />
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
