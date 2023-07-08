"use client";
import { Button } from "button";

export interface ILinkProps {
  url: string;
  children: React.ReactNode;
}
export function Link({ url, children }: ILinkProps) {
  return (
    <Button
      variant="secondary"
      onClick={(ev) => {
        console.log(url);

        window.location.href = url;
      }}
    >
      {children}
    </Button>
  );
}
