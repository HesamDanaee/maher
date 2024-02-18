import { ReactNode } from "react";

interface Props {
  dataTip: string;
  message?: string;
  forceOpen?: boolean;
  position?: Position;
  color?: Color;
  style?: string;
  children?: ReactNode;
}

const Tooltip = ({
  children,
  dataTip,
  message,
  forceOpen,
  position,
  style,
}: Props) => {
  return (
    <div
      className={`tooltip ${forceOpen && "tooltip-open"} ${
        position === "top"
          ? "tooltip-top"
          : position === "right"
          ? "tooltip-right"
          : position === "bottom"
          ? "tooltip-bottom"
          : "tooltip-left"
      }
      ${style}`}
      data-tip={dataTip}
    >
      {message}
      {children}
    </div>
  );
};

export default Tooltip;
