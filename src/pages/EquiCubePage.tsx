import { useId } from "react";
import { Link } from "react-router-dom";
import { AdvantageCard } from "../components/AdvantageCard";
import { ButtonLink } from "../components/ButtonLink";
import { FeatureCard } from "../components/FeatureCard";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import styles from "./EquiCubePage.module.css";

const FEATURES = [
  {
    title: "Standardisierter Basis-Cube",
    text: "Eine gemeinsame, durchdachte Grundlage für jedes EquiCube-System – abgestimmt aufeinander statt einzeln zusammengesucht.",
  },
  {
    title: "Modular anpassbar",
    text: "Die Module werden an Haus, bestehende Heizung und tatsächlichen Bedarf angepasst. So wächst das System mit deinen Anforderungen.",
  },
  {
    title: "Für Fußboden- und Radiatorenheizung",
    text: "Funktioniert mit moderner Fußbodenheizung ebenso wie mit bestehenden Radiatoren – ohne dass du deine Heizflächen tauschen musst.",
  },
  {
    title: "Heizleistung bis 40 kW",
    text: "Leistungsfähige Wärmeversorgung, integriert in ein kompaktes Gesamtsystem für Einfamilienhäuser.",
  },
];

const ADVANTAGES = [
  {
    title: "Schnelle Installation",
    text: "Der kompakte Aufbau verkürzt die Montage vor Ort deutlich – die Installation gelingt in über zwei Stunden.",
    stat: "> 2 h",
  },
  {
    title: "Einfache Wartbarkeit",
    text: "Aufbau und Komponenten sind auf einen unkomplizierten Service ausgelegt – übersichtlich statt verschachtelt.",
  },
  {
    title: "Einfache Installation & Inbetriebnahme",
    text: "Durchdachte Schnittstellen und abgestimmte Technik machen aus der Montage einen planbaren Ablauf.",
  },
  {
    title: "Abgestimmte Komponenten",
    text: "Wärmepumpe, Batterie, PV, Speicher und KI-Technik sind aufeinander abgestimmt – aus einer Hand.",
  },
  {
    title: "Minimierter Platzbedarf",
    text: "Mehrere Funktionen in einem System schaffen Raum im Technikraum und im Alltag.",
  },
];

const SYSTEM_LAYERS = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    text: "Wärme für Fußboden- und Radiatorenheizung, bis 40 kW Heizleistung.",
  },
  {
    title: "Batteriespeicher",
    text: "Speichert Energie im Haus und macht sie dann verfügbar, wenn du sie brauchst.",
  },
  {
    title: "PV-Technik",
    text: "Sonnenstrom wird Teil des Gesamtsystems statt einer separaten Insellösung.",
  },
  {
    title: "KI & Server",
    text: "Eine integrierte KI-Recheneinheit für eine faire, nachhaltige Nutzung von Rechenleistung.",
  },
];

function CubeHeroGraphic() {
  const gridId = useId();
  const titleId = useId();
  const descId = useId();

  return (
    <svg
      className={styles.cubeGraphic}
      viewBox="0 0 640 620"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>Der EquiCube als geschichtetes System</title>
      <desc id={descId}>
        Ein isometrischer Würfel mit farbigen Ebenen für Wärmepumpe, Batterie,
        PV sowie KI- und Server-Technik.
      </desc>
      <defs>
        <pattern
          id={gridId}
          width="80"
          height="80"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M80 0H0V80"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".12"
          />
        </pattern>
      </defs>
      <rect
        width="640"
        height="620"
        fill={`url(#${gridId})`}
        opacity=".55"
      />
      <ellipse className={styles.cubeShadow} cx="320" cy="562" rx="174" ry="26" />
      <polygon
        className={styles.cubeBandPv}
        points="92,210 320,324 320,379 92,265"
      />
      <polygon
        className={styles.cubeBandPv}
        points="548,210 320,324 320,379 548,265"
      />
      <polygon
        className={styles.cubeBandBattery}
        points="92,265 320,379 320,434 92,320"
      />
      <polygon
        className={styles.cubeBandBattery}
        points="548,265 320,379 320,434 548,320"
      />
      <polygon
        className={styles.cubeBandHeat}
        points="92,320 320,434 320,544 92,430"
      />
      <polygon
        className={styles.cubeBandHeat}
        points="548,320 320,434 320,544 548,430"
      />
      <polygon className={styles.cubeTop} points="320,96 548,210 320,324 92,210" />
      <path
        className={styles.cubeEdge}
        d="M320 96 548 210v220L320 544 92 430V210L320 96ZM92 210l228 114 228-114M320 324v220"
      />
      <path
        className={styles.cubeGridLine}
        d="M206 153l228 114M434 153 206 267M92 265l228 114M548 265 320 379M92 320l228 114M548 320 320 434"
      />
      <g aria-hidden="true" stroke="currentColor" strokeOpacity=".28">
        <path d="M92 210H70M548 210h22M92 430H70M548 430h22M320 96V76" />
      </g>
    </svg>
  );
}

