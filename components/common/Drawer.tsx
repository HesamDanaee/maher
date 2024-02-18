"use client";
import { ReactNode } from "react";
import Button from "./Button";
import { CloseButton2 } from "@/assets/icons/Icons";

interface Props {
  label: ReactNode | string;
  children?: ReactNode;
}

const Drawer = ({ children, label }: Props) => {
  return (
    <div className="drawer drawer-end z-[100]">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer-4" className="drawer-button">
          {label}
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full bg-primary text-base-content">
          <div className="w-full flex justify-end mb-6 px-4">
            <Button
              type="button"
              size="sm"
              style="text-secondary bg-primary border-accent"
              variant="circle"
              onClick={() => {
                const el =
                  document &&
                  (document.querySelector("#my-drawer-4") as HTMLInputElement);
                el.checked = !el.checked;
              }}
            >
              <CloseButton2 style="w-[20px] h-[20px] fill-secondary" />
            </Button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
