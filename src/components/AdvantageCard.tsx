import type { ReactNode } from "react";
import styles from "./AdvantageCard.module.css";

type AdvantageCardProps = {
  title: ReactNode;
  text: ReactNode;
  stat?: string;
};

export function AdvantageCard({ title, text, stat }: AdvantageCardProps) {
  return (
    <article className={styles.card} data-featured={stat ? "true" : undefined}>
      <div className={styles.body}>
        <span className={styles.index} aria-hidden="true" />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
      {stat ? (
        <span className={styles.stat} aria-hidden="true">
          {stat}
        </span>
      ) : null}
    </article>
  );
}
