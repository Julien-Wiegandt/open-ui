import { Flex } from "@/components/flex";
import { Select, type SelectOption } from "@/components/select";
import { Text } from "@/components/text";
import { Title } from "@/components/title";
import { useState } from "react";
import { useTheme } from "styled-components";
import { Usage } from "../components/usage";

const options = [
  { key: "one", label: "Option One" },
  { key: "two", label: "Option Two" },
  { key: "three", label: "Option Three" },
  { key: "four", label: "Option Four" },
  { key: "five", label: "Option Five" },
];

export const Selects = () => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<SelectOption | undefined>(
    undefined,
  );

  return (
    <Flex gap={4}>
      <Title level={2}>Select</Title>

      <Usage
        title="base"
        components={
          <Flex direction="column" gap={2} width="300px">
            <Select label="Simple select" options={options} />
            <Select
              label="With placeholder"
              placeholder="Pick an option"
              options={options}
            />
            <Select
              label="Required field"
              placeholder="Pick an option"
              options={options}
              required
            />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Select label="Select an option" options={options} />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="orientation"
        components={
          <Flex direction="column" gap={2} width="300px" mt={10} mb={10}>
            <Select
              label="Dropdown Up"
              orientation="up"
              options={options}
              placeholder="Opens upwards"
            />
            <Select
              label="Dropdown Down (default)"
              orientation="down"
              options={options}
              placeholder="Opens downwards"
            />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Select orientation="up" options={options} />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="custom option"
        components={
          <Flex direction="column" gap={2} width="300px">
            <Select
              label="Profiles"
              placeholder="Select a user"
              CustomOption={({ option, handleChange }) => (
                <Flex
                  key={option?.key}
                  direction="row"
                  align="center"
                  gap={1}
                  onClick={() => handleChange && option && handleChange(option)}
                  px={1.5}
                  py={1}
                  height="48px"
                  hoverstyle={{
                    backgroundColor: theme.palette.primary.light,
                  }}
                >
                  {option?.data?.picture && (
                    <img
                      src={option.data.picture}
                      alt="profile"
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  )}
                  <Text size="14">{option?.label}</Text>
                </Flex>
              )}
              options={[
                {
                  key: "julien",
                  label: "Julien",
                  data: {
                    picture: "https://i.pravatar.cc/150?u=julien",
                  },
                },
                {
                  key: "toinon",
                  label: "Toinon",
                  data: {
                    picture: "https://i.pravatar.cc/150?u=toinon",
                  },
                },
              ]}
            />
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Select CustomOption={({ option, handleChange }) => (...)} options={options} />`,
          )
        }
        orientation="vertical"
      />

      <Usage
        title="controlled"
        components={
          <Flex direction="column" gap={2} width="300px">
            <Select
              label="Controlled select"
              options={options}
              value={selectedValue}
              onChange={(option) => setSelectedValue(option)}
            />
            <Text size="14">Selected: {selectedValue?.label ?? "none"}</Text>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Select value={selectedValue} onChange={setSelectedValue} options={options} />`,
          )
        }
        orientation="vertical"
      />
    </Flex>
  );
};
