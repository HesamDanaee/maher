import { v4 as uuid } from "uuid";
import { useRouter } from "next/navigation";
import { Document, Pencil } from "@/assets/icons/Icons";

interface Props {
  title: string;
  options: {
    title: string;
    desc: string;
  }[];
}

const NewGoodModal = ({ title, options }: Props) => {
  const router = useRouter();
  return (
    <div className="w-full h-full px-4 flex flex-col items-center gap-y-10">
      <h2 className="text-lg font-[500]">{title}</h2>

      <div className="flex gap-x-4 justify-between items-center max-md:flex-col max-md:gap-y-6 max-md:w-full">
        {options.map(({ title, desc }) => (
          <div
            onClick={() =>
              title === "دستی" &&
              (
                document.getElementById("submit-good-modal") as EElement
              )?.showModal()
            }
            className="flex max-md:w-full items-center gap-x-3 border-[1px] border-white rounded-md p-3 rtl hover:cursor-pointer hover:border-accent transition duration-300 ease-in-out group"
            key={uuid()}
          >
            {title === "دستی" ? (
              <Pencil
                style="w-[40px] h-[40px]"
                pathStyle="group-hover:fill-accent transition duration-300 ease-in-out"
              />
            ) : (
              <Document
                style="w-[40px] h-[40px]"
                pathStyle="group-hover:fill-accent transition duration-300 ease-in-out"
              />
            )}
            <div>
              <h2 className="text-md font-[400] leading-10"> {title}</h2>
              <p className="text-xs font-[300]">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewGoodModal;
