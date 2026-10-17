import { useId } from "react";
import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Hero.module.css";

type HeroProps = {
  eyebrow?: string;
  headline: ReactNode;
  text?: ReactNode;
  children?: ReactNode;
  visual?: ReactNode;
};

export function Hero({
  eyebrow,
  headline,
  text,
  children,
  visual,
}: HeroProps) {
  const titleId = useId();

  return (
    <section
      className={styles.hero}
      data-layout={visual ? "split" : "page"}
      aria-labelledby={titleId}
    >
      <Container>
        <div className={styles.inner}>
          <div className={styles.copy}>
            {eyebrow ? <p className={styles.eyebrow}>{eyebrow}</p> : null}
            <h1 className={styles.title} id={titleId}>
              {headline}
            </h1>
            {text ? <p className={styles.text}>{text}</p> : null}
            {children ? <div className={styles.actions}>{children}</div> : null}
          </div>
          {visual ? <div className={styles.visual}>{visual}</div> : null}
        </div>
      </Container>
    </section>
  );
}
