import styles from "./TeamCard.module.css";

type TeamCardProps = {
  name: string;
  role: string;
  email: string;
  tone?: "heat" | "pv" | "battery";
};

const TONES = ["heat", "pv", "battery"] as const;

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  const first = parts[0]?.charAt(0) ?? "";
  const last = parts.length > 1 ? parts[parts.length - 1].charAt(0) : "";
  return `${first}${last}`.toUpperCase();
}

function toneForName(name: string): (typeof TONES)[number] {
  let hash = 2166136261;
  for (const character of name) {
    hash ^= character.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 16777619) >>> 0;
  }
  return TONES[hash % TONES.length];
}

export function TeamCard({ name, role, email, tone }: TeamCardProps) {
  return (
    <article className={styles.card}>
      <div
        className={styles.avatar}
        data-tone={tone ?? toneForName(name)}
        aria-hidden="true"
      >
        <span>{initials(name)}</span>
      </div>
      <div className={styles.meta}>
        <p className={styles.role}>{role}</p>
        <h3 className={styles.name}>{name}</h3>
        <a className={styles.email} href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </article>
  );
}
