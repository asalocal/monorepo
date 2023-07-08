import { Button } from "button";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "components/Links/Link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          className={styles.logo}
          src="/logo.png"
          alt="Logo Visit Cabo Frio"
          quality={100}
          width={115}
          priority={true}
          height={21}
        />

        {children}

        <div className={styles.experiences}>
          <h3>Experiências</h3>
          <span>Parque Natural</span>
          <Button>Parque Natural do Mico Leão Dourado</Button>
          <span>Parque Estadual da Costa do Sol</span>
          <Link url="/trilha-da-gruta-do-vigia.pdf">Gruta do Vigia</Link>
          <Link url="/trilha-do-farol-e-ilha-do-japones.pdf">
            Ilha do Japonês
          </Link>
        </div>
      </div>
    </main>
  );
}
