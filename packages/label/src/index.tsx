import React from "react";
import { BYTCSS } from "@kaiju-ui/theme";
import { LabelContainer } from "./styles";

export interface ILabelProps {
  children: React.ReactNode;
  color?: string;
  css?: BYTCSS;
}

function Label({ children, color, css }: ILabelProps) {
  return <LabelContainer css={css}>{children}</LabelContainer>;
}

export default Label;
