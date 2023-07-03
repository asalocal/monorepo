import styles from "./styles.module.scss";
import { SingleLink } from "components/Links/SingleLink";
import Image from "next/image";

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
          <SingleLink>Parque Natural do Mico Leão Dourado</SingleLink>
          <span>Parque Estadual da Costa do Sol</span>
          <SingleLink>Gruta do Vigia</SingleLink>
          <SingleLink>Ilha do Japonês </SingleLink>
        </div>
      </div>
    </main>
  );
}
