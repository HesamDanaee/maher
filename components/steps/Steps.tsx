"use client";

import Line from "../steps/Line";
import { usePathname } from "next/navigation";
import Circle from "../steps/Circle";
import { v4 as uuid } from "uuid";
import Link from "next/link";

interface Props {
  links: string[];
  steps: string[];
  direction: "horizontal" | "vertical";
  bg: "primary" | "secondary";
  size: "small" | "medium" | "large";
}

const Steps = ({ links, steps, direction, bg, size }: Props) => {
  const ps = usePathname();
  const activeCircleIndex = links.findIndex((item) => item === ps);

  return (
    <div
      className={`flex ${direction === "horizontal" ? "flex-row" : "flex-col"}`}
    >
      {steps.map((step, index) => (
        <div key={uuid()}>
          <div
            className={`flex ${
              direction === "horizontal" ? "flex-row" : "flex-col"
            }`}
          >
            <div
              className={`grid ${
                direction === "vertical"
                  ? "grid-cols-2 grid-rows-2"
                  : "grid-cols-3 grid-rows-2"
              } ${
                direction === "horizontal" ? "flex-row" : "flex-col"
              } justify-center items-center`}
            >
              <div
                className={`${
                  direction === "vertical"
                    ? "col-start-2 col-end-3"
                    : "col-start-1 col-end-4 row-start-2 row-end-3"
                } justify-self-center self-center`}
              >
                <Link href={links[index]}>
                  <h5 className="text-primary text-lg font-bold hover:text-accent transition duration-200 ease-out">
                    {step}
                  </h5>
                </Link>
              </div>
              <div
                className={`${
                  direction === "vertical"
                    ? "col-start-1 col-end-2"
                    : "col-start-1 col-end-4 row-start-1 row-end-2"
                } row-start-1 row-end-3 justify-self-center self-start`}
              >
                <div className="flex flex-col items-center">
                  <Link href={links[index]}>
                    <Circle
                      bg={activeCircleIndex >= index ? "accent" : "primary"}
                      size={size}
                      stepCount={index + 1}
                    />
                  </Link>
                  {index !== steps.length - 1 && (
                    <Line bg={bg} size={size} direction={direction} />
                  )}
                </div>
              </div>
              <div className="col-start-2 col-end-3 justify-self-center self-start"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Steps;
