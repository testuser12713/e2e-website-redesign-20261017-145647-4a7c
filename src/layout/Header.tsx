import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ButtonLink } from "../components/ButtonLink";
import { Container } from "../components/Container";
import styles from "./Header.module.css";

const NAV_ITEMS = [
  { to: "/", label: "Start" },
  { to: "/equicube", label: "EquiCube" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/kontakt", label: "Kontakt" },
];

function BrandMark() {
  return (
    <svg
      className={styles.mark}
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      focusable="false"
    >
      <path
        d="M16 3 28 9.5v13L16 29 4 22.5v-13L16 3Z"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinejoin="round"
      />
      <path
        d="m4 9.5 12 6.7 12-6.7M16 16.2V29"
        stroke="currentColor"
        strokeWidth={1.1}
        opacity={0.45}
      />
      <path
        d="m10 6.2 12 6.7v6.3"
        className={styles.markAccent}
        strokeWidth={2.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }
      setOpen(false);
      toggleRef.current?.focus();
    };

    const closeOutside = (event: PointerEvent) => {
      if (headerRef.current?.contains(event.target as Node)) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const desktop = window.matchMedia("(min-width: 860px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) {
        setOpen(false);
      }
    };

    desktop.addEventListener("change", closeOnDesktop);

    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return (
    <header className={styles.header} data-od-id="site-header" ref={headerRef}>
      <Container>
        <div className={styles.inner}>
          <Link
            className={styles.brand}
            to="/"
            aria-label="equicrew – zur Startseite"
            data-od-id="brand-link"
          >
            <BrandMark />
            <span>equicrew</span>
          </Link>

          <button
            ref={toggleRef}
            className={styles.toggle}
            type="button"
            aria-expanded={open}
            aria-controls="site-nav"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            data-od-id="menu-toggle"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={styles.toggleBox} aria-hidden="true">
              <span />
              <span />
            </span>
          </button>

          <nav
            className={styles.nav}
            id="site-nav"
            aria-label="Hauptnavigation"
            data-open={open || undefined}
            data-od-id="main-nav"
          >
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.to}
                className={styles.link}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <span className={styles.cta}>
              <ButtonLink variant="primary" size="small" to="/kontakt">
                equi.cube anfragen
                <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
                  <path
                    d="M4 10h11M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth={1.7}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </ButtonLink>
            </span>
          </nav>
        </div>
      </Container>
    </header>
  );
}
