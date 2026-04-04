export const LLM_DOCS: Record<string, string> = {
  button: `
# Button Component
A versatile button component with multiple variants, colors, and interactive features.

## Usage
\`\`\`tsx
import { Button } from "@julien-wiegandt/open-ui";

<Button variant="contained" color="primary" label="Click me" onClick={() => console.log('Clicked!')} />
\`\`\`

## Props
- \`label\`: Button text (string)
- \`variant\`: "contained" | "outlined" | "text" | "soft" (default: "contained")
- \`color\`: "primary" | "secondary" | "default" | "error" or hex string (default: "primary")
- \`size\`: "sm" | "md" | "lg" (default: "md")
- \`starticon\`: React node or icon name string (e.g., "bell", "sparkles")
- \`endicon\`: React node or icon name string
- \`loading\`: boolean (shows spinner)
- \`endanimation\`: boolean (shows check icon after onClick completes)
- \`radius\`: "none" | "sm" | "md" | "lg" | "full" (theme default)
- \`disabled\`: boolean
- \`w\`: string (width)
- \`h\`: string (height)
- \`align\`: "left" | "center" | "right"
- \`onClick\`: () => void | Promise<void>
`,
  checkbox: `
# Checkbox Component
A simple checkbox for boolean inputs.

## Usage
\`\`\`tsx
import { Checkbox } from "@julien-wiegandt/open-ui";

<Checkbox label="Accept terms" color="primary" checked={checked} onChange={setChecked} />
\`\`\`

## Props
- \`checked\`: boolean (controlled state)
- \`defaultChecked\`: boolean (uncontrolled)
- \`onChange\`: (checked: boolean) => void
- \`label\`: string
- \`labelPosition\`: "left" | "right" (default: "right")
- \`color\`: Color token or hex
- \`size\`: "sm" | "md" | "lg" (default: "md")
- \`disabled\`: boolean
`,
  chip: `
# Chip Component
Small interactive or informational elements.

## Usage
\`\`\`tsx
import { Chip } from "@julien-wiegandt/open-ui";

<Chip label={"React"} color={"primary"} variant={"contained"} />
\`\`\`

## Props
- \`label\`: string
- \`variant\`: "contained" | "outlined" | "text" (theme default)
- \`color\`: Color token or hex
- \`size\`: "sm" | "md" | "lg" (default: "md")
- \`startIcon\`: ReactNode
- \`endIcon\`: ReactNode
- \`radius\`: Radius (theme default)
`,
  divider: `
# Divider Component
A thin line to separate content.

## Usage
\`\`\`tsx
import { Divider } from "@julien-wiegandt/open-ui";

<Divider />
<Divider orientation="vertical" color="#ccc" type="dashed" size="md" />
\`\`\`

## Props
- \`orientation\`: "horizontal" | "vertical" (default: "horizontal")
- \`color\`: string (default: "black")
- \`size\`: "sm" | "md" | "lg" (thickness)
- \`type\`: "solid" | "dotted" | "dashed" | "double" (default: "solid")
`,
  dropdown: `
# Dropdown Component
A flexible dropdown menu trigger.

## Usage
\`\`\`tsx
import { Dropdown, Button } from "@julien-wiegandt/open-ui";

<Dropdown
  trigger={<Button label="Open Menu" />}
  content={<div>Menu Content</div>}
/>
\`\`\`

## Props
- \`trigger\`: ReactNode (The element that opens the dropdown)
- \`content\`: ReactNode (The content inside the dropdown)
- \`placement\`: "bottom-start" | "bottom-end" | "top-start" | "top-end" | ...
- \`open\`: boolean (controlled)
- \`onOpenChange\`: (open: boolean) => void
`,
  flex: `
# Flex Component
The building block for layouts, using CSS Flexbox.

## Usage
\`\`\`tsx
import { Flex, Text } from "@julien-wiegandt/open-ui";

<Flex direction="row" align="center" gap={16} elevation={2} p={16}>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Flex>
\`\`\`

## Props
- \`direction\`: "row" | "column" | "row-reverse" | "column-reverse" (default: "column")
- \`align\`: "normal" | "center" | "start" | "end" | "stretch"
- \`justify\`: "center" | "start" | "end" | "between" | "around" | "evenly"
- \`gap\`: string | number
- \`wrap\`: "nowrap" | "wrap" | "wrap-reverse"
- \`width\`: string
- \`height\`: string
- \`elevation\`: number (0-5)
- \`bgcolor\`: string (theme color or hex)
- \`color\`: string
- \`p, pt, pr, pb, pl, px, py\`: Padding shorthand
- \`m, mt, mr, mb, ml, mx, my\`: Margin shorthand
`,
  image: `
# Image Component
Enhanced image component with hover and press effects.

## Usage
\`\`\`tsx
import { Image } from "@julien-wiegandt/open-ui";

<Image src="/photo.jpg" alt="Photo" hoverstyle={{ transform: "scale(1.05)" }} />
\`\`\`

## Props
- \`hoverstyle\`: CSSProperties
- \`pressstyle\`: CSSProperties
- Extends standard \`<img>\` attributes.
`,
  input: `
# Input Component
Standard text input with labels and error states.

## Usage
\`\`\`tsx
import { Input } from "@julien-wiegandt/open-ui";

<Input label="Email" placeholder="you@example.com" color="primary" required />
\`\`\`

## Props
- \`label\`: string
- \`color\`: Color token or hex (focus/border color)
- \`error\`: string (error message below)
- \`required\`: boolean
- \`w\`: string
- \`h\`: string
- Extends standard \`<input>\` attributes.
`,
  modal: `
# Modal Component
Overlay for important interactions.

## Usage
\`\`\`tsx
import { Modal, Text } from "@julien-wiegandt/open-ui";

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Important Message"
>
  <Text>This is a modal content.</Text>
</Modal>
\`\`\`

## Props
- \`isOpen\`: boolean (required)
- \`onClose\`: () => void
- \`title\`: ReactNode
- \`size\`: "xs" | "s" | "m" | "l" | "xl" (default: "m")
- \`fullScreen\`: boolean
- \`footer\`: ReactNode
- \`close\`: ReactNode (custom close button)
- \`closeOnClickOutside\`: boolean (default: true)
`,
  popover: `
# Popover Component
Floating content attached to a trigger.

## Usage
\`\`\`tsx
import { Popover, Button, Text } from "@julien-wiegandt/open-ui";

<Popover content={<Text>Popover content</Text>} placement="bottom">
  <Button label="Hover me" />
</Popover>
\`\`\`

## Props
- \`content\`: ReactNode (required)
- \`placement\`: "top" | "bottom" | "left" | "right" (default: "top")
- \`visible\`: boolean (controlled)
- \`color\`: Color token or hex (background)
- \`gap\`: number (default: 8)
- \`radius\`: Radius (theme default)
`,
  "progress-bar": `
# ProgressBar Component
Visual representation of progress.

## Usage
\`\`\`tsx
import { ProgressBar } from "@julien-wiegandt/open-ui";

<ProgressBar color="primary" value={75} />
\`\`\`

## Props
- \`color\`: Color token or hex (required)
- \`value\`: number (0-100, required)
- \`h\`: string (height, default: "8px")
- \`w\`: string (width, default: "100%")
- \`animationDurationInSeconds\`: number (default: 1)
`,
  select: `
# Select Component
Custom dropdown for selecting options.

## Usage
\`\`\`tsx
import { Select } from "@julien-wiegandt/open-ui";

const options = [{ key: "1", label: "Option 1" }];
<Select options={options} label="Select one" onChange={(val) => console.log(val)} />
\`\`\`

## Props
- \`options\`: Array<{ key: string, label: string, data?: any }> (required)
- \`value\`: SelectOption (controlled)
- \`initialValue\`: SelectOption
- \`onChange\`: (value: SelectOption) => void
- \`placeholder\`: string
- \`label\`: string
- \`required\`: boolean
- \`orientation\`: "up" | "down" (default: "down")
`,
  skeleton: `
# Skeleton Component
Loading placeholders for content.

## Usage
\`\`\`tsx
import { Skeleton } from "@julien-wiegandt/open-ui";

<Skeleton width="200px" height="20px" color="primary" />
\`\`\`

## Props
- \`width\`: string
- \`height\`: string
- \`radius\`: string
- \`color\`: Color token or hex
`,
  switch: `
# Switch Component
Toggle for boolean settings.

## Usage
\`\`\`tsx
import { Switch } from "@julien-wiegandt/open-ui";

<Switch value={isOn} onChange={setIsOn} color="primary" />
\`\`\`

## Props
- \`value\`: boolean
- \`onChange\`: (isOn: boolean) => void
- \`color\`: Color token or hex
- \`size\`: number (default: 48)
`,
  text: `
# Text Component
Standard text with predefined sizes and weights.

## Usage
\`\`\`tsx
import { Text } from "@julien-wiegandt/open-ui";

<Text size="16" weight="medium" color="primary">Hello world</Text>
\`\`\`

## Props
- \`size\`: "8" | "10" | ... | "96"
- \`weight\`: "regular" | "medium" | "semibold" | "bold"
- \`color\`: Color token or hex
- \`align\`: "left" | "center" | "right" | "justify"
- \`width\`: string
`,
  textarea: `
# TextArea Component
Multi-line text input.

## Usage
\`\`\`tsx
import { TextArea } from "@julien-wiegandt/open-ui";

<TextArea label="Message" rows={4} color="primary" />
\`\`\`

## Props
- \`label\`: string
- \`color\`: Color token or hex
- \`error\`: string
- \`required\`: boolean
- \`w\`: string
- \`h\`: string
- Extends standard \`<textarea>\` attributes.
`,
  title: `
# Title Component
Heading elements (h1-h6).

## Usage
\`\`\`tsx
import { Title } from "@julien-wiegandt/open-ui";

<Title level={1} weight="bold">Page Title</Title>
\`\`\`

## Props
- \`level\`: 1 | 2 | 3 | 4 | 5 | 6 (required)
- \`weight\`: "regular" | "medium" | "semibold" | "bold"
- \`color\`: Color token or hex
`,
  toast: `
# Toast Component
Ephemeral notifications. Use the useToast hook.

## Usage
\`\`\`tsx
import { useToast } from "@julien-wiegandt/open-ui";

const { addToast } = useToast();
addToast({ title: "Saved!", color: "primary" });
\`\`\`

## Hook Parameters (addToast)
- \`title\`: string
- \`color\`: Color token or hex
- \`icon\`: ReactNode
`,
  tooltip: `
# Tooltip Component
Brief description on hover.

## Usage
\`\`\`tsx
import { Tooltip, Button } from "@julien-wiegandt/open-ui";

<Tooltip label="Helpful text" placement="top">
  <Button label="?" />
</Tooltip>
\`\`\`

## Props
- \`label\`: ReactNode (content, required)
- \`placement\`: "top" | "bottom" | "left" | "right" (default: "top")
- \`color\`: Color token or hex
- \`gap\`: number (default: 8)
- \`radius\`: Radius
`,
  icons: `
# Icons
Customizable animated icons.

## Usage
\`\`\`tsx
import { BellIcon, HeartIcon } from "@julien-wiegandt/open-ui";

<BellIcon size={24} hasNotification={true} />
<HeartIcon size={24} isLiked={true} />
\`\`\`

## Common Props
- \`size\`: number
- \`color\`: string
- \`strokeWidth\`: number
- \`animated\`: boolean
`,
  "color-picker": `
# ColorPicker Component
An interactive color picker with presets.

## Usage
\`\`\`tsx
import { ColorPicker } from "@julien-wiegandt/open-ui";

<ColorPicker color="#ff0000" onChange={(color) => console.log(color)} />
\`\`\`

## Props
- \`color\`: string (current color)
- \`onChange\`: (color: string) => void
- \`presets\`: string[] (optional list of preset colors)
`,
};
