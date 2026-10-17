import type { CSSProperties } from "react";
import { AdvantageCard } from "../components/AdvantageCard";
import { Button } from "../components/Button";
import { ButtonLink } from "../components/ButtonLink";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { FeatureCard } from "../components/FeatureCard";
import { Hero } from "../components/Hero";
import { Prose } from "../components/Prose";
import { Section } from "../components/Section";
import { TeamCard } from "../components/TeamCard";

const stack: CSSProperties = {
  display: "grid",
  gap: "var(--space-5)",
};

const row: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-4)",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "var(--space-4)",
};

const caption: CSSProperties = {
  color: "var(--muted)",
  fontFamily: "var(--font-mono)",
  fontSize: "var(--step--1)",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
};

const visualPlaceholder: CSSProperties = {
  display: "grid",
  minHeight: "260px",
  placeItems: "center",
  border: "1px solid oklch(100% 0 0 / 0.18)",
  borderRadius: "var(--radius-lg)",
  background: "oklch(100% 0 0 / 0.05)",
  color: "var(--on-deep-muted)",
  fontFamily: "var(--font-mono)",
  fontSize: "var(--step--1)",
  letterSpacing: "0.12em",
  textTransform: "uppercase",
};

export default function ComponentGallery() {
  return (
    <div>
      <section className="section">
        <Container>
          <p className="eyebrow">Entwicklung</p>
          <h1>Komponentengalerie</h1>
          <p className="lead">
            Diese Galerie ist nur im Entwicklungsmodus erreichbar. Sie zeigt
            jeden Baustein der Website in allen Zuständen, die das Design
            vorgibt.
          </p>
        </Container>
      </section>

      <Section
        id="container"
        heading="Container"
        intro="Begrenzt die Inhaltsbreite und zentriert den Inhalt auf jeder Bildschirmgröße."
      >
        <Container>
          <Card>
            <p>
              Dieser Inhalt liegt in einem <span className="mono">Container</span>{" "}
              und endet bei 1240 px Breite.
            </p>
          </Card>
        </Container>
      </Section>

      <Section
        id="section"
        heading="Section"
        intro="Setzt einen vertikalen Rhythmus und kann eine Überschrift mit Einleitung aufnehmen."
      >
        <Section
          id="section-example"
          heading="Verschachtelter Beispielabschnitt"
          intro="So sieht eine Section mit eigener Überschrift und Einleitung aus."
        >
          <Card>
            <p>Der Inhalt folgt direkt unter der Einleitung.</p>
          </Card>
        </Section>
      </Section>

      <Section
        id="button"
        heading="Button"
        intro="Primär und sekundär, in klein und groß, mit Hover-, Fokus-, Aktiv- und Deaktiviert-Zustand."
      >
        <div style={stack}>
          <div style={row}>
            <Button variant="primary">Primär</Button>
            <Button variant="secondary">Sekundär</Button>
            <Button variant="primary" size="small">
              Primär klein
            </Button>
            <Button variant="primary" size="large">
              Primär groß
            </Button>
          </div>
          <div style={row}>
            <p style={caption}>Hover</p>
            <Button variant="primary" state="hover">
              Primär (Hover)
            </Button>
            <Button variant="secondary" state="hover">
              Sekundär (Hover)
            </Button>
          </div>
          <div style={row}>
            <p style={caption}>Fokus</p>
            <Button variant="primary" state="focus">
              Primär (Fokus)
            </Button>
            <Button variant="secondary" state="focus">
              Sekundär (Fokus)
            </Button>
          </div>
          <div style={row}>
            <p style={caption}>Aktiv</p>
            <Button variant="primary" state="active">
              Primär (Aktiv)
            </Button>
            <Button variant="secondary" state="active">
              Sekundär (Aktiv)
            </Button>
          </div>
          <div style={row}>
            <p style={caption}>Deaktiviert</p>
            <Button variant="primary" disabled>
              Primär (deaktiviert)
            </Button>
            <Button variant="secondary" disabled>
              Sekundär (deaktiviert)
            </Button>
          </div>
        </div>
      </Section>

      <Section
        id="button-link"
        heading="ButtonLink"
        intro="Derselbe Button als interner Router-Link oder als externer beziehungsweise mailto-Link."
      >
        <div style={stack}>
          <div style={row}>
            <ButtonLink variant="primary" to="/equicube">
              Interner Link
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="mailto:office@equicrew.com"
            >
              E-Mail schreiben
            </ButtonLink>
            <ButtonLink variant="primary" size="small" to="/kontakt">
              Klein
            </ButtonLink>
            <ButtonLink variant="secondary" size="large" to="/">
              Groß
            </ButtonLink>
          </div>
          <div style={row}>
            <p style={caption}>Hover</p>
            <ButtonLink variant="primary" to="/equicube" state="hover">
              Interner Link (Hover)
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="mailto:office@equicrew.com"
              state="hover"
            >
              E-Mail (Hover)
            </ButtonLink>
          </div>
          <div style={row}>
            <p style={caption}>Fokus</p>
            <ButtonLink variant="primary" to="/equicube" state="focus">
              Interner Link (Fokus)
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="mailto:office@equicrew.com"
              state="focus"
            >
              E-Mail (Fokus)
            </ButtonLink>
          </div>
          <div style={row}>
            <p style={caption}>Aktiv</p>
            <ButtonLink variant="primary" to="/equicube" state="active">
              Interner Link (Aktiv)
            </ButtonLink>
            <ButtonLink
              variant="secondary"
              href="mailto:office@equicrew.com"
              state="active"
            >
              E-Mail (Aktiv)
            </ButtonLink>
          </div>
        </div>
      </Section>

      <Section
        id="card"
        heading="Card"
        intro="Eine ruhige Fläche für einzelne Inhalte auf jedem Untergrund."
      >
        <Card>
          <h3>Karte</h3>
          <p>
            Die Card trägt Inhalt auf einer eigenen Fläche und setzt ihn mit
            Rand, Rundung und Abstand vom Hintergrund ab.
          </p>
        </Card>
      </Section>

      <Section
        id="feature-card"
        heading="FeatureCard"
        intro="Merkmal-Karten mit laufender Nummer, Titel und Text."
      >
        <div style={grid}>
          <FeatureCard
            title="Standardisierter Basis-Cube"
            text="Eine gemeinsame, durchdachte Grundlage für jedes System."
          />
          <FeatureCard
            title="Modular anpassbar"
            text="Die Module werden an Haus und tatsächlichen Bedarf angepasst."
          />
          <FeatureCard
            title="Heizleistung bis 40 kW"
            text="Leistungsfähige Wärmeversorgung in einem kompakten Gesamtsystem."
          />
        </div>
      </Section>

      <Section
        id="advantage-card"
        heading="AdvantageCard"
        intro="Vorteil-Karten mit laufender Nummer; die hervorgehobene Karte trägt zusätzlich eine Kennzahl."
      >
        <div style={grid}>
          <AdvantageCard
            title="Schnelle Installation"
            text="Der kompakte Aufbau verkürzt die Montage vor Ort deutlich."
            stat="> 2 h"
          />
          <AdvantageCard
            title="Einfache Wartbarkeit"
            text="Aufbau und Komponenten sind auf einen unkomplizierten Service ausgelegt."
          />
          <AdvantageCard
            title="Minimierter Platzbedarf"
            text="Mehrere Funktionen in einem System schaffen Raum im Technikraum."
          />
        </div>
      </Section>

      <Section
        id="hero"
        heading="Hero"
        intro="Der Hero in Seitenbreite und in der geteilten Variante mit eigener Visual-Fläche."
      >
        <div style={stack}>
          <Hero
            eyebrow="Beispiel"
            headline="Hero in Seitenbreite"
            text="Der kompakte Hero eröffnet eine Seite mit Einordnung, Überschrift, Einleitung und Aktionen."
          >
            <ButtonLink variant="primary" to="/equicube">
              Primäre Aktion
            </ButtonLink>
            <ButtonLink variant="secondary" to="/kontakt">
              Sekundäre Aktion
            </ButtonLink>
          </Hero>
          <Hero
            eyebrow="Beispiel"
            headline="Hero mit Visual"
            text="Die geteilte Variante stellt dem Text eine Visual-Fläche zur Seite und nutzt die volle Höhe des Designs."
            visual={<div style={visualPlaceholder}>Visual</div>}
          >
            <ButtonLink variant="primary" to="/kontakt">
              Kontakt aufnehmen
            </ButtonLink>
          </Hero>
        </div>
      </Section>

      <Section
        id="prose"
        heading="Prose"
        intro="Längere Textblöcke in der Typografie des Designs, inklusive Listen, Adressen und Tabellen."
      >
        <Prose>
          <h2>Abschnittstitel</h2>
          <p>
            Prose formatiert Fließtext, Überschriften, Listen und Tabellen mit
            denselben Abständen und derselben Typografie wie die übrigen
            Inhaltsflächen der Website.
          </p>
          <h3>Unterabschnitt</h3>
          <ul>
            <li>Erster Punkt in einer Liste</li>
            <li>Zweiter Punkt in einer Liste</li>
          </ul>
          <address>
            EquiCrew FlexCo
            <br />
            Marktplatz 14
            <br />
            4310 Mauthausen
            <br />
            Österreich
          </address>
          <table>
            <tbody>
              <tr>
                <th scope="row">Firmenbuchnummer</th>
                <td>FN 648043 f</td>
              </tr>
              <tr>
                <th scope="row">UID-Nummer</th>
                <td>ATU82132979</td>
              </tr>
            </tbody>
          </table>
        </Prose>
      </Section>

      <Section
        id="team-card"
        heading="TeamCard"
        intro="Team-Karten mit Initialen-Avatar, Rolle, Name und klickbarer E-Mail-Adresse."
      >
        <div style={grid}>
          <TeamCard
            name="Anna Berger"
            role="Founder"
            email="anna.berger@example.com"
            tone="heat"
          />
          <TeamCard
            name="Bilal Yılmaz"
            role="Founder"
            email="bilal.yilmaz@example.com"
            tone="pv"
          />
          <TeamCard
            name="Clara Neumann"
            role="Founder"
            email="clara.neumann@example.com"
            tone="battery"
          />
        </div>
      </Section>
    </div>
  );
}
