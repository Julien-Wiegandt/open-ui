import { Button } from "@/components/button";
import { Flex } from "@/components/flex";
import { Text } from "@/components/text";
import { Title } from "@/components/title";

import { Route, Routes, useNavigate } from "react-router";
import { Buttons } from "./views/buttons";
import { TextAreas } from "./views/textareas";
import { Texts } from "./views/texts";
import { Titles } from "./views/titles";

import "@fontsource/poppins/400-italic.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/latin.css";

import "@fontsource/inter/400-italic.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/index.css";

import "@fontsource/lilita-one/400.css";
import "@fontsource/lilita-one/index.css";

import "@fontsource/epilogue/400-italic.css";
import "@fontsource/epilogue/400.css";
import "@fontsource/epilogue/index.css";

import "@fontsource-variable/inter/index.css";
import "@fontsource-variable/inter/wght.css";
import "@fontsource-variable/inter/wght-italic.css";

import "@fontsource/space-mono/index.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/400-italic.css";

import "@fontsource/inter/index.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/400-italic.css";

import { useResponsive } from "./hooks/use-responsive";
import { OpenUIProvider } from "./theme";
import { THEME } from "./theme/constants";
import { Checkboxes } from "./views/checkboxes";
import { Chips } from "./views/chips";
import { ColorPickers } from "./views/color-picker";
import { Dividers } from "./views/dividers";
import { Flexs } from "./views/flexs";
import { Icons } from "./views/icons";
import { Inputs } from "./views/inputs";
import { Modals } from "./views/modals";
import { Popovers } from "./views/popover";
import { ProgressBars } from "./views/progress-bars";
import { Selects } from "./views/selects";
import { Skeletons } from "./views/skeletons";
import { Switchs } from "./views/switchs";
import { Toasts } from "./views/toasts";
import { ThemeBuilder } from "./views/theme/builder";

const App = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const isMobileOrTablet = isMobile || isTablet;

  return (
    <OpenUIProvider
      themes={[THEME]}
      settings={{
        toasts: {
          durationInSeconds: 10,
          maxToastDisplay: 5,
          closable: false,
          placement: "bottom-right",
        },
      }}
    >
      <Flex width="100vw" style={{ position: "relative" }}>
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
          }}
        >
          <img src="/open-ui.png" alt="open-ui" height="36px" />
          <Title level={3}>open-ui</Title>
        </Flex>
        <Flex
          direction={isMobileOrTablet ? "column" : "row"}
          width="100%"
          mt="68px"
        >
          <Flex p={2} width="180px">
            <Text size="15" mb={1}>
              Theme
            </Text>
            <Button
              label="Builder"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/theme-builder");
              }}
            />
            <Text size="15" mt={1} mb={1}>
              Components
            </Text>
            <Button
              label="Button"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/button");
              }}
            />
            <Button
              label="Checkbox"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/checkbox");
              }}
            />
            <Button
              label="Chip"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/chip");
              }}
            />
            <Button
              label="ColorPicker"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/color-picker");
              }}
            />
            <Button
              label="Divider"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/divider");
              }}
            />
            <Button
              label="Flex"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/flex");
              }}
            />
            <Button
              label="Icons"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/icons");
              }}
            />
            <Button
              label="Input"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/input");
              }}
            />
            <Button
              label="Modal"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/modal");
              }}
            />
            <Button
              label="Popover"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/popover");
              }}
            />
            <Button
              label="ProgressBar"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/progress-bar");
              }}
            />
            <Button
              label="Select"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/select");
              }}
            />
            <Button
              label="Skeleton"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/skeleton");
              }}
            />
            <Button
              label="Switch"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/switch");
              }}
            />
            <Button
              label="Text"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/text");
              }}
            />
            <Button
              label="TextArea"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/textarea");
              }}
            />

            <Button
              label="Title"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/title");
              }}
            />
            <Button
              label="Toast"
              variant="text"
              align="left"
              color="default"
              onClick={() => {
                navigate("/toast");
              }}
            />
          </Flex>
          <Flex
            pl={2}
            pr={5}
            py={2}
            width="calc(100vw - 180px)"
            style={{
              height: "calc(100vh - 68px)",
              overflowY: "auto",
              boxSizing: "border-box",
            }}
          >
            <Routes>
              <Route path="/theme-builder" element={<ThemeBuilder />} />
              <Route path="/color-picker" element={<ColorPickers />} />
              <Route path="/checkbox" element={<Checkboxes />} />
              <Route path="/title" element={<Titles />} />
              <Route path="/text" element={<Texts />} />
              <Route path="/button" element={<Buttons />} />
              <Route path="/divider" element={<Dividers />} />
              <Route path="/icons" element={<Icons />} />
              <Route path="/input" element={<Inputs />} />
              <Route path="/modal" element={<Modals />} />
              <Route path="/textarea" element={<TextAreas />} />
              <Route path="/flex" element={<Flexs />} />
              <Route path="/chip" element={<Chips />} />
              <Route path="/progress-bar" element={<ProgressBars />} />
              <Route path="/popover" element={<Popovers />} />
              <Route path="/select" element={<Selects />} />
              <Route path="/switch" element={<Switchs />} />
              <Route path="/toast" element={<Toasts />} />
              <Route path="/skeleton" element={<Skeletons />} />
            </Routes>
          </Flex>
        </Flex>
      </Flex>
    </OpenUIProvider>
  );
};

export default App;
