import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import { TeamCard } from "../components/TeamCard";
import styles from "./AboutPage.module.css";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
      <path
        d="M4 10h11M11 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const FOUNDERS = [
  {
    id: "founder-michael",
    name: "Michael Hochstöger",
    role: "Founder",
    email: "michael.hochstoeger@equicrew.com",
    tone: "heat" as const,
  },
  {
    id: "founder-christian-hinterdorfer",
    name: "Christian Hinterdorfer",
    role: "Founder",
    email: "christian.hinterdorfer@equicrew.com",
    tone: "pv" as const,
  },
  {
    id: "founder-christian-hinterreiter",
    name: "Christian Hinterreiter",
    role: "Founder",
    email: "christian.hinterreiter@equicrew.com",
    tone: "battery" as const,
  },
];

const PRINCIPLES = [
  {
    id: "principle-heating",
    index: "01",
    title: "Heizsysteme ohne Kopfzerbrechen",
    text: "Ein System statt vieler Einzelentscheidungen: Wärme, Speicher und Energie greifen so ineinander, dass du dich nicht um jedes Gerät kümmern musst.",
  },
  {
    id: "principle-ai",
    index: "02",
    title: "Grün und fair verteilte KI",
    text: "KI-Technologie braucht einen verantwortungsvollen Rahmen. Wir setzen sie für nachhaltige Energie und faire Chancen ein.",
  },
  {
    id: "principle-together",
    index: "03",
    title: "Gemeinsam statt nebeneinander",
    text: "Eine Crew, abgestimmte Komponenten und ein offener Dialog mit Kundinnen und Kunden – so entsteht ein stimmiges Ganzes.",
  },
  {
    id: "principle-next-generation",
    index: "04",
    title: "Verantwortung für morgen",
    text: "Wir entwickeln Produkte, die den nachfolgenden Generationen bestmögliche Chancen offenhalten – technisch und im Umgang mit Ressourcen.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div data-od-id="about-hero">
        <Hero
          eyebrow="Über die Crew"
          headline="Jedes Schiff braucht eine Crew."
          text="Gemeinsam gehen wir den Weg zu Heizsystemen ohne Kopfzerbrechen – und zu grüner, fair verteilter KI-Technologie. Drei Founder, ein Anspruch: Energie und KI so einzusetzen, dass sie für die nächste Generation Sinn ergeben."
        >
          <div data-od-id="about-hero-cta">
            <ButtonLink variant="primary" to="/kontakt" size="large">
              Lern uns kennen
              <ArrowIcon />
            </ButtonLink>
          </div>
          <ButtonLink variant="secondary" to="/equicube" size="large">
            Zum EquiCube
          </ButtonLink>
        </Hero>
      </div>

      <Section id="about-mission">
        <div className={styles.aboutGrid} data-od-id="about-mission">
          <div>
            <p className={styles.eyebrow}>Unser Antrieb</p>
            <h2 className={styles.quote}>smarte energie, fair verteilte KI.</h2>
            <div className={styles.missionCopy}>
              <Prose>
                <p>
                  EquiCrew hat sich zum Ziel gesetzt, Energie und Künstliche
                  Intelligenz nachhaltig bereitzustellen und zu nutzen, um so
                  den nachfolgenden Generationen bestmögliche Chancen zu
                  liefern, um sicher und erfolgreich die Herausforderungen der
                  Zukunft zu meistern.
                </p>
                <p>
                  Dafür bringen wir Gebäudetechnik, Energie und digitale Systeme
                  zusammen – in einem Team, das lieber gemeinsam anpackt, als
                  nebeneinander zu arbeiten.
                </p>
              </Prose>
            </div>
            <div className={styles.actions}>
              <Link className={styles.textLink} to="/equicube">
                So funktioniert der EquiCube
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <figure className={styles.crewGraphic} data-od-id="about-crew-graphic">
            <svg
              viewBox="0 0 560 520"
              role="img"
              aria-labelledby="crew-graphic-title crew-graphic-desc"
            >
              <title id="crew-graphic-title">Drei Founder, eine Crew</title>
              <desc id="crew-graphic-desc">
                Michael Hochstöger, Christian Hinterdorfer und Christian
                Hinterreiter sind über ein gemeinsames Zentrum miteinander
                verbunden.
              </desc>
              <ellipse
                className={styles.crewOrbit}
                cx="280"
                cy="260"
                rx="210"
                ry="170"
              />
              <ellipse
                className={styles.crewOrbit}
                cx="280"
                cy="260"
                rx="150"
                ry="118"
              />
              <path className={styles.crewLink} d="M130 145 430 145 280 405Z" />
              <path
                className={styles.crewLink}
                d="M280 260 130 145M280 260 430 145M280 260v145"
              />
              <g className={styles.crewNodeHeat}>
                <circle className={styles.crewNodeRing} cx="130" cy="145" r="47" />
                <text className={styles.crewNodeInitials} x="130" y="153">
                  MH
                </text>
                <text className={styles.crewNodeLabel} x="130" y="215">
                  Founder
                </text>
              </g>
              <g className={styles.crewNodePv}>
                <circle className={styles.crewNodeRing} cx="430" cy="145" r="47" />
                <text className={styles.crewNodeInitials} x="430" y="153">
                  CH
                </text>
                <text className={styles.crewNodeLabel} x="430" y="215">
                  Founder
                </text>
              </g>
              <g className={styles.crewNodeBattery}>
                <circle className={styles.crewNodeRing} cx="280" cy="405" r="47" />
                <text className={styles.crewNodeInitials} x="280" y="413">
                  CH
                </text>
                <text className={styles.crewNodeLabel} x="280" y="475">
                  Founder
                </text>
              </g>
              <circle className={styles.crewCenter} cx="280" cy="260" r="38" />
              <path
                className={styles.crewCenterMark}
                d="M280 243l14 7.5v15L280 273l-14-7.5v-15l14-7.5ZM266 250.5l14 7.5 14-7.5M280 258v15"
              />
            </svg>
            <figcaption className={styles.visualCaption}>
              <span>EquiCrew FlexCo</span>
              <span>Mauthausen · Österreich</span>
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section id="about-team">
        <div data-od-id="about-team">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Die Founder</p>
            <h2 id="about-team-title">
              Drei Perspektiven. Ein gemeinsamer Kurs.
            </h2>
            <p className={styles.lead}>
              Gebäudetechnik, Energie und digitale Systeme zusammenbringen –
              dafür arbeitet die Crew täglich zusammen. Du erreichst uns direkt.
            </p>
          </div>
          <div className={styles.teamGrid}>
            {FOUNDERS.map((founder) => (
              <div
                key={founder.email}
                className={styles.teamItem}
                data-od-id={founder.id}
              >
                <TeamCard
                  name={founder.name}
                  role={founder.role}
                  email={founder.email}
                  tone={founder.tone}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about-principles">
        <div data-od-id="about-principles">
          <div className={styles.sectionHeading}>
            <p className={styles.eyebrow}>Unser Weg</p>
            <h2 id="about-principles-title">Woran wir uns orientieren.</h2>
            <p className={styles.lead}>
              Technik soll entlasten. Deshalb denken wir Systeme vom Alltag der
              Menschen her – nicht von der Zahl der Einzelkomponenten.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {PRINCIPLES.map((principle) => (
              <div
                key={principle.index}
                className={styles.principleItem}
                data-od-id={principle.id}
              >
                <Card>
                  <div className={styles.principle}>
                    <span className={styles.principleIndex}>
                      {principle.index}
                    </span>
                    <h3 className={styles.principleTitle}>
                      {principle.title}
                    </h3>
                    <p className={styles.principleText}>{principle.text}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="about-cta">
        <div className={styles.ctaInner} data-od-id="about-cta">
          <div>
            <p className={styles.eyebrow}>Kontakt</p>
            <h2 className={styles.ctaTitle}>
              Lass uns gemeinsam auf Kurs gehen.
            </h2>
            <p className={styles.ctaText}>
              Du hast Fragen zum EquiCube oder zu deinem Heizsystem? Wir hören
              zu und melden uns persönlich bei dir.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <ButtonLink variant="primary" to="/kontakt" size="large">
              Kontakt aufnehmen
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="mailto:office@equicrew.com"
              size="large"
            >
              office@equicrew.com
            </ButtonLink>
          </div>
        </div>
      </Section>
    </>
  );
}
