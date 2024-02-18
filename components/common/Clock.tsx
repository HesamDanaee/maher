"use client";

import { persianDate, time } from "@/utils/common";
import { useEffect, useState } from "react";
import Divider from "./Divider";

const Clock = () => {
  const [currTime, setCurrTime] = useState(time());

  useEffect(() => {
    setTimeout(() => {
      setCurrTime(time());
    }, 1000);
  });

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="h-full flex flex-col max-sm:flex-row items-center justify-center gap-y-1 max-sm:gap-x-2">
        <h1 className="text-secondary text-md font-[500] text-center max-sm:font-[300] max-sm:text-sm">
          {persianDate()}
        </h1>
        <Divider style="w-full h-[1px] max-sm:w-[1px] max-sm:h-1/3 max-sm bg-secondary m-0 self-center" />
        <h2 className="text-secondary text-md font-[300] text-center tracking-widest max-sm:text-xs max-sm:font-[200]">
          {currTime}
        </h2>
      </div>
    </div>
  );
};

export default Clock;
