import { v4 as uuid } from "uuid";
import Link from "next/link";
import content from "@/constants/content.json";
import Notification from "./notifications/Notification";
import SettingNav from "./settings/components/SettingNav";
import Profile from "./profile/Profile";
import Divider from "@/components/common/Divider";

const SideBar = () => {
  const {
    panel: {
      slider: {
        tab: { title: tabTitle, tabs },
        nav: { title: navTitle, navs },
      },
    },
  } = content;

  const navComponents = [<Notification />, <SettingNav />, <Profile />];

  return (
    <div className="w-full h-full flex flex-col gap-y-10">
      <div className="w-full flex flex-col gap-y-3 mt-1">
        <h2 className="text-lg text-secondary font-bold text-end px-4 leading-10">
          {navTitle}
        </h2>
        <div className="w-full flex flex-row items-center justify-between ">
          {navs.map((nav, i) => (
            <div className="text-center">
              {navComponents[i]}
              <p className="text-xs ">{nav}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full">
        <h2 className="text-lg text-secondary font-bold text-end px-4 leading-10">
          {tabTitle}
        </h2>
        <ul className="w-full flex flex-col text-md py-4">
          {tabs.map(({ text, href }, i) => (
            <li key={uuid()} className="w-full">
              <Link
                href={href}
                className={`w-full flex justify-end text-secondary font-[300] ${
                  i !== tabs.length - 1 && "border-b-[1px]"
                } rounded-none py-4`}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
