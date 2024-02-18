import { ReactNode } from "react";

interface Props {
  size: Size;
  color?: Color;
  variant?: BVariant;
  state?: State;
  children?: ReactNode;
  text?: string;
  style?: string;
  onClick?: () => void;
  type: "submit" | "reset" | "button";
}

const Button = ({
  variant,
  state,
  size,
  color,
  children,
  text,
  style,
  type,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${
        color === "primary"
          ? "btn-primary"
          : color === "secondary"
          ? "btn-secondary"
          : color === "accent"
          ? "btn-accent"
          : color === "neutral"
          ? "btn-neutral"
          : color === "info"
          ? "btn-info"
          : color === "success"
          ? "btn-success"
          : color === "warning"
          ? "btn-warning"
          : color === "error"
          ? "btn-error"
          : ""
      }
       ${
         size === "xs"
           ? "btn-xs"
           : size === "sm"
           ? "btn-sm"
           : size === "md"
           ? "btn-md"
           : "btn-lg"
       }
       ${
         state === "link"
           ? "btn-link"
           : state === "outline"
           ? "btn-outline"
           : state === "active"
           ? "btn-active"
           : state === "disabled"
           ? "btn-disabled"
           : state === "glass"
           ? "btn-glass"
           : ""
       }
       ${
         variant === "wide"
           ? "btn-wide"
           : variant === "block"
           ? "btn-block"
           : variant === "circle"
           ? "btn-circle"
           : variant === "square"
           ? "btn-square"
           : ""
       }

        ${style}
       `}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
