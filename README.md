# open-ui

Simple lightweight UI components for React.

## Getting Started

```bash
npm install @julien-wiegandt/open-ui
```

Wrap your app with the `OpenUIProvider` and pass at least one theme:

```tsx
import { OpenUIProvider, createTheme } from "@julien-wiegandt/open-ui";

const theme = createTheme({
  radius: "md",
  primary: "#6090fa",
});

function App() {
  return (
    <OpenUIProvider themes={[theme]}>
      <MyApp />
    </OpenUIProvider>
  );
}
```

## Components

### Button

```tsx
<Button variant="contained" color="primary" label="Click me" />

<Button variant="outlined" color="secondary" label="Outlined" />

<Button
  variant="contained"
  color="primary"
  label="Submit"
  starticon="sparkles"
  size="lg"
  onClick={async () => { await submitForm(); }}
/>
```

| Prop           | Type                                                         | Default       | Description                                                                                                             |
| -------------- | ------------------------------------------------------------ | ------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `label`        | `string`                                                     | —             | Button text                                                                                                             |
| `variant`      | `"contained" \| "outlined" \| "text"`                        | theme default | Visual style                                                                                                            |
| `color`        | `"default" \| "primary" \| "secondary" \| "error" \| string` | theme default | Color token or hex                                                                                                      |
| `size`         | `"sm" \| "md" \| "lg"`                                       | `"md"`        | Button size                                                                                                             |
| `starticon`    | `ReactNode \| Icon`                                          | —             | Icon before label (`"bell"`, `"check"`, `"heart"`, `"sync"`, `"sparkles"`, `"dots"`, `"send"`, `"copy"`, `"hamburger"`) |
| `endicon`      | `ReactNode \| Icon`                                          | —             | Icon after label                                                                                                        |
| `loading`      | `boolean`                                                    | —             | Show loading state                                                                                                      |
| `endanimation` | `boolean`                                                    | —             | Show check icon on completion                                                                                           |
| `radius`       | `Radius`                                                     | theme default | Border radius                                                                                                           |
| `disabled`     | `boolean`                                                    | `false`       | Disable button                                                                                                          |
| `w`            | `string`                                                     | —             | Width                                                                                                                   |
| `h`            | `string`                                                     | —             | Height                                                                                                                  |
| `align`        | `"left" \| "center" \| "right"`                              | —             | Text alignment                                                                                                          |

### Checkbox

```tsx
<Checkbox label="Accept terms" color="primary" />

<Checkbox
  checked={isChecked}
  onChange={(checked) => setIsChecked(checked)}
  label="Remember me"
  labelPosition="right"
  size="lg"
/>
```

| Prop             | Type                         | Default   | Description                  |
| ---------------- | ---------------------------- | --------- | ---------------------------- |
| `checked`        | `boolean`                    | —         | Controlled state             |
| `defaultChecked` | `boolean`                    | `false`   | Initial state (uncontrolled) |
| `onChange`       | `(checked: boolean) => void` | —         | Change handler               |
| `label`          | `string`                     | —         | Label text                   |
| `labelPosition`  | `"left" \| "right"`          | `"right"` | Label placement              |
| `color`          | `Color \| string`            | —         | Check color                  |
| `size`           | `"sm" \| "md" \| "lg"`       | `"md"`    | Checkbox size                |
| `disabled`       | `boolean`                    | `false`   | Disable checkbox             |

### Chip

```tsx
<Chip label="Tag" color="primary" variant="contained" />

<Chip label="Status" color="secondary" variant="outlined" startIcon={<MyIcon />} />
```

| Prop        | Type                                  | Default       | Description        |
| ----------- | ------------------------------------- | ------------- | ------------------ |
| `label`     | `string`                              | —             | Chip text          |
| `variant`   | `"contained" \| "outlined" \| "text"` | theme default | Visual style       |
| `color`     | `Color \| string`                     | —             | Color token or hex |
| `size`      | `"sm" \| "md" \| "lg"`                | `"md"`        | Chip size          |
| `startIcon` | `ReactNode`                           | —             | Icon before label  |
| `endIcon`   | `ReactNode`                           | —             | Icon after label   |
| `radius`    | `Radius`                              | theme default | Border radius      |

