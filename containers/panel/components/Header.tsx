import Notification from "./notifications/Notification";
import Profile from "./profile/Profile";
import Navbar from "./Navbar";
import SettingNav from "./settings/components/SettingNav";
import Clock from "@/components/common/Clock";
import BurgerMenu from "./BurgerMenu";

interface Props {
  navbar: {
    text: string;
    href: string;
  }[];
  tab: PanelSlugs;
}

const Header = ({ navbar, tab }: Props) => {
  return (
    <header className="w-full grid grid-cols-12 min-h-[10vh] border-b-[1px]">
      <div className="col-start-1 col-end-4 max-xl:col-end-5 max-sm:col-end-8">
        <Clock />
      </div>
      <Navbar navbar={navbar} tab={tab} />
      <div className="flex flex-row items-center justify-center max-lg:justify-between max-sm:justify-end col-start-10 col-end-12 max-lg:col-start-9 max-md:col-start-8">
        <div className="flex flex-row gap-x-8 items-center justify-center max-sm:hidden">
          <Notification />
          <SettingNav />
          <Profile />
        </div>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
