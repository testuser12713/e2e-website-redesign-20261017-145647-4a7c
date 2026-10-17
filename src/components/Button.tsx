import type { MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonProps = {
  variant: "primary" | "secondary";
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  size?: "small" | "large";
  state?: "hover" | "focus" | "active";
};

export function Button({
  variant,
  children,
  type = "button",
  onClick,
  disabled,
  size,
  state,
}: ButtonProps) {
  return (
    <button
      className={styles.button}
      data-variant={variant}
      data-size={size}
      data-state={state}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