### Divider

```tsx
<Divider />

<Divider orientation="vertical" color="#ccc" type="dashed" size="md" />
```

| Prop          | Type                                          | Default        | Description                 |
| ------------- | --------------------------------------------- | -------------- | --------------------------- |
| `orientation` | `"horizontal" \| "vertical"`                  | `"horizontal"` | Divider direction           |
| `color`       | `string`                                      | `"black"`      | Line color                  |
| `size`        | `"sm" \| "md" \| "lg"`                        | `"sm"`         | Thickness (1px / 2px / 3px) |
| `type`        | `"solid" \| "dotted" \| "dashed" \| "double"` | `"solid"`      | Line style                  |

### Flex

```tsx
<Flex direction="row" align="center" justify="between" gap={16}>
  <Text>Left</Text>
  <Text>Right</Text>
</Flex>

<Flex direction="column" gap={8} elevation={2} p={16}>
  <Text>Card content</Text>
</Flex>
```

| Prop        | Type                                                                | Default    | Description          |
| ----------- | ------------------------------------------------------------------- | ---------- | -------------------- |
| `direction` | `"row" \| "column" \| "row-reverse" \| "column-reverse"`            | `"column"` | Flex direction       |
| `align`     | `"normal" \| "center" \| "start" \| "end" \| "stretch"`             | —          | Align items          |
| `justify`   | `"center" \| "start" \| "end" \| "between" \| "around" \| "evenly"` | —          | Justify content      |
| `gap`       | `string \| number`                                                  | —          | Gap between children |
| `wrap`      | `"nowrap" \| "wrap" \| "wrap-reverse"`                              | —          | Flex wrap            |
| `width`     | `string`                                                            | —          | Container width      |
| `height`    | `string`                                                            | —          | Container height     |
| `elevation` | `number`                                                            | —          | Box shadow depth     |

### Image

```tsx
<Image src="/photo.jpg" alt="Photo" hoverstyle={{ transform: "scale(1.05)" }} />
```

| Prop         | Type            | Default | Description     |
| ------------ | --------------- | ------- | --------------- |
| `hoverstyle` | `CSSProperties` | —       | Styles on hover |
| `pressstyle` | `CSSProperties` | —       | Styles on press |

Extends all standard `<img>` attributes.

### Input

```tsx
<Input label="Email" placeholder="you@example.com" color="primary" required />

<Input label="Password" type="password" error="Password is required" />
```

| Prop       | Type              | Default     | Description               |
| ---------- | ----------------- | ----------- | ------------------------- |
| `label`    | `string`          | —           | Label text                |
| `color`    | `Color \| string` | `"default"` | Focus/border color        |
| `error`    | `string`          | —           | Error message below input |
| `required` | `boolean`         | —           | Shows required asterisk   |
| `w`        | `string`          | —           | Width                     |
| `h`        | `string`          | —           | Height                    |

Extends all standard `<input>` attributes.

### Modal

```tsx
const [isOpen, setIsOpen] = useState(false);

<Button label="Open modal" onClick={() => setIsOpen(true)} />

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirmation"
  size="m"
  footer={<Button label="Confirm" color="primary" variant="contained" />}
>
  <Text>Are you sure you want to proceed?</Text>
</Modal>
```

| Prop                  | Type                                | Default | Description                       |
| --------------------- | ----------------------------------- | ------- | --------------------------------- |
| `isOpen`              | `boolean`                           | —       | **Required.** Controls visibility |
| `onClose`             | `() => void`                        | —       | Close callback                    |
| `title`               | `ReactNode`                         | —       | Modal title                       |
| `size`                | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"`   | Modal width (30vw–70vw)           |
| `fullScreen`          | `boolean`                           | —       | Full screen mode                  |
| `footer`              | `ReactNode`                         | —       | Footer content                    |
| `close`               | `ReactNode`                         | —       | Custom close button               |
| `closeOnClickOutside` | `boolean`                           | `true`  | Close on backdrop click           |

