import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

type ButtonLinkProps = {
  variant: "primary" | "secondary";
  to?: string;
  href?: string;
  children: ReactNode;
  size?: "small" | "large";
  state?: "hover" | "focus" | "active";
};

export function ButtonLink({
  variant,
  to,
  href,
  children,
  size,
  state,
}: ButtonLinkProps) {
  const sharedProps = {
    className: styles.button,
    "data-variant": variant,
    "data-size": size,
    "data-state": state,
  } as const;

  if (to) {
    return (
      <Link to={to} {...sharedProps}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} {...sharedProps}>
      {children}
    </a>
  );
}
