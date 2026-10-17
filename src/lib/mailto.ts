export const CONTACT_RECIPIENT = "office@equicrew.com";

export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export function buildMailto(values: ContactFormValues): string {
  void values;
  return "";
}
