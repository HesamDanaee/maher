"use client";

import { v4 as uuid } from "uuid";
import content from "@/constants/content.json";
import Link from "next/link";
import {
  HistoryIcon,
  ThemeIcon,
  InfoIcon,
  LanguageIcon,
  NotificationIcon,
} from "@/assets/icons/Icons";

interface Props {
  selectedTab: string;
}

const SettingTab = ({ selectedTab }: Props) => {
  const {
    panel: {
      setting: { tabs },
    },
  } = content;

  const icons = [
    <ThemeIcon key={"Theme"} style="w-5 h-5 fill-secondary" />,
    <NotificationIcon
      key={"NotificationIcon"}
      style="w-5 h-5 fill-secondary"
    />,
    <LanguageIcon key={"LanguageIcon"} style="w-5 h-5 fill-secondary" />,
    <HistoryIcon key={"HistoryIcon"} style="w-5 h-5 fill-secondary" />,
    <InfoIcon key={"InfoIcon"} style="w-5 h-5 fill-secondary" />,
  ];

  return (
    <div className="max-sm:hidden flex justify-end col-start-1 col-end-4 row-start-2 row-end-13 border-r-[2px] border-t-[2px] border-base-100">
      <ul className="w-2/3 h-1/2 flex flex-col gap-y-6 items-center py-10">
        {tabs.map(({ name, href }, i) => (
          <Link
            href={href}
            key={uuid()}
            className={`
          w-2/3 text-center p-3 hover:cursor-pointer hover:bg-base-100 hover:text-secondary text-sm text-secondary font-normal rounded-md
         transition duration-75 ease-linear border-[1px] border-secondary ${
           selectedTab[0] !== href && "border-transparent"
         }`}
          >
            <li className="flex flex-row items-center justify-between">
              {icons[i]}
              {name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default SettingTab;