function CubeStackGraphic() {
  const gridId = useId();
  const titleId = useId();
  const descId = useId();

  return (
    <svg
      className={styles.cubeGraphic}
      viewBox="0 0 560 620"
      role="img"
      aria-labelledby={`${titleId} ${descId}`}
    >
      <title id={titleId}>Aufbau des EquiCube</title>
      <desc id={descId}>
        Vier übereinanderliegende Module für KI, PV, Batterie und Wärmepumpe
        bilden den EquiCube.
      </desc>
      <defs>
        <pattern
          id={gridId}
          width="64"
          height="64"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M64 0H0V64"
            fill="none"
            stroke="currentColor"
            strokeOpacity=".09"
          />
        </pattern>
      </defs>
      <rect
        width="560"
        height="620"
        fill={`url(#${gridId})`}
        opacity=".75"
      />
      <ellipse className={styles.cubeShadow} cx="280" cy="594" rx="136" ry="18" />
      <g className={styles.plateAi}>
        <polygon
          className={styles.plateSide}
          points="130,95 280,166 280,182 130,111"
        />
        <polygon
          className={styles.plateSide}
          points="430,95 280,166 280,182 430,111"
        />
        <polygon
          className={styles.plateTop}
          points="280,40 430,95 280,150 130,95"
        />
      </g>
      <g className={styles.platePv}>
        <polygon
          className={styles.plateSide}
          points="130,235 280,306 280,322 130,251"
        />
        <polygon
          className={styles.plateSide}
          points="430,235 280,306 280,322 430,251"
        />
        <polygon
          className={styles.plateTop}
          points="280,180 430,235 280,290 130,235"
        />
      </g>
      <g className={styles.plateBattery}>
        <polygon
          className={styles.plateSide}
          points="130,375 280,446 280,462 130,391"
        />
        <polygon
          className={styles.plateSide}
          points="430,375 280,446 280,462 430,391"
        />
        <polygon
          className={styles.plateTop}
          points="280,320 430,375 280,430 130,375"
        />
      </g>
      <g className={styles.plateHeat}>
        <polygon
          className={styles.plateSide}
          points="130,515 280,586 280,602 130,531"
        />
        <polygon
          className={styles.plateSide}
          points="430,515 280,586 280,602 430,531"
        />
        <polygon
          className={styles.plateTop}
          points="280,460 430,515 280,570 130,515"
        />
      </g>
      <path
        className={styles.plateConnector}
        d="M280 182v-16M280 322v-16M280 462v-16"
      />
    </svg>
  );
}

