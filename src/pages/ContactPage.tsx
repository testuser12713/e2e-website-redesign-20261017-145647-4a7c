import { Link } from "react-router-dom";
import { Card } from "../components/Card";
import { ContactForm } from "../components/ContactForm";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import styles from "./ContactPage.module.css";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM20 13.27c0-3.53-1.88-5.17-4.4-5.17-2.03 0-2.94 1.12-3.45 1.9V8.5H8.77V20h3.38v-6.42c0-1.7.32-3.35 2.43-3.35 2.08 0 2.1 1.95 2.1 3.46V20H20v-6.73Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      aria-hidden="true"
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth={1.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Kontakt"
        headline="Erzähl uns von deinem Vorhaben."
        text="Ein paar Zeilen genügen. Schreib uns, was du planst, und wir melden uns persönlich bei dir – ohne Umwege."
      />

      <Section>
        <div className={styles.contactGrid}>
          <ContactForm />

          <aside className={styles.aside} aria-label="Kontaktdaten">
            <Card>
              <p className={styles.eyebrow}>Direkt erreichbar</p>
              <h2 className={styles.asideTitle}>Lieber persönlich?</h2>
              <ul className={styles.infoList}>
                <li>
                  <span className={styles.infoLabel}>Anschrift</span>
                  <address>
                    EquiCrew FlexCo
                    <br />
                    Marktplatz 14
                    <br />
                    4310 Mauthausen
                    <br />
                    Österreich
                  </address>
                </li>
                <li>
                  <span className={styles.infoLabel}>Telefon</span>
                  <a href="tel:+436504593129">+43 650 4593 129</a>
                </li>
                <li>
                  <span className={styles.infoLabel}>E-Mail</span>
                  <a href="mailto:office@equicrew.com">office@equicrew.com</a>
                </li>
                <li>
                  <span className={styles.infoLabel}>Folge uns</span>
                  <div className={styles.socialLinks}>
                    <a
                      className={styles.socialLink}
                      href="https://www.linkedin.com/company/equicrew/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="EquiCrew auf LinkedIn (öffnet in neuem Tab)"
                    >
                      <LinkedInIcon />
                      LinkedIn
                    </a>
                    <a
                      className={styles.socialLink}
                      href="https://www.instagram.com/equicrew_com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="EquiCrew auf Instagram (öffnet in neuem Tab)"
                    >
                      <InstagramIcon />
                      Instagram
                    </a>
                  </div>
                </li>
              </ul>
            </Card>

            <div className={styles.asideProduct}>
              <div>
                <p className={styles.eyebrow}>Das Kernprodukt</p>
                <h3>equi.cube</h3>
                <p>
                  Wärmepumpe, Batterie, PV und KI-Technik in einem System – für
                  Einfamilienhäuser.
                </p>
              </div>
              <Link className={styles.textLink} to="/equicube">
                Mehr über den EquiCube
                <ArrowIcon />
              </Link>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
