import { v4 as uuid } from "uuid";

import content from "@/constants/content.json";
import Input from "@/components/common/Input";
import { SearchIcon } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import Table from "@/components/common/Table";
import NewGoodModal from "./components/NewGoodModal";
import GoodSubmitModal from "./components/GoodSubmitModal";
import DataCard from "@/components/common/DataCard";

interface Props {
  slugs: string[];
}

const Goods = ({ slugs }: Props) => {
  const {
    panel: {
      goods: {
        input: { placeholder },
        table,
        newGood: {
          button,
          modal: {
            Title,
            button: submitBtn,
            buttons: { manual, file },
          },
          modal2,
        },
      },
    },
  } = content;

  const mockData = [
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
    ["معاف", "0%", "هزینه ناموجود", "خدمات حمل و نقل", "عدد"],
  ];

  const mockDataMobile = mockData.map((item) =>
    item.map((value, i) => ({
      title: table.thData[i + 1],
      value,
    }))
  );

  const secondModal =
    slugs.length > 1 && (slugs[1] as "manual" | "file") === "manual";

  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-6">
      <Modal id="goods-modal" style="absolute">
        <NewGoodModal title={Title} options={[manual, file]} />
      </Modal>

      {secondModal && (
        <Modal
          id="submit-good-modal"
          style="absolute"
          width="w-12/12 max-w-5xl"
        >
          <GoodSubmitModal />
        </Modal>
      )}

      <div className="grid grid-cols-12 grid-rows-6 col-start-4 col-end-10 row-start-1 max-sm:row-start-1 row-end-7 max-2xl:col-start-2 max-2xl:col-end-12 py-4">
        <div className="flex max-sm:flex-col max-sm:justify-evenly justify-between items-center col-start-1 col-end-13 row-start-1 row-end-3">
          <div className="w-1/3 max-sm:w-full relative">
            <input
              className="w-full bg-primary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
              placeholder={placeholder}
            />
            <span className="h-full bg-accent absolute left-0 top-1/2 -translate-y-1/2 flex justify-center border-[1px] border-transparent items-center px-2 rounded-l-lg hover:cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-accent group transition duration-200 ease-in-out">
              <SearchIcon style="fill-primary w-[30px] h-[30px] group-hover:fill-accent transition duration-200 ease-in-out" />
            </span>
          </div>

          <div className="max-sm:w-full flex gap-x-3">
            <Button
              onClick={() =>
                (
                  document.getElementById("goods-modal") as EElement
                )?.showModal()
              }
              text={button}
              type="button"
              size="md"
              color="accent"
              style="max-sm:w-full hover:bg-primary hover:border-[1px] hover:border-accent hover:text-accent group transition duration-150 ease-in self-end"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-y-4 col-start-1 col-end-13 row-start-3 max-sm:row-start-3 row-end-7 overflow-y-auto">
          {mockDataMobile.map((dt) => (
            <DataCard key={uuid()} data={dt} />
          ))}
          <Table
            noDataText=""
            size="md"
            variant="zebra"
            thData={table.thData}
            tbData={mockData}
          />
        </div>
      </div>
    </div>
  );
};

export default Goods;
