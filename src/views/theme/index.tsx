import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Flex } from "@/components/flex";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { getColorVariations } from "@/components/utils/get-color-variations";
import { radiusMap } from "@/theme/constants";
import type { Radius } from "@/theme/types";
import { CustomThemeContext } from "@/theme/use-theme";
import { useContext } from "react";
import { useTheme } from "styled-components";

const colorOptions = [
  { key: "#8e44ad", label: "wisteria" },
  { key: "#166FEE", label: "peter river" },
  { key: "#2ecc71", label: "emerald" },
  { key: "#f1c40f", label: "sun flower" },
  { key: "#e67e22", label: "carrot" },
  { key: "#e74c3c", label: "alizarin" },
  { key: "#2c3e50", label: "midnight blue" },
];

export const Theme = () => {
  const theme = useTheme();

  const { radius, setRadius, setPalette } = useContext(CustomThemeContext);

  const radiusOptions = Object.keys(radiusMap).map((key) => ({
    key,
    label: key,
  }));

  return (
    <Flex gap={4}>
      <Flex direction="column" gap={2}>
        <Flex direction="row" gap={1}>
          <Button variant="contained" color="primary" label="Contained" />
          <Button variant="outlined" color="primary" label="Outlined" />
          <Button variant="text" color="primary" label="Text" />
        </Flex>
        <Flex direction="row" gap={1}>
          <Chip color="primary" size="sm" label="Primary" variant="contained" />
          <Chip color="secondary" size="sm" label="Secondary" variant="contained" />
          <Chip color="default" size="sm" label="Default" variant="contained" />
        </Flex>
        <Flex gap={1}>
          <Input placeholder="me@example.com" />
          <Input placeholder="Errors" error="Invalid value provided" />
        </Flex>
      </Flex>
      <Flex direction="column" gap={2}>
        <Select
          options={radiusOptions}
          initialValue={{ key: radius, label: radius }}
          onChange={({ key }) => setRadius(key as Radius)}
          label="Radius"
        />

        <Flex direction="row" gap={0.25}>
          <Select
            options={colorOptions}
            initialValue={{ key: "#166FEE", label: "blue" }}
            onChange={({ key }) =>
              setPalette({
                primary: {
                  main: key as string,
                  dark: theme.palette.primary.dark,
                  light: theme.palette.primary.light,
                },
                secondary: theme.palette.secondary,
                default: theme.palette.default,
                error: theme.palette.error,
              })
            }
            label="Primary"
          />
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: getColorVariations(theme.palette.primary.main, 0.6).light,
            }}
          ></Flex>
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: theme.palette.primary.main,
            }}
          ></Flex>
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: getColorVariations(theme.palette.primary.main, 0.6).dark,
            }}
          ></Flex>
        </Flex>
        <Flex direction="row" gap={0.25}>
          <Select
            options={colorOptions}
            initialValue={{ key: "#e64980", label: "blue" }}
            onChange={({ key }) =>
              setPalette({
                secondary: {
                  main: key as string,
                  dark: theme.palette.secondary.dark,
                  light: theme.palette.secondary.light,
                },
                primary: theme.palette.primary,
                default: theme.palette.default,
                error: theme.palette.error,
              })
            }
            label="Secondary"
          />
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: getColorVariations(theme.palette.secondary.main, 0.6)
                .light,
            }}
          ></Flex>
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: theme.palette.secondary.main,
            }}
          ></Flex>
          <Flex
            elevation={1}
            width="20px"
            height="20px"
            my="auto"
            style={{
              backgroundColor: getColorVariations(theme.palette.secondary.main, 0.6).dark,
            }}
          ></Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
