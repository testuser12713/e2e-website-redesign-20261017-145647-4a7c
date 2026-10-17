import { useId } from "react";
import type { ReactNode } from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  heading?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
};

export function Section({ id, heading, intro, children }: SectionProps) {
  const headingId = useId();

  return (
    <section
      className={styles.section}
      id={id}
      aria-labelledby={heading ? headingId : undefined}
    >
      <Container>
        {heading ? (
          <div className={styles.heading}>
            <h2 className={styles.title} id={headingId}>
              {heading}
            </h2>
            {intro ? <p className={styles.intro}>{intro}</p> : null}
          </div>
        ) : null}
        {children}
      </Container>
    </section>
  );
}
