import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/theme";
import { Select } from "@/components/select";
import type { Radius } from "@/theme/types";
import { Input } from "@/components/input";
import { createTheme } from "@/theme/create-theme";
import { ProgressBar } from "@/components/progress-bar";
import { Divider } from "@/components/divider";
import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import { Chip } from "@/components/chip";
import { Skeleton } from "@/components/skeleton";
import { FONTS, KEYPOP } from "./constants";
import { Color } from "./components/color";

const THEMES = [{ key: "keypop", theme: KEYPOP }];

export const ThemeBuilder = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [selectedTheme, setSelectedTheme] = useState("keypop");

  return (
    <Flex gap={4} direction="row">
      <Flex
        elevation={1}
        gap={4}
        p={3}
        width="320px"
        style={{
          position: "fixed",
          right: 24,
          backgroundColor: "white",
        }}
      >
        <Title level={2}>Theme Builder</Title>

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
          label="Radius"
          options={[
            { label: "none", key: "none" },
            { label: "sm", key: "sm" },
            { label: "md", key: "md" },
            { label: "lg", key: "lg" },
            { label: "full", key: "full" },
          ]}
          value={{ label: theme.radius, key: theme.radius }}
          onChange={(value) =>
            setTheme({ theme: { ...theme, radius: value.key as Radius } })
          }
        />
        <Select
          label="Title Font Family"
          options={FONTS}
          value={{ label: theme.title.fontFamily, key: theme.title.fontFamily }}
          onChange={(value) =>
            setTheme({
              theme: {
                ...theme,
                title: { ...theme.title, fontFamily: value.key },
              },
            })
          }
        />
        <Select
          label="Text Font Family"
          options={FONTS}
          value={{ label: theme.text.fontFamily, key: theme.text.fontFamily }}
          onChange={(value) =>
            setTheme({
              theme: {
                ...theme,
                text: { ...theme.text, fontFamily: value.key },
              },
            })
          }
        />
        <Flex direction="row" justify="between">
          <Input
            type="color"
            label="Primary"
            w="3rem"
            h="3rem"
            value={theme.palette.primary.main}
            onChange={(e) => {
              const newTheme = createTheme({
                radius: theme.radius,
                primary: e.target.value,
                secondary: theme.palette.secondary,
                default: theme.palette.default,
                error: theme.palette.error,
                titleFontFamily: theme.title.fontFamily,
                textFontFamily: theme.text.fontFamily,
              });
              setTheme({ theme: newTheme });
            }}
          />
          <Input
            type="color"
            label="Secondary"
            w="3rem"
            h="3rem"
            value={theme.palette.secondary.main}
            onChange={(e) => {
              const newTheme = createTheme({
                radius: theme.radius,
                primary: theme.palette.primary,
                secondary: e.target.value,
                default: theme.palette.default,
                error: theme.palette.error,
                titleFontFamily: theme.title.fontFamily,
                textFontFamily: theme.text.fontFamily,
              });
              setTheme({ theme: newTheme });
            }}
          />
          <Input
            type="color"
            label="Default"
            w="3rem"
            h="3rem"
            value={theme.palette.default.main}
            onChange={(e) => {
              const newTheme = createTheme({
                radius: theme.radius,
                primary: theme.palette.primary,
                secondary: theme.palette.secondary,
                default: e.target.value,
                error: theme.palette.error,
                titleFontFamily: theme.title.fontFamily,
                textFontFamily: theme.text.fontFamily,
              });
              setTheme({ theme: newTheme });
            }}
          />
          <Input
            type="color"
            label="Error"
            w="3rem"
            h="3rem"
            value={theme.palette.error.main}
            onChange={(e) => {
              const newTheme = createTheme({
                radius: theme.radius,
                primary: theme.palette.primary,
                secondary: theme.palette.secondary,
                default: theme.palette.default,
                error: e.target.value,
                titleFontFamily: theme.title.fontFamily,
                textFontFamily: theme.text.fontFamily,
              });
              setTheme({ theme: newTheme });
            }}
          />
        </Flex>
      </Flex>
      <Flex gap={2}>
        <Title level={4}>Palette</Title>
        <Divider color="gray" />
        <Flex direction="row" gap={3}>
          <Flex direction="column" gap={1}>
            <Color color={theme.palette.primary.darker} />
            <Color color={theme.palette.primary.dark} />
            <Color color={theme.palette.primary.main} />
            <Color color={theme.palette.primary.light} />
            <Color color={theme.palette.primary.lighter} />
          </Flex>
          <Flex direction="column" gap={1}>
            <Color color={theme.palette.secondary.darker} />
            <Color color={theme.palette.secondary.dark} />
            <Color color={theme.palette.secondary.main} />
            <Color color={theme.palette.secondary.light} />
            <Color color={theme.palette.secondary.lighter} />
          </Flex>
          <Flex direction="column" gap={1}>
            <Color color={theme.palette.default.darker} />
            <Color color={theme.palette.default.dark} />
            <Color color={theme.palette.default.main} />
            <Color color={theme.palette.default.light} />
            <Color color={theme.palette.default.lighter} />
          </Flex>
          <Flex direction="column" gap={1}>
            <Color color={theme.palette.error.darker} />
            <Color color={theme.palette.error.dark} />
            <Color color={theme.palette.error.main} />
            <Color color={theme.palette.error.light} />
            <Color color={theme.palette.error.lighter} />
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
