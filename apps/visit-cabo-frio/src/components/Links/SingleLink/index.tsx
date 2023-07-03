"use client";
import styles from "./styles.module.scss";

interface ISingleLinkProps {
  children: React.ReactNode;
}

export function SingleLink({ children }: ISingleLinkProps) {
  return <button className={styles.linkContainer}>{children}</button>;
}
