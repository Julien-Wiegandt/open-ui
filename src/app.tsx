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
import { useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import type { Theme as ThemeType } from "./theme/types";
import { CustomThemeContext } from "./theme/use-theme";
import { Chips } from "./views/chips";
import { Flexs } from "./views/flexs";
import { Inputs } from "./views/inputs";
import { ProgressBars } from "./views/progress-bars";
import { Selects } from "./views/selects";
import { Theme } from "./views/theme";

const App = () => {
  const navigate = useNavigate();

  const { radius, palette, text, title } = useContext(CustomThemeContext);

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
    <ThemeProvider theme={theme}>
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
        <Flex direction="row" mt="68px">
          <Flex p={2}>
            <Text size="15">components</Text>
            <Button
              label="Button"
              variant="text"
              color="default"
              onClick={() => navigate("/button")}
            />
            <Button
              label="Chip"
              variant="text"
              color="default"
              onClick={() => navigate("/chip")}
            />
            <Button
              label="Flex"
              variant="text"
              color="default"
              onClick={() => navigate("/flex")}
            />
            <Button
              label="Input"
              variant="text"
              color="default"
              onClick={() => navigate("/input")}
            />
            <Button
              label="ProgressBar"
              variant="text"
              color="default"
              onClick={() => navigate("/progress-bar")}
            />
            <Button
              label="Select"
              variant="text"
              color="default"
              onClick={() => navigate("/select")}
            />
            <Button
              label="Text"
              variant="text"
              color="default"
              onClick={() => navigate("/text")}
            />
            <Button
              label="TextArea"
              variant="text"
              color="default"
              onClick={() => navigate("/textarea")}
            />

            <Button
              label="Title"
              variant="text"
              color="default"
              onClick={() => navigate("/title")}
            />
            <Button
              label="Theme"
              variant="text"
              color="default"
              onClick={() => navigate("/theme")}
            />
          </Flex>
          <Flex p={2}>
            <Routes>
              <Route path="/title" element={<Titles />} />
              <Route path="/text" element={<Texts />} />
              <Route path="/button" element={<Buttons />} />
              <Route path="/input" element={<Inputs />} />
              <Route path="/textarea" element={<TextAreas />} />
              <Route path="/flex" element={<Flexs />} />
              <Route path="/chip" element={<Chips />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="/progress-bar" element={<ProgressBars />} />
              <Route path="/select" element={<Selects />} />
            </Routes>
          </Flex>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};

export default App;
