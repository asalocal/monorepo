import Image from "next/image";
import styles from "./styles.module.scss";
import { FaList, FaInstagram } from "react-icons/fa";
import { Link } from "components/Links/Link";

export async function Maintanence() {
  return (
    <main className={styles.maintanenceContainer}>
      <div className={styles.textContainer}>
        <span>
          Estamos criando uma nova forma de fazer suas viagens em Cabo Frio
        </span>
        <Image
          priority
          src="/logo-white.png"
          width={329 / 2.5}
          height={60 / 2.5}
          alt="Visit Cabo Frio white logo"
        />

        <div className={styles.iconsList}>
          <Link url="/links">
            <FaList /> Links importantes
          </Link>
          <Link url="https://www.instagram.com/visit.cabofrio/">
            <FaInstagram /> Instagram
          </Link>
        </div>
      </div>
    </main>
  );
}