export default function EquiCubePage() {
  return (
    <>
      <Hero
        eyebrow="Das Produkt"
        headline="Der EquiCube"
        text="Eine innovative Komplettlösung für die Heizungstechnik: Anstatt einzelner Insellösungen vereint der equi.cube Wärmepumpe, Batterie, Pufferspeicher und KI-Recheneinheit zu einer einzigartigen Kombination."
        visual={
          <figure className={styles.heroVisual}>
            <CubeHeroGraphic />
            <figcaption className={styles.visualCaption}>
              <span>equi.cube</span>
              <span>Wärme · Speicher · PV · KI</span>
            </figcaption>
          </figure>
        }
      >
        <ButtonLink variant="primary" size="large" to="/kontakt">
          equi.cube anfragen
        </ButtonLink>
        <ButtonLink variant="secondary" size="large" to="/ueber-uns">
          Die Crew kennenlernen
        </ButtonLink>
        <ul className={styles.heroFacts} aria-label="EquiCube auf einen Blick">
          <li>
            <span className={styles.swatchHeat} aria-hidden="true" />
            Wärmepumpe
          </li>
          <li>
            <span className={styles.swatchBattery} aria-hidden="true" />
            Batterie
          </li>
          <li>
            <span className={styles.swatchPv} aria-hidden="true" />
            PV
          </li>
          <li>
            <span className={styles.swatchAccent} aria-hidden="true" />
            KI &amp; Server
          </li>
        </ul>
      </Hero>

      <Section id="equicube-features">
        <div className={styles.heading}>
          <p className={styles.eyebrow}>Die Merkmale</p>
          <h2>Vier Dinge, die den EquiCube ausmachen.</h2>
          <p className={styles.intro}>
            Standardisiert im Kern, flexibel im Detail. Damit das System zu
            deinem Haus passt – und nicht umgekehrt.
          </p>
        </div>
        <div className={styles.featureGrid}>
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </Section>

      <div className={styles.surfaceSection}>
        <Section id="equicube-advantages">
          <div className={`${styles.heading} ${styles.headingSplit}`}>
            <div>
              <p className={styles.eyebrow}>Die Vorteile</p>
              <h2>Weniger Aufwand. Mehr Überblick.</h2>
            </div>
            <p className={styles.intro}>
              Ein System statt vieler Einzelentscheidungen: Der EquiCube
              reduziert Montage, Platzbedarf und Abstimmungsaufwand – und lässt
              dir mehr Zeit für das Wesentliche.
            </p>
          </div>
          <div className={styles.advantageGrid}>
            {ADVANTAGES.map((advantage) => (
              <AdvantageCard
                key={advantage.title}
                title={advantage.title}
                text={advantage.text}
                stat={advantage.stat}
              />
            ))}
          </div>
        </Section>
      </div>

      <Section id="equicube-system">
        <div className={styles.systemGrid}>
          <div className={styles.systemCopy}>
            <p className={styles.eyebrow}>Ein Cube, vier Ebenen</p>
            <h2>Alles unter einem Dach.</h2>
            <p className={styles.systemLead}>
              Wärme, Speicher, Sonnenstrom und Rechenleistung greifen
              ineinander. Der EquiCube denkt die Technik im Haus als Ganzes –
              nicht als Sammlung einzelner Geräte.
            </p>
            <ul className={styles.systemList}>
              {SYSTEM_LAYERS.map((layer, index) => (
                <li key={layer.title}>
                  <span className={styles.systemIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{layer.title}</h3>
                    <p>{layer.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link className={styles.textLink} to="/kontakt">
              Über dein Projekt sprechen
              <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
          <figure className={styles.systemVisual}>
            <CubeStackGraphic />
            <figcaption className={styles.visualCaption}>
              <span>equi.cube · Aufbau</span>
              <span>KI · PV · Batterie · Wärme</span>
            </figcaption>
          </figure>
        </div>
      </Section>

      <div className={styles.cta}>
        <Section id="equicube-cta">
          <div className={styles.ctaInner}>
            <div>
              <p className={styles.eyebrow}>Nächster Schritt</p>
              <h2>Passt der EquiCube zu deinem Haus?</h2>
              <p className={styles.ctaText}>
                Schreib uns ein paar Zeilen zu deiner Ausgangslage. Wir schauen
                gemeinsam darauf und melden uns persönlich bei dir.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <ButtonLink variant="primary" size="large" to="/kontakt">
                Kontakt aufnehmen
              </ButtonLink>
              <ButtonLink
                variant="secondary"
                size="large"
                href="tel:+436504593129"
              >
                +43 650 4593 129
              </ButtonLink>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
