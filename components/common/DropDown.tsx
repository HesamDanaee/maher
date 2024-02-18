"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface Props {
  children: ReactNode;
  data: ReactNode;
  forceOpen?: boolean;
  position?: Position;
  end?: boolean;
  onHover?: boolean;
  style?: string;
}

const DropDown = ({
  children,
  data,
  forceOpen,
  position,
  end,
  onHover,
  style,
}: Props) => {
  return (
    <div
      className={`dropdown flex justify-center items-center ${style} ${
        onHover && "dropdown-hover"
      } ${forceOpen && "dropdown-open"} ${end && "dropdown-end"}  ${
        position === "top"
          ? "dropdown-top"
          : position === "right"
          ? "dropdown-right"
          : position === "bottom"
          ? "dropdown-bottom"
          : "dropdown-left"
      }`}
    >
      <Button
        size="sm"
        type="button"
        variant="wide"
        style="w-full h-full m-1 btn bg-transparent border-none hover:bg-transparent"
      >
        {children}
      </Button>

      <div className="w-auto h-auto p-2 dropdown-content z-[1]">{data}</div>
    </div>
  );
};

export default DropDown;
