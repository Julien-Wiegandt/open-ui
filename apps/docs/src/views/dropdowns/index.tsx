"use client";

import { Button, Dropdown, Flex, Title } from "@julien-wiegandt/open-ui";
import { Usage } from "../components/usage";

const options = [
  { key: "1", label: "Profile" },
  { key: "2", label: "Settings" },
  { key: "3", label: "Logout" },
];

export const Dropdowns = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Dropdown</Title>

      <Usage
        title="base"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2}>
            <Dropdown options={options} onSelect={(opt) => console.log(opt)}>
              <Button label="Click me" variant="outlined" color="default" />
            </Dropdown>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `const options = [\n  { key: "1", label: "Profile" },\n  { key: "2", label: "Settings" },\n  { key: "3", label: "Logout" },\n];\n\n<Dropdown options={options}>\n  <Button label="Click me" />\n</Dropdown>`,
          )
        }
      />

      <Usage
        title="trigger modes"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2}>
            <Dropdown options={options} trigger="click">
              <Button label="Click" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} trigger="hover">
              <Button label="Hover" variant="outlined" color="default" />
            </Dropdown>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown trigger="hover" options={options}>...</Dropdown>`,
          )
        }
      />

      <Usage
        title="placements"
        orientation="horizontal"
        components={
          <Flex direction="column" gap={2}>
            <Flex direction="row" gap={2} wrap="wrap">
              <Dropdown options={options} placement="top-left">
                <Button label="Top Left" variant="outlined" color="default" />
              </Dropdown>
              <Dropdown options={options} placement="top">
                <Button label="Top" variant="outlined" color="default" />
              </Dropdown>
              <Dropdown options={options} placement="top-right">
                <Button label="Top Right" variant="outlined" color="default" />
              </Dropdown>
            </Flex>
            <Flex direction="row" gap={2} wrap="wrap">
              <Dropdown options={options} placement="bottom-left">
                <Button
                  label="Bottom Left"
                  variant="outlined"
                  color="default"
                />
              </Dropdown>
              <Dropdown options={options} placement="bottom">
                <Button label="Bottom" variant="outlined" color="default" />
              </Dropdown>
              <Dropdown options={options} placement="bottom-right">
                <Button
                  label="Bottom Right"
                  variant="outlined"
                  color="default"
                />
              </Dropdown>
            </Flex>
            <Flex direction="row" gap={2} wrap="wrap">
              <Dropdown options={options} placement="left-top">
                <Button label="Left Top" variant="outlined" color="default" />
              </Dropdown>
              <Dropdown options={options} placement="right-top">
                <Button label="Right Top" variant="outlined" color="default" />
              </Dropdown>
            </Flex>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown placement="bottom-right" options={options}>...</Dropdown>`,
          )
        }
      />

      <Usage
        title="variants"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Dropdown options={options} variant="contained">
              <Button label="Contained" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} variant="outlined">
              <Button label="Outlined" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} variant="soft">
              <Button label="Soft" variant="outlined" color="default" />
            </Dropdown>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown variant="soft" options={options}>...</Dropdown>`,
          )
        }
      />

      <Usage
        title="colors"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Dropdown options={options} color="primary">
              <Button label="Primary" variant="outlined" color="primary" />
            </Dropdown>
            <Dropdown options={options} color="secondary">
              <Button label="Secondary" variant="outlined" color="secondary" />
            </Dropdown>
            <Dropdown options={options} color="error">
              <Button label="Error" variant="outlined" color="error" />
            </Dropdown>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown color="error" options={options}>...</Dropdown>`,
          )
        }
      />

      <Usage
        title="radius"
        orientation="horizontal"
        components={
          <Flex direction="row" gap={2} wrap="wrap">
            <Dropdown options={options} radius="none">
              <Button label="None" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} radius="sm">
              <Button label="Small" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} radius="md">
              <Button label="Medium" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} radius="lg">
              <Button label="Large" variant="outlined" color="default" />
            </Dropdown>
            <Dropdown options={options} radius="full">
              <Button label="Full" variant="outlined" color="default" />
            </Dropdown>
          </Flex>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown radius="lg" options={options}>...</Dropdown>`,
          )
        }
      />

      <Usage
        title="custom content"
        orientation="horizontal"
        components={
          <Dropdown
            variant="contained"
            bgcolor="white"
            radius="lg"
            content={
              <Flex
                p={2}
                gap={1.5}
                style={{
                  minWidth: "260px",
                  color: "#1a1a1a",
                  boxShadow: "0 10px 40px rgba(0,0,0,0.12)",
                  fontFamily: "Inter, sans-serif",
                  boxSizing: "border-box",
                }}
              >
                <Flex direction="row" align="center" gap={1}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #6090fa, #8a2be2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    JW
                  </div>
                  <Flex gap={0}>
                    <Title level={6} style={{ margin: 0, fontSize: "15px" }}>
                      Julien Wiegandt
                    </Title>
                    <div style={{ fontSize: "12px", color: "#666" }}>
                      julien@open-ui.com
                    </div>
                  </Flex>
                </Flex>

                <div
                  style={{
                    height: "1px",
                    background: "#f0f0f0",
                    margin: "4px -20px",
                  }}
                />

                <Flex gap={0.25}>
                  <Button
                    size="sm"
                    variant="text"
                    color="default"
                    label="Personal Profile"
                    align="left"
                    style={{
                      justifyContent: "flex-start",
                      padding: "8px 12px",
                    }}
                  />
                  <Button
                    size="sm"
                    variant="text"
                    color="default"
                    label="Account Settings"
                    align="left"
                    style={{
                      justifyContent: "flex-start",
                      padding: "8px 12px",
                    }}
                  />
                  <Button
                    size="sm"
                    variant="text"
                    color="default"
                    label="Notifications"
                    align="left"
                    style={{
                      justifyContent: "flex-start",
                      padding: "8px 12px",
                    }}
                  />
                </Flex>

                <div
                  style={{
                    height: "1px",
                    background: "#f0f0f0",
                    margin: "4px -20px",
                  }}
                />

                <Button
                  size="md"
                  label="Log Out"
                  color="error"
                  variant="soft"
                  mt={0.5}
                />
              </Flex>
            }
          >
            <Button
              label="User Account"
              variant="contained"
              color="primary"
              radius="full"
              p="12px 24px"
            />
          </Dropdown>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Dropdown content={<Flex>...</Flex>}>\n  <Button />\n</Dropdown>`,
          )
        }
      />
    </Flex>
  );
};
