import styled, { css } from "styled-components";
import { KaijuColors } from "@kaiju-ui/theme";

export interface IButtonContainerProps {
  variant?: "primary" | "secondary";
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  background-color: ${KaijuColors.primary};
  border: none;
  padding: 10px 15px;
  color: ${KaijuColors.neutral0};
  min-height: 52px;
  transition: all 0.2s ease;
  width: 100%;

  &:hover {
    cursor: pointer;
    background-color: ${KaijuColors.primaryFocused};
  }

  ${(props) =>
    props.variant === "secondary" &&
    css`
      background-color: transparent;
      border: 1px solid ${KaijuColors.primary};
      color: ${KaijuColors.primary};

      &:hover {
        background-color: rgb(12 145 193 / 0.2);
        border-color: ${KaijuColors.primaryFocused};
        color: ${KaijuColors.primaryFocused};
      }
    `}
`;
