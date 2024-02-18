import { Burger } from "@/assets/icons/Icons";
import Drawer from "@/components/common/Drawer";
import SideBar from "./SideBar";

const BurgerMenu = () => {
  return (
    <div className="hidden max-xl:block">
      <Drawer
        children={<SideBar />}
        label={<Burger style="w-[24px] fill-secondary" />}
      />
    </div>
  );
};

export default BurgerMenu;
