import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import styles from "./ImprintPage.module.css";

const MANAGING_DIRECTORS = [
  {
    name: "Michael Hochstöger",
    email: "michael.hochstoeger@equicrew.com",
  },
  {
    name: "Christian Hinterdorfer",
    email: "christian.hinterdorfer@equicrew.com",
  },
  {
    name: "Christian Hinterreiter",
    email: "christian.hinterreiter@equicrew.com",
  },
];

export default function ImprintPage() {
  return (
    <>
      <Hero
        eyebrow="Rechtliches"
        headline="Impressum."
        text="Angaben gemäß § 5 E-Commerce-Gesetz (ECG)."
      />

      <Section>
        <div className={styles.grid}>
          <div className={styles.card}>
            <Prose>
              <h2 id="company-title">Unternehmen</h2>
              <p className={styles.legalName}>EquiCrew FlexCo</p>
              <address>
                Marktplatz 14
                <br />
                4310 Mauthausen
                <br />
                Österreich
              </address>
              <ul className={styles.contact}>
                <li>
                  <span className={styles.contactLabel}>Telefon</span>
                  <a href="tel:+436504593129">+43 650 4593 129</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>E-Mail</span>
                  <a href="mailto:office@equicrew.com">office@equicrew.com</a>
                </li>
                <li>
                  <span className={styles.contactLabel}>Web</span>
                  <Link to="/">equicrew.com</Link>
                </li>
              </ul>
            </Prose>
          </div>

          <div className={styles.card}>
            <Prose>
              <h2>Firmenbuch &amp; Steuern</h2>
              <table>
                <caption className="sr-only">
                  Firmenbuchdaten der EquiCrew FlexCo
                </caption>
                <tbody>
                  <tr>
                    <th scope="row">Rechtsform</th>
                    <td>FlexCo (Flexible Kapitalgesellschaft)</td>
                  </tr>
                  <tr>
                    <th scope="row">Sitz</th>
                    <td>Mauthausen, Österreich</td>
                  </tr>
                  <tr>
                    <th scope="row">Firmenbuchnummer</th>
                    <td>FN 648043 f</td>
                  </tr>
                  <tr>
                    <th scope="row">Firmenbuchgericht</th>
                    <td>Wien</td>
                  </tr>
                  <tr>
                    <th scope="row">UID-Nummer</th>
                    <td>ATU82132979</td>
                  </tr>
                </tbody>
              </table>
            </Prose>
          </div>

          <div className={`${styles.card} ${styles.wide}`}>
            <Prose>
              <h2>Vertretungsbefugte Geschäftsführung</h2>
              <table>
                <caption className="sr-only">
                  Geschäftsführung und E-Mail-Adressen der EquiCrew FlexCo
                </caption>
                <tbody>
                  {MANAGING_DIRECTORS.map((director) => (
                    <tr key={director.email}>
                      <th scope="row">{director.name}</th>
                      <td>
                        <a href={`mailto:${director.email}`}>
                          {director.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Prose>
          </div>

          <div className={`${styles.card} ${styles.wide}`}>
            <Prose>
              <h2>Unternehmensgegenstand</h2>
              <p>
                Entwicklung von innovativen und nachhaltigen Produkten für
                smarte Energie und fair verteilte KI-Technologie.
              </p>
            </Prose>
          </div>

          <div className={styles.card}>
            <Prose>
              <h2>Haftung für Inhalte</h2>
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt
                erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                der Inhalte können wir jedoch keine Gewähr übernehmen.
              </p>
            </Prose>
          </div>

          <div className={styles.card}>
            <Prose>
              <h2>Haftung für Links</h2>
              <p>
                Unsere Website enthält Links zu externen Websites Dritter. Auf
                deren Inhalte haben wir keinen Einfluss; für diese Inhalte ist
                stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der
                Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
              </p>
            </Prose>
          </div>

          <div className={`${styles.card} ${styles.wide}`}>
            <Prose>
              <h2>Urheberrecht &amp; Datenschutz</h2>
              <p>
                Die Inhalte und Werke auf dieser Website unterliegen dem
                österreichischen Urheberrecht. Diese Website setzt keine Cookies
                und keine Tracking-Werkzeuge ein. Wenn du uns über das
                Kontaktformular schreibst, öffnet sich dein E-Mail-Programm; die
                Übermittlung erfolgt erst mit dem Senden in deinem
                E-Mail-Programm.
              </p>
              <p>
                Für Fragen zu deinen Daten oder zu einer Nachricht, die du uns
                gesendet hast, erreichst du uns unter{" "}
                <a href="mailto:office@equicrew.com">office@equicrew.com</a>.
              </p>
            </Prose>
          </div>
        </div>
      </Section>
    </>
  );
}
