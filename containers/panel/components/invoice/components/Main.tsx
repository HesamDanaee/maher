import Button from "@/components/common/Button";
import Select from "@/components/common/Select";
import Table from "@/components/common/Table";
import Modal from "@/components/common/Modal";
import NewInvoiceModal from "./newInvoice/NewInvoiceModal";
import { SearchIcon } from "@/assets/icons/Icons";

interface Props {
  button: string;
  options: string[];
  searchInput: string;
  tableHeader: string[];

  modalData: {
    Title: string;
    buttons: {
      manual: {
        title: string;
        desc: string;
      };
      file: {
        title: string;
        desc: string;
      };
    };
    button: string;
  };
  noDataText: string;
}

const mockData = [];

const Main = ({
  button,
  options,
  searchInput,
  tableHeader,
  modalData,
  noDataText,
}: Props) => {
  const { manual, file } = modalData.buttons;

  return (
    <div className="w-full h-full grid grid-cols-12 gird-rows-6 max-sm:grid-rows-12">
      {/* Modal here */}
      <Modal id="invoice-modal" style="absolute">
        <NewInvoiceModal title={modalData.Title} options={[manual, file]} />
      </Modal>

      <div className="max-sm:w-full flex max-sm:flex-col justify-evenly items-center col-start-1 col-end-13 row-start-2 max-sm:row-start-1 row-end-3 max-sm:row-end-5 gap-y-1">
        <div className="w-1/3 max-sm:w-full relative">
          <input
            className="w-full bg-primary text-sm font-[400] placeholder:text-xs placeholder:font-[300] border-[1px] border-secondary focus:border-accent input input-md focus:outline-none rtl"
            placeholder={searchInput}
          />
          <span className="h-full bg-accent absolute left-0 top-1/2 -translate-y-1/2 flex justify-center border-[1px] border-transparent items-center px-2 rounded-l-lg hover:cursor-pointer hover:bg-transparent hover:border-[1px] hover:border-accent group transition duration-200 ease-in-out">
            <SearchIcon style="fill-primary w-[30px] h-[30px] group-hover:fill-accent transition duration-200 ease-in-out" />
          </span>
        </div>

        <div className="flex max-sm:w-full max-sm:flex-col gap-x-3 gap-y-3">
          <Select
            size="md"
            options={options}
            style="md:w-[200px] flex justify-around bg-primary border-[1px] hover:border-accent border-secondary outline-none focus:outline-none focus:border-[1px] focus:border-accent h-full"
          />
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
            style="hover:bg-primary hover:border-[1px] hover:border-accent hover:text-accent group transition duration-150 ease-in self-end max-sm:btn-wide max-sm:w-full"
          />
        </div>
      </div>

      {/* Invoice List */}

      <div className="col-start-1 col-end-12 row-start-3 max-sm:row-start-4 row-end-7 max-sm:row-end-12">
        <Table
          thData={tableHeader}
          tbData={[]}
          noDataText={noDataText}
          size="sm"
          variant="zebra"
        />
      </div>
    </div>
  );
};

export default Main;
