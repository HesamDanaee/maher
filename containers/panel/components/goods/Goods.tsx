import { v4 as uuid } from "uuid";

import content from "@/constants/content.json";

import { SearchIcon } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import Table from "@/components/common/Table";
import NewGoodModal from "./components/NewGoodModal";
import GoodSubmitModal from "./components/GoodSubmitModal";
import DataCard from "@/components/common/DataCard";
import { useState } from "react";

interface Props {
  slugs: string[];
}

const Goods = ({ slugs }: Props) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<{
    data: string[][];
    filtered: string[][];
  }>({
    data: new Array(40).fill([
      "معاف",
      "0%",
      "هزینه ناموجود",
      "خدمات حمل و نقل",
      "عدد",
    ]),
    filtered: [],
  });
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

  const mockDataMobile = data.data.map((item) =>
    item.map((value, i) => ({
      title: table.thData[i + 1],
      value,
    }))
  );

  const secondModal =
    slugs.length > 1 && (slugs[1] as "manual" | "file") === "manual";

  console.log(data);
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

      <div className="grid grid-cols-12 grid-rows-6 col-start-3 col-end-11 row-start-2 max-sm:row-start-1 row-end-6 max-2xl:col-start-2 max-2xl:col-end-12">
        <div className="flex max-sm:flex-col max-sm:justify-evenly justify-between items-start col-start-1 col-end-13 row-start-1 row-end-2">
          <div className="w-1/3 max-sm:w-full relative">
            <input
              className="w-full bg-primary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
              placeholder={placeholder}
              onChange={(e) => setSearch(e.target.value)}
            />
            <span
              className="h-full bg-accent absolute left-0 top-1/2 -translate-y-1/2 flex justify-center border-[1px] border-transparent items-center px-2 rounded-l-lg hover:cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-accent group transition duration-200 ease-in-out"
              onClick={() =>
                setData((prev) => ({
                  ...prev,
                  filtered: prev.data.filter((item) =>
                    item[2].toLowerCase().includes(search.toLowerCase())
                  ),
                }))
              }
            >
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

        <div className="flex flex-col items-center gap-y-4 col-start-1 col-end-13 row-start-2 max-sm:row-start-3 row-end-7 overflow-y-auto">
          {mockDataMobile.map((dt) => (
            <DataCard key={uuid()} data={dt} />
          ))}
          <Table
            noDataText=""
            size="md"
            variant="zebra"
            thData={table.thData}
            tbData={data.filtered.length > 0 ? data.filtered : data.data}
          />
        </div>
      </div>
    </div>
  );
};

export default Goods;
