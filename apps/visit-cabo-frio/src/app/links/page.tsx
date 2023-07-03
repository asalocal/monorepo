import styles from "./styles.module.scss";
import { SingleLink } from "components/Links/SingleLink";
import Image from "next/image";

export default async function Links() {
  return (
    <>
      <div className={styles.userInfo}>
        <Image src="/visit-thumb.png" width={100} height={100} alt="" />
        <h2>Visit Cabo Frio</h2>
        <span>@visit.cabofrio</span>
      </div>
      <div className={styles.linksContainer}>
        <SingleLink>Whatsapp</SingleLink>
        <SingleLink>Instagram</SingleLink>
      </div>
    </>
  );
}
