import { NotificationIcon } from "@/assets/icons/Icons";
import DropDown from "@/components/common/DropDown";
import Tooltip from "@/components/common/Tooltip";
import content from "@/constants/content.json";
import NotificationModal from "./components/NotificationModal";

const Notification = () => {
  const {
    panel: {
      header: {
        notification: {
          tooltip: { dataTip },
        },
      },
    },
  } = content;

  return (
    <div className="hover:cursor-pointer group">
      <DropDown
        data={<NotificationModal notifications={[]} />}
        position="bottom"
        onHover={true}
      >
        <Tooltip dataTip={dataTip} color="secondary" position="bottom">
          <NotificationIcon style="w-6 h-6 fill-secondary hover:bellAnimation group-hover:fill-accent transition duration-150 ease-in-out" />
        </Tooltip>
      </DropDown>
    </div>
  );
};

export default Notification;
