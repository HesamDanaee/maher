"use client";
import { v4 as uuid } from "uuid";
import DropDown from "./DropDown";
import Button from "./Button";
import { useState } from "react";
import { ArrowDown } from "@/assets/icons/Icons";

interface Props {
  size?: "sm" | "md" | "lg" | string;
  style?: string;
  DropDownStyle?: string;
  options: string[];
}

const Select = ({ size, options, style, DropDownStyle }: Props) => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <DropDown
      position="bottom"
      style={DropDownStyle}
      data={
        <ul
          className={`w-full max-h-[250px] overflow-y-auto text-secondary flex flex-col items-center bg-primary text-end border-[1px] border-secondary rounded-md sc`}
        >
          {options.map((opt, i) => (
            <li
              key={uuid()}
              className={`w-full p-2 px-5 ${
                i !== options.length - 1 && "border-b-[1px] border-base-100"
              } hover:cursor-pointer hover:bg-base-100 hover:border-secondary ${
                i !== 0 &&
                "hover:border-t-[1px] transition duration-75 ease-out"
              }`}
              onMouseDown={() => setSelected(opt)}
            >
              {opt}
            </li>
          ))}
        </ul>
      }
    >
      <Button
        size="sm"
        type="button"
        variant="block"
        color="primary"
        style={style}
      >
        <ArrowDown style="w-[20px] h-[20px] fill-secondary" />
        <h1>{selected}</h1>
      </Button>
    </DropDown>
  );
};

export default Select;
