import { Chip } from "@/components/chip";
import { Flex } from "@/components/flex";
import { Title } from "@/components/title";
import { ExampleIcon } from "@/theme/constants";
import { Usage } from "../components/usage";

export const Chips = () => {
  return (
    <Flex gap={4}>
      <Title level={2}>Chip</Title>

      <Usage
        title="variants"
        components={
          <>
            <Chip color="primary" label="contained" variant="contained" />
            <Chip color="primary" label="outlined" variant="outlined" />
            <Chip color="primary" label="text" variant="text" />
            <Chip color="primary" label="soft" variant="soft" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="contained" variant="contained" />`,
          )
        }
      />

      <Usage
        title="colors"
        components={
          <>
            <Chip color="primary" label="primary" variant="contained" />
            <Chip color="secondary" label="secondary" variant="contained" />
            <Chip color="default" label="default" variant="contained" />
            <Chip color="error" label="error" variant="contained" />
            <Chip color="#22d348ff" label="custom" variant="contained" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="primary" variant="contained" />`,
          )
        }
      />

      <Usage
        title="sizes"
        components={
          <>
            <Chip color="primary" label="small" size="sm" variant="contained" />
            <Chip
              color="primary"
              label="medium"
              size="md"
              variant="contained"
            />
            <Chip color="primary" label="large" size="lg" variant="contained" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="small" size="sm" variant="contained" />`,
          )
        }
      />

      <Usage
        title="radius"
        components={
          <>
            <Chip
              color="primary"
              label="none"
              radius="none"
              variant="contained"
            />
            <Chip color="primary" label="sm" radius="sm" variant="contained" />
            <Chip color="primary" label="md" radius="md" variant="contained" />
            <Chip color="primary" label="lg" radius="lg" variant="contained" />
            <Chip
              color="primary"
              label="full"
              radius="full"
              variant="contained"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="none" radius="none" variant="contained" />`,
          )
        }
      />

      <Usage
        title="icons"
        components={
          <>
            <Chip
              color="primary"
              variant="soft"
              startIcon={<ExampleIcon />}
              label="start icon"
            />
            <Chip
              color="primary"
              variant="outlined"
              label="end icon"
              endIcon={<ExampleIcon />}
            />
            <Chip
              color="secondary"
              variant="contained"
              startIcon={
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
                  <path d="M12 2v20M2 12h20" />
                </svg>
              }
              label="Add"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" variant="contained" startIcon={<Icon />} label="Label" />`,
          )
        }
      />

      <Usage
        title="custom styling"
        components={
          <>
            <Chip
              color="default"
              label="Custom font color"
              fontColor="#ff00ff"
              variant="outlined"
            />
            <Chip
              color="#000"
              bgcolor="#eee"
              label="Custom background"
              variant="contained"
            />
            <Chip
              color="primary"
              label="Disabled"
              disabled
              variant="contained"
              style={{ opacity: 0.5, cursor: "not-allowed" }}
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip label="Custom" fontColor="#ff00ff" variant="outlined" />`,
          )
        }
      />
    </Flex>
  );
};