### Popover

```tsx
<Popover
  content={<Text>Popover content</Text>}
  color="primary"
  placement="bottom"
>
  <Button label="Hover me" />
</Popover>
```

| Prop         | Type                                     | Default       | Description                    |
| ------------ | ---------------------------------------- | ------------- | ------------------------------ |
| `content`    | `ReactNode`                              | —             | **Required.** Popover content  |
| `color`      | `Color \| string`                        | —             | **Required.** Background color |
| `placement`  | `"top" \| "bottom" \| "left" \| "right"` | `"top"`       | Position relative to trigger   |
| `visible`    | `boolean`                                | —             | Controlled visibility          |
| `gap`        | `number`                                 | `8`           | Distance from trigger (px)     |
| `radius`     | `Radius`                                 | theme default | Border radius                  |
| `arrowcolor` | `string`                                 | —             | Arrow color override           |

### ProgressBar

```tsx
<ProgressBar color="primary" value={75} />

<ProgressBar color="#22c55e" value={100} h="12px" animationDurationInSeconds={2} />
```

| Prop                         | Type              | Default  | Description                  |
| ---------------------------- | ----------------- | -------- | ---------------------------- |
| `color`                      | `Color \| string` | —        | **Required.** Bar color      |
| `value`                      | `number`          | —        | **Required.** Progress 0–100 |
| `h`                          | `string`          | `"8px"`  | Bar height                   |
| `w`                          | `string`          | `"100%"` | Bar width                    |
| `animationDurationInSeconds` | `number`          | `1`      | Animation duration           |

### Select

```tsx
const options = [
  { key: "react", label: "React" },
  { key: "vue", label: "Vue" },
  { key: "svelte", label: "Svelte" },
];

<Select
  options={options}
  label="Framework"
  placeholder="Pick one"
  onChange={(option) => console.log(option)}
  required
/>;
```

| Prop            | Type                                           | Default  | Description                  |
| --------------- | ---------------------------------------------- | -------- | ---------------------------- |
| `options`       | `{ key: string; label: string; data?: any }[]` | —        | **Required.** Options list   |
| `value`         | `SelectOption`                                 | —        | Controlled value             |
| `initialValue`  | `SelectOption`                                 | —        | Initial value (uncontrolled) |
| `onChange`      | `(value: SelectOption) => void`                | —        | Change handler               |
| `placeholder`   | `string`                                       | —        | Placeholder text             |
| `label`         | `string`                                       | —        | Label text                   |
| `required`      | `boolean`                                      | —        | Shows required asterisk      |
| `orientation`   | `"up" \| "down"`                               | `"down"` | Dropdown direction           |
| `CustomOption`  | `(props) => ReactNode`                         | —        | Custom option renderer       |
| `hideScrollbar` | `boolean`                                      | —        | Hide dropdown scrollbar      |

### Skeleton

```tsx
<Skeleton width="200px" height="20px" color="primary" />

<Skeleton width="48px" height="48px" radius="50%" />
```

| Prop     | Type              | Default | Description     |
| -------- | ----------------- | ------- | --------------- |
| `width`  | `string`          | `auto`  | Skeleton width  |
| `height` | `string`          | `auto`  | Skeleton height |
| `radius` | `string`          | —       | Border radius   |
| `color`  | `Color \| string` | —       | Shimmer color   |

### Switch

```tsx
<Switch value={isOn} onChange={(on) => setIsOn(on)} color="primary" />

<Switch color="secondary" size={32} />
```

