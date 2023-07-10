"use client";
import React, { ButtonHTMLAttributes } from "react";
import { ButtonContainer } from "./styles";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  ...props
}: IButtonProps) {
  return (
    <ButtonContainer {...props} variant={variant}>
      {children}
    </ButtonContainer>
  );
}
