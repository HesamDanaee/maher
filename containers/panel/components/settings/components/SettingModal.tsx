import Link from "next/link";
import { v4 as uuid } from "uuid";
import content from "@/constants/content.json";
import {
  HistoryIcon,
  ThemeIcon,
  InfoIcon,
  LanguageIcon,
  NotificationIcon,
} from "@/assets/icons/Icons";

const SettingModal = () => {
  const {
    panel: {
      header: {
        setting: {
          modal: { links },
        },
      },
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
    <div className="w-[200px] h-auto border-[1px] border-seconadry bg-primary rounded-md flex flex-col justify-center items-center">
      <ul className="w-full h-full flex flex-col justify-evenly items-center">
        {links.map(({ text, href }, i) => (
          <li
            key={uuid()}
            className={`w-full hover:bg-base-300 text-sm text-secondary font-[300] transition duration-200 ease-in-out ${
              i !== 0 &&
              i !== links.length - 1 &&
              "border-t-[1px] border-b-[1px] border-transparent hover:border-secondary hover:font-[500]"
            } text-center py-4 ${
              i === 0 &&
              "rounded-t-md border-b-[1px] border-transparent hover:border-secondary"
            }
            ${
              i === links.length - 1 &&
              "rounded-b-md border-t-[1px] border-transparent hover:border-secondary"
            }
            `}
          >
            <Link
              href={href}
              className="w-full flex justify-between items-center gap-x-4 px-5"
            >
              {icons[i]} {text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SettingModal;