| Prop       | Type                      | Default | Description                        |
| ---------- | ------------------------- | ------- | ---------------------------------- |
| `value`    | `boolean`                 | `false` | On/off state                       |
| `onChange` | `(isOn: boolean) => void` | —       | Change handler                     |
| `color`    | `Color \| string`         | —       | Active color                       |
| `size`     | `number`                  | `48`    | Width in px (height = size / 1.75) |

### Text

```tsx
<Text size="16" weight="medium" color="primary">Hello world</Text>

<Text size="14" color="#666" align="center">Centered subtitle</Text>
```

| Prop     | Type                                                                                                                                                                          | Default | Description     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------- |
| `size`   | `"8" \| "10" \| "12" \| "14" \| "15" \| "16" \| "18" \| "20" \| "24" \| "28" \| "32" \| "36" \| "40" \| "44" \| "48" \| "52" \| "56" \| "60" \| "64" \| "72" \| "80" \| "96"` | —       | Font size       |
| `weight` | `"regular" \| "medium" \| "semibold" \| "bold"`                                                                                                                               | —       | Font weight     |
| `color`  | `Color \| string`                                                                                                                                                             | —       | Text color      |
| `align`  | `"left" \| "center" \| "right" \| "justify"`                                                                                                                                  | —       | Text alignment  |
| `width`  | `string`                                                                                                                                                                      | —       | Container width |

### TextArea

```tsx
<TextArea label="Message" placeholder="Type here..." color="primary" rows={4} />

<TextArea label="Bio" required error="This field is required" />
```

| Prop       | Type              | Default     | Description                  |
| ---------- | ----------------- | ----------- | ---------------------------- |
| `label`    | `string`          | —           | Label text                   |
| `color`    | `Color \| string` | `"default"` | Focus/border color           |
| `error`    | `string`          | —           | Error message below textarea |
| `required` | `boolean`         | —           | Shows required asterisk      |
| `w`        | `string`          | —           | Width                        |
| `h`        | `string`          | —           | Height                       |

Extends all standard `<textarea>` attributes.

### Title

```tsx
<Title level={1} weight="bold" color="primary">Page Title</Title>

<Title level={3}>Section Heading</Title>
```

| Prop     | Type                                            | Default | Description                                  |
| -------- | ----------------------------------------------- | ------- | -------------------------------------------- |
| `level`  | `1 \| 2 \| 3 \| 4 \| 5 \| 6`                    | —       | **Required.** HTML heading level (`h1`–`h6`) |
| `weight` | `"regular" \| "medium" \| "semibold" \| "bold"` | —       | Font weight                                  |
| `color`  | `Color \| string`                               | —       | Title color                                  |

### Toast

Toasts are rendered via context. Use the `useToast` hook:

```tsx
const { addToast } = useToast();

addToast({ title: "Saved!", color: "primary", icon: <CheckIcon /> });
```

| Prop    | Type              | Default | Description   |
| ------- | ----------------- | ------- | ------------- |
| `title` | `string`          | —       | Toast message |
| `color` | `Color \| string` | —       | Accent color  |
| `icon`  | `ReactNode`       | —       | Leading icon  |

### Tooltip

```tsx
<Tooltip label="Copy to clipboard" color="primary" placement="top">
  <Button starticon="copy" variant="text" />
</Tooltip>
```

| Prop        | Type                                     | Default       | Description                   |
| ----------- | ---------------------------------------- | ------------- | ----------------------------- |
| `label`     | `ReactNode`                              | —             | **Required.** Tooltip content |
| `color`     | `Color \| string`                        | `"primary"`   | Background color              |
| `variant`   | `"contained" \| "outlined" \| "text"`    | theme default | Visual style                  |
| `placement` | `"top" \| "bottom" \| "left" \| "right"` | `"top"`       | Position                      |
| `gap`       | `number`                                 | `8`           | Distance from trigger (px)    |
| `radius`    | `Radius`                                 | theme default | Border radius                 |

### Icons

All icons accept `size`, `color`, `strokeWidth`, and `animated` props.

