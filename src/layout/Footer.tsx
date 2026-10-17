import { Link, NavLink } from "react-router-dom";
import { Container } from "../components/Container";
import styles from "./Footer.module.css";

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

function ProductMark() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" focusable="false">
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
    </svg>
  );
}

export function Footer() {
  return (
    <footer className={styles.footer} data-od-id="site-footer">
      <Container>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link
              className={styles.brand}
              to="/"
              aria-label="equicrew – zur Startseite"
            >
              <BrandMark />
              <span>equicrew</span>
            </Link>
            <p className={styles.tagline}>smarte energie, fair verteilte KI.</p>
            <Link
              className={styles.product}
              to="/equicube"
              data-od-id="footer-product-link"
            >
              <ProductMark />
              <span>
                <span className={styles.productLabel}>Das Kernprodukt</span>
                equi.cube
              </span>
              <svg
                className={styles.productArrow}
                viewBox="0 0 20 20"
                aria-hidden="true"
                fill="none"
              >
                <path
                  d="M4 10h11M11 5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth={1.7}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          <div className={styles.col}>
            <h2>Anschrift</h2>
            <address>
              EquiCrew FlexCo
              <br />
              Marktplatz 14
              <br />
              4310 Mauthausen
              <br />
              Österreich
            </address>
          </div>

          <div className={styles.col}>
            <h2>Kontakt</h2>
            <a href="mailto:office@equicrew.com">office@equicrew.com</a>
            <a href="tel:+436504593129">+43 650 4593 129</a>
            <div className={styles.links}>
              <NavLink to="/kontakt">Kontakt</NavLink>
              <NavLink to="/impressum">Impressum</NavLink>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 EquiCrew FlexCo</p>
          <p>Kein Tracking. Keine Cookies.</p>
        </div>
      </Container>
    </footer>
  );
}
