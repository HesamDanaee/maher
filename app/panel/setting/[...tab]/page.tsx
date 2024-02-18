import Setting from "@/containers/panel/components/settings/Setting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پنل ماهر ",
};

interface Props {
  params: {
    tab: "theme" | "notification" | "language" | "history" | "guide";
  };
}

const SettingPage = ({ params }: Props) => {
  return <Setting params={params} />;
};

export default SettingPage;
