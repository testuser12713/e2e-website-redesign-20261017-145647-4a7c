import type { ContactFormValues } from "./mailto";

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  void values;
  return {};
}
