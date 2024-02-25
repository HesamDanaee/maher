import { useParams } from "next/navigation";

import content from "@/constants/content.json";
import Input from "@/components/common/Input";
import { SearchIcon } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";
import Modal from "@/components/common/Modal";
import NewCustomerModal from "./components/NewCustomerModal";
import Table from "@/components/common/Table";

const Customers = () => {
  const {
    panel: {
      customers: {
        newCustomer: {
          button,
          modal: { inputs },
        },
        searchInput: { placeholder },
        table,
      },
    },
  } = content;

  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-6">
      <Modal id="invoice-modal" style="absolute">
        <NewCustomerModal title="" />
      </Modal>

      <div className="grid grid-cols-12 grid-rows-6 col-start-3 col-end-11 row-start-2 row-end-6 max-2xl:col-start-2 max-2xl:col-end-12">
        <div className="flex max-sm:flex-col gap-y-4 justify-between items-start col-start-1 col-end-13 row-start-1 row-end-2">
          <div className="w-1/3 max-sm:w-full relative">
            <input
              className="w-full bg-primary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
              placeholder={placeholder}
            />
            <span className="h-full bg-accent absolute left-0 top-1/2 -translate-y-1/2 flex justify-center border-[1px] border-transparent items-center px-2 rounded-l-lg hover:cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-accent group transition duration-200 ease-in-out">
              <SearchIcon style="fill-primary w-[30px] h-[30px] group-hover:fill-accent transition duration-200 ease-in-out" />
            </span>
          </div>

          <div className="flex max-sm:w-full gap-x-3">
            <Button
              onClick={() =>
                (
                  document.getElementById("invoice-modal") as EElement
                )?.showModal()
              }
              text={button}
              type="button"
              size="md"
              color="accent"
              style="hover:bg-primary hover:border-[1px] hover:border-accent hover:text-accent group transition duration-150 ease-in self-end max-sm:w-full"
            />
          </div>
        </div>

        <div className="flex flex-col items-center col-start-1 col-end-13 row-start-3 row-end-6">
          <Table
            noDataText={table.noDataText}
            size="md"
            variant="zebra"
            thData={table.thData}
            tbData={[]}
          />
        </div>
      </div>
    </div>
  );
};

export default Customers;
