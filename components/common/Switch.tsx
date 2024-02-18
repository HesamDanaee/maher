import { useRouter } from "next/navigation";

import { v4 as uuid } from "uuid";

interface Props {
  size: Size;
  options: string[];
  enOptions: string[];
  selected: string;
}

const Switch = ({ size, options, enOptions, selected }: Props) => {
  const router = useRouter();

  return (
    <div className="flex border-[1px] border-secondary rounded-md">
      {options.map((option, i) => (
        <div
          className={`text-md font-[600] ${
            size === "xs"
              ? "py-4"
              : size === "sm"
              ? "py-6"
              : size === "md"
              ? "py-8"
              : "py-10"
          }
          ${
            size === "xs"
              ? "px-10"
              : size === "sm"
              ? "px-12"
              : size === "md"
              ? "px-14"
              : "px-16"
          }
           hover:cursor-pointer ${
             selected === enOptions[i]
               ? "text-primary bg-secondary"
               : "text-secondary bg-primary"
           }
          ${i === 0 && "rounded-r-md"}
          ${i === options.length - 1 && "rounded-l-md"}
          ${i !== options.length - 1 && "border-l-[2px] border-l-primary"}`}
          key={uuid()}
          onClick={() => router.push(`/register/signup/${enOptions[i]}`)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default Switch;
