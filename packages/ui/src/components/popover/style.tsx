"use client";

import styled from "styled-components";
import type { PopoverStyleProps } from ".";
import { Flex } from "../flex";
import type { Theme } from "../../theme/types";
import { resolveColor } from "../utils/resolve-color";

export const StyledPopover = styled(Flex)<
  Omit<PopoverStyleProps, "body" | "content" | "children">
>`
  background-color: ${({ bgcolor, color, theme }) =>
    bgcolor ?? resolveColor(color, theme as Theme).light};

`;
