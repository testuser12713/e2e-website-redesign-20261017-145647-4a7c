# equicrew – smarte energie, fair verteilte KI

equicrew ist der Webauftritt von EquiCrew: eine rein statische Marketing-Website, die smarte Energie und fair verteilte KI zusammenbringt. Im Mittelpunkt steht der equi.cube, ein kompaktes System aus Wärmepumpe, Batterie, PV sowie KI- und Server-Technik für Einfamilienhäuser. Die Website erklärt das Produkt, stellt die Crew hinter dem Unternehmen vor, nennt die Kontaktdaten und bietet ein Kontaktformular, das die Nachricht direkt im Mailprogramm des Besuchers öffnet. Es gibt kein Backend, keine Datenbank und keine Persistenz; alle Inhalte werden als statischer Build ausgeliefert.

## Tech-Stack

- **Vite 8** als Build-Tool und Dev-Server
- **React 19** mit **TypeScript**
- **React Router** für die clientseitigen Routen der fünf Seiten
- **CSS mit Design-Tokens** (Farben, Typografie, Abstände, Radien) ohne UI-Framework
- **Vitest** mit **Testing Library** und **jsdom** für die automatisierten Tests

## Installation

Voraussetzungen: Node.js 20.19+ oder 22.12+ und npm.

```bash
npm ci
```

Ohne vorhandene `package-lock.json` installiert `npm install` dieselben Abhängigkeiten.

## Entwicklung

```bash
npm run dev
```

Der Dev-Server läuft anschließend unter `http://localhost:5173`. Die Route `/gallery` ist nur im Entwicklungsmodus verfügbar und zeigt die Komponentengalerie.

## Produktions-Build

```bash
npm run build
```

Der Build führt zuerst den TypeScript-Check aus, erzeugt anschließend den statischen Build in `dist/` und kopiert die Startseite zusätzlich nach `dist/equicube/`, `dist/ueber-uns/`, `dist/kontakt/` und `dist/impressum/`. Dadurch sind alle fünf Adressen auch nach einem direkten Aufruf oder einem Neuladen erreichbar.

Den gebauten Stand lokal prüfen:

```bash
npm run preview
```

Die Vorschau läuft unter `http://localhost:4173`. Für den Betrieb genügt es, den Inhalt von `dist/` mit einem beliebigen statischen Webserver auszuliefern.

## Tests

```bash
npm test
```

Die Tests prüfen unter anderem die Registrierung der fünf Routen, die Seitentitel und Meta-Beschreibungen, die Open-Graph-Angaben, den Aufbau des mailto-Links inklusive Kodierung sowie die Formularvalidierung mit ihrem neutralen Startzustand.

## Bedienung

Die Website besteht aus fünf Seiten, die über die Hauptnavigation erreichbar sind:

- **Start** (`/`) – Markenbotschaft, Mission und Einstieg zum equi.cube
- **EquiCube** (`/equicube`) – Einordnung des Systems, Produktmerkmale und Vorteile
- **Über uns** (`/ueber-uns`) – die Geschichte der Crew und die drei Gründer mit ihren E-Mail-Adressen
- **Kontakt** (`/kontakt`) – Kontaktformular, Anschrift, E-Mail, Telefon und Verweise auf LinkedIn und Instagram
- **Impressum** (`/impressum`) – Firmenangaben, Anschrift, Firmenbuch, UID und Geschäftsführung

Jede Seite hat einen eigenen Seitentitel und eine eigene Meta-Beschreibung. Die Navigation markiert die aktuell geöffnete Seite, und jeder Navigationslink führt direkt zur passenden Seite.

### Kontaktformular

Das Formular fragt Vorname, Nachname, E-Mail-Adresse und Nachricht ab. Vor dem Absenden erklärt die Seite, dass die Nachricht im Mailprogramm des Besuchers geöffnet wird. Pflichtfelder und die E-Mail-Adresse werden erst geprüft, nachdem ein Feld berührt oder das Formular abgesendet wurde; ein unberührtes Formular zeigt keinen Fehlerzustand. Bei gültigen Angaben öffnet der Absende-Knopf einen `mailto:`-Link an `office@equicrew.com` mit einem Betreff aus Vor- und Nachname und einem Rumpf aus Name, E-Mail und Nachricht. Anschließend erscheint die Bestätigung „Danke für deine Nachricht!“ mit dem Hinweis, dass die Nachricht noch im Mailprogramm abgeschickt werden muss. Es wird keine Anfrage an einen Server gesendet und nichts gespeichert.

## Funktionen

- Fünf eigenständige Seiten mit clientseitigem Routing und direkten URLs
- Eigene Seitentitel, Meta-Beschreibungen und Open-Graph-Angaben pro Seite
- Deutschsprachiges Dokument (`lang="de"`)
- Responsives Layout ohne horizontales Scrollen auf allen Bildschirmgrößen
- Tastaturbedienbare Navigation, Links und Formularfelder mit sichtbarem Fokus
- Kontaktformular mit verständlicher Validierung und mailto-Übergabe
- Seitenweite Kopf- und Fußzeile mit Navigation und Kontaktdaten
- Keine Tracker, Analyse-Skripte, Marketing-Cookies oder Schriften und Skripte von Drittanbietern
