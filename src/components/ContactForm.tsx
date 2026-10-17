import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Button } from "./Button";
import { buildMailto } from "../lib/mailto";
import type { ContactFormValues } from "../lib/mailto";
import { validateContactForm } from "../lib/validation";
import type { ContactFormErrors } from "../lib/validation";
import styles from "./ContactForm.module.css";

type FieldName = keyof ContactFormValues;

const emptyValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  message: "",
};

const errorIds: Record<FieldName, string> = {
  firstName: "error-first_name",
  lastName: "error-last_name",
  email: "error-email",
  message: "error-message",
};

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(emptyValues);
  const [dirty, setDirty] = useState<Partial<Record<FieldName, boolean>>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const errors = validateContactForm(values);

  const visibleErrors: ContactFormErrors = {};
  for (const field of Object.keys(errors) as FieldName[]) {
    if (submitAttempted || dirty[field]) {
      visibleErrors[field] = errors[field];
    }
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const field = event.target.name as FieldName;
    const value = event.target.value;

    setValues((current) => ({ ...current, [field]: value }));

    if (value.trim() !== "") {
      setDirty((current) => (current[field] ? current : { ...current, [field]: true }));
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitAttempted(true);

    if (Object.keys(errors).length > 0) {
      return;
    }

    window.location.href = buildMailto(values);
    setSubmitted(true);
  }

  function fieldProps(field: FieldName) {
    return {
      name: field,
      value: values[field],
      onChange: handleChange,
      "aria-describedby": errorIds[field],
      "aria-invalid": visibleErrors[field] ? true : undefined,
    } as const;
  }

  return (
    <div className={styles.formCard}>
      <div className={styles.formIntro}>
        <p className={styles.eyebrow}>Deine Nachricht</p>
        <h2 id="contact-form-title">Schreib uns</h2>
        <p className={styles.lead}>
          Alle Felder sind erforderlich. Wir verwenden deine Angaben
          ausschließlich zur Beantwortung deiner Anfrage.
        </p>
      </div>

      {submitted ? (
        <div className={styles.formSuccess} role="status" aria-live="polite">
          <span className={styles.successIcon} aria-hidden="true">
            <svg viewBox="0 0 20 20" fill="none">
              <path
                d="M4 10.5l3.6 3.5L16 5.8"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            <p className={styles.successTitle}>Danke für deine Nachricht!</p>
            <p>
              Dein E-Mail-Programm wurde mit der vorbereiteten Nachricht an
              office@equicrew.com geöffnet. Bitte sende sie dort ab, damit sie
              bei uns ankommt.
            </p>
          </div>
        </div>
      ) : null}

      <div className={styles.notice}>
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
          <path
            d="M12 8v5M12 16.5v.2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
          />
        </svg>
        <p>
          <strong>Kein Server, kein Tracking:</strong> Beim Absenden öffnet
          sich dein E-Mail-Programm mit einer vorbereiteten Nachricht an
          office@equicrew.com. Die Angaben werden erst mit dem Senden in deinem
          E-Mail-Programm übermittelt.
        </p>
      </div>

      <p className={styles.mailFlow} aria-label="Ablauf beim Absenden">
        <span>Formular</span>
        <span className={styles.mailFlowArrow} aria-hidden="true">
          →
        </span>
        <span>E-Mail-Programm</span>
        <span className={styles.mailFlowArrow} aria-hidden="true">
          →
        </span>
        <span>office@equicrew.com</span>
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <div className={styles.formGrid}>
          <div
            className={styles.field}
            data-error={visibleErrors.firstName ? "true" : undefined}
          >
            <label htmlFor="first_name">
              Vorname <span className={styles.required}>(erforderlich)</span>
            </label>
            <input
              className={styles.input}
              type="text"
              id="first_name"
              autoComplete="given-name"
              placeholder="z. B. Anna"
              {...fieldProps("firstName")}
            />
            <span
              className={styles.error}
              id={errorIds.firstName}
              aria-live="polite"
            >
              {visibleErrors.firstName ?? ""}
            </span>
          </div>

          <div
            className={styles.field}
            data-error={visibleErrors.lastName ? "true" : undefined}
          >
            <label htmlFor="last_name">
              Nachname <span className={styles.required}>(erforderlich)</span>
            </label>
            <input
              className={styles.input}
              type="text"
              id="last_name"
              autoComplete="family-name"
              placeholder="z. B. Gruber"
              {...fieldProps("lastName")}
            />
            <span
              className={styles.error}
              id={errorIds.lastName}
              aria-live="polite"
            >
              {visibleErrors.lastName ?? ""}
            </span>
          </div>

          <div
            className={styles.field}
            data-full="true"
            data-error={visibleErrors.email ? "true" : undefined}
          >
            <label htmlFor="email">
              E-Mail-Adresse <span className={styles.required}>(erforderlich)</span>
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              autoComplete="email"
              inputMode="email"
              placeholder="anna.gruber@beispiel.at"
              {...fieldProps("email")}
            />
            <span
              className={styles.error}
              id={errorIds.email}
              aria-live="polite"
            >
              {visibleErrors.email ?? ""}
            </span>
          </div>

          <div
            className={styles.field}
            data-full="true"
            data-error={visibleErrors.message ? "true" : undefined}
          >
            <label htmlFor="message">
              Nachricht <span className={styles.required}>(erforderlich)</span>
            </label>
            <textarea
              className={styles.textarea}
              id="message"
              placeholder="Erzähl uns kurz von deinem Haus, deiner bestehenden Heizung oder deinem geplanten Projekt …"
              {...fieldProps("message")}
            />
            <span
              className={styles.error}
              id={errorIds.message}
              aria-live="polite"
            >
              {visibleErrors.message ?? ""}
            </span>
          </div>
        </div>

        <div className={styles.formActions}>
          <Button variant="primary" type="submit">
            Nachricht senden
            <svg viewBox="0 0 20 20" aria-hidden="true" fill="none">
              <path
                d="M4 10h11M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth={1.7}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <p className={styles.formPrivacy}>
            Kein Tracking, keine Speicherung auf dieser Website. Deine Angaben
            gehen direkt per E-Mail an unser Team.
          </p>
        </div>
      </form>
    </div>
  );
}
