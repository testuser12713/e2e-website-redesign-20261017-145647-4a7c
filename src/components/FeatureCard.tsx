import type { ReactNode } from "react";
import styles from "./FeatureCard.module.css";

type FeatureCardProps = {
  title: ReactNode;
  text: ReactNode;
};

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <article className={styles.card}>
      <span className={styles.index} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </article>
  );
}
