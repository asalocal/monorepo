import { Maintanence } from "components/Maintanence";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manutencao - Visit Cabo Frio",
  description:
    "Estamos criando uma nova experiência para viagens para Cabo Frio",
};

export default async function Home() {
  return (
    <>
      <h1>Main Page</h1>
    </>
  );
}
