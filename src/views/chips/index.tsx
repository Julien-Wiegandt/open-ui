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
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="contained" variant="contained" />`
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
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="primary" variant="contained" />`
          )
        }
      />

      <Usage
        title="sizes"
        components={
          <>
            <Chip color="primary" label="sm" variant="contained" size="sm" />
            <Chip color="primary" label="md" variant="contained" size="md" />
            <Chip color="primary" label="lg" variant="contained" size="lg" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="sm" variant="contained" size="sm" />`
          )
        }
      />

      <Usage
        title="radius"
        components={
          <>
            <Chip color="primary" label="none" variant="contained" radius="none" />
            <Chip color="primary" label="sm" variant="contained" radius="sm" />
            <Chip color="primary" label="md" variant="contained" radius="md" />
            <Chip color="primary" label="lg" variant="contained" radius="lg" />
            <Chip color="primary" label="full" variant="contained" radius="full" />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(
            `<Chip color="primary" label="none" variant="contained" radius="none" />`
          )
        }
      />

      <Usage
        title="icons"
        components={
          <>
            <Chip
              color="primary"
              startIcon={<ExampleIcon />}
              label="start icon"
              variant="contained"
            />
            <Chip
              color="primary"
              label="end icon"
              endIcon={<ExampleIcon />}
              variant="contained"
            />
            <Chip
              color="primary"
              startIcon={
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
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
              variant="contained"
            />
          </>
        }
        onCopy={() =>
          navigator.clipboard.writeText(`<Chip
              color="primary"
              startIcon={
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
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              }
              label="start icon"
              variant="contained"
            />`)
        }
      />
    </Flex>
  );
};
