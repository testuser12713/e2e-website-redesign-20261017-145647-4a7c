import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { Card } from "../components/Card";
import { Hero } from "../components/Hero";
import { Section } from "../components/Section";
import styles from "./HomePage.module.css";

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

function HeroCube() {
  return (
    <figure className={styles.heroVisual} data-od-id="home-hero-cube">
      <svg
        className={styles.cubeGraphic}
        viewBox="0 0 640 620"
        role="img"
        aria-labelledby="home-cube-title home-cube-desc"
      >
        <title id="home-cube-title">Der EquiCube als geschichtetes System</title>
        <desc id="home-cube-desc">
          Ein isometrischer Würfel mit farbigen Ebenen für Wärmepumpe, Batterie,
          PV sowie KI- und Server-Technik.
        </desc>
        <defs>
          <pattern
            id="home-cube-grid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M80 0H0V80"
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.12}
            />
          </pattern>
        </defs>
        <rect
          width="640"
          height="620"
          fill="url(#home-cube-grid)"
          opacity={0.55}
        />
        <ellipse
          className={styles.cubeShadow}
          cx="320"
          cy="562"
          rx="174"
          ry="26"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandPv}`}
          points="92,210 320,324 320,379 92,265"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandPv}`}
          points="548,210 320,324 320,379 548,265"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandBattery}`}
          points="92,265 320,379 320,434 92,320"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandBattery}`}
          points="548,265 320,379 320,434 548,320"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandHeat}`}
          points="92,320 320,434 320,544 92,430"
        />
        <polygon
          className={`${styles.cubeBand} ${styles.cubeBandHeat}`}
          points="548,320 320,434 320,544 548,430"
        />
        <polygon
          className={styles.cubeTop}
          points="320,96 548,210 320,324 92,210"
        />
        <path
          className={styles.cubeEdge}
          d="M320 96 548 210v220L320 544 92 430V210L320 96ZM92 210l228 114 228-114M320 324v220"
        />
        <path
          className={styles.cubeGridLine}
          d="M206 153l228 114M434 153 206 267M92 265l228 114M548 265 320 379M92 320l228 114M548 320 320 434"
        />
        <g aria-hidden="true" stroke="currentColor" strokeOpacity={0.28}>
          <path d="M92 210H70M548 210h22M92 430H70M548 430h22M320 96V76" />
        </g>
      </svg>
      <figcaption className={styles.visualCaption}>
        <span>equi.cube</span>
        <span>Wärme · Speicher · PV · KI</span>
      </figcaption>
    </figure>
  );
}

function ProductDiagram() {
  return (
    <figure className={styles.productFigure} data-od-id="home-product-diagram">
      <svg
        className={`${styles.cubeGraphic} ${styles.productCube}`}
        viewBox="0 0 560 620"
        role="img"
        aria-labelledby="home-stack-title home-stack-desc"
      >
        <title id="home-stack-title">Aufbau des EquiCube</title>
        <desc id="home-stack-desc">
          Vier übereinanderliegende Module für KI, PV, Batterie und Wärmepumpe
          bilden den EquiCube.
        </desc>
        <defs>
          <pattern
            id="home-stack-grid"
            width="64"
            height="64"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M64 0H0V64"
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.09}
            />
          </pattern>
        </defs>
        <rect
          width="560"
          height="620"
          fill="url(#home-stack-grid)"
          opacity={0.75}
        />
        <ellipse
          className={styles.cubeShadow}
          cx="280"
          cy="594"
          rx="136"
          ry="18"
        />
        <g className={`${styles.plate} ${styles.plateAi}`}>
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
        <g className={`${styles.plate} ${styles.platePv}`}>
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
        <g className={`${styles.plate} ${styles.plateBattery}`}>
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
        <g className={`${styles.plate} ${styles.plateHeat}`}>
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
      <figcaption className={styles.visualCaption}>
        <span>equi.cube · Aufbau</span>
        <span>KI · PV · Batterie · Wärme</span>
      </figcaption>
    </figure>
  );
}

const SPEC_ITEMS = [
  "Luft-Wasser-Wärmepumpe",
  "Batteriespeicher",
  "Pufferspeicher",
  "KI-Recheneinheit",
];

const STATS = [
  { value: "> 2 h", label: "Schnelle Installation" },
  { value: "bis 40 kW", label: "Heizleistung" },
  { value: "1", label: "System für Wärme, Speicher & KI" },
];

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Energie · Speicher · KI"
        headline={
          <>
            <span className={styles.brandName}>equicrew</span>
            <span className={styles.claim}>
              <span className={styles.dash} aria-hidden="true">
                —
              </span>{" "}
              smarte energie,
              <br />
              fair verteilte <em>KI</em>
            </span>
          </>
        }
        text="Energie und KI denken wir zusammen – vom einzelnen Haus bis zur Frage, wie beides fair verteilt bleibt. Der equi.cube ist unser erster konkreter Schritt dorthin."
        visual={<HeroCube />}
      >
        <div className={styles.heroActionsWrap}>
          <div className={styles.heroActions}>
            <ButtonLink variant="primary" size="large" to="/equicube">
              equi.cube entdecken
              <ArrowIcon />
            </ButtonLink>
            <ButtonLink variant="secondary" size="large" to="/kontakt">
              Kontakt aufnehmen
            </ButtonLink>
          </div>
          <ul className={styles.heroFacts} aria-label="Technologien im equi.cube">
            <li>
              <span
                className={`${styles.swatch} ${styles.swatchHeat}`}
                aria-hidden="true"
              />
              Wärmepumpe
            </li>
            <li>
              <span
                className={`${styles.swatch} ${styles.swatchBattery}`}
                aria-hidden="true"
              />
              Batterie
            </li>
            <li>
              <span
                className={`${styles.swatch} ${styles.swatchPv}`}
                aria-hidden="true"
              />
              PV
            </li>
            <li>
              <span
                className={`${styles.swatch} ${styles.swatchAccent}`}
                aria-hidden="true"
              />
              KI &amp; Server
            </li>
          </ul>
        </div>
      </Hero>

      <Section id="mission">
        <div className={styles.missionGrid} data-od-id="home-mission">
          <div className={styles.missionAside}>
            <p className="eyebrow">Unsere Mission</p>
            <h2 id="mission-title">
              Energie und KI. Für die, die nach uns kommen.
            </h2>
            <Link className={styles.textLink} to="/ueber-uns">
              Die Crew kennenlernen
              <ArrowIcon />
            </Link>
          </div>
          <div className={styles.missionBody}>
            <p className={styles.missionQuote}>
              EquiCrew hat sich zum Ziel gesetzt, Energie und Künstliche
              Intelligenz nachhaltig bereitzustellen und zu nutzen, um so den
              nachfolgenden Generationen bestmögliche Chancen zu liefern, um
              sicher und erfolgreich die Herausforderungen der Zukunft zu
              meistern.“
            </p>
            <div className={styles.missionTags} aria-label="Themen der Mission">
              <span className={styles.tag}>Smarte Energie</span>
              <span className={styles.tag}>Fair verteilte KI</span>
              <span className={styles.tag}>Verantwortung</span>
            </div>
          </div>
        </div>
      </Section>

      <div className={styles.productBand}>
        <Section id="product">
          <div className={styles.productGrid} data-od-id="home-product">
            <div className={styles.productCopy}>
              <p className="eyebrow">Das Kernprodukt</p>
              <h2 id="product-title">Der EquiCube</h2>
              <p className={styles.productKicker}>Alles unter einem Dach.</p>
              <p>
                Der equi.cube stellt eine innovative Komplettlösung im Bereich
                der Heizungstechnik dar. Anstatt einzelner Insellösungen vereint
                der equi.cube Wärmepumpe, Batterie, Pufferspeicher und
                KI-Recheneinheit zu einer einzigartigen Kombination.
              </p>
              <ul
                className={styles.specList}
                aria-label="Komponenten im EquiCube"
              >
                {SPEC_ITEMS.map((item, index) => (
                  <li key={item}>
                    <span className={styles.index}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <ButtonLink variant="primary" to="/equicube">
                über den EquiCube
                <ArrowIcon />
              </ButtonLink>
            </div>
            <Card>
              <ProductDiagram />
            </Card>
          </div>
          <div
            className={styles.statStrip}
            aria-label="EquiCube auf einen Blick"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className={`surface-deep ${styles.ctaBand}`}>
        <Section id="cta">
          <div className={styles.ctaInner} data-od-id="home-cta">
            <div>
              <p className="eyebrow">Neugierig geworden?</p>
              <h2>Schreib uns – wir erzählen dir gerne mehr!</h2>
              <p>
                Ob Frage zum EquiCube oder zu unserem Weg: Wir freuen uns auf
                deine Nachricht.
              </p>
            </div>
            <div className={styles.ctaActions} data-od-id="home-final-cta">
              <ButtonLink variant="primary" size="large" to="/kontakt">
                Kontakt
              </ButtonLink>
              <ButtonLink variant="secondary" size="large" to="/equicube">
                Zum EquiCube
              </ButtonLink>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}
