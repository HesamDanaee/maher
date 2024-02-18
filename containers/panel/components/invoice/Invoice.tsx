import { useParams } from "next/navigation";

import content from "@/constants/content.json";
import Main from "./components/Main";
import NewInvoice from "./components/newInvoice/NewInvoice";

const Invoice = () => {
  const {
    panel: {
      invoice: {
        main: { newInvoice, searchInput, table },
      },
    },
  } = content;

  const { tab } = useParams<{ tab: PanelInvoice }>();

  return (
    <div className="w-full h-full grid grid-cols-12 grid-rows-6 items-center">
      <div className="col-start-4 col-end-10 row-start-1  row-end-7 max-2xl:col-start-2 max-2xl:col-end-12 max-sm:row-start-1 max-sm:row-end-4">
        {tab.indexOf("manual") === -1 && tab.indexOf("file") === -1 ? (
          <Main
            noDataText={table.noDataText}
            modalData={newInvoice.modal}
            button={newInvoice.button}
            options={newInvoice.options}
            searchInput={searchInput.placeholder}
            tableHeader={table.header}
          />
        ) : (
          <NewInvoice />
        )}
      </div>
    </div>
  );
};

export default Invoice;
