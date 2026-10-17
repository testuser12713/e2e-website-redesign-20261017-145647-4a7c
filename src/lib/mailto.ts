export const CONTACT_RECIPIENT = "office@equicrew.com";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function buildMailto(values: ContactFormValues): string {
  const firstName = values.firstName.trim();
  const lastName = values.lastName.trim();
  const email = values.email.trim();
  const message = values.message.trim();

  const subject = `Kontaktanfrage von ${firstName} ${lastName}`;
  const body = [
    `Name: ${firstName} ${lastName}`,
    `E-Mail: ${email}`,
    "",
    message,
  ].join("\n");

  return `mailto:${CONTACT_RECIPIENT}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}
