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
import { useContext, useMemo, useState } from "react";
import { useResponsive } from "./hooks/use-responsive";
import { OpenUIProvider } from "./theme";
import type { Theme as ThemeType } from "./theme/types";
import { CustomThemeContext } from "./theme/use-theme";
import { Chips } from "./views/chips";
import { Dividers } from "./views/dividers";
import { Flexs } from "./views/flexs";
import { Icons } from "./views/icons";
import { Inputs } from "./views/inputs";
import { Modals } from "./views/modals";
import { ProgressBars } from "./views/progress-bars";
import { Selects } from "./views/selects";
import { Theme } from "./views/theme";
import { Toasts } from "./views/toasts";

const App = () => {
  const navigate = useNavigate();
  const { isMobile, isTablet } = useResponsive();
  const isMobileOrTablet = isMobile || isTablet;

  const { radius, palette, text, title } = useContext(CustomThemeContext);
  const [active, setActive] = useState<number | undefined>(undefined);

  const theme: ThemeType = useMemo(
    () => ({
      palette,
      radius,
      title,
      text,
    }),
    [radius, palette, title, text]
  );

  return (
    <OpenUIProvider theme={theme}>
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
        <Flex direction={isMobileOrTablet ? "column" : "row"} width="100%" mt="68px">
          <Flex p={2} width="15%">
            <Text size="15" mb={1}>
              Components
            </Text>
            <Button
              label="Button"
              variant="text"
              align="left"
              color="default"
              active={active === 0}
              onClick={() => {
                navigate("/button");
                setActive(0);
              }}
            />
            <Button
              label="Chip"
              variant="text"
              align="left"
              color="default"
              active={active === 1}
              onClick={() => {
                navigate("/chip");
                setActive(1);
              }}
            />
            <Button
              label="Divider"
              variant="text"
              align="left"
              color="default"
              active={active === 2}
              onClick={() => {
                navigate("/divider");
                setActive(2);
              }}
            />
            <Button
              label="Flex"
              variant="text"
              align="left"
              color="default"
              active={active === 3}
              onClick={() => {
                navigate("/flex");
                setActive(3);
              }}
            />
            <Button
              label="Icons"
              variant="text"
              align="left"
              color="default"
              active={active === 4}
              onClick={() => {
                navigate("/icons");
                setActive(4);
              }}
            />
            <Button
              label="Input"
              variant="text"
              align="left"
              color="default"
              active={active === 5}
              onClick={() => {
                navigate("/input");
                setActive(5);
              }}
            />
            <Button
              label="Modal"
              variant="text"
              align="left"
              color="default"
              active={active === 6}
              onClick={() => {
                navigate("/modal");
                setActive(6);
              }}
            />
            <Button
              label="ProgressBar"
              variant="text"
              align="left"
              color="default"
              active={active === 7}
              onClick={() => {
                navigate("/progress-bar");
                setActive(7);
              }}
            />
            <Button
              label="Select"
              variant="text"
              align="left"
              color="default"
              active={active === 8}
              onClick={() => {
                navigate("/select");
                setActive(8);
              }}
            />
            <Button
              label="Text"
              variant="text"
              align="left"
              color="default"
              active={active === 9}
              onClick={() => {
                navigate("/text");
                setActive(9);
              }}
            />
            <Button
              label="TextArea"
              variant="text"
              align="left"
              color="default"
              active={active === 10}
              onClick={() => {
                navigate("/textarea");
                setActive(10);
              }}
            />

            <Button
              label="Title"
              variant="text"
              align="left"
              color="default"
              active={active === 11}
              onClick={() => {
                navigate("/title");
                setActive(11);
              }}
            />
            <Button
              label="Toast"
              variant="text"
              align="left"
              color="default"
              active={active === 12}
              onClick={() => {
                navigate("/toast");
                setActive(12);
              }}
            />
            <Button
              label="Theme"
              variant="text"
              align="left"
              color="default"
              active={active === 13}
              onClick={() => {
                navigate("/theme");
                setActive(13);
              }}
            />
          </Flex>
          <Flex
            p={6}
            width="85%"
            style={{
              height: "calc(100vh - 68px)",
              overflowY: "auto",
              boxSizing: "border-box",
            }}
          >
            <Routes>
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
              <Route path="/theme" element={<Theme />} />
              <Route path="/progress-bar" element={<ProgressBars />} />
              <Route path="/select" element={<Selects />} />
              <Route path="/toast" element={<Toasts />} />
            </Routes>
          </Flex>
        </Flex>
      </Flex>
    </OpenUIProvider>
  );
};

export default App;
