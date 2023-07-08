"use client";
import Image from "next/image";
import { MaintanencePageContainer, TextContainer } from "./styles";

export async function Maintanence() {
  return (
    <MaintanencePageContainer>
      <TextContainer>
        <Image
          src="/logo-white.png"
          width={329 / 2.5}
          height={60 / 2.5}
          alt="Visit Cabo Frio white logo"
        />
        <h1>
          Estamos criando uma <br />
          nova experiência para você!
        </h1>
      </TextContainer>
    </MaintanencePageContainer>
  );
}
