import styles from "./styles.module.scss";
import { Metadata } from "next";
import Image from "next/image";
import { Link } from "components/Links/Link";

export const metadata: Metadata = {
  title: "Links - Visit Cabo Frio",
  description:
    "Veja todos os links importantes para entrar em contato ou ver mais informacoes sobre a Visit Cabo Frio.",
};

export default async function Links() {
  return (
    <>
      <div className={styles.userInfo}>
        <Image
          src="/visit-thumb.png"
          priority
          width={100}
          height={100}
          alt="Thumb Visit Cabo Frio"
        />
        <h2>Visit Cabo Frio</h2>
        <span>@visit.cabofrio</span>
      </div>
      <div className={styles.linksContainer}>
        <Link url="https://api.whatsapp.com/send?phone=5521998880229&text=Oi!%20Tudo%20bem?%20Estou%20interessado%20em%20realizar%20uma%20viagem%20com%20a%20Visit%20Cabo%20Frio%20e%20queria%20ter%20mais%20informa%C3%A7%C3%B5es%20sobre%20as%20experi%C3%AAncias.">
          Whatsapp
        </Link>
        <Link url="https://www.instagram.com/visit.cabofrio/">Instagram</Link>
      </div>
    </>
  );
}
