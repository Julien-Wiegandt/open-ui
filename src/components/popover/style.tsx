import styled from "styled-components";
import type { PopoverStyleProps } from ".";
import { Flex } from "../flex";
import { resolveColor } from "../utils/resolve-color";

export const StyledPopover = styled(Flex)<
  Omit<PopoverStyleProps, "body" | "content" | "children">
>`
  background-color: ${({ bgcolor, color, theme }) =>
    bgcolor ?? resolveColor(color, theme).light};
`;
