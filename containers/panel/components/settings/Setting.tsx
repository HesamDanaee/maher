import content from "@/constants/content.json";
import { ReactNode } from "react";
import Theme from "./components/Theme";
import History from "./components/History";
import Language from "./components/Language";
import Guide from "./components/Guide";
import Notifications from "./components/Notifications";
import SettingTab from "./components/SettingTab";
import Divider from "@/components/common/Divider";

interface Tabs {
  theme: ReactNode;
  notification: ReactNode;
  history: ReactNode;
  language: ReactNode;
  guide: ReactNode;
}

interface Props {
  params: {
    tab: "theme" | "notification" | "language" | "history" | "guide";
  };
}

const Setting = ({ params: { tab } }: Props) => {
  const {
    panel: {
      header: {
        setting: {
          tooltip: { dataTip },
        },
      },
    },
  } = content;

  const tabs: Tabs = {
    theme: <Theme />,
    notification: <Notifications />,
    history: <History />,
    language: <Language />,
    guide: <Guide />,
  };

  return (
    <div className="w-full min-h-[100vh] grid grid-cols-12 grid-rows-12">
      <div className="flex flex-col items-end justify-center col-start-1 col-end-13 row-start-1 row-end-2 px-12">
        <h1 className="text-2xl text-secondary font-bold">{dataTip}</h1>
      </div>

      <SettingTab selectedTab={tab} />

      <div className="grid grid-cols-3 grid-rows-12 col-start-4 max-sm:col-start-1 col-end-13 row-start-2 row-end-13 border-t-[2px] border-base-100">
        <div className="col-start-1 col-end-4 row-start-1 row-end-12">
          {tabs[tab]}
        </div>
      </div>
    </div>
  );
};

export default Setting;
