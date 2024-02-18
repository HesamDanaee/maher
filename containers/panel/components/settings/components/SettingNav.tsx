import { SettingIcon } from "@/assets/icons/Icons";
import DropDown from "@/components/common/DropDown";
import Tooltip from "@/components/common/Tooltip";
import content from "@/constants/content.json";
import SettingModal from "./SettingModal";

const SettingNav = () => {
  const {
    panel: {
      header: {
        setting: {
          tooltip: { dataTip },
        },
      },
    },
  } = content;

  return (
    <div className="hover:cursor-pointer group">
      <DropDown data={<SettingModal />} position="bottom" onHover={true}>
        <Tooltip dataTip={dataTip} color="secondary" position="bottom">
          <SettingIcon style="w-6 h-6 fill-secondary group-hover:fill-accent group-hover:rotate-90 transition duration-150 ease-in-out" />
        </Tooltip>
      </DropDown>
    </div>
  );
};

export default SettingNav;
