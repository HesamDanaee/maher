import { PlusCircle } from "@/assets/icons/Icons";
import Button from "@/components/common/Button";
import DataCard from "@/components/common/DataCard";
import Table from "@/components/common/Table";
import content from "@/constants/content.json";
import Link from "next/link";
import { v4 as uuid } from "uuid";

const TaxPayers = () => {
  const {
    panel: {
      taxpayers: {
        buttons: { newTaxPayer },
        table: { thData },
      },
    },
  } = content;

  const mockData = [
    ["فعال", "1234567890", "شخص حقیقی", "John Doe"],
    ["غیرفعال", "0987654321", "شخص حقوقی", "Jane Smith"],
    ["فعال", "1122334455", "شخص حقیقی", "Ali Khan"],
    ["فعال", "5544332211", "شخص حقوقی", "Sara Johnson"],
    ["غیرفعال", "9876543210", "شخص حقیقی", "Mohammad Ahmed"],
    ["فعال", "5678901234", "شخص حقوقی", "Fatima Ali"],
    ["غیرفعال", "3210987654", "شخص حقیقی", "David Williams"],
    ["فعال", "4567890123", "شخص حقوقی", "Zahra Khatoon"],
    ["غیرفعال", "7890123456", "شخص حقیقی", "Daniel Brown"],
    ["فعال", "2345678901", "شخص حقوقی", "Aisha Ahmed"],
    ["فعال", "1234567890", "شخص حقیقی", "John Doe"],
    ["غیرفعال", "0987654321", "شخص حقوقی", "Jane Smith"],
    ["فعال", "1122334455", "شخص حقیقی", "Ali Khan"],
    ["فعال", "5544332211", "شخص حقوقی", "Sara Johnson"],
    ["غیرفعال", "9876543210", "شخص حقیقی", "Mohammad Ahmed"],
    ["فعال", "5678901234", "شخص حقوقی", "Fatima Ali"],
    ["غیرفعال", "3210987654", "شخص حقیقی", "David Williams"],
    ["فعال", "4567890123", "شخص حقوقی", "Zahra Khatoon"],
    ["غیرفعال", "7890123456", "شخص حقیقی", "Daniel Brown"],
    ["فعال", "2345678901", "شخص حقوقی", "Aisha Ahmed"],
    ["فعال", "1234567890", "شخص حقیقی", "John Doe"],
    ["غیرفعال", "0987654321", "شخص حقوقی", "Jane Smith"],
    ["فعال", "1122334455", "شخص حقیقی", "Ali Khan"],
    ["فعال", "5544332211", "شخص حقوقی", "Sara Johnson"],
    ["غیرفعال", "9876543210", "شخص حقیقی", "Mohammad Ahmed"],
    ["فعال", "5678901234", "شخص حقوقی", "Fatima Ali"],
    ["غیرفعال", "3210987654", "شخص حقیقی", "David Williams"],
    ["فعال", "4567890123", "شخص حقوقی", "Zahra Khatoon"],
    ["غیرفعال", "7890123456", "شخص حقیقی", "Daniel Brown"],
    ["فعال", "2345678901", "شخص حقوقی", "Aisha Ahmed"],
    ["فعال", "1234567890", "شخص حقیقی", "John Doe"],
    ["غیرفعال", "0987654321", "شخص حقوقی", "Jane Smith"],
    ["فعال", "1122334455", "شخص حقیقی", "Ali Khan"],
    ["فعال", "5544332211", "شخص حقوقی", "Sara Johnson"],
    ["غیرفعال", "9876543210", "شخص حقیقی", "Mohammad Ahmed"],
    ["فعال", "5678901234", "شخص حقوقی", "Fatima Ali"],
    ["غیرفعال", "3210987654", "شخص حقیقی", "David Williams"],
    ["فعال", "4567890123", "شخص حقوقی", "Zahra Khatoon"],
    ["غیرفعال", "7890123456", "شخص حقیقی", "Daniel Brown"],
    ["فعال", "2345678901", "شخص حقوقی", "Aisha Ahmed"],
  ];

  const mockDataMobile = mockData.map((item) =>
    item.map((value, i) => ({
      title: thData[i + 1],
      value,
    }))
  );

  return (
    <main className="w-full h-full grid grid-cols-12 grid-rows-6 justify-center py-6">
      <div className="grid grid-cols-12 grid-rows-6 col-start-4 col-end-10 row-start-1 max-sm:row-start-1 row-end-7 max-2xl:col-start-2 max-2xl:col-end-12">
        <div className="flex max-sm:flex-col max-sm:justify-center justify-end items-center col-start-1 col-end-13 row-start-1 row-end-2">
          <Button
            size="md"
            type="button"
            color="accent"
            style="hover:bg-primary hover:border-[1px] hover:border-accent hover:text-accent group transition duration-150 ease-in self-end"
          >
            <PlusCircle
              fill="bg-secondary"
              style="group-hover:fill-accent transition duration-150 ease-in"
            />
            <Link href={"/register/signup/individual"}>{newTaxPayer}</Link>
          </Button>
        </div>

        <div className="flex flex-col items-center gap-y-4 col-start-1 col-end-13 row-start-3 max-sm:row-start-2 row-end-7 overflow-y-auto">
          {mockDataMobile.map((dt) => (
            <DataCard key={uuid()} data={dt} />
          ))}
          <Table
            size="md"
            thData={thData}
            tbData={mockData}
            variant="pin-row"
            noDataText=""
          />
        </div>
      </div>
    </main>
  );
};

export default TaxPayers;
