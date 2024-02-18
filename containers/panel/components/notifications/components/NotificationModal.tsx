import { v4 as uuid } from "uuid";
import content from "@/constants/content.json";
import Image from "next/image";
import mail from "@/assets/Illustrations/mail-white.svg";
interface Props {
  notifications: string[] | [];
}

const NotificationModal = ({ notifications }: Props) => {
  const {
    panel: {
      header: {
        notification: {
          modal: { emptyMessage },
        },
      },
    },
  } = content;
  return (
    <div className="w-[200px] h-auto border-[1px] border-seconadry bg-primary rounded-md flex flex-col justify-center items-center">
      {notifications.length > 0 ? (
        <ul className="w-full h-full flex flex-col justify-evenly items-center">
          {notifications.map((text, i) => (
            <li
              key={uuid()}
              className={`w-full hover:bg-base-300 text-sm text-secondary font-[300] transition duration-200 ease-in-out ${
                i !== 0 &&
                i !== notifications.length - 1 &&
                "border-t-[1px] border-b-[1px] border-transparent hover:border-secondary hover:font-[500]"
              } text-center py-4 ${
                i === 0 &&
                "rounded-t-md border-b-[1px] border-transparent hover:border-secondary"
              }
                ${
                  i === notifications.length - 1 &&
                  "rounded-b-md border-t-[1px] border-transparent hover:border-secondary"
                }
                `}
            >
              {text}
            </li>
          ))}
        </ul>
      ) : (
        <div className="w-full h-[200px] flex flex-col gap-y-5 justify-center items-center">
          <Image
            src={mail}
            width={100}
            height={100}
            alt="mail"
            className="w-2/3 h-auto"
          />
          <h2 className="text-sm text-secondary font-semibold">
            {emptyMessage}
          </h2>
        </div>
      )}
      {}
    </div>
  );
};

export default NotificationModal;