```tsx
<BellIcon size={24} hasNotification={true} />
<HeartIcon size={24} isLiked={liked} />
<CheckIcon size={24} isVisible={done} />
<SyncIcon size={24} isSyncing={loading} />
<HamburgerIcon size={24} isOpen={menuOpen} />
<CopyIcon size={24} isCopied={copied} />
<SparklesIcon size={24} animated />
<DotsIcon size={24} animated />
<SendHorizontalIcon size={24} animated />
```

Icons can also be referenced by name in `Button` via `starticon` / `endicon`:

```tsx
<Button starticon="bell" label="Notifications" />
```

## Spacing

All components (except a few like Select, Image) support margin and padding shorthand props:

```tsx
<Button label="Spaced" mt={16} mx={8} p={12} />
```

| Prop                   | Description                         |
| ---------------------- | ----------------------------------- |
| `m`                    | Margin all sides                    |
| `mt`, `mr`, `mb`, `ml` | Margin top / right / bottom / left  |
| `mx`, `my`             | Margin horizontal / vertical        |
| `p`                    | Padding all sides                   |
| `pt`, `pr`, `pb`, `pl` | Padding top / right / bottom / left |
| `px`, `py`             | Padding horizontal / vertical       |

## Theme

### Creating a theme

Use `createTheme` to build a theme object. Pass a color string and the palette (5 shades) is generated automatically:

```tsx
import { createTheme } from "@julien-wiegandt/open-ui";

const theme = createTheme({
  radius: "md",
  primary: "#6090fa",
  secondary: "#8b5cf6",
  error: "#e74c3c",
  titleFontFamily: "Inter Variable",
  textFontFamily: "Space Mono",
});
```

| Param             | Type                                       | Default                 | Description                                                                   |
| ----------------- | ------------------------------------------ | ----------------------- | ----------------------------------------------------------------------------- |
| `radius`          | `"none" \| "sm" \| "md" \| "lg" \| "full"` | —                       | **Required.** Global border radius (`0px` / `8px` / `12px` / `14px` / `42px`) |
| `primary`         | `string \| ColorPalette`                   | —                       | **Required.** Primary color hex or custom palette                             |
| `secondary`       | `string \| ColorPalette`                   | `"#000000"`             | Secondary color                                                               |
| `default`         | `string \| ColorPalette`                   | `"#000000"`             | Default color                                                                 |
| `error`           | `string \| ColorPalette`                   | `"#e74c3c"`             | Error color                                                                   |
| `titleFontFamily` | `string`                                   | `"Poppins"`             | Heading font family                                                           |
| `textFontFamily`  | `string`                                   | `"Poppins, sans-serif"` | Body text font family                                                         |
| `components`      | `object`                                   | —                       | Per-component style overrides                                                 |

### Custom color palette

Instead of a hex string, pass a full palette object for precise control:

```tsx
const theme = createTheme({
  radius: "lg",
  primary: {
    darker: "#162a55",
    dark: "#1c448c",
    main: "#6090fa",
    light: "#daeeff",
    lighter: "#eff8ff",
  },
});
```

### Multiple themes

Pass multiple themes and switch at runtime:

```tsx
import { OpenUIProvider, createTheme } from "@julien-wiegandt/open-ui";

const light = createTheme({ radius: "md", primary: "#6090fa" });
const dark = createTheme({ radius: "md", primary: "#818cf8" });

<OpenUIProvider themes={[light, dark]}>
  <App />
</OpenUIProvider>;
```

Switch themes from any child component:

```tsx
import { ThemeContext } from "@julien-wiegandt/open-ui";

const { setTheme } = useContext(ThemeContext);

// Switch by index
setTheme({ index: 1 });

// Or pass a new theme object
setTheme({ theme: myCustomTheme });
```

### Provider settings

```tsx
<OpenUIProvider
  themes={[theme]}
  settings={{
    autoContrast: true,  // auto-adjust text color for readability (default: true)
    toasts: { ... },     // toast notification settings
  }}
>
```
