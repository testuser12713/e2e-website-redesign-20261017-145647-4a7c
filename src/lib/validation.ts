import type { ContactFormValues } from "./mailto";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.firstName.trim()) {
    errors.firstName = "Bitte gib deinen Vornamen ein.";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Bitte gib deinen Nachnamen ein.";
  }

  const email = values.email.trim();

  if (!email) {
    errors.email = "Bitte gib deine E-Mail-Adresse ein.";
  } else if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
  }

  if (!values.message.trim()) {
    errors.message = "Bitte gib eine Nachricht ein.";
  }

  return errors;
}
