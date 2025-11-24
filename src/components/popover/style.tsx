import styled from "styled-components";
import type { PopoverStyleProps } from ".";
import { Flex } from "../flex";

export const StyledPopover = styled(Flex)<
  Omit<PopoverStyleProps, "body" | "content" | "children">
>`
  background-color: ${({ bgcolor, color, theme }) =>
    bgcolor ?? theme.palette[color].light};
`;
