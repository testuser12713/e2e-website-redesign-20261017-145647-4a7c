import { createElement } from "react";
import type * as React from "react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import EquiCubePage from "./pages/EquiCubePage";
import HomePage from "./pages/HomePage";
import ImprintPage from "./pages/ImprintPage";

export type RouteMeta = {
  path: string;
  title: string;
  description: string;
  element: React.ReactElement;
};

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    title: "equicrew | smarte energie, fair verteilte KI",
    description:
      "equicrew verbindet smarte Energie mit fair verteilter KI. Der EquiCube kombiniert Wärmepumpe, Batterie, PV und KI-Technik in einem System für Einfamilienhäuser.",
    element: createElement(HomePage),
  },
  {
    path: "/equicube",
    title: "EquiCube | Wärmepumpe, Batterie, PV und KI in einem System",
    description:
      "Der EquiCube vereint Wärmepumpe, Batterie, PV und KI-Technik in einem kompakten System. Modular anpassbar, für Fußboden- und Radiatorenheizung, mit Heizleistung bis 40 kW.",
    element: createElement(EquiCubePage),
  },
  {
    path: "/ueber-uns",
    title: "Über uns | Die Crew hinter equicrew",
    description:
      "Jedes Schiff braucht eine Crew: Michael Hochstöger, Christian Hinterdorfer und Christian Hinterreiter gehen gemeinsam den Weg zu smarten Heizsystemen und fair verteilter KI.",
    element: createElement(AboutPage),
  },
  {
    path: "/kontakt",
    title: "Kontakt | Schreib uns – equicrew",
    description:
      "Schreib EquiCrew: Vorname, Nachname, E-Mail und Nachricht genügen. Du findest uns am Marktplatz 14 in Mauthausen, per Telefon und E-Mail.",
    element: createElement(ContactPage),
  },
  {
    path: "/impressum",
    title: "Impressum | EquiCrew FlexCo",
    description:
      "Impressum der EquiCrew FlexCo: Anschrift, Firmenbuch, UID, Unternehmensgegenstand und vertretungsbefugte Geschäftsführung.",
    element: createElement(ImprintPage),
  },
];
