import styled from "styled-components";
import type { ToastProps } from ".";
import { Flex } from "../flex";
import { shadowMap } from "../flex/style";

export const StyledToast = styled(Flex)<ToastProps>`
  box-shadow: ${() => shadowMap[2]};
  z-index: 99999;
  background-color: white;
  opacity: 1;
  width: 320px;
  position: relative;

  svg {
    stroke: ${({ theme, color }) => theme.palette[color ?? "default"].main};
  }
`;
